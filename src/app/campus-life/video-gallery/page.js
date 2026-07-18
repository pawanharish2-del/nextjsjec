import VideoGalleryContent from './VideoGalleryContent';
import { db } from '@/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
export const metadata = {
    title: "JEC: Video Gallery",
    description: "Watch videos of JEC's campus life, events, student activities, faculty lectures, and college tours to get a feel of life at Jaipur Engineering College.",
    keywords: "JEC video gallery, JEC campus tour, engineering college videos Jaipur, JEC events videos",
    openGraph: {
        title: "JEC: Video Gallery",
        description: "Watch campus life, events, and student activities at Jaipur Engineering College.",
        url: "https://www.jeckukas.org.in/campus-life/video-gallery",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
    alternates: {
        canonical: "https://www.jeckukas.org.in/campus-life/video-gallery",
    },
};

export default async function Page() {
    let initialVideos = [];
    try {
        const q = query(collection(db, "video_gallery"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        initialVideos = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching video gallery on server:", error);
    }

    return <VideoGalleryContent initialVideos={initialVideos} />;
}
