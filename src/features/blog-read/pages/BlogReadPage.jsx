import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import { BlogCard } from "../../blog/components/BlogCard";
import {
  ALL_POSTS,
  LATEST_POSTS,
  TRENDING_POSTS,
} from "../../../constants/blogData";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStoredBlogs } from "../../blog-admins/blogs-creation/utils/blogStorage";
import { 
  FiArrowLeft, 
  FiLink, 
  FiCheck, 
  FiTwitter, 
  FiLinkedin, 
  FiCalendar, 
  FiClock, 
  FiThumbsUp, 
  FiThumbsDown, 
  FiInbox 
} from "react-icons/fi";

export const BlogReadPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [copied, setCopied] = useState(false);
  const [helpfulState, setHelpfulState] = useState(null); // null | 'yes' | 'no'

  useEffect(() => {
    window.scrollTo(0, 0);
    setHelpfulState(null);

    const fetchPosts = async () => {
      let localPosts = [];
      let firestorePosts = [];

      try {
        localPosts = await getStoredBlogs();
      } catch (error) {
        console.error("Error fetching locally published blogs:", error);
      }

      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        firestorePosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error("Error fetching blogs from Firestore:", error);
      }

      try {
        const allAvailablePosts = [
          ...localPosts,
          ...firestorePosts,
          ...LATEST_POSTS,
          ...TRENDING_POSTS,
          ...ALL_POSTS,
        ];

        // Find matching post by id (string or number match)
        const found = allAvailablePosts.find(
          (p) => String(p.id) === String(id) || p.slug === id
        );

        if (found) {
          setPost(found);
          // Get up to 3 related posts from same category or fallback to latest
          const related = allAvailablePosts
            .filter((p) => String(p.id) !== String(found.id))
            .filter((p) => p.category === found.category || !found.category)
            .slice(0, 3);

          if (related.length < 3) {
            const remaining = allAvailablePosts
              .filter((p) => String(p.id) !== String(found.id))
              .slice(0, 3 - related.length);
            setRelatedPosts([...related, ...remaining]);
          } else {
            setRelatedPosts(related);
          }
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error preparing blog article:", error);
        setPost(null);
      }
    };

    fetchPosts();
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-[#FAFBFD]">
        <div className="w-20 h-20 bg-[#FFD400]/20 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm text-neutral-800">
          <FiInbox size={32} />
        </div>
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-3">
          Article Not Found
        </h1>
        <p className="text-neutral-500 max-w-md mb-8 text-sm leading-relaxed">
          The blog post you are looking for might have been moved, deleted, or you may have followed a broken link.
        </p>
        <Link to="/">
          <Button className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-extrabold !py-3 !px-8 !rounded-xl shadow-[4px_4px_0px_0px_#C9A000]">
            ← Return to Homepage
          </Button>
        </Link>
      </div>
    );
  }

  // Generate default fallback markdown content if static post doesn't have explicit prose content
  const displayContent = post.content || `
# Introduction to ${post.title}

In today's fast-moving enterprise environment, organizations are constantly seeking modern strategies to streamline communication, automate customer engagement, and drive measurable revenue growth. This comprehensive guide dives into the foundational concepts, real-world execution, and high-impact workflows that power success.

## Why This Matters Right Now

Traditional customer support and marketing channels often struggle to keep up with consumer expectations for immediate, personalized responses. By integrating advanced automation with WhatsApp Business and AI tools, teams can achieve:

- **Instant 24/7 Responsiveness**: Eliminate wait times and resolve customer inquiries globally.
- **Scalable Lead Qualification**: Automatically score and route high-value prospects to human sales reps.
- **Enhanced ROI**: Reduce operational overhead while increasing conversion rates across campaigns.

## Key Strategies for Success

When implementing an automated enterprise workflow, consider the following best practices:

1. **Start with Clear Customer Journeys**: Map out the exact touchpoints where automation adds value without removing the human touch.
2. **Leverage Structured Knowledge Bases**: Ensure your AI agents have instant access to up-to-date documentation and FAQs.
3. **Analyze and Optimize**: Regularly review chat logs, conversion analytics, and customer feedback to refine your messaging.

## Conclusion

The future belongs to agile organizations that combine artificial intelligence with human empathy. By adopting these frameworks today, your team will be well-positioned to lead in customer satisfaction and operational efficiency.
  `;

  return (
    <article className="min-h-screen bg-white pb-24 selection:bg-[#FFD400]/40 selection:text-black font-sans overflow-x-hidden">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-[#FAFBFD] border-b border-gray-200/80 sticky z-40 backdrop-blur-md bg-white/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-neutral-600 hover:text-black transition-colors"
          >
            <FiArrowLeft size={14} /> 
            <span className="hidden sm:inline">Back to All Articles</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 hidden sm:inline">Share article:</span>
            <Button
              onClick={handleCopyLink}
              className="!px-3 !py-1.5 !rounded-lg !border !border-gray-300 !bg-white hover:!bg-gray-50 !text-xs !font-bold !text-neutral-700 flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {copied ? <FiCheck className="text-green-600" size={14} /> : <FiLink size={14} />}
              <span>{copied ? "Copied!" : ""}</span>
              <span className="hidden sm:inline">{copied ? "" : "Copy Link"}</span>
            </Button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-neutral-700 shadow-sm transition-all flex items-center justify-center"
              title="Share on X / Twitter"
            >
              <FiTwitter size={14} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-neutral-700 shadow-sm transition-all flex items-center justify-center"
              title="Share on LinkedIn"
            >
              <FiLinkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Article Hero Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/20 text-neutral-900 border border-[#FFD400]/50 text-xs font-extrabold uppercase tracking-wider shadow-sm">
          <span>● {post.categoryLabel || "Article"}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.15] max-w-3xl mx-auto break-words">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
          {post.excerpt}
        </p>

        {/* Author Metadata Bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 font-medium">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD400] flex items-center justify-center font-black text-black text-base shadow-sm border-2 border-white overflow-hidden">
              {post.authorImage ? (
                <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
              ) : (
                (post.author || "F")[0]
              )}
            </div>
            <div className="text-left">
              <span className="block font-bold text-neutral-900 leading-none">
                {post.author || "Flowbee Team"}
              </span>
              <span className="text-xs text-neutral-400 mt-1 block">Verified Contributor</span>
            </div>
          </div>
          <span className="hidden sm:inline text-gray-300">•</span>
          <div className="flex items-center gap-1.5 text-neutral-700">
            <FiCalendar size={14} className="text-[#CA8A04]" />
            <span className="font-semibold">{post.date || "July 3, 2026"}</span>
          </div>
          <span className="hidden sm:inline text-gray-300">•</span>
          <div className="flex items-center gap-1.5 text-neutral-700">
            <FiClock size={14} className="text-[#CA8A04]" />
            <span className="font-semibold">{post.readTime || "5 min read"}</span>
          </div>
        </div>
      </div>

      {/* Cover Image Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-100 max-h-[520px] relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Prose */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none text-neutral-800 space-y-6 text-lg leading-relaxed font-normal break-words overflow-hidden">
          {/<\/?[a-z][\s\S]*>/i.test(displayContent) ? (
            <div
              className="[&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:rounded-xl [&_video]:w-full [&_video]:rounded-xl"
              dangerouslySetInnerHTML={{ __html: displayContent }}
            />
          ) : displayContent.split("\n\n").map((para, idx) => {
            if (para.trim().startsWith("# ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-extrabold text-neutral-900 pt-8 pb-2 border-b border-gray-100 tracking-tight"
                >
                  {para.replace("# ", "")}
                </h2>
              );
            }
            if (para.trim().startsWith("## ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-neutral-900 pt-6 tracking-tight flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#CA8A04] inline-block" />
                  <span>{para.replace("## ", "")}</span>
                </h3>
              );
            }
            if (para.trim().startsWith("- ")) {
              const items = para.split("\n").filter((l) => l.trim().startsWith("- "));
              return (
                <ul key={idx} className="space-y-3 pl-2 my-6">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="text-[#CA8A04] mt-1 flex-shrink-0" size={16} />
                      <span
                        className="text-neutral-700"
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace("- ", "")
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>'),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(para.trim())) {
              const items = para.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
              return (
                <ol key={idx} className="space-y-4 my-6 pl-4 border-l-2 border-[#FFD400]">
                  {items.map((item, i) => (
                    <li key={i} className="text-neutral-700">
                      <strong className="font-bold text-black mr-2">#{i + 1}</strong>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^\d+\.\s/, "")
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>'),
                        }}
                      />
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p
                key={idx}
                className="text-neutral-700 leading-8"
                dangerouslySetInnerHTML={{
                  __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>'),
                }}
              />
            );
          })}
        </div>

        {/* Interactive Feedback & CTA Box */}
        <div className="mt-16 pt-10 border-t border-gray-200/80 bg-[#FAFBFD] rounded-3xl p-8 text-center border border-gray-200 shadow-sm space-y-6">
          <h4 className="text-xl font-extrabold text-neutral-900">
            Did you find this article helpful?
          </h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              onClick={() => setHelpfulState("yes")}
              className={`!px-6 !py-3 !rounded-2xl !font-bold !text-sm transition-all flex items-center gap-2 !border cursor-pointer ${
                helpfulState === "yes"
                  ? "!bg-[#FFD400] !text-black !border-[#CA8A04] scale-105 shadow-md"
                  : "!bg-white !text-neutral-700 !border-gray-300 hover:!bg-gray-50 shadow-sm"
              }`}
            >
              <FiThumbsUp size={16} />
              <span>Yes, valuable!</span>
            </Button>
            <Button
              onClick={() => setHelpfulState("no")}
              className={`!px-6 !py-3 !rounded-2xl !font-bold !text-sm transition-all flex items-center gap-2 !border cursor-pointer ${
                helpfulState === "no"
                  ? "!bg-black !text-white !border-black scale-105 shadow-md"
                  : "!bg-white !text-neutral-700 !border-gray-300 hover:!bg-gray-50 shadow-sm"
              }`}
            >
              <FiThumbsDown size={16} />
              <span>Needs improvement</span>
            </Button>
          </div>
          {helpfulState && (
            <p className="text-xs text-green-600 font-bold animate-fadeIn">
              ✨ Thank you for your feedback! Our editorial team uses this to improve Flowbee content.
            </p>
          )}
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#FFD400] flex items-center justify-center font-black text-black text-2xl shadow-md flex-shrink-0 overflow-hidden">
            {post.authorImage ? (
              <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
            ) : (
              (post.author || "F")[0]
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h4 className="font-extrabold text-lg text-neutral-900">
                {post.author || "Flowbee Team"}
              </h4>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider border border-blue-200">
                Author
              </span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We are passionate about building the world's leading WhatsApp AI automation and customer engagement platform. Follow us for weekly insights on scaling conversion and workflow efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* ==================================
          RELATED ARTICLES SECTION
      =================================== */}
      {relatedPosts.length > 0 && (
        <section className="mt-20 pt-16 border-t border-gray-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold text-[#CA8A04] uppercase tracking-wider block mb-1">
                Keep Reading
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Related Articles You Might Enjoy
              </h3>
            </div>
            <Link to="/blog">
              <Button size="sm" className="!bg-[#FFD400] hover:!bg-[#E6BF00] !text-black !font-extrabold !rounded-xl !px-6 !py-2.5 shadow-[3px_3px_0px_0px_#C9A000] active:scale-95 transition-all w-full sm:w-auto">
                View All Posts →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relPost) => (
              <BlogCard key={`related-${relPost.id}`} post={relPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
