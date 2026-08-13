const DATABASE_NAME = "flowbee_support_storage";
const DATABASE_VERSION = 1;
const STORE_NAME = "support_data";
const ARTICLES_KEY = "custom_articles";

const openDatabase = () =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

const runRequest = async (mode, operation) => {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, mode);
    const store = transaction.objectStore(STORE_NAME);
    const request = operation(store);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => database.close();
    transaction.onerror = () => {
      database.close();
      reject(transaction.error);
    };
  });
};

export const getStoredSupportArticles = async () => {
  try {
    const articles = await runRequest("readonly", (store) => store.get(ARTICLES_KEY));
    return Array.isArray(articles) ? articles : [];
  } catch (error) {
    console.error("Error loading stored support articles:", error);
    return [];
  }
};

export const saveStoredSupportArticles = (articles) =>
  runRequest("readwrite", (store) => store.put(articles, ARTICLES_KEY));
