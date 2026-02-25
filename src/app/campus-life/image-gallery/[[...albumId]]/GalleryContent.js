"use client";

import React, { useState, useEffect } from 'react';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import '@/styles/Gallery.css';

const GalleryContent = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [viewerIndex, setViewerIndex] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "albums"));
                const list = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAlbums(list);
            } catch (error) {
                console.error("Error fetching albums:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAlbums();
    }, []);

    const openAlbum = (album) => {
        setSelectedAlbum(album);
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
    };

    const closeAlbum = () => {
        setSelectedAlbum(null);
        setViewerIndex(null);
        document.body.style.overflow = 'auto';
    };

    const openViewer = (index) => {
        setViewerIndex(index);
    };

    const closeViewer = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        setViewerIndex(null);
    };

    const goNext = (e) => {
        e.stopPropagation();
        const images = selectedAlbum?.images || [];
        setViewerIndex(prev => (prev + 1) % images.length);
    };

    const goPrev = (e) => {
        e.stopPropagation();
        const images = selectedAlbum?.images || [];
        setViewerIndex(prev => (prev - 1 + images.length) % images.length);
    };

    // Hero collage covers from first 3 albums
    const cover1 = albums[0]?.cover || null;
    const cover2 = albums[1]?.cover || null;
    const cover3 = albums[2]?.cover || null;

    if (loading) {
        return (
            <div className="gallery-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h2>Loading Gallery...</h2>
            </div>
        );
    }

    return (
        <div className="gallery-page">

            {/* --- HERO SECTION --- */}
            <header className="modern-hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <i className="fas fa-camera"></i> JEC PHOTO ARCHIVE
                    </div>
                    <h1>Campus Life <br /><span>In Focus</span></h1>
                    <p>Explore classrooms, labs, cultural fests, sports, and every milestone that makes JEC a vibrant community.</p>
                    <div className="scroll-indicator">
                        <i className="fas fa-arrow-down"></i> Scroll to Albums
                    </div>
                </div>

                <div className="hero-collage">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    {cover1 && <img src={cover1} className="collage-img img-main" alt="JEC Campus" />}
                    {cover2 && <img src={cover2} className="collage-img img-sub-1" alt="JEC Events" />}
                    {cover3 && <img src={cover3} className="collage-img img-sub-2" alt="JEC Life" />}
                </div>
            </header>

            {/* --- ALBUM GRID --- */}
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2>Photo <span>Albums</span></h2>
                        <p>Select an album to view all photos.</p>
                    </div>
                </div>

                {albums.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#666', padding: '40px' }}>No photo albums found.</div>
                ) : (
                    <div className="album-grid">
                        {albums.map(album => (
                            <div key={album.id} className="album-card" onClick={() => openAlbum(album)}>
                                <div className="album-cover">
                                    <img src={album.cover} alt={album.coverAlt || album.title} />
                                    <div className="album-overlay">
                                        <div className="view-btn">View Photos</div>
                                    </div>
                                </div>
                                <div className="album-info">
                                    <div className="album-meta">
                                        <span className="album-count">{album.images?.length || 0} Photos</span>
                                    </div>
                                    <div className="album-title">{album.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* --- ALBUM MODAL --- */}
            {selectedAlbum && (
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="modal-title">{selectedAlbum.title}</h2>
                        <span className="close-btn" onClick={closeAlbum}>
                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </span>
                    </div>

                    <div className="modal-grid">
                        {selectedAlbum.images?.map((imgObj, index) => {
                            const url = typeof imgObj === 'string' ? imgObj : imgObj.url;
                            const alt = typeof imgObj === 'string' ? 'Gallery Image' : (imgObj.alt || 'Gallery Image');
                            return (
                                <div key={index} className="modal-img-wrapper" onClick={() => openViewer(index)}>
                                    <img src={url} alt={alt} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* --- FULL-SCREEN IMAGE VIEWER --- */}
            {selectedAlbum && viewerIndex !== null && (() => {
                const images = selectedAlbum.images || [];
                const current = images[viewerIndex];
                const url = typeof current === 'string' ? current : current?.url;
                const alt = typeof current === 'string' ? 'Gallery Image' : (current?.alt || 'Gallery Image');
                return (
                    <div className="image-viewer" onClick={closeViewer}>
                        <span className="viewer-close" onClick={closeViewer}>&times;</span>

                        <span className="viewer-nav viewer-prev" onClick={goPrev}>&#8249;</span>

                        <img
                            src={url}
                            alt={alt}
                            className="viewer-img"
                            onClick={e => e.stopPropagation()}
                        />

                        <span className="viewer-nav viewer-next" onClick={goNext}>&#8250;</span>

                        <div className="image-counter">{viewerIndex + 1} / {images.length}</div>
                        <div className="viewer-caption">{alt}</div>
                    </div>
                );
            })()}

        </div>
    );
};

export default GalleryContent;
