import { collection, doc, getDocs, setDoc, query } from "firebase/firestore";
import { db } from "../../../config/firebase";

// Collection reference
const COLLECTION_NAME = "support_articles";

/**
 * Adds a new support article to Firestore
 * @param {Object} articleData - The article to add { title, desc, content, categoryId, id }
 */
export const addSupportArticle = async (articleData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, articleData.id);
    const storedArticle = {
      ...articleData,
      createdAt: new Date().toISOString(),
    };
    await setDoc(docRef, storedArticle);
    return storedArticle;
  } catch (error) {
    console.error("Error adding support article:", error);
    throw error;
  }
};

/**
 * Fetches all support articles from Firestore
 */
export const getSupportArticles = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME));
    const querySnapshot = await getDocs(q);
    const articles = [];
    querySnapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });
    return articles;
  } catch (error) {
    console.error("Error fetching support articles:", error);
    return [];
  }
};

/**
 * Updates an existing support article in Firestore
 * @param {string} id - The ID of the article to update
 * @param {Object} articleData - The new article data
 */
export const updateSupportArticle = async (id, articleData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const updatedArticle = {
      ...articleData,
      updatedAt: new Date().toISOString(),
    };
    await setDoc(docRef, updatedArticle, { merge: true });
    return updatedArticle;
  } catch (error) {
    console.error("Error updating support article:", error);
    throw error;
  }
};

/**
 * Deletes a support article from Firestore
 * @param {string} id - The ID of the article to delete
 */
export const deleteSupportArticle = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const { deleteDoc } = await import("firebase/firestore");
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting support article:", error);
    throw error;
  }
};
