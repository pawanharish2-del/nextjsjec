import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

// Load environment variables from Next.js .env.local
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

console.log("Initializing Firebase...");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Path to where the agent saved the 10 JSON files
const agentDir = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\dd773eff-ac29-47d6-aaad-50b8f7c62b8d";

async function uploadBlogs() {
  const blogsCollection = collection(db, "blog_posts");

  for (let i = 1; i <= 10; i++) {
    const fileName = `blog${i}_final.json`;
    const filePath = path.join(agentDir, fileName);

    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const blogData = JSON.parse(fileContent);

        console.log(`Processing Blog ${i}: ${blogData.title}`);

        // Check if blog already exists to prevent duplicates
        const q = query(blogsCollection, where("slug", "==", blogData.slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
           console.log(`⚠️ Blog ${i} already exists in Firestore (Skipping to prevent duplicates).`);
           continue;
        }

        // Upload to Firestore
        const docRef = await addDoc(blogsCollection, blogData);
        console.log(`✅ Successfully uploaded Blog ${i} with ID: ${docRef.id}`);

      } catch (error) {
        console.error(`❌ Error uploading Blog ${i}:`, error);
      }
    } else {
      console.warn(`⚠️ File not found: ${filePath}`);
    }
  }
  
  console.log("\n🎉 Bulk Upload Complete! You can now view them in your Admin Panel.");
  process.exit(0);
}

uploadBlogs();
