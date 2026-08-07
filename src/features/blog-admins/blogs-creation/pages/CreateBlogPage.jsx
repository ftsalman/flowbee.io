import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "../../../../../lib/turtle-ui/components/tabs/Tabs";
import { BLOG_CATEGORIES } from "../constants/blogData";
import { BlogEditorForm } from "../components/BlogEditorForm";
import { BlogCardPreview } from "../components/BlogCardPreview";
import { BlogFullPreview } from "../components/BlogFullPreview";
import { PublishedBlogsGrid } from "../components/PublishedBlogsGrid";
import { PublishSuccessModal } from "../components/PublishSuccessModal";
import { getStoredBlogs, saveStoredBlogs } from "../utils/blogStorage";
import {
  deleteBlogFromFirebase,
  getFirebaseBlogs,
  saveBlogToFirebase,
} from "../utils/firebaseBlogStorage";

const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
];

const TABS = [
  { id: "editor", label: "📝 Editor" },
  { id: "preview-card", label: "👁️ Live Card Preview" },
  { id: "preview-article", label: "📖 Full Article" },
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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("ai-agent");
  const [author, setAuthor] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [readTime, setReadTime] = useState("");
  const [image, setImage] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [faqs, setFaqs] = useState([]);

  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [isPublishing, setIsPublishing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load Firebase blogs, using IndexedDB as a local cache and migration source.
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const [firebaseBlogs, indexedBlogs] = await Promise.all([
          getFirebaseBlogs(),
          getStoredBlogs(),
        ]);

        const legacyData = localStorage.getItem("flowbee_custom_blogs");
        const legacyBlogs = legacyData ? JSON.parse(legacyData) : [];
        const combinedBlogs = [...firebaseBlogs, ...indexedBlogs, ...legacyBlogs].filter(
          (blog, index, blogs) =>
            blogs.findIndex((candidate) => String(candidate.id) === String(blog.id)) === index
        );

        setPublishedBlogs(combinedBlogs);
        await saveStoredBlogs(combinedBlogs);
      } catch (error) {
        console.error("Unable to load saved blogs:", error);
        const indexedBlogs = await getStoredBlogs().catch(() => []);
        setPublishedBlogs(indexedBlogs);
      }
    };

    loadBlogs();
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
    faqs: faqs,
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim()) return;

    setIsPublishing(true);

    setTimeout(async () => {
      try {
        let updatedBlogs;

        if (editingId) {
          updatedBlogs = publishedBlogs.map((b) =>
            b.id === editingId ? { ...previewPost, id: editingId } : b
          );
        } else {
          const newBlogPost = {
            ...previewPost,
            id: `custom-${Date.now()}`,
          };
          updatedBlogs = [newBlogPost, ...publishedBlogs];
        }

        const blogToSave = editingId
          ? updatedBlogs.find((blog) => String(blog.id) === String(editingId))
          : updatedBlogs[0];
        const firebaseBlog = await saveBlogToFirebase(blogToSave);
        const persistedBlogs = updatedBlogs.map((blog) =>
          String(blog.id) === String(firebaseBlog.id) ? firebaseBlog : blog
        );

        await saveStoredBlogs(persistedBlogs);
        setPublishedBlogs(persistedBlogs);
        setShowSuccessModal(true);
      } catch (error) {
        console.error("Unable to save blog:", error);
        window.alert(
          "The blog could not be saved to Firebase. Check your Firestore/Storage rules and Firebase configuration."
        );
      } finally {
        setIsPublishing(false);
      }
    }, 500);
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
    setFaqs(post.faqs || []);
    setEditingId(post.id);
    setActiveTab(TABS[0]); // back to editor
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteBlog = async (id) => {
    const updated = publishedBlogs.filter((b) => b.id !== id);
    try {
      await deleteBlogFromFirebase(id);
      await saveStoredBlogs(updated);
      setPublishedBlogs(updated);
    } catch (error) {
      console.error("Unable to delete blog:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setExcerpt("");
    setContent("");
    setFaqs([]);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setTitle("");
    setExcerpt("");
    setContent("");
    setFaqs([]);
    setEditingId(null);
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Studio Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFD400]/20 via-[#FFD400]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/20 text-neutral-900 border border-[#FFD400]/50 text-xs font-bold uppercase tracking-wider mb-2">
            <span>🚀 Content Studio</span>
          </div>
          <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            {editingId ? "Edit Blog Article" : "Publish New Blog Article"}
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            Create, format, and immediately broadcast articles to your Flowbee live site.
          </p>
        </div>

        {/* Tab Switcher - Using turtle-ui Tabs component */}
        <div className="self-start md:self-auto">
          <Tabs
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="!bg-gray-100 !p-1.5 !rounded-2xl !border !border-gray-200/80"
            tabClassName="!px-4 !py-2 !rounded-xl !text-xs !font-bold !transition-all"
          />
        </div>
      </div>

      {/* Main Workspace Area */}
      {activeTab.id === "editor" ? (
        <BlogEditorForm
          title={title}
          setTitle={setTitle}
          excerpt={excerpt}
          setExcerpt={setExcerpt}
          content={content}
          setContent={setContent}
          faqs={faqs}
          setFaqs={setFaqs}
          category={category}
          setCategory={setCategory}
          readTime={readTime}
          setReadTime={setReadTime}
          author={author}
          setAuthor={setAuthor}
          authorImage={authorImage}
          setAuthorImage={setAuthorImage}
          image={image}
          setImage={setImage}
          editingId={editingId}
          isPublishing={isPublishing}
          handlePublish={handlePublish}
          handleCancel={handleCancelEdit}
          categoryLabel={categoryLabel}
        />
      ) : activeTab.id === "preview-card" ? (
        <BlogCardPreview previewPost={previewPost} setActiveTab={setActiveTab} />
      ) : (
        <BlogFullPreview previewPost={previewPost} setActiveTab={setActiveTab} />
      )}

      {/* Published Blogs Grid */}
      <PublishedBlogsGrid
        publishedBlogs={publishedBlogs}
        handleEditBlog={handleEditBlog}
        handleDeleteBlog={handleDeleteBlog}
      />

      {/* Celebratory Success Modal */}
      {showSuccessModal && (
        <PublishSuccessModal
          editingId={editingId}
          title={title}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
