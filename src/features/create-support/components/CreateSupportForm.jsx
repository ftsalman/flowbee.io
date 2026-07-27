import React, { useState, useRef, useMemo } from 'react';
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { FiImage, FiUser } from 'react-icons/fi';
import { InputBox } from '../../../../lib/turtle-ui/components/input-box/InputBox';
import { Button } from '../../../../lib/turtle-ui/components/button/Button';
import { CATEGORIES } from '../../Support/constants/constants';
import { addSupportArticle } from '../../Support/utils/firebaseSupport';
import { uploadDataUrl } from '../../blog-admins/blogs-creation/utils/firebaseBlogStorage';
import { uploadToCloudinary } from '../../blog-admins/blogs-creation/utils/cloudinary';
import { useToast } from '../../../hooks/useToast';

// Register Video Blot for ReactQuill
const BlockEmbed = Quill.import("blots/block/embed");
class UploadedVideoBlot extends BlockEmbed {
  static blotName = "uploadedVideo";
  static tagName = "video";

  static create(value) {
    const node = super.create();
    node.setAttribute("src", value);
    node.setAttribute("controls", "");
    node.setAttribute("preload", "metadata");
    node.setAttribute("playsinline", "");
    node.setAttribute("class", "w-full rounded-xl my-4");
    return node;
  }

  static value(node) {
    return node.getAttribute("src");
  }
}
Quill.register(UploadedVideoBlot);

