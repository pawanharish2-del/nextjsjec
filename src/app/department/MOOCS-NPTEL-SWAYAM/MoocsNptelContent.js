"use client";
import React, { useState, useEffect } from 'react';
import LogoCarousel from '@/components/LogoCarousel'; // 1. IMPORT ADDED
import '@/styles/MoocsNptel.css';



const MoocsNptel = () => {
    const [activeTab, setActiveTab] = useState('india');

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.animated-section');
        sections.forEach((section) => observer.observe(section));

        // Cleanup observer on unmount
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="moocs-nptel-page">
            {/* Hero Section */}
            <header className="hero">
                <h1 className="animated-section">MOOCs: NPTEL & SWAYAM</h1>
                <p className="animated-section" style={{ animationDelay: '0.1s' }}>
                    Massive Open Online Courses: Revolutionizing Higher Education through Access, Equity, and Quality.
                </p>
                <div className="badge animated-section" style={{ animationDelay: '0.2s' }}>
                    JEC Local Chapter Active
                </div>
            </header>

            {/* History Timeline as Stats */}
            <div className="stats-container">
                <div className="stats-grid">
                    <div className="stat-card animated-section" style={{ animationDelay: '0.3s' }}>
                        <div className="stat-year">2008</div>
                        <div className="stat-label">Term "MOOC" Coined<br />Connectivist Learning</div>
                    </div>
                    <div className="stat-card animated-section" style={{ animationDelay: '0.4s' }}>
                        <div className="stat-year">2011</div>
                        <div className="stat-label">Global Dissemination<br />Stanford AI Class (160k+ Users)</div>
                    </div>
                    <div className="stat-card animated-section" style={{ animationDelay: '0.5s' }}>
                        <div className="stat-year">2012</div>
                        <div className="stat-label">Platform Era<br />Coursera, Udacity & EdX</div>
                    </div>
                    <div className="stat-card animated-section" style={{ animationDelay: '0.6s' }}>
                        <div className="stat-year">Today</div>
                        <div className="stat-label">SWAYAM & NPTEL<br />Credit Transfer in India</div>
                    </div>
                </div>
            </div>

            <div className="container">

                {/* Intro Section */}
                <div className="section-split animated-section">
                    <div className="text-block">
                        <h3>The Evolution of Online Learning</h3>
                        <p>MOOCs (Massive Open Online Courses) represent a learning phenomenon where learners access online educational multimedia materials and associate with enormous numbers of other learners via social engagement tools. While the roots trace back to the early 2000s, 2008 is considered the foundation year when Stephen Downes and George Siemens coined the term.</p>
                        <p>Today, platforms offer pedagogical tools including glossaries, images, videos, and public repositories. Although originated in the US (Stanford, MIT), the mode is now widely accepted in India, bridging the digital divide.</p>
                        <p>In 2011, Peter Norvig and Sebastian Thurn facilitated the Artificial Intelligence MOOC, attracting 160,000 learners from 190 countries. MIT developed MITx web resource which was later incorporated into EdX. The online educational mode is now gradually accepted by many countries including India.</p>
                    </div>
                    <div className="img-block">
                        <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FNPTL.png?alt=media&token=e31b80d0-8fda-4c33-b56e-1e6dedf79385" alt="Students Learning Online" />
                    </div>
                </div>

                {/* Providers Tabs */}
                <div className="section-header animated-section">
                    <span>Global & Local Reach</span>
                    <h2>Major MOOC Providers</h2>
                    <p>Universities and institutions worldwide utilize these platforms to deliver content.</p>
                </div>

                <div className="tabs-container animated-section">
                    <div className="tabs-nav">
                        <button
                            className={`tab-btn ${activeTab === 'india' ? 'active' : ''}`}
                            onClick={() => setActiveTab('india')}
                        >
                            Indian Providers
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'global' ? 'active' : ''}`}
                            onClick={() => setActiveTab('global')}
                        >
                            International Providers
                        </button>
                    </div>

                    <div className={`tab-content ${activeTab === 'india' ? 'active' : ''}`}>
                        <div className="provider-grid">
                            <div className="provider-item"><i className="fas fa-check-circle"></i> SWAYAM</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> NPTEL</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> IITBx</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> mooKIT</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> Shikshit India</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> Vskills</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> U18</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> Million Lights</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> Apna Course</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> UpGrad</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> EduKart Open</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> LearnVern</div>
                            <div className="provider-item"><i className="fas fa-check-circle"></i> Digital Vidya</div>
                        </div>
                    </div>

                    <div className={`tab-content ${activeTab === 'global' ? 'active' : ''}`}>
                        <div className="provider-grid">
                            <div className="provider-item"><i className="fas fa-globe"></i> Coursera <span className="country">USA</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> edX <span className="country">USA</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Udacity <span className="country">USA</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Kadenze <span className="country">USA</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Canvas Network <span className="country">USA</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Stanford Languita <span className="country">USA</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> FutureLearn <span className="country">UK</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> EMMA <span className="country">EU</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Open Education <span className="country">Russia</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> XuetangX <span className="country">China</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> CNMOOC <span className="country">China</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Chinese MOOCS <span className="country">China</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Univ. of China MOOC <span className="country">China</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Zhihuishu <span className="country">China</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> OpenHPI <span className="country">Germany</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> gacco <span className="country">Japan</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Fisdom <span className="country">Japan</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> OpenLearning <span className="country">Japan</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> JMOOC <span className="country">Japan</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> ewant <span className="country">Taiwan</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Open Education <span className="country">Taiwan</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Edraak <span className="country">Jordan</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Miríada X <span className="country">Spain</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> MéxicoX <span className="country">Mexico</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> France Université <span className="country">France</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> EduOpen <span className="country">Italy</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Federica.eu <span className="country">Italy</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> ThaiMOOC <span className="country">Thailand</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> K-MOOC <span className="country">Korea</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> IndonesiaX <span className="country">Indonesia</span></div>
                            <div className="provider-item"><i className="fas fa-globe"></i> Prometheus <span className="country">Ukraine</span></div>
                        </div>
                    </div>
                </div>

                {/* NPTEL Section */}
                <div className="section-header animated-section">
                    <span>Engineering Excellence</span>
                    <h2>NPTEL & JEC Chapter</h2>
                </div>

                <div className="section-split animated-section">
                    <div className="img-block">
                        <a href="https://youtu.be/Hr6MJcSR9dQ" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'block', height: '100%' }}>
                            <img src="https://img.youtube.com/vi/Hr6MJcSR9dQ/maxresdefault.jpg" alt="NPTEL Video" style={{ opacity: 0.9 }} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--jec-red)', fontSize: '4rem' }}>
                                <i className="fas fa-play-circle"></i>
                            </div>
                        </a>
                        <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 600, color: 'var(--jec-blue)' }}>Click to Watch: Understanding NPTEL</p>
                    </div>
                    <div className="text-block">
                        <h3>About NPTEL</h3>
                        <p>NPTEL (National Programme on Technology Enhanced Learning) project was proposed for the first time in 1999 by Prof. M. S. Ananth, Director, IIT Madras and funded by the Ministry of Human Resource Development, Government of India. It has developed curriculum-based course contents for engineering courses at the undergraduate level. NPTEL is a joint initiative of the IITs and IISc.</p>
                        <p>Through this initiative, NPTEL offers online courses and certification in various topics. The main objective is to reach out to students and faculty by providing them access to NPTEL content and Online Certifications from NPTEL Centre of Continuing Education.</p>


                    </div>
                </div>
                {/* JEC Local Chapter - Full Width Below Section */}
                <div className="animated-section" style={{ background: '#EFF6FF', padding: '2.5rem', borderRadius: '12px', borderTop: '5px solid var(--jec-blue)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ color: 'var(--jec-blue)', marginBottom: '1rem', fontFamily: 'var(--font-head)', fontSize: '1.8rem' }}>
                        <i className="fas fa-university" style={{ marginRight: '10px' }}></i>
                        JEC Group Local Chapter
                    </h3>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                        JEC Group of Colleges has taken a step forward towards the establishment of an NPTEL local Chapter. The objective is to enable students to gain knowledge through enhanced video lectures and obtain certificates. It also makes them employable in the industry or pursue a suitable higher education programme in Engineering and Technology.
                    </p>

                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: '#E0F2FE', padding: '12px', borderRadius: '50%', color: 'var(--jec-blue)' }}>
                            <i className="fas fa-user-tie" style={{ fontSize: '1.5rem' }}></i>
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: 'var(--text-main)' }}>SPOC: Dr. B.B. Jain</h4>
                            <span style={{ fontSize: '0.9rem', color: 'var(--jec-blue)', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Professor, Faculty of Electrical Engineering</span>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
                                Dr. Jain is nominated as SPOC of NPTEL JEC Group Chapter. The role includes identifying mentors from various departments who will motivate students to enroll, monitor coursework, submit assignments, and register for exams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SWAYAM Section */}
                <div className="section-header animated-section">
                    <span>Government of India Initiative</span>
                    <h2>SWAYAM</h2>
                    <p>Designed to achieve the three cardinal principles of Education Policy: Access, Equity, and Quality.</p>
                </div>

                <div className="text-block animated-section" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 3rem auto' }}>
                    <p>SWAYAM seeks to bridge the digital divide for students who have hitherto remained untouched by the digital revolution. This is done through a platform that facilitates hosting of all the courses, taught in classrooms from Class 9 till post-graduation. More than 1,000 specially chosen faculty and teachers from across the country have participated in preparing these courses.</p>
                </div>

                <div className="tabs-container animated-section" style={{ padding: '2rem' }}>
                    <h3 style={{ textAlign: 'center', color: 'var(--jec-blue)', marginBottom: '1.5rem' }}>The 4 Quadrants of SWAYAM</h3>
                    <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-video" style={{ fontSize: '2rem', color: 'var(--jec-gold)', marginBottom: '10px' }}></i>
                            <p style={{ fontWeight: 600 }}>(1) Video Lectures</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-file-pdf" style={{ fontSize: '2rem', color: 'var(--jec-gold)', marginBottom: '10px' }}></i>
                            <p style={{ fontWeight: 600 }}>(2) Reading Material<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Download/Print)</span></p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-clipboard-check" style={{ fontSize: '2rem', color: 'var(--jec-gold)', marginBottom: '10px' }}></i>
                            <p style={{ fontWeight: 600 }}>(3) Self-Assessment<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Tests & Quizzes)</span></p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-comments" style={{ fontSize: '2rem', color: 'var(--jec-gold)', marginBottom: '10px' }}></i>
                            <p style={{ fontWeight: 600 }}>(4) Discussion Forum<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Doubt Clearing)</span></p>
                        </div>
                    </div>
                </div>

                <h3 className="animated-section" style={{ marginTop: '4rem', textAlign: 'center', fontFamily: 'var(--font-head)' }}>9 National Coordinators</h3>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>In order to ensure that best quality content is produced and delivered, nine National Coordinators have been appointed:</p>

                <div className="coordinator-grid animated-section">
                    <div className="coordinator-card">
                        <span className="coord-acronym">AICTE</span>
                        <span className="coord-title">Self-Paced & International</span>
                        <span className="coord-desc">All India Council for Technical Education</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">NPTEL</span>
                        <span className="coord-title">Engineering</span>
                        <span className="coord-desc">National Programme on Technology Enhanced Learning</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">UGC</span>
                        <span className="coord-title">Non-Technical PG</span>
                        <span className="coord-desc">University Grants Commission</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">CEC</span>
                        <span className="coord-title">Under-Graduate</span>
                        <span className="coord-desc">Consortium for Educational Communication</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">NCERT</span>
                        <span className="coord-title">School Education</span>
                        <span className="coord-desc">National Council of Educational Research and Training</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">NIOS</span>
                        <span className="coord-title">School Education</span>
                        <span className="coord-desc">National Institute of Open Schooling</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">IGNOU</span>
                        <span className="coord-title">Out-of-School Students</span>
                        <span className="coord-desc">Indira Gandhi National Open University</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">IIMB</span>
                        <span className="coord-title">Management Studies</span>
                        <span className="coord-desc">Indian Institute of Management, Bangalore</span>
                    </div>
                    <div className="coordinator-card">
                        <span className="coord-acronym">NITTTR</span>
                        <span className="coord-title">Teacher Training</span>
                        <span className="coord-desc">National Institute of Technical Teachers Training and Research</span>
                    </div>
                </div>

                {/* Resources Section */}
                <div className="section-header animated-section">
                    <span>Quick Access</span>
                    <h2>Important Indian MOOCs Links</h2>
                </div>
                <div className="resource-links animated-section">
                    <a href="https://drive.google.com/file/d/1WsOTobt2_DR2b94eE0TDqgjZwEDklPWS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-file-alt"></i> ATAL (FDP)
                    </a>
                    <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-book"></i> NDLI Library
                    </a>
                    <a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-laptop"></i> SWAYAM Courses
                    </a>
                    <a href="https://www.mooc-list.com/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-list-alt"></i> MOOCs
                    </a>
                    <a href="http://epgp.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-graduation-cap"></i> e-PG Pathshala
                    </a>
                    <a href="http://cec.nic.in/cec/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-broadcast-tower"></i> CEC
                    </a>
                    <a href="https://www.swayamprabha.gov.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-tv"></i> Swayamprabha
                    </a>
                    <a href="http://shodhganga.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-search"></i> Shodhganga
                    </a>
                    <a href="https://ess.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-book-open"></i> e-Shodh Sindhu
                    </a>
                    <a href="https://vidwan.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-id-card"></i> Vidwan Database
                    </a>
                    <a href="https://mhrd.gov.in/ict-initiatives" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-university"></i> MHRD
                    </a>
                    <a href="https://www.aicte-india.org/bureaus/swayam" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-cogs"></i> AICTE
                    </a>
                    <a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-building"></i> UGC
                    </a>
                    <a href="https://www.iitg.ac.in/cet/" target="_blank" rel="noopener noreferrer" className="resource-btn">
                        <i className="fas fa-microchip"></i> CET
                    </a>
                </div>

            </div>

            {/* 2. LOGO CAROUSEL ADDED HERE */}
            <LogoCarousel />
        </div>
    );
};

export default MoocsNptel;
