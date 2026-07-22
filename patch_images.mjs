import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function patchImages() {
  const blogsCollection = collection(db, "blog_posts");
  const querySnapshot = await getDocs(blogsCollection);
  
  let count = 0;
  for (const document of querySnapshot.docs) {
    const data = document.data();
    if (data.image && data.image.startsWith("https://www.jeckukas.org.in/blog-images/")) {
      const newImage = data.image.replace("https://www.jeckukas.org.in", "");
      await updateDoc(doc(db, "blog_posts", document.id), { image: newImage });
      count++;
      console.log(`Patched thumbnail for ${data.slug}`);
    }
  }
  console.log(`Successfully patched ${count} thumbnails to use relative URLs.`);
  process.exit(0);
}

patchImages();