export const CreateSupportForm = () => {
  const { showToast } = useToast();
  const fileInputRef = useRef(null);
  const creatorFileInputRef = useRef(null);
  const quillRef = useRef(null);
  const videoInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    categoryId: CATEGORIES[0]?.id || '',
    desc: '',
    content: '',
    image: '',
    creatorName: '',
    creatorImage: '',
    createdDate: new Date().toISOString().split('T')[0]
  });

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          video: () => videoInputRef.current?.click(),
        },
      },
    }),
    []
  );

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContentChange = (value) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreatorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, creatorImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    showToast({
      variant: "info",
      descp: `Uploading video...`
    });

    try {
      const url = await uploadToCloudinary(file, 'video');
      const editor = quillRef.current?.getEditor();
      if (!editor) return;

      const range = editor.getSelection(true);
      editor.insertEmbed(range.index, "uploadedVideo", url, "user");
      editor.insertText(range.index + 1, "\n", "user");
      editor.setSelection(range.index + 2, 0, "silent");
      
      showToast({
        variant: "success",
        descp: `Video uploaded successfully!`
      });
    } catch (err) {
      console.error("Video upload failed", err);
      showToast({
        variant: "error",
        descp: `Failed to upload video.`
      });
    } finally {
      e.target.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let imageUrl = formData.image;
      if (imageUrl && imageUrl.startsWith('data:')) {
        imageUrl = await uploadDataUrl(imageUrl);
      }
      
      let creatorImageUrl = formData.creatorImage;
      if (creatorImageUrl && creatorImageUrl.startsWith('data:')) {
        creatorImageUrl = await uploadDataUrl(creatorImageUrl);
      }

      const article = {
        ...formData,
        image: imageUrl,
        creatorImage: creatorImageUrl,
        id: Date.now().toString(),
      };
      
      await addSupportArticle(article);
      showToast({
        variant: "success",
        descp: "Support article created successfully!"
      });
      setFormData({ 
        title: '', 
        categoryId: CATEGORIES[0]?.id || '', 
        desc: '', 
        content: '', 
        image: '',
        creatorName: '',
        creatorImage: '',
        createdDate: new Date().toISOString().split('T')[0]
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (creatorFileInputRef.current) creatorFileInputRef.current.value = "";
    } catch (error) {
      showToast({
        variant: "error",
        descp: "Failed to create article. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeCategoryLabel = CATEGORIES.find(c => c.id === formData.categoryId)?.label || 'Support';

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left / Main Column: Title, Description & Content */}
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
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., How to setup your dashboard..."
              className="w-full !rounded-xl !py-3.5 !px-4 !border-gray-300 focus:!border-[#CA8A04] focus:!ring-2 focus:!ring-[#FFD400]/30 font-bold text-base text-neutral-900 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
              Short Description * (Shown on search & listings)
            </label>
            <textarea
              id="desc"
              name="desc"
              required
              rows="3"
              value={formData.desc}
              onChange={handleChange}
              placeholder="Provide a 2-3 sentence summary that hooks the reader..."
              className="w-full rounded-xl p-4 border border-gray-300 focus:border-[#CA8A04] focus:outline-none focus:ring-2 focus:ring-[#FFD400]/30 font-medium text-sm text-neutral-800 transition-all shadow-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                Full Article Content
              </label>
              <span className="text-xs text-neutral-400 font-medium">
                {formData.content.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(Boolean).length} words
              </span>
            </div>
            
            <div className="mt-2 text-neutral-800">
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={formData.content}
                onChange={handleContentChange}
                modules={quillModules}
                formats={[
                  "header",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "indent",
                  "link",
                  "image",
                  "video",
                  "uploadedVideo",
                ]}
                className="bg-white rounded-xl overflow-hidden [&_.ql-toolbar]:rounded-t-xl [&_.ql-toolbar]:border-gray-300 [&_.ql-toolbar]:bg-gray-50 [&_.ql-container]:rounded-b-xl [&_.ql-container]:border-gray-300 [&_.ql-editor]:min-h-[300px] [&_.ql-editor]:text-base [&_.ql-editor]:font-sans"
                placeholder="Write your comprehensive support article here..."
              />
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
                aria-label="Upload article video"
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
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full rounded-xl py-3 px-4 border border-gray-300 bg-white font-semibold text-sm text-neutral-900 focus:border-[#CA8A04] focus:outline-none focus:ring-2 focus:ring-[#FFD400]/30 cursor-pointer shadow-sm"
            >
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Date
              </label>
              <InputBox
                type="date"
                id="createdDate"
                name="createdDate"
                value={formData.createdDate}
                onChange={handleChange}
                className="w-full !rounded-xl !py-2.5 !px-3 !border-gray-300 font-medium text-xs shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Author
              </label>
              <InputBox
                type="text"
                id="creatorName"
                name="creatorName"
                value={formData.creatorName}
                onChange={handleChange}
                placeholder="Flowbee Support"
                className="w-full !rounded-xl !py-2.5 !px-3 !border-gray-300 font-medium text-xs mb-2 shadow-sm"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
              Author Image (Optional)
            </label>
            <div className="flex items-center gap-3">
              {formData.creatorImage ? (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                  <img src={formData.creatorImage} alt="Author" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0">
                  <FiUser size={18} />
                </div>
              )}
              <div className="flex-1">
                <input
                  type="file"
                  id="creatorImage"
                  name="creatorImage"
                  accept="image/*"
                  ref={creatorFileInputRef}
                  onChange={handleCreatorImageChange}
                  className="w-full text-xs font-medium text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#FFD400]/20 file:text-[#CA8A04] hover:file:bg-[#FFD400]/30 transition-all cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2 mt-2">
              Article Cover Image (Optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="w-full text-sm font-medium text-gray-500 file:w-full file:mb-2 file:mr-0 file:py-2 file:px-4 file:rounded-xl file:border border-gray-200 file:text-sm file:font-bold file:bg-gray-50 file:text-neutral-700 hover:file:bg-gray-100 transition-all cursor-pointer block"
            />
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full !bg-[#FFD400] hover:!bg-[#E6BF00] active:scale-[0.98] !text-black !font-extrabold !py-3.5 !rounded-xl transition-all shadow-[4px_4px_0px_0px_#C9A000] hover:shadow-[2px_2px_0px_0px_#C9A000] text-sm flex items-center justify-center gap-2 border-none"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Publishing...</span>
                </>
              ) : (
                <>
                  <span>✨ Publish Article</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Quick Live Preview Mini-Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-3">
            Live Card Preview
          </span>
          <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-md">
            <div className="h-32 relative bg-gray-100 overflow-hidden flex items-center justify-center">
              {formData.image ? (
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <FiImage className="text-gray-300 w-8 h-8" />
              )}
              <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-800 border border-gray-200/50 shadow-sm">
                {activeCategoryLabel}
              </span>
            </div>
            <div className="p-4 bg-white">
              <div className="text-[11px] text-neutral-400 mb-1 font-medium">
                {formData.createdDate} • By {formData.creatorName || "Flowbee Support"}
              </div>
              <h4 className="font-bold text-sm text-neutral-900 line-clamp-2 leading-snug">
                {formData.title || "Untitled Article"}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
