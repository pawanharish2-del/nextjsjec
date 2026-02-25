"use client";
import React, { useState, useEffect } from 'react';
// Import db from your firebase config. Adjust path if needed (e.g., '@/firebase')
import { db } from '@/firebase';
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import '@/styles/Placements.css';
import LogoCarousel from '@/components/LogoCarousel';

function Placements() {
    const [activeTab, setActiveTab] = useState('');
    const [loading, setLoading] = useState(true);

    // --- DYNAMIC DATA STATE ---
    const [years, setYears] = useState([]);
    const [starAchievers, setStarAchievers] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [drives, setDrives] = useState([]);

    // --- VIEW MORE STATE ---
    const [galleryLimit, setGalleryLimit] = useState(12); // Start with 12 items

    // --- HELPER: Parse Package for Sorting ---
    // Converts strings like "1.56 Cr" or "12 LPA" into a comparable number (LPA)
    const parsePackageValue = (pkgStr) => {
        if (!pkgStr) return 0;
        const str = pkgStr.toLowerCase().replace(/,/g, '');
        const match = str.match(/[\d\.]+/);
        if (!match) return 0;

        let value = parseFloat(match[0]);

        if (str.includes('cr') || str.includes('crore')) {
            value = value * 100; // Convert Crore to roughly LPA scale (1 Cr = 100 Lakhs)
        }
        // If it says LPA or just a number, we assume it's already in the correct scale relative to Cr * 100
        return value;
    };

    useEffect(() => {
        const fetchPlacementData = async () => {
            try {
                // 1. Fetch Years
                const yearsSnap = await getDocs(query(collection(db, "placement_years"), orderBy("year", "desc")));
                const yearList = yearsSnap.docs.map(doc => doc.data());
                setYears(yearList);

                if (yearList.length > 0) {
                    setActiveTab(yearList[0].year);
                }

                // 2. Fetch Star Achievers
                const starsSnap = await getDocs(query(collection(db, "placement_stars")));
                const rawStars = starsSnap.docs.map(doc => doc.data());
                // Sort DESC by package
                const sortedStars = rawStars.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));
                setStarAchievers(sortedStars);

                // 3. Fetch Gallery
                const gallerySnap = await getDocs(query(collection(db, "placement_gallery")));
                const rawGallery = gallerySnap.docs.map(doc => doc.data());
                // Sort DESC by package
                const sortedGallery = rawGallery.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));
                setGallery(sortedGallery);

                // 4. Fetch Drives
                const drivesSnap = await getDocs(query(collection(db, "placement_drives"), orderBy("date", "desc")));
                setDrives(drivesSnap.docs.map(doc => doc.data()));

            } catch (error) {
                console.error("Error fetching placement data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlacementData();
    }, []);

    const getDrivesForTab = (selectedYear) => {
        return drives.filter(d => d.year === selectedYear);
    };

    const handleViewMore = () => {
        setGalleryLimit(prev => prev + 12); // Load 12 more on each click
    };

    return (
        <div className="placement-page-wrapper">

            {/* Hero */}
            <header className="pg-hero">
                <h1>Placement Glory</h1>
                <p>Catapulting Careers • Life After JEC</p>
            </header>

            {/* Stats */}
            <div className="pg-stats-container">
                <div className="pg-stats-grid">
                    <div className="pg-stat-card">
                        <div className="pg-stat-value">94%+</div>
                        <div className="pg-stat-label">Placement Rate</div>
                    </div>
                    <div className="pg-stat-card">
                        <div className="pg-stat-value">1.56 Cr</div>
                        <div className="pg-stat-label">Highest Package</div>
                    </div>
                    <div className="pg-stat-card">
                        <div className="pg-stat-value">4300+</div>
                        <div className="pg-stat-label">Total Placements</div>
                    </div>
                    <div className="pg-stat-card">
                        <div className="pg-stat-value">500+</div>
                        <div className="pg-stat-label">Active Recruiters</div>
                    </div>
                </div>
            </div>

            <div className="pg-container">

                {/* Narrative */}
                <div className="pg-content-grid">
                    <div className="pg-narrative-text">
                        <h2>Catapulting Careers</h2>
                        <p>As hard as it might be to imagine sometimes, there is life after JEC, as shown by the <strong>~12,000+ JEC alumni</strong> living around the world.</p>
                        <p>For the last three years, JEC has set the highest placement record.</p>
                        <div className="pg-chairman-quote">
                            <i className="fas fa-quote-left" style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'block' }}></i>
                            "We know that great universities world over are known by their successful alumni."
                            <div style={{ marginTop: '10px', fontWeight: '700' }}>— Shri L C Saraogi, Chairman</div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Top Placements, Recruiters & Outreach</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--pg-text-muted)', marginBottom: '1rem' }}>
                            Presently, 300+ JEC students are also working on ‘Live Projects’.
                        </p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2Fcc.JPG?alt=media&token=ee1d7672-6df9-4921-91bb-dde21c680090" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} alt="Corporate Meeting" />
                    </div>
                </div>

                {/* --- SECTION 1: STAR ACHIEVERS (Sorted) --- */}
                <div className="pg-section-header">
                    <h2>Star <span>Achievers</span></h2>
                    <p style={{ color: 'var(--pg-text-muted)' }}>Breaking Barriers & Setting New Benchmarks</p>
                </div>

                <div className="pg-gold-grid">
                    {starAchievers.length > 0 ? starAchievers.map((item, index) => (
                        <div className="pg-gold-card" key={index}>
                            <img src={item.image} className="pg-student-img-lg" alt={item.name} />
                            <div className="pg-gold-name">{item.name}</div>
                            <div className="pg-gold-company">{item.company}</div>
                            <div className="pg-gold-package">{item.package}</div>
                        </div>
                    )) : <p style={{ textAlign: 'center', width: '100%' }}>Loading Stars.</p>}
                </div>

                {/* --- SECTION 2: PLACEMENT GALLERY (Sorted + View More) --- */}
                <div className="pg-section-header" style={{ marginTop: '0' }}>
                    <h2>Placement <span>Gallery</span></h2>
                    <p style={{ color: 'var(--pg-text-muted)' }}>Celebrating our placed students</p>
                </div>

                <div className="pg-achievers-grid" id="studentGrid">
                    {gallery.length > 0 ? gallery.slice(0, galleryLimit).map((item, index) => (
                        <div className={`pg-achiever-card ${item.isPremium ? 'pg-premium' : ''}`} key={index}>
                            <img src={item.image} className="pg-student-img" alt={item.name} />
                            <div className="pg-ac-name">{item.name}</div>
                            <div className="pg-ac-comp">{item.company}</div>
                            <div className="pg-ac-pkg">{item.package}</div>
                        </div>
                    )) : <p>Loading Gallery.</p>}
                </div>

                {/* View More Button */}
                {gallery.length > galleryLimit && (
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <button
                            onClick={handleViewMore}
                            style={{
                                padding: '12px 30px',
                                background: 'var(--pg-primary)', // Uses your CSS variable or falls back to blue
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: '600',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                            }}
                        >
                            View More
                        </button>
                    </div>
                )}

                {/* --- SECTION 3: PLACEMENT DRIVES --- */}
                <div className="pg-section-header">
                    <h2>Placement Drives</h2>
                    <div className="pg-section-line" style={{ maxWidth: '200px', margin: '10px auto', height: '4px', background: 'var(--pg-gold)' }}></div>
                </div>

                <div className="pg-tabs-wrapper">
                    <div className="pg-tabs-nav">
                        {years.length > 0 ? (
                            years.map((yItem, i) => (
                                <button
                                    key={i}
                                    className={`pg-tab-btn ${activeTab === yItem.year ? 'active' : ''}`}
                                    onClick={() => setActiveTab(yItem.year)}
                                >
                                    {yItem.year}
                                </button>
                            ))
                        ) : (
                            <p style={{ padding: '10px' }}>No years found.</p>
                        )}
                    </div>

                    {/* Active Tab Content */}
                    <div className="pg-tab-content active">
                        <div style={{ overflowX: 'auto' }}>
                            <table>
                                <thead>
                                    <tr><th>Date</th><th>Company Name</th><th>CTC (LPA)</th><th>Branch</th></tr>
                                </thead>
                                <tbody>
                                    {getDrivesForTab(activeTab).length > 0 ? (
                                        getDrivesForTab(activeTab).map((drive, i) => (
                                            <tr key={i}>
                                                <td>{drive.date}</td>
                                                <td>{drive.company}</td>
                                                <td>{drive.ctc}</td>
                                                <td>{drive.branch}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="4" style={{ textAlign: 'center' }}>No data available for {activeTab}.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <LogoCarousel />
        </div>
    );
}

export default Placements;