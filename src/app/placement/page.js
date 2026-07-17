"use client";
import React, { useState, useEffect } from 'react';
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
    const [galleryLimit, setGalleryLimit] = useState(12);

    // --- TOP RECRUITERS LOGOS ---
   const topRecruiters = [
    { name: "Microsoft", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    // 🛠️ Deloitte logo fixed using verified Wikimedia SVG
    { name: "Deloitte", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/2/2b/Deloitte.svg" },
    { name: "Wipro", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "Capgemini", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
    { name: "Accenture", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "Hewlett Packard", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    // 🛠️ Flipkart logo fixed using official vector asset
    { name: "Flipkart", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.svg" },
    { name: "Nestle", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_textlogo.svg" },
    { name: "Zomato", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" },
    { name: "PwC", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" },
    // 🛠️ TCS logo fixed using official standard global branding vector
    { name: "TCS", logo: "https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
];


    // --- HELPER: Parse Package for Sorting ---
    const parsePackageValue = (pkgStr) => {
        if (!pkgStr) return 0;
        const str = pkgStr.toLowerCase().replace(/,/g, '');
        const match = str.match(/[\d\.]+/);
        if (!match) return 0;
        let value = parseFloat(match[0]);
        if (str.includes('cr') || str.includes('crore')) {
            value = value * 100;
        }
        return value;
    };

    useEffect(() => {
        const fetchPlacementData = async () => {
            try {
                // 1. Fetch Years
                const yearsSnap = await getDocs(query(collection(db, "placement_years"), orderBy("year", "desc")));
                const yearList = yearsSnap.docs.map(doc => doc.data());
                setYears(yearList);
                if (yearList.length > 0) setActiveTab(yearList[0].year);

                // 2. Fetch Star Achievers
                const starsSnap = await getDocs(query(collection(db, "placement_stars")));
                let rawStars = starsSnap.docs.map(doc => doc.data());

                const targetStudentIndex = rawStars.findIndex(s => s.package && s.package.toString().includes('25'));
                let interceptedStudent = null;
                
                if (targetStudentIndex !== -1) {
                    interceptedStudent = { ...rawStars[targetStudentIndex], package: '25 LPA' };
                    rawStars.splice(targetStudentIndex, 1); 
                }

                const sortedStars = rawStars.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));
                setStarAchievers(sortedStars);

                // 3. Fetch Gallery
                const gallerySnap = await getDocs(query(collection(db, "placement_gallery")));
                let rawGallery = gallerySnap.docs.map(doc => doc.data());
                const sortedGallery = rawGallery.sort((a, b) => parsePackageValue(b.package) - parsePackageValue(a.package));
                
                if (interceptedStudent) {
                    sortedGallery.unshift(interceptedStudent);
                }
                
                setGallery(sortedGallery);

                // 4. Fetch Drives (Sorted Highest to Lowest CTC)
                const drivesSnap = await getDocs(query(collection(db, "placement_drives")));
                let rawDrives = drivesSnap.docs.map(doc => doc.data());

                // Group drives by year
                const drivesByYear = {};
                rawDrives.forEach(drive => {
                    const y = drive.year || 'Unknown';
                    if (!drivesByYear[y]) drivesByYear[y] = [];
                    drivesByYear[y].push(drive);
                });

                let finalProcessedDrives = [];

                for (const year in drivesByYear) {
                    let currentYearDrives = drivesByYear[year];
                    
                    if (currentYearDrives.length > 0) {
                        // Sort all records from Highest CTC to Lowest CTC
                        currentYearDrives.sort((a, b) => {
                            const ctcA = parseFloat(a.ctc) || 0;
                            const ctcB = parseFloat(b.ctc) || 0;
                            return ctcB - ctcA; // Descending order
                        });

                        // Append sorted array
                        finalProcessedDrives = [...finalProcessedDrives, ...currentYearDrives];
                    }
                }

                setDrives(finalProcessedDrives);

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
        setGalleryLimit(prev => prev + 12);
    };

    return (
        <div className="pgx-layout">
            
            {/* 1. PREMIUM HERO */}
            <section className="pgx-hero-section">
                <div className="pgx-hero-bg-overlay"></div>
                <div className="pgx-container pgx-hero-content">
                    <div className="pgx-hero-badge">Life After JEC</div>
                    <h1 className="pgx-hero-title">
                        Placement <span className="pgx-text-gradient">Glory.</span>
                    </h1>
                    <p className="pgx-hero-subtitle">Catapulting Careers to the Next Level.</p>
                </div>

                {/* Overlapping Glass Stats */}
                <div className="pgx-container pgx-hero-stats-wrapper">
                    <div className="pgx-hero-stats-grid">
                        <div className="pgx-stat-glass-card">
                            <h4>84%+</h4>
                            <p>Placement Rate</p>
                        </div>
                        <div className="pgx-stat-glass-card highlight">
                            <h4>1.6 Cr</h4>
                            <p>Highest Package</p>
                        </div>
                        <div className="pgx-stat-glass-card">
                            <h4>9000+</h4>
                            <p>Total Placements</p>
                        </div>
                        <div className="pgx-stat-glass-card">
                            <h4>500+</h4>
                            <p>Active Recruiters</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PLACEMENT HIGHLIGHTS */}
            <section className="pgx-section pgx-bg-subtle" style={{ paddingTop: '10rem' }}>
                <div className="pgx-container">
                    <div className="pgx-section-header-center">
                        <h2>Numbers That Matter</h2>
                        <p>Setting new benchmarks in campus placements.</p>
                    </div>
                    
                    <div className="pgx-bento-grid-3">
                        <div className="pgx-bento-card">
                            <div className="pgx-bento-icon">🏆</div>
                            <h3>856+</h3>
                            <p className="pgx-bento-desc">Offers from Fortune 500 Companies</p>
                        </div>
                        <div className="pgx-bento-card">
                            <div className="pgx-bento-icon">🚀</div>
                            <h3>220</h3>
                            <p className="pgx-bento-desc">Students Placed Above 10 LPA</p>
                        </div>
                        <div className="pgx-bento-card">
                            <div className="pgx-bento-icon">📈</div>
                            <h3>10.7 <span>LPA</span></h3>
                            <p className="pgx-bento-desc">Average Package (Top 30% Students)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US - BENTO GRID */}
            <section className="pgx-section pgx-bg-main">
                <div className="pgx-container">
                    <div className="pgx-section-header-left">
                        <h2>Why Choose JEC?</h2>
                        <p>By the Numbers — Our Impact & Excellence</p>
                    </div>

                    <div className="pgx-bento-complex">
                        <div className="pgx-bc-item pgx-bc-large">
                            <span className="pgx-bc-value">18,000+</span>
                            <span className="pgx-bc-label">students enrolled over the last 25 years 👨‍🎓</span>
                        </div>
                        <div className="pgx-bc-item">
                            <span className="pgx-bc-value">153</span>
                            <span className="pgx-bc-label">Patents Filed 📜</span>
                        </div>
                        <div className="pgx-bc-item">
                            <span className="pgx-bc-value">11,470</span>
                            <span className="pgx-bc-label">61% Paid Internships 💼</span>
                        </div>
                        <div className="pgx-bc-item pgx-bc-wide pgx-bc-gradient-2">
                            <span className="pgx-bc-label-bold">JEC Incubation Center (JECIC)</span>
                            <span className="pgx-bc-label-sub">Recognized by Ministry of Electronics & IT under TIDE 2.0 💻</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. NARRATIVE & OUTREACH */}
            <section className="pgx-section pgx-bg-subtle">
                <div className="pgx-container">
                    <div className="pgx-editorial-grid">
                        <div className="pgx-editorial-content">
                            <h2 className="pgx-editorial-title">Catapulting Careers</h2>
                            <p className="pgx-editorial-body">
                                As hard as it might be to imagine sometimes, there is life after JEC, as shown by the <strong>~12,000+ JEC alumni</strong> living around the world. For the last three years, JEC has set the highest placement record.
                            </p>
                            
                            <div className="pgx-quote-block">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--pgx-accent)"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/></svg>
                                <blockquote>"We know that great universities world over are known by their successful alumni."</blockquote>
                                <cite>— Shri L C Saraogi, Chairman</cite>
                            </div>
                        </div>
                        
                        <div className="pgx-editorial-media">
                            <div className="pgx-media-card">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2Fcc.JPG?alt=media&token=ee1d7672-6df9-4921-91bb-dde21c680090" alt="Corporate Meeting" />
                                <div className="pgx-media-caption">
                                    <h4>Top Placements & Outreach</h4>
                                    <p>Presently, 300+ JEC students are also working on ‘Live Projects’.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TOP RECRUITERS */}
            <section className="pgx-section pgx-bg-main">
                <div className="pgx-container">
                    <div className="pgx-section-header-center">
                        <h2>Key Recruiters</h2>
                        <p>Trusted by the world's leading enterprises</p>
                    </div>
                    
                    <div className="pgx-recruiter-grid">
                        {topRecruiters.map((company, index) => (
                            <div className="pgx-rm-card" key={index} title={company.name}>
                                <img 
                                    src={company.logo} 
                                    alt={`${company.name} Logo`} 
                                    className="pgx-rm-logo" 
                                    onError={(e) => { 
                                        e.target.style.display = 'none'; 
                                        e.target.nextSibling.style.display = 'block'; 
                                    }}
                                />
                                <span className="pgx-rm-fallback" style={{ display: 'none' }}>
                                    {company.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </section>

            {/* 6. STAR ACHIEVERS */}
            <section className="pgx-section pgx-bg-subtle" id="starAchievers">
                <div className="pgx-container">
                    <div className="pgx-section-header-center">
                        <h2>Star <span>Achievers</span></h2>
                        <p>Breaking Barriers & Setting New Benchmarks</p>
                    </div>

                    <div className="pgx-star-grid">
                        {starAchievers.length > 0 ? starAchievers.map((item, index) => (
                            <div className="pgx-star-card" key={index}>
                                <div className="pgx-star-card-glow"></div>
                                <div className="pgx-star-card-content">
                                    <img src={item.image} className="pgx-star-avatar" alt={item.name} />
                                    <h3 className="pgx-star-name">{item.name}</h3>
                                    <span className="pgx-star-company">{item.company}</span>
                                    <div className="pgx-star-pkg">{item.package}</div>
                                </div>
                            </div>
                        )) : (
                            <div className="pgx-loading"><div className="pgx-spinner"></div></div>
                        )}
                    </div>
                </div>
            </section>

            {/* 7. PLACEMENT GALLERY */}
            <section className="pgx-section pgx-bg-main">
                <div className="pgx-container">
                    <div className="pgx-section-header-center">
                        <h2>Placement <span>Gallery</span></h2>
                        <p>Celebrating our successfully placed students</p>
                    </div>

                    <div className="pgx-gallery-grid" id="studentGrid">
                        {gallery.length > 0 ? gallery.slice(0, galleryLimit).map((item, index) => (
                            <div className={`pgx-gallery-card ${item.isPremium ? 'pgx-premium-card' : ''}`} key={index}>
                                <div className="pgx-gc-avatar-wrap">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h4 className="pgx-gc-name">{item.name}</h4>
                                <p className="pgx-gc-company">{item.company}</p>
                                <div className="pgx-gc-pkg">{item.package}</div>
                            </div>
                        )) : (
                            <div className="pgx-loading"><div className="pgx-spinner"></div></div>
                        )}
                    </div>

                    {gallery.length > galleryLimit && (
                        <div className="pgx-action-center">
                            <button onClick={handleViewMore} className="pgx-btn-primary">
                                Load More Achievers
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* 8. PLACEMENT DRIVES TABLE */}
            <section className="pgx-section pgx-bg-subtle">
                <div className="pgx-container">
                    <div className="pgx-section-header-center">
                        <h2>Placement Drives</h2>
                        <p>A timeline of our recruitment success</p>
                    </div>

                    <div className="pgx-table-widget">
                        <div className="pgx-segment-control">
                            {years.length > 0 ? (
                                years.map((yItem, i) => (
                                    <button
                                        key={i}
                                        className={`pgx-segment-btn ${activeTab === yItem.year ? 'active' : ''}`}
                                        onClick={() => setActiveTab(yItem.year)}
                                    >
                                        {yItem.year}
                                    </button>
                                ))
                            ) : (
                                <span>No years found.</span>
                            )}
                        </div>

                        <div className="pgx-table-container active">
                            <table className="pgx-modern-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Company Name</th>
                                        <th>CTC (LPA)</th>
                                        <th>Branch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getDrivesForTab(activeTab).length > 0 ? (
                                        getDrivesForTab(activeTab).map((drive, i) => (
                                            <tr key={i}>
                                                <td className="pgx-td-date">{drive.date}</td>
                                                <td className="pgx-td-company">
                                                    <span className="pgx-pill">{drive.company}</span>
                                                </td>
                                                <td className="pgx-td-ctc">{drive.ctc}</td>
                                                <td className="pgx-td-branch">{drive.branch}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="pgx-empty-state">No data available for {activeTab}.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <div className="pgx-carousel-wrapper" style={{ background: '#FFFFFF', padding: '3rem 0' }}>
                <LogoCarousel />
            </div>
        </div>
    );
}

export default Placements;