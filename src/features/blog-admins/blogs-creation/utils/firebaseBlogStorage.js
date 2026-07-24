import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../../config/firebase";

const uploadDataUrl = async (dataUrl, blogId, fileName) => {
  if (!dataUrl?.startsWith("data:")) return dataUrl;

  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const extension = blob.type.split("/")[1]?.split("+")[0] || "bin";
  const storageRef = ref(storage, `blog-media/${blogId}/${fileName}.${extension}`);

  await uploadBytes(storageRef, blob, { contentType: blob.type });
  return getDownloadURL(storageRef);
};

const uploadArticleMedia = async (content, blogId) => {
  if (!content || typeof DOMParser === "undefined") return content;

  const document = new DOMParser().parseFromString(content, "text/html");
  const mediaElements = [...document.body.querySelectorAll("img[src^='data:'], video[src^='data:']")];

  await Promise.all(
    mediaElements.map(async (element, index) => {
      const url = await uploadDataUrl(
        element.getAttribute("src"),
        blogId,
        `article-${element.tagName.toLowerCase()}-${index}`
      );
      element.setAttribute("src", url);
    })
  );

  return document.body.innerHTML;
};

export const saveBlogToFirebase = async (blog) => {
  const blogId = String(blog.id);
  const [image, authorImage, content] = await Promise.all([
    uploadDataUrl(blog.image, blogId, "cover"),
    uploadDataUrl(blog.authorImage, blogId, "author"),
    uploadArticleMedia(blog.content, blogId),
  ]);

  const storedBlog = {
    ...blog,
    id: blogId,
    image,
    authorImage,
    content,
    createdAt: blog.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await setDoc(doc(db, "posts", blogId), storedBlog);
  return storedBlog;
};

export const getFirebaseBlogs = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map((blogDoc) => ({
    ...blogDoc.data(),
    id: blogDoc.id,
  }));
};

export const deleteBlogFromFirebase = (id) => deleteDoc(doc(db, "posts", String(id)));

