import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { SupportEditorForm } from '../components/SupportEditorForm';
import { SupportFullPreview } from '../components/SupportFullPreview';
import { SupportCardPreview } from '../components/SupportCardPreview';
import { CATEGORIES } from '../../Support/constants/constants';
import { addSupportArticle, updateSupportArticle, getSupportArticles } from '../../Support/utils/firebaseSupport';
import { getStoredSupportArticles, saveStoredSupportArticles } from '../../Support/utils/supportStorage';
import { useToast } from '../../../hooks/useToast';
import { Tabs } from '../../../../lib/turtle-ui/components/tabs/Tabs';

const TABS = [
  { id: "editor", label: "✏️ Editor" },
  { id: "preview-card", label: "👁️ Live Card Preview" },
  { id: "preview-article", label: "📖 Full Article" },
];

export const CreateSupportPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();
  
  // Try to load existing article data if editing
  const editArticle = location.state?.editArticle;

  const [title, setTitle] = useState(editArticle?.title || "");
  const [category, setCategory] = useState(editArticle?.categoryId || CATEGORIES[0]?.id || "");
  const [author, setAuthor] = useState(editArticle?.creatorName || "");
  const [authorImage, setAuthorImage] = useState(editArticle?.creatorImage || "");
  const [readTime, setReadTime] = useState(editArticle?.readTime || "");
  const [image, setImage] = useState(editArticle?.image || "");
  const [excerpt, setExcerpt] = useState(editArticle?.desc || "");
  const [content, setContent] = useState(editArticle?.content || "");
  const [faqs, setFaqs] = useState(editArticle?.faqs || []);
  const [isPublishing, setIsPublishing] = useState(false);
  const [editingId, setEditingId] = useState(editArticle?.id || null);

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const categoryLabel = CATEGORIES.find(c => c.id === category)?.label || "";

  const previewArticle = {
    title,
    desc: excerpt,
    categoryLabel,
    author,
    authorImage,
    image,
    content,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      showToast({ variant: 'error', descp: 'Title and content are required' });
      return;
    }
    
    setIsPublishing(true);
    try {
      const articleData = {
        title,
        desc: excerpt,
        content,
        image,
        creatorName: author,
        creatorImage: authorImage,
        categoryId: category,
        id: editingId || Date.now().toString(),
        createdDate: editArticle?.createdDate || new Date().toISOString().split('T')[0],
        readTime,
        faqs,
      };

      if (editingId) {
        await updateSupportArticle(editingId, articleData).catch(() => {});
        showToast({ variant: 'success', descp: 'Article updated successfully!' });
      } else {
        await addSupportArticle(articleData).catch(() => {});
        showToast({ variant: 'success', descp: 'Article published successfully!' });
      }

      // Update local storage fallback
      const indexedArticles = await getStoredSupportArticles();
      const existingIndex = indexedArticles.findIndex(a => String(a.id) === String(articleData.id));
      if (existingIndex >= 0) {
        indexedArticles[existingIndex] = articleData;
      } else {
        indexedArticles.push(articleData);
      }
      await saveStoredSupportArticles(indexedArticles);

      navigate('/support');
    } catch (err) {
      showToast({ variant: 'error', descp: 'Failed to publish article.' });
    } finally {
      setIsPublishing(false);
    }
  };

  const handleCancel = () => {
    navigate('/support');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Studio Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFD400]/20 via-[#FFD400]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/20 text-neutral-900 border border-[#FFD400]/50 text-xs font-bold uppercase tracking-wider mb-2">
              <span>🚀 Support Studio</span>
            </div>
            <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              {editingId ? "Edit Support Article" : "Publish New Support Article"}
            </h1>
            <p className="text-neutral-500 text-sm mt-1">
              Create, format, and immediately broadcast support articles to your Flowbee live site.
            </p>
          </div>

          <div className="self-start md:self-auto flex flex-col md:flex-row items-start md:items-center gap-4">
             <Tabs
               tabs={TABS}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
               className="!bg-gray-100 !p-1.5 !rounded-2xl !border !border-gray-200/80"
               tabClassName="!px-4 !py-2 !rounded-xl !text-xs !font-bold !transition-all"
             />
             <button 
                type="button"
                onClick={handleCancel}
                className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gray-100 text-neutral-700 hover:bg-gray-200 transition-colors"
              >
                Back to View
              </button>
          </div>
      </div>

      {/* Main Workspace Area */}
      {activeTab.id === "editor" ? (
        <SupportEditorForm
          title={title} setTitle={setTitle}
          excerpt={excerpt} setExcerpt={setExcerpt}
          content={content} setContent={setContent}
          faqs={faqs} setFaqs={setFaqs}
          category={category} setCategory={setCategory}
          readTime={readTime} setReadTime={setReadTime}
          author={author} setAuthor={setAuthor}
          authorImage={authorImage} setAuthorImage={setAuthorImage}
          image={image} setImage={setImage}
          editingId={editingId}
          isPublishing={isPublishing}
          handlePublish={handlePublish}
          handleCancel={handleCancel}
          categoryLabel={categoryLabel}
        />           
      ) : activeTab.id === "preview-card" ? (
        <SupportCardPreview 
          previewArticle={previewArticle} 
          setActiveTab={setActiveTab} 
        />
      ) : (
        <SupportFullPreview 
          previewArticle={previewArticle} 
          setActiveTab={setActiveTab} 
        />
      )}
    </div>
  );
};

export default CreateSupportPage;

