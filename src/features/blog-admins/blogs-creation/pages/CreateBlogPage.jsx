import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { InputBox } from "../../../../../lib/turtle-ui/components/input-box/InputBox";
import { Button } from "../../../../../lib/turtle-ui/components/button/Button";
import { BlogCard } from "../../../blog/components/BlogCard";
import { BLOG_CATEGORIES } from "../../../../constants/blogData";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { db } from "../../../../config/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
];

export const CreateBlogPage = () => {
  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    if (!localStorage.getItem("flowbee_admin_auth")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Form State
  const [title, setTitle] = useState(
    "How WhatsApp AI Agents Scale Conversion by 300%",
  );
  const [category, setCategory] = useState("ai-agent");
  const [author, setAuthor] = useState("Alex Rivers, Head of AI Growth");
  const [authorImage, setAuthorImage] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  );
  const [readTime, setReadTime] = useState("5 min read");
  const [image, setImage] = useState(SAMPLE_IMAGES[0]);
  const [excerpt, setExcerpt] = useState(
    "Discover how leading enterprises leverage automated WhatsApp AI chatbots to qualify leads, handle customer support, and close sales 24/7 without increasing team headcount.",
  );
  const [content, setContent] = useState(
    `<h1>The Future of Conversational Commerce</h1><p>In today's fast-paced digital landscape, customers expect instant responses. When a potential buyer reaches out on WhatsApp, waiting hours for a reply often means losing the sale to a competitor.</p><h2>Why AI Agents Are Game-Changers</h2><p>Unlike traditional static chatbots, modern AI agents powered by large language models understand context, nuance, and customer intent. They can seamlessly:</p><ul><li><strong>Answer complex product queries</strong> instantly using your knowledge base.</li><li><strong>Qualify inbound leads</strong> before routing high-value prospects to human sales reps.</li><li><strong>Process orders and check shipping status</strong> without human intervention.</li></ul><h2>Key Takeaways for Enterprise Leaders</h2><p>By deploying Flowbee's WhatsApp automation suite, businesses routinely experience a <strong>40% reduction in support response times</strong> and a <strong>3x increase in lead conversion rates</strong>. The secret lies in blending automated AI speed with human touch.</p>`
  );

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const [activeTab, setActiveTab] = useState("editor"); // 'editor' | 'preview-card' | 'preview-article'
  const [isPublishing, setIsPublishing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Helper to compress image before converting to base64
  const compressImage = (file, maxWidth = 800, quality = 0.7) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", quality));
        };
      };
      reader.readAsDataURL(file);
    });
  };

  // Handle local image upload from device
  const handleImageUpload = async (e, target) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      // Compress image to base64 to avoid Firestore 1MB document limit
      const base64 = await compressImage(file, 800, 0.7);

      if (target === "cover") {
        setImage(base64);
      } else if (target === "author") {
        setAuthorImage(base64);
      }
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process image.");
    }
  };

  // Load existing custom blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Sort newest first
        blogsData.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        setPublishedBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs from Firestore:", error);
        setPublishedBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  // Get current category label
  const categoryLabel =
    BLOG_CATEGORIES.find((c) => c.id === category)?.label || "AI Agent";

  // Construct live preview object
  const previewPost = {
    id: "preview-live",
    title: title || "Untitled Article",
    category: category,
    categoryLabel: categoryLabel,
    author: author || "Flowbee Author",
    authorImage: authorImage || "",
    readTime: readTime || "3 min read",
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    image: image || SAMPLE_IMAGES[0],
    excerpt: excerpt || "No excerpt provided...",
    content: content,
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim()) return;

    setIsPublishing(true);

    try {
      const blogData = {
        title: title || "Untitled Article",
        category: category,
        categoryLabel: categoryLabel,
        author: author || "Flowbee Author",
        authorImage: authorImage || "",
        readTime: readTime || "3 min read",
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        image: image || SAMPLE_IMAGES[0],
        excerpt: excerpt || "No excerpt provided...",
        content: content,
      };

      if (editingId) {
        await updateDoc(doc(db, "posts", editingId), blogData);
        const updatedBlogs = publishedBlogs.map((b) =>
          b.id === editingId ? { ...b, ...blogData } : b
        );
        setPublishedBlogs(updatedBlogs);
      } else {
        blogData.createdAt = new Date().toISOString();
        const docRef = await addDoc(collection(db, "posts"), blogData);
        const publishedPost = { ...blogData, id: docRef.id };
        setPublishedBlogs([publishedPost, ...publishedBlogs]);
      }
      
      setIsPublishing(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error saving blog to Firestore: ", error);
      setIsPublishing(false);
      alert("Failed to publish blog. Please check your connection and Firebase configuration.");
    }
  };

  const handleEditBlog = (post) => {
    setTitle(post.title);
    setCategory(post.category);
    setAuthor(post.author);
    setAuthorImage(post.authorImage || "");
    setReadTime(post.readTime);
    setImage(post.image);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setEditingId(post.id);
    setActiveTab("editor");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteBlog = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      const updated = publishedBlogs.filter((b) => b.id !== id);
      setPublishedBlogs(updated);
    } catch (error) {
      console.error("Error deleting blog from Firestore: ", error);
      alert("Failed to delete blog.");
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Studio Header Banner */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFD400]/20 via-[#FFD400]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/20 text-neutral-900 border border-[#FFD400]/50 text-xs font-bold uppercase tracking-wider mb-2">
            <span>🚀 Content Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            {editingId ? "Edit Blog Article" : "Publish New Blog Article"}
          </h1>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">
            Create, format, and immediately broadcast articles to your Flowbee
            live site.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center w-full lg:w-auto bg-gray-100 p-1 sm:p-1.5 rounded-2xl border border-gray-200/80 self-stretch lg:self-auto gap-1 sm:gap-2 grid grid-cols-3 sm:flex">
          <Button
            type="button"
            onClick={() => setActiveTab("editor")}
            className={`!px-2 sm:!px-4 !py-2 !rounded-xl !text-[11px] sm:!text-xs !font-bold transition-all shadow-none flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap ${
              activeTab === "editor"
                ? "!bg-white !text-black shadow-sm"
                : "!bg-transparent text-neutral-600 hover:text-black"
            }`}
          >
            <span>📝</span>
            <span>Editor</span>
          </Button>
          <Button
            type="button"
            onClick={() => setActiveTab("preview-card")}
            className={`!px-2 sm:!px-4 !py-2 !rounded-xl !text-[11px] sm:!text-xs !font-bold transition-all shadow-none flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap ${
              activeTab === "preview-card"
                ? "!bg-[#FFD400] !text-black shadow-sm"
                : "!bg-transparent text-neutral-600 hover:text-black"
            }`}
          >
            <span>👁️</span>
            <span className="hidden sm:inline">Live Card Preview</span>
            <span className="sm:hidden">Card</span>
          </Button>
          <Button
            type="button"
            onClick={() => setActiveTab("preview-article")}
            className={`!px-2 sm:!px-4 !py-2 !rounded-xl !text-[11px] sm:!text-xs !font-bold transition-all shadow-none flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap ${
              activeTab === "preview-article"
                ? "!bg-black !text-white shadow-sm"
                : "!bg-transparent text-neutral-600 hover:text-black"
            }`}
          >
            <span>📄</span>
            <span className="hidden sm:inline">Full Article Preview</span>
            <span className="sm:hidden">Article</span>
          </Button>
        </div>
      </div>

      {/* Main Workspace Area */}
      {activeTab === "editor" ? (
        <form
          onSubmit={handlePublish}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left / Main Column: Title, Excerpt & Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span>📑 Article Overview</span>
              </h2>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Article Title *
                </label>
                <InputBox
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a compelling headline..."
                  className="w-full !rounded-xl !py-3.5 !px-4 !border-gray-300 focus:!border-[#CA8A04] focus:!ring-2 focus:!ring-[#FFD400]/30 font-bold text-base text-neutral-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Short Excerpt / Description * (Shown on Blog Grid Cards)
                </label>
                <textarea
                  rows="3"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Provide a 2-3 sentence summary that hooks the reader..."
                  className="w-full rounded-xl p-4 border border-gray-300 focus:border-[#CA8A04] focus:outline-none focus:ring-2 focus:ring-[#FFD400]/30 font-medium text-sm text-neutral-800 transition-all"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Full Article Content (Markdown Supported)
                  </label>
                  <span className="text-xs text-neutral-400 font-medium">
                    {content.split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>
                <div className="mt-2 text-neutral-800">
                  <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={quillModules}
                    className="bg-white rounded-xl overflow-hidden [&_.ql-toolbar]:rounded-t-xl [&_.ql-toolbar]:border-gray-300 [&_.ql-toolbar]:bg-gray-50 [&_.ql-container]:rounded-b-xl [&_.ql-container]:border-gray-300 [&_.ql-editor]:min-h-[300px] [&_.ql-editor]:text-base [&_.ql-editor]:font-sans"
                    placeholder="Write your comprehensive article here..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Metadata & Publishing Controls */}
          <div className="space-y-6">
            {/* Publishing Box */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-neutral-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span>⚡ Publish Controls</span>
              </h2>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Category Topic
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl py-3 px-4 border border-gray-300 bg-white font-semibold text-sm text-neutral-900 focus:border-[#CA8A04] focus:outline-none focus:ring-2 focus:ring-[#FFD400]/30 cursor-pointer"
                >
                  {BLOG_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Read Time
                  </label>
                  <InputBox
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="5 min read"
                    className="w-full !rounded-xl !py-2.5 !px-3 !border-gray-300 font-medium text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Author Name
                  </label>
                  <InputBox
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Flowbee Team"
                    className="w-full !rounded-xl !py-2.5 !px-3 !border-gray-300 font-medium text-xs mb-2"
                  />
                  {/* Author Profile Image / Upload */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFD400] flex items-center justify-center font-bold text-black text-xs overflow-hidden border border-gray-300 shadow-sm flex-shrink-0">
                      {authorImage ? (
                        <img
                          src={authorImage}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        (author || "A")[0]
                      )}
                    </div>
                    <label className="flex-1 bg-gray-50 hover:bg-gray-100 border border-dashed border-gray-300 rounded-xl px-2 py-1.5 text-[11px] font-bold text-neutral-700 cursor-pointer flex items-center justify-center gap-1 transition-all shadow-sm active:scale-95">
                      <span>📷 Profile Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "author")}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Cover Image URL
                  </label>
                  <label className="bg-[#FFD400] hover:bg-[#E6BF00] text-black border border-[#CA8A04] rounded-lg px-2.5 py-1 text-[11px] font-extrabold cursor-pointer flex items-center gap-1 transition-all shadow-sm active:scale-95">
                    <span>📁 Upload from Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "cover")}
                      className="hidden"
                    />
                  </label>
                </div>
                <InputBox
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://... or click upload from device above"
                  className="w-full !rounded-xl !py-3 !px-4 !border-gray-300 font-mono text-xs mb-3"
                />

                {/* Quick Sample Image Selector */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase block">
                    Or select a verified sample banner:
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {SAMPLE_IMAGES.map((imgUrl, idx) => (
                      <Button
                        key={idx}
                        type="button"
                        onClick={() => setImage(imgUrl)}
                        className={`!p-0 !h-12 !rounded-lg overflow-hidden !border-2 transition-all shadow-none ${
                          image === imgUrl
                            ? "!border-[#FFD400] scale-105 shadow-md"
                            : "!border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Sample ${idx}`}
                          className="w-full h-full object-cover"
                        />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Button
                  type="submit"
                  disabled={isPublishing}
                  className="w-full !bg-[#FFD400] hover:!bg-[#E6BF00] active:scale-[0.98] !text-black !font-extrabold !py-3.5 !rounded-xl transition-all shadow-[4px_4px_0px_0px_#C9A000] hover:shadow-[2px_2px_0px_0px_#C9A000] text-sm flex items-center justify-center gap-2"
                >
                  {isPublishing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>{editingId ? "Updating..." : "Broadcasting..."}</span>
                    </>
                  ) : (
                    <>
                      <span>✨ {editingId ? "Update Blog Article" : "Publish Blog Article"}</span>
                    </>
                  )}
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setTitle("");
                      setExcerpt("");
                      setContent("");
                    }}
                    className="w-full !bg-white hover:!bg-gray-50 !text-black !font-bold !py-2.5 !rounded-xl transition-all border border-gray-200 shadow-sm text-sm"
                  >
                    Cancel Edit
                  </Button>
                )}
              </div>
            </div>

            {/* Quick Live Preview Mini-Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-3">
                Live Thumbnail Preview
              </span>
              <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-md">
                <div className="h-36 relative bg-gray-100 overflow-hidden">
                  <img
                    src={image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-800 border border-gray-200/50 shadow-sm">
                    {categoryLabel}
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <div className="text-[11px] text-neutral-400 mb-1 font-medium">
                    {readTime} • By {author}
                  </div>
                  <h4 className="font-bold text-sm text-neutral-900 line-clamp-2 leading-snug">
                    {title || "Untitled Article"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : activeTab === "preview-card" ? (
        /* ==================================
           TAB 2: LIVE CARD PREVIEW
        =================================== */
        <div className="bg-white rounded-3xl p-5 sm:p-10 border border-gray-200 shadow-sm max-w-xl mx-auto space-y-6 text-center">
          <div>
            <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-1">
              Exact Grid Representation
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
              How your article will appear on the blog grid
            </h3>
          </div>
          <div className="text-left">
            <BlogCard post={previewPost} />
          </div>
          <Button
            onClick={() => setActiveTab("editor")}
            className="!bg-black text-white !font-bold !rounded-xl !px-6 !py-2.5"
          >
            ← Back to Editor
          </Button>
        </div>
      ) : (
        /* ==================================
           TAB 3: FULL ARTICLE PREVIEW
        =================================== */
        <div className="bg-white rounded-3xl p-5 sm:p-12 border border-gray-200 shadow-sm max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="border-b border-gray-200 pb-6 sm:pb-8 text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFD400]/20 text-neutral-800 border border-[#FFD400]/50 text-xs font-bold uppercase tracking-wider">
              {categoryLabel}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
              {title || "Untitled Article"}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-500 font-medium">
              <span>
                By <strong className="text-neutral-800">{author}</strong>
              </span>
              <span>•</span>
              <span>{previewPost.date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden max-h-[420px] shadow-lg border border-gray-200">
            <img
              src={image}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none text-neutral-800 space-y-4 text-base leading-relaxed font-normal">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          <div className="pt-8 border-t border-gray-200 text-center">
            <Button
              onClick={() => setActiveTab("editor")}
              className="!bg-[#FFD400] text-black !font-extrabold !rounded-xl !px-8 !py-3 shadow-[3px_3px_0px_0px_#C9A000]"
            >
              ← Return to Editor
            </Button>
          </div>
        </div>
      )}

      {/* ==================================
          PUBLISHED BLOGS MANAGEMENT GRID
      =================================== */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6 mt-12">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-0.5">
              Admin Storage
            </span>
            <h3 className="text-xl font-extrabold text-neutral-900">
              Published Custom Articles ({publishedBlogs.length})
            </h3>
          </div>
          <Link to="/">
            <Button
              size="md"
              className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-extrabold !rounded-xl !px-4 !py-2 shadow-[2px_2px_0px_0px_#C9A000] transition-all"
            >
              View All Live →
            </Button>
          </Link>
        </div>

        {publishedBlogs.length === 0 ? (
          <div className="text-center py-12 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
            <div className="text-3xl mb-2">📭</div>
            <h4 className="font-bold text-neutral-800">
              No custom blogs published yet
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              Use the editor above to publish your very first blog article to
              the live site!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedBlogs.map((post) => (
              <div
                key={post.id}
                className="bg-[#FAFBFD] border border-gray-200 rounded-2xl p-4 flex flex-col justify-between gap-4 relative group"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-xl object-cover border border-gray-200 flex-shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#CA8A04] uppercase block mb-0.5">
                      {post.categoryLabel}
                    </span>
                    <h4 className="font-bold text-sm text-neutral-900 line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <span className="text-[11px] text-neutral-400 mt-1 block">
                      Published on {post.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                  <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span>●</span> Live on Site
                  </span>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={() => handleEditBlog(post)}
                      className="!bg-transparent !text-xs !font-bold !text-blue-600 hover:!text-blue-700 hover:underline !px-2 !py-1 !rounded hover:!bg-blue-50 transition-all shadow-none"
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleDeleteBlog(post.id)}
                      className="!bg-transparent !text-xs !font-bold !text-red-600 hover:!text-red-700 hover:underline !px-2 !py-1 !rounded hover:!bg-red-50 transition-all shadow-none"
                    >
                      🗑️ Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Celebratory Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center border-2 border-[#FFD400] shadow-2xl relative">
            <div className="w-16 h-16 bg-[#FFD400]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-bounce">
              🎉
            </div>
            <h3 className="text-2xl font-black text-neutral-900 mb-2">
              {editingId ? "Article Updated!" : "Article Published Live!"}
            </h3>
            <p className="text-sm text-neutral-600 mb-6">
              Your article <strong className="text-black">"{title}"</strong>{" "}
              has been successfully {editingId ? "updated on" : "broadcast to"} the Flowbee blog grid.
            </p>
            <div className="space-y-3">
              <Link to="/" className="block w-full">
                <Button className="w-full !bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-extrabold !py-3 !rounded-xl shadow-[3px_3px_0px_0px_#C9A000]">
                  🌐 View Live on Homepage
                </Button>
              </Link>
              <Button
                type="button"
                onClick={() => {
                  setShowSuccessModal(false);
                  setTitle("");
                  setExcerpt("");
                  setContent("");
                  setEditingId(null);
                }}
                className="w-full !py-2.5 !bg-transparent !text-xs !font-bold text-neutral-600 hover:text-black hover:!bg-gray-100 !rounded-xl transition-all shadow-none"
              >
                + Write Another Article
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
