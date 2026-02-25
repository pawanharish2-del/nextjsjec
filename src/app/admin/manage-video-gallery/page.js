"use client";
import React, { useState, useEffect } from 'react';
import { db } from '@/firebase'; // Updated to use '@' alias
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditVideoGallery = () => {
  // State
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  
  // Preview State
  const [previewId, setPreviewId] = useState(null);

  // --- 1. Fetch Data ---
  const fetchData = async () => {
    try {
      // Fetch Categories
      const catSnap = await getDocs(collection(db, "video_categories"));
      const catList = catSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(catList);
      if(catList.length > 0 && !selectedCategory) setSelectedCategory(catList[0].title);

      // Fetch Videos
      const vidSnap = await getDocs(query(collection(db, "video_gallery"), orderBy("createdAt", "desc")));
      const vidList = vidSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVideos(vidList);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- 2. Helper: Extract YouTube ID ---
  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Handle URL change for preview
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setVideoUrl(url);
    const id = getYoutubeId(url);
    setPreviewId(id);
  };

  // --- 3. Actions ---
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return toast.warn("Enter a category name!");
    try {
      await addDoc(collection(db, "video_categories"), { title: newCategory });
      toast.success("Category added!");
      setNewCategory('');
      fetchData();
    } catch (e) { toast.error("Error adding category"); }
  };

  const handleDeleteCategory = async (id) => {
    if(window.confirm("Delete this category?")) {
        await deleteDoc(doc(db, "video_categories", id));
        fetchData();
    }
  }

  const handleAddVideo = async (e) => {
    e.preventDefault();
    if (!videoTitle || !previewId || !selectedCategory) {
      toast.warn("Title, Valid YouTube URL, and Category are required!");
      return;
    }

    try {
      await addDoc(collection(db, "video_gallery"), {
        title: videoTitle,
        videoId: previewId,
        url: videoUrl,
        category: selectedCategory,
        createdAt: new Date().toISOString()
      });
      toast.success("Video added to gallery!");
      setVideoTitle('');
      setVideoUrl('');
      setPreviewId(null);
      fetchData();
    } catch (error) {
      toast.error("Error adding video.");
    }
  };

  const handleDeleteVideo = async (id) => {
    if (window.confirm("Remove this video?")) {
      await deleteDoc(doc(db, "video_gallery", id));
      toast.success("Video removed.");
      fetchData();
    }
  };

  if (loading) return <div style={{padding:'20px'}}>Loading Gallery...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer />
      <h2 style={{ marginBottom: '20px' }}>Manage Video Gallery</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
        
        {/* --- LEFT COLUMN: Categories & Add Form --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Category Manager */}
            <div style={styles.card}>
                <h4 style={{marginTop:0}}>Video Categories</h4>
                <div style={{display:'flex', gap:'10px', marginBottom:'15px'}}>
                    <input 
                        type="text" 
                        value={newCategory} 
                        onChange={e => setNewCategory(e.target.value)} 
                        placeholder="New Category..." 
                        style={styles.input}
                    />
                    <button onClick={handleAddCategory} style={styles.addBtn}>Add</button>
                </div>
                <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                    {categories.map(cat => (
                        <div key={cat.id} style={styles.catTag}>
                            {cat.title}
                            <span onClick={() => handleDeleteCategory(cat.id)} style={styles.catDelete}>&times;</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Video Form */}
            <div style={styles.card}>
                <h4 style={{marginTop:0}}>Add New Video</h4>
                <form onSubmit={handleAddVideo}>
                    <label style={styles.label}>Category</label>
                    <select 
                        value={selectedCategory} 
                        onChange={e => setSelectedCategory(e.target.value)} 
                        style={styles.input}
                    >
                        <option value="">Select Category</option>
                        {categories.map(cat => <option key={cat.id} value={cat.title}>{cat.title}</option>)}
                    </select>

                    <label style={styles.label}>Video Title</label>
                    <input 
                        type="text" 
                        value={videoTitle} 
                        onChange={e => setVideoTitle(e.target.value)} 
                        placeholder="e.g. Campus Tour 2025" 
                        style={styles.input} 
                    />

                    <label style={styles.label}>YouTube Link</label>
                    <input 
                        type="text" 
                        value={videoUrl} 
                        onChange={handleUrlChange} 
                        placeholder="Paste YouTube URL here..." 
                        style={styles.input} 
                    />

                    {/* Mini Player Preview */}
                    {previewId && (
                        <div style={styles.previewBox}>
                            <iframe 
                                width="100%" 
                                height="150" 
                                src={`https://www.youtube.com/embed/${previewId}`} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <small style={{color:'#10B981', display:'block', marginTop:'5px'}}>✓ Video Detected</small>
                        </div>
                    )}

                    <button type="submit" style={styles.saveBtn}>Add Video</button>
                </form>
            </div>
        </div>

        {/* --- RIGHT COLUMN: Video List --- */}
        <div>
            <h3 style={{marginTop:0}}>Existing Videos</h3>
            {categories.map(cat => {
                const catVideos = videos.filter(v => v.category === cat.title);
                if (catVideos.length === 0) return null;

                return (
                    <div key={cat.id} style={{marginBottom:'30px'}}>
                        <h4 style={{borderBottom:'2px solid #0072C6', paddingBottom:'10px', color:'#0072C6'}}>{cat.title}</h4>
                        <div style={styles.videoGrid}>
                            {catVideos.map(video => (
                                <div key={video.id} style={styles.videoCard}>
                                    <div style={styles.thumbnailWrapper}>
                                        <img 
                                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} 
                                            alt={video.title} 
                                            style={{width:'100%', height:'100%', objectFit:'cover'}}
                                        />
                                        <a 
                                            href={video.url} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            style={styles.playOverlay}
                                        >
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                    <div style={{padding:'10px'}}>
                                        <div style={{fontWeight:'600', fontSize:'14px', marginBottom:'5px', height:'40px', overflow:'hidden'}}>{video.title}</div>
                                        <button onClick={() => handleDeleteVideo(video.id)} style={styles.deleteBtn}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </div>
  );
};

const styles = {
  card: { background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom:'20px' },
  label: { display: 'block', fontWeight: '600', margin: '10px 0 5px', fontSize: '13px', color: '#444' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '14px' },
  addBtn: { padding: '0 15px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  saveBtn: { width: '100%', padding: '12px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '15px' },
  
  catTag: { background: '#E0F2FE', color: '#0284C7', padding: '5px 10px', borderRadius: '20px', fontSize: '13px', display:'flex', alignItems:'center', gap:'8px' },
  catDelete: { cursor:'pointer', fontWeight:'bold', color:'#0284C7' },

  previewBox: { marginTop: '15px', background: '#000', borderRadius: '8px', overflow: 'hidden' },

  videoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' },
  videoCard: { background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  thumbnailWrapper: { position: 'relative', height: '120px', background: '#000' },
  playOverlay: { position: 'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'30px', background:'rgba(0,0,0,0.3)', textDecoration:'none' },
  
  deleteBtn: { width: '100%', padding: '5px', background: '#FEE2E2', color: '#DC2626', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize:'12px' }
};

export default EditVideoGallery;