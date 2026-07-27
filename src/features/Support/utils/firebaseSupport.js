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
