import React from 'react';
import EventsClient from './EventsClient';
import { fetchCollectionREST } from '@/lib/firestoreRest';

export const metadata = {
    title: "Events & Clubs | Campus Life | Jaipur Engineering College",
    description: "Discover the vibrant student life at JEC. Join technical clubs like Coder's Cafe, cultural societies, and participate in over 50 annual events.",
    keywords: "JEC events, Jaipur Engineering College student clubs, Coder's Cafe JEC, engineering college campus life, technical workshops Jaipur",
    alternates: {
        canonical: "https://www.jeckukas.org.in/campus-life/events-and-clubs",
    },
    openGraph: {
        title: "Events & Clubs | Campus Life | Jaipur Engineering College",
        description: "Explore technical clubs, cultural societies, and annual events at Jaipur Engineering College.",
        url: "https://www.jeckukas.org.in/campus-life/events-and-clubs",
        siteName: "Jaipur Engineering College",
        type: "website",
    },
};

export const revalidate = 60; // Refresh data periodically

export default async function EventsPage() {
    // Fetch events using safe REST API to prevent Vercel 503 crash
    let eventsList = await fetchCollectionREST("events");

    // Sort by Date (descending)
    eventsList.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pass the perfectly serialized data to the Client Component
    return <EventsClient initialEvents={eventsList} />;
}
