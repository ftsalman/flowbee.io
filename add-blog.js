import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATaoJ7Cu_5J3EKxY6h0OFtryYEXjQuj44",
  authDomain: "blog-admin-7317f.firebaseapp.com",
  projectId: "blog-admin-7317f",
  storageBucket: "blog-admin-7317f.firebasestorage.app",
  messagingSenderId: "266338048922",
  appId: "1:266338048922:web:d4a48154bebe03ce13b823"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: "How We Scaled Flowbee AI to 1M Users",
      category: "case-studies",
      categoryLabel: "Case Studies",
      author: "Alice Developer",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      readTime: "4 min read",
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
      excerpt: "A deep technical dive into how our small team of 5 engineers scaled Flowbee's infrastructure to handle millions of daily messages.",
      content: "<h1>Scaling to 1M Users</h1><p>When we first launched Flowbee, we never anticipated the incredible growth we would see in just six months...</p>",
      createdAt: new Date().toISOString()
    });
    console.log("Successfully added new blog post with ID: ", docRef.id);
    process.exit(0);
  } catch (e) {
    console.error("Error adding document: ", e);
    process.exit(1);
  }
}

run();
