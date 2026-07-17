"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '@/firebase';
import Link from 'next/link';
import '@/styles/CampusLife.css'; // Ensure this file exists!

function CampusLife() {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter(); 

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const galleryRef = collection(db, "campus_gallery");
                const q = query(galleryRef, orderBy("order"));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                if (data.length > 0) {
                    setGalleryItems(data);
                } else {
                    // FALLBACK DATA: Shows images if Firebase is empty (Matches your screenshot)
                    setGalleryItems([
                        { id: 1, imageUrl: "https://picsum.photos/800/600?random=1", alt: "Library", linkedAlbumId: "" },
                        { id: 2, imageUrl: "https://picsum.photos/800/600?random=2", alt: "Hostel Life", linkedAlbumId: "" },
                        { id: 3, imageUrl: "https://picsum.photos/800/600?random=3", alt: "Sports", linkedAlbumId: "" },
                        { id: 4, imageUrl: "https://picsum.photos/800/600?random=4", alt: "Campus View", linkedAlbumId: "" }
                    ]);
                }
            } catch (error) {
                console.error("Error fetching campus gallery:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    const handleCardClick = (item) => {
        const basePath = '/campus-life/image-gallery'; 
        if (item.linkedAlbumId) {
            router.push(`${basePath}?albumId=${item.linkedAlbumId}`);
        } else {
            router.push(basePath);
        }
    };

    return (
        <section className="campus-life">
            <div className="campus-life-content">
                
                <div className="header-group">
                    <h2 className="campus-life-title">Campus Life at JEC</h2>
                    <p className="campus-life-desc">
                        Experience the vibrant life at JEC, from our cozy hostels and hygienic mess to electrifying fests and academic infrastructure.
                    </p>
                </div>

                {loading ? (
                    <div className="loader-container"><p>Loading Vibrant Gallery...</p></div>
                ) : (
                    <>
                        <div className="campus-gallery">
                            {galleryItems.map((item, index) => (
                                <div key={item.id} className={`gallery-card ${index === 0 || index === 3 ? 'card-wide' : ''}`} onClick={() => handleCardClick(item)}>
                                    <div className="image-wrapper">
                                        <img src={item.imageUrl} alt={item.alt || "Campus Life"} loading="lazy" />
                                        <div className="gallery-overlay">
                                            <div className="overlay-content">
                                                <span className="item-category">Gallery</span>
                                                <h3>{item.alt || "JEC Life"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* VIEW MORE BUTTON */}
                        <Link href="/campus-life/image-gallery" className="view-more-btn">
                            View More
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
}

export default CampusLife;