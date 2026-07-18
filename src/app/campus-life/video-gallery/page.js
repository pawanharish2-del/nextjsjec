import VideoGalleryContent from './VideoGalleryContent';
import { fetchCollectionREST } from '@/lib/firestoreRest';

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

export const revalidate = 60; // Refresh data periodically

export default async function Page() {
    let videos = await fetchCollectionREST("video_gallery");
    
    // Sort by createdAt descending
    videos.sort((a, b) => {
        const dateA = new Date(a.createdAt || 0);
        const dateB = new Date(b.createdAt || 0);
        return dateB - dateA;
    });

    return <VideoGalleryContent initialVideos={videos} />;
}
