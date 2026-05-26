"use client";
import React, { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        type: 'Competition'
    });

    const eventTypes = [
        'Competition', 'Seminar', 'Workshop', 'Major Event',
        'Academic Event', 'Guest Lecture', 'Technical Workshop'
    ];

    // Fetch Events from Firebase
    const fetchEvents = async () => {
        setFetching(true);
        try {
            const eventsRef = collection(db, 'events');
            // Order by date descending (newest first)
            const q = query(eventsRef, orderBy('date', 'desc'));
            const querySnapshot = await getDocs(q);

            const eventsList = [];
            querySnapshot.forEach((doc) => {
                eventsList.push({ id: doc.id, ...doc.data() });
            });

            setEvents(eventsList);
        } catch (error) {
            console.error("Error fetching events: ", error);
            alert("Failed to load events. Check console for details.");
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    // Handle Input Changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Add Event to Firebase
    const handleAddEvent = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, 'events'), {
                ...formData,
                createdAt: new Date().toISOString()
            });

            alert("Event added successfully!");
            // Reset form
            setFormData({
                title: '', description: '', date: '',
                time: '', location: '', type: 'Competition'
            });
            // Refresh the list
            fetchEvents();
        } catch (error) {
            console.error("Error adding event: ", error);
            alert("Error adding event.");
        } finally {
            setLoading(false);
        }
    };

    // Delete Event
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            try {
                await deleteDoc(doc(db, 'events', id));
                alert("Event deleted.");
                fetchEvents();
            } catch (error) {
                console.error("Error deleting event: ", error);
                alert("Error deleting event.");
            }
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.pageTitle}>Manage Events</h2>

            {/* Add Event Form */}
            <div style={styles.card}>
                <h3 style={styles.sectionHeader}>Add New Event</h3>

                <form onSubmit={handleAddEvent} style={styles.formGrid}>

                    <div style={styles.fullWidthGroup}>
                        <label style={styles.label}>Event Name</label>
                        <input type="text" name="title" required value={formData.title} onChange={handleInputChange}
                            style={styles.input} placeholder="e.g. Internal Hackathon 2024" />
                    </div>

                    <div style={styles.fullWidthGroup}>
                        <label style={styles.label}>Small Description</label>
                        <textarea name="description" required value={formData.description} onChange={handleInputChange} rows="2"
                            style={styles.textarea} placeholder="Brief description of the event..." />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Event Date</label>
                        <input type="date" name="date" required value={formData.date} onChange={handleInputChange}
                            style={styles.input} />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Event Time</label>
                        <input type="text" name="time" required value={formData.time} onChange={handleInputChange}
                            style={styles.input} placeholder="e.g. 10:00 AM - 01:00 PM" />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Location</label>
                        <input type="text" name="location" required value={formData.location} onChange={handleInputChange}
                            style={styles.input} placeholder="e.g. Main IT Block" />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Event Type</label>
                        <select name="type" required value={formData.type} onChange={handleInputChange} style={styles.input}>
                            {eventTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div style={styles.fullWidthGroup}>
                        <button type="submit" disabled={loading} style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }}>
                            {loading ? 'Adding Event...' : 'Add Event'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Added Events List */}
            <div style={styles.card}>
                <h3 style={styles.sectionHeader}>Existing Events</h3>

                {fetching ? (
                    <p style={{ color: '#888', fontStyle: 'italic' }}>Loading events...</p>
                ) : events.length === 0 ? (
                    <p style={{ color: '#888', fontStyle: 'italic' }}>No events found. Add one above!</p>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Event Name</th>
                                    <th style={styles.th}>Date & Time</th>
                                    <th style={styles.th}>Type</th>
                                    <th style={styles.th}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event) => (
                                    <tr key={event.id}>
                                        <td style={styles.td}>
                                            <div style={{ fontWeight: '600', color: '#1e293b' }}>{event.title}</div>
                                            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{event.location}</div>
                                        </td>
                                        <td style={styles.td}>
                                            <div style={{ color: '#334155' }}>{event.date}</div>
                                            <div style={{ fontSize: '12px', color: '#64748b' }}>{event.time}</div>
                                        </td>
                                        <td style={styles.td}>
                                            <span style={styles.badge}>{event.type}</span>
                                        </td>
                                        <td style={styles.td}>
                                            <button onClick={() => handleDelete(event.id)} style={styles.deleteBtn}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </div>
    );
};

// Styling to match the rest of the Admin Panel
const styles = {
    container: { padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' },
    pageTitle: { marginBottom: '25px', color: '#1e293b', fontSize: '24px', fontWeight: 'bold' },
    card: { background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '30px' },
    sectionHeader: { margin: '0 0 20px 0', fontSize: '18px', color: '#0f172a', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' },

    formGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
    formGroup: { flex: '1 1 calc(50% - 20px)', minWidth: '250px' },
    fullWidthGroup: { flex: '1 1 100%' },

    label: { display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none', transition: 'border 0.2s' },
    textarea: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none', resize: 'vertical' },
    submitBtn: { background: '#2563EB', color: 'white', border: 'none', padding: '14px 20px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', width: '100%', marginTop: '10px', transition: 'background 0.2s' },

    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left' },
    th: { padding: '12px 15px', background: '#f8fafc', color: '#475569', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '2px solid #e2e8f0' },
    td: { padding: '15px', borderBottom: '1px solid #f1f5f9', fontSize: '14px' },
    badge: { background: '#EFF6FF', color: '#2563EB', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' },
    deleteBtn: { background: '#fee2e2', color: '#ef4444', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', transition: 'background 0.2s' }
};

export default ManageEvents;