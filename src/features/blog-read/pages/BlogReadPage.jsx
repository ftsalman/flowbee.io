import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../../../../lib/turtle-ui/components/button/Button";
import {
  ALL_POSTS,
  LATEST_POSTS,
  TRENDING_POSTS,
} from "../../../constants/blogData";
import { db } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStoredBlogs } from "../../blog-admins/blogs-creation/utils/blogStorage";
import { FiInbox } from "react-icons/fi";

// Modular Components
import { TopNavigation } from "../components/TopNavigation";
import { ArticleHero } from "../components/ArticleHero";
import { ArticleBody } from "../components/ArticleBody";
import { FaqSection } from "../components/FaqSection";
import { ArticleFeedback } from "../components/ArticleFeedback";
import { AuthorBio } from "../components/AuthorBio";
import { RelatedArticles } from "../components/RelatedArticles";
import { TableOfContents } from "../components/TableOfContents";

export const BlogReadPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
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
    <article className="min-h-screen bg-white pb-24 selection:bg-[#FFD400]/40 selection:text-black font-sans">
      <TopNavigation title={post.title} />

      {/* Unified Article Container */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-center">
        
        {/* TOC Sidebar (Left) */}
        <TableOfContents title={post.title} />

        {/* Main Content (Center/Right) */}
        <div className="flex-1 w-full max-w-3xl min-w-0">
          <ArticleHero post={post} />
          
          <ArticleBody displayContent={displayContent} />
          
          <FaqSection faqs={post.faqs} />
          
          <ArticleFeedback 
            helpfulState={helpfulState} 
            setHelpfulState={setHelpfulState} 
          />
          
          <AuthorBio 
            author={post.author} 
            authorImage={post.authorImage} 
          />
        </div>
      </div>

      <RelatedArticles relatedPosts={relatedPosts} />
    </article>
  );
};

