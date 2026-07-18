import { db } from '@/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import EventsAndClubsClient from './EventsAndClubsClient';

export default async function EventsAndClubsPage() {
    let initialEvents = [];

    try {
        const eventsRef = collection(db, 'events');
        const q = query(eventsRef, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            initialEvents.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error fetching events on server:", error);
    }

    return <EventsAndClubsClient initialEvents={initialEvents} />;
}