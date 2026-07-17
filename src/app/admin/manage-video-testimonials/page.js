"use client";
import React, { useState, useEffect } from 'react';
import { db } from '@/firebase'; // Updated to use '@' alias
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageVideoTestimonials = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    // Form State
    const [title, setTitle] = useState('');
    const [videoId, setVideoId] = useState(''); // The YouTube ID
    const [order, setOrder] = useState(1);

    const fetchVideos = async () => {
        try {
            const q = query(collection(db, "video_testimonials"), orderBy("order"));
            const querySnapshot = await getDocs(q);
            setVideos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching videos:", error);
            const querySnapshot = await getDocs(collection(db, "video_testimonials"));
            setVideos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        }
    };

    useEffect(() => { fetchVideos(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !videoId) {
            toast.warn("Title and YouTube Video ID are required!");
            return;
        }

        const videoData = { title, videoId, order: Number(order) };

        try {
            if (isEditing) {
                await updateDoc(doc(db, "video_testimonials", editId), videoData);
                toast.success("Video updated!");
            } else {
                if (videos.length >= 3) {
                    toast.error("You can only have 3 active testimonials at once.");
                    return;
                }
                await addDoc(collection(db, "video_testimonials"), videoData);
                toast.success("Video added!");
            }
            resetForm();
            fetchVideos();
        } catch (error) {
            toast.error("Error saving video.");
        }
    };

    const handleEdit = (video) => {
        setTitle(video.title);
        setVideoId(video.videoId);
        setOrder(video.order || 1);
        setEditId(video.id);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Remove this video?")) {
            await deleteDoc(doc(db, "video_testimonials", id));
            toast.success("Removed.");
            fetchVideos();
        }
    };

    const resetForm = () => {
        setTitle(''); setVideoId(''); setOrder(1);
        setIsEditing(false); setEditId(null);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px' }}>
            <ToastContainer />
            <h2>Manage Video Testimonials</h2>

            <div style={styles.card}>
                <form onSubmit={handleSubmit}>
                    <label style={styles.label}>Student Name / Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={styles.input} placeholder="e.g. Rahul Sharma - CSE" />

                    <label style={styles.label}>YouTube Video ID (Vertical/Shorts)</label>
                    <input type="text" value={videoId} onChange={e => setVideoId(e.target.value)} style={styles.input} placeholder="e.g. abc123XYZ" />

                    <label style={styles.label}>Display Order</label>
                    <input type="number" value={order} onChange={e => setOrder(e.target.value)} style={styles.input} />

                    <button type="submit" style={styles.saveBtn}>{isEditing ? "Update Video" : "Add Video"}</button>
                    {isEditing && <button type="button" onClick={resetForm} style={styles.cancelBtn}>Cancel</button>}
                </form>
            </div>

            <div style={{ marginTop: '30px' }}>
                <h3>Active Videos ({videos.length}/3)</h3>
                {videos.map(v => (
                    <div key={v.id} style={styles.listItem}>
                        <div>
                            <strong>{v.title}</strong><br />
                            <small>ID: {v.videoId}</small>
                        </div>
                        <div>
                            <button onClick={() => handleEdit(v)} style={styles.editBtn}>Edit</button>
                            <button onClick={() => handleDelete(v.id)} style={styles.deleteBtn}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    card: { background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
    label: { display: 'block', margin: '10px 0 5px', fontWeight: 'bold' },
    input: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' },
    saveBtn: { padding: '10px 20px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    cancelBtn: { padding: '10px 20px', background: '#ccc', marginLeft: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    listItem: { display: 'flex', justifyContent: 'space-between', padding: '15px', background: 'white', border: '1px solid #eee', marginBottom: '10px', borderRadius: '5px' },
    editBtn: { marginRight: '5px', background: '#ffc107', border: 'none', padding: '5px 10px', borderRadius: '3px' },
    deleteBtn: { background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px' }
};

export default ManageVideoTestimonials;