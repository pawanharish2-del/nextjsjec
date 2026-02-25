"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { db } from '@/firebase'; 
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import '@/styles/VideoGallery.css'; 


// export const metadata = {
//   title: "JEC: Video Gallery",
//   description: "",
//   keywords: "",
// };

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const q = query(collection(db, "video_gallery"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const videoList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setVideos(videoList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video gallery:", error);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const albums = useMemo(() => {
    const grouped = {};
    videos.forEach(vid => {
      if (!grouped[vid.category]) grouped[vid.category] = [];
      grouped[vid.category].push(vid);
    });
    return grouped;
  }, [videos]);

  // Define covers for the Hero Collage based on fetched data
  const cover1 = videos[0]?.videoId || 'dQw4w9WgXcQ';
  const cover2 = videos[1]?.videoId || 'dQw4w9WgXcQ';
  const cover3 = videos[2]?.videoId || 'dQw4w9WgXcQ';

  const closeCategoryModal = (e) => {
    if (e) e.preventDefault(); 
    setSelectedCategory(null);
    document.body.style.overflow = 'auto'; 
  };

  const closePlayer = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setPlayingVideoId(null);
  };

  const openCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    window.scrollTo(0, 0); 
    document.body.style.overflow = 'hidden'; 
  };

  const playVideo = (videoId) => {
    setPlayingVideoId(videoId);
  };

  if (loading) {
    return (
      <div className="video-gallery-wrapper" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', color:'#fff', background:'#0F172A'}}>
        <h2>Loading Gallery...</h2>
      </div>
    );
  }

  return (
    <div className="video-gallery-wrapper">
      
      {/* --- UPDATED HERO SECTION --- */}
      <header className="modern-hero">
        <div className="hero-content">
          <div className="hero-badge"><i className="fas fa-film"></i> JEC VIDEO ARCHIVE</div>
          <h1>JEC in <br /><span>Motion</span> & Sound</h1>
          <p>Relive the energy of campus life, cultural fests, and academic milestones through our curated video collections.</p>
          <div className="scroll-indicator">
            <i className="fas fa-arrow-down"></i> Scroll to Video Albums
          </div>
        </div>
        
        <div className="hero-collage">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <img src={`https://img.youtube.com/vi/${cover1}/hqdefault.jpg`} className="collage-img img-main" alt="Main Video" />
          <img src={`https://img.youtube.com/vi/${cover2}/hqdefault.jpg`} className="collage-img img-sub-1" alt="Event Video" />
          <img src={`https://img.youtube.com/vi/${cover3}/hqdefault.jpg`} className="collage-img img-sub-2" alt="Campus Video" />
        </div>
      </header>

      {/* --- UPDATED MAIN PAGE GRID --- */}
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Video <span>Albums</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '5px' }}>Select a category to view the playlist.</p>
          </div>
        </div>
        
        {Object.keys(albums).length === 0 ? (
            <div style={{textAlign:'center', color:'#666', padding:'40px'}}>No video albums found.</div>
        ) : (
            <div className="album-grid">
            {Object.entries(albums).map(([category, catVideos]) => {
                const coverImg = `https://img.youtube.com/vi/${catVideos[0].videoId}/hqdefault.jpg`;
                return (
                  <div key={category} className="album-card" onClick={() => openCategory(category)}>
                    <div className="album-cover">
                      <img src={coverImg} alt={category} />
                      <div className="folder-overlay">
                        <div className="view-btn">View Playlist</div>
                      </div>
                    </div>
                    <div className="album-info">
                      <span className="album-count">{catVideos.length} Videos</span>
                      <div className="album-title">{category}</div>
                    </div>
                  </div>
                );
            })}
            </div>
        )}
      </div>

      {/* --- ALBUM MODAL (Logic preserved with X icon) --- */}
      {selectedCategory && (
        <div className="category-modal" style={{ 
            paddingTop: '130px', 
            backgroundColor: '#0F172A', 
            zIndex: 1000 
        }}>
          <div className="container">
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                paddingBottom: '1rem',
                marginBottom: '50px', 
                borderBottom: '1px solid rgba(255,255,255,0.1)' 
            }}>
              <h2 style={{ margin: 0, color: '#f39c12', fontSize: '2rem' }}>{selectedCategory}</h2>
              <div onClick={closeCategoryModal} style={{ cursor: 'pointer' }}>
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
            </div>

            <div className="cat-grid">
              {albums[selectedCategory]?.map((vid) => (
                <div key={vid.id} className="video-item" onClick={() => playVideo(vid.videoId)}>
                  <div className="vid-thumb">
                    <img src={`https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`} alt={vid.title} />
                    <div className="play-icon"><i className="fas fa-play-circle"></i></div>
                  </div>
                  <div className="vid-info"><div className="vid-title">{vid.title}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- VIDEO PLAYER (Logic preserved with Shifted Lower margin) --- */}
      {playingVideoId && (
        <div className="player-overlay" onClick={closePlayer} style={{ zIndex: 2000 }}>
          <div onClick={closePlayer} style={{ position: 'absolute', top: '50px', right: '50px', cursor: 'pointer', zIndex: 2001 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>

          <div className="player-wrapper" 
               onClick={(e) => e.stopPropagation()} 
               style={{ marginTop: '140px' }} 
          >
            <iframe 
              src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`} 
              frameBorder="0" allowFullScreen title="Video Player"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;