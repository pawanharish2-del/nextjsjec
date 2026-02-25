"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/Admissions.css'; // Import the specific CSS file
import LogoCarousel from '@/components/LogoCarousel'; // Import the footer carousel

export default function AdmissionOpen() {
    const router = useRouter();

    return (
        <div className="admissions-page">

            {/* Hero Section */}
            <section className="admissions-hero">
                <img src="/images/campus-intro.jpeg" alt="JEC Campus Life" className="admissions-hero-bg" />

                <div className="admissions-hero-content">
                    <span className="admissions-hero-badge">Admissions Open 2026</span>
                    <h1>Shape Your Destiny<br />With JEC</h1>
                    <h2>Empowering Future Engineers & Leaders</h2>
                    {/* Added onClick functionality to navigate to /admission-enquiry */}
                    <button
                        className="admissions-hero-cta"
                        onClick={() => window.open('https://admission.jeckukas.org.in/', '_blank', 'noopener,noreferrer')}
                    >
                        Apply Now
                    </button>
                </div>
            </section>

            {/* Advantage Section */}
            <section className="admissions-advantage-section">
                <div className="max-width-container">
                    <div className="admissions-advantage-header">
                        <h2>The JEC Advantage</h2>
                        <div className="admissions-divider"></div>
                    </div>

                    <div className="admissions-stats-container">
                        <div className="admissions-stat-card">
                            <span className="admissions-stat-number">12k+</span>
                            <span className="admissions-stat-label">Alumni</span>
                            <span className="admissions-stat-desc">Glorious and successful</span>
                        </div>
                        <div className="admissions-stat-card">
                            <span className="admissions-stat-number">13</span>
                            <span className="admissions-stat-label">Courses</span>
                            <span className="admissions-stat-desc">Career Centric</span>
                        </div>
                        <div className="admissions-stat-card">
                            <span className="admissions-stat-number">150+</span>
                            <span className="admissions-stat-label">Faculty</span>
                            <span className="admissions-stat-desc">Experienced Mentors</span>
                        </div>
                        <div className="admissions-stat-card">
                            <span className="admissions-stat-number">500+</span>
                            <span className="admissions-stat-label">Corporates</span>
                            <span className="admissions-stat-desc">Top Recruiters</span>
                        </div>
                        <div className="admissions-stat-card">
                            <span className="admissions-stat-number">1L+</span>
                            <span className="admissions-stat-label">Books</span>
                            <span className="admissions-stat-desc">Learning Resources</span>
                        </div>
                        <div className="admissions-stat-card">
                            <span className="admissions-stat-number">20+</span>
                            <span className="admissions-stat-label">Partners</span>
                            <span className="admissions-stat-desc">Global Collaborations</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="admissions-section-padding admissions-why-choose">
                <div className="max-width-container">
                    <h2 className="admissions-section-title">Why Choose <span>JEC</span>?</h2>
                    <div className="admissions-features-grid">
                        <div className="admissions-feature-card">
                            <div className="admissions-feature-icon"><i className="fas fa-project-diagram"></i></div>
                            <h3>Project Based Learning</h3>
                            <p>Go beyond books and learn through live projects and hands-on experience.</p>
                        </div>
                        <div className="admissions-feature-card">
                            <div className="admissions-feature-icon"><i className="fas fa-university"></i></div>
                            <h3>Powered by JEC Org</h3>
                            <p>The Institute is empowered by our 20 years of rich legacy of JEC Group.</p>
                        </div>
                        <div className="admissions-feature-card">
                            <div className="admissions-feature-icon"><i className="fas fa-pencil-ruler"></i></div>
                            <h3>Design Your Degree</h3>
                            <p>Get absolute freedom to choose your preferred subjects and specializations.</p>
                        </div>
                        <div className="admissions-feature-card">
                            <div className="admissions-feature-icon"><i className="fas fa-rocket"></i></div>
                            <h3>Centres for Excellence</h3>
                            <p>Transforming to get ready with emerging technologies and most sought-after courses.</p>
                        </div>
                        <div className="admissions-feature-card">
                            <div className="admissions-feature-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                            <h3>Industry Experts</h3>
                            <p>Grab the opportunity to learn from the finest faculty members from renowned institutes.</p>
                        </div>
                        <div className="admissions-feature-card">
                            <div className="admissions-feature-icon"><i className="fas fa-briefcase"></i></div>
                            <h3>Excellent Placements</h3>
                            <p>Join our strong network of successfully placed alumni at top-notch firms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruiters Slider */}
            <section className="admissions-section-padding admissions-recruiters-section">
                <div className="max-width-container">
                    <h2 className="admissions-section-title">Our Top <span>Recruiters</span></h2>

                    <div className="admissions-logo-slider">
                        <div className="admissions-slide-track">
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1024px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944" alt="TCS" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" alt="Infosys" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" alt="Wipro" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" alt="Dell" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" alt="Accenture" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" /></div>

                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1024px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944" alt="TCS" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" alt="Infosys" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" alt="Wipro" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" alt="Dell" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" alt="Accenture" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" /></div>
                            <div className="admissions-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" /></div>
                        </div>
                    </div>

                    <p style={{ marginTop: '30px', fontWeight: '600', color: '#888', textAlign: 'center' }}>& many more...</p>
                </div>
            </section>

            {/* Experts Section */}
            <section className="admissions-section-padding admissions-experts-section">
                <div className="max-width-container">
                    <h2 className="admissions-section-title">Learn From <span>Industry Experts</span></h2>

                    <div className="admissions-expert-card">
                        <div className="admissions-expert-img-wrapper">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2F1225%20(3)%20(1).png?alt=media&token=fc063e5b-4d0a-48ea-be1e-7ae1da0d3d2a" alt="Er. Lalit K. Saraogi" />
                        </div>
                        <div className="admissions-expert-content">
                            <div className="admissions-expert-name">Mr. Lalit K. Saraogi</div>
                            <span className="admissions-expert-role">Managing Director - AIATERF & JEC Group</span>
                            <p className="admissions-expert-bio">Er. Lalit K. Saraogi plays a key role in defining the vision, mission and strategy for the growth and development of AIATERF and JEC Group of Colleges. He brings in his invaluable experience in managing people at various levels ensuring a smooth and satisfactory relationship.</p>
                        </div>
                    </div>


                    {/* harish sarogi */}
                    <div className="admissions-expert-card">
                        <div className="admissions-expert-img-wrapper">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FShri.%20Harish%20Saraogi.JPG?alt=media&token=709e24a1-cb3a-463f-aba1-20ea6304c644" alt="Er. Lalit K. Saraogi" />
                        </div>
                        <div className="admissions-expert-content">
                            <div className="admissions-expert-name">Mr. Harish Saraogi</div>
                            <span className="admissions-expert-role">Director (Finance) - AIATERF & JEC Group</span>
                            <p className="admissions-expert-bio">Shri Harish Saraogi holds a degree in commerce and has honed technical and managerial skills through advanced training. The credit for the rapid and meteoric rise of the group goes to his astute skills in planning, budgeting, and managing resources.

                                An avid lover of global travel, he brings a wealth of information on innovations taking place worldwide. His dedication and dynamic approach have been a guiding force behind the success of the group, elevating it to international standards.</p>
                        </div>
                    </div>

                    <div className="admissions-expert-card">
                        <div className="admissions-expert-img-wrapper">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FDr.%20Bharat%20Bhushan%20jain%20electr%20eng%20professor%20and%20principal%20phd.JPG?alt=media&token=5a3893e8-fcb6-4501-b0f0-5104ff574abb" alt="Dr. Bharat Bhushan Jain" />
                        </div>
                        <div className="admissions-expert-content">
                            <div className="admissions-expert-name">Dr. Bharat Bhushan Jain</div>
                            <span className="admissions-expert-role">Principal & Professor</span>
                            <p className="admissions-expert-bio">Currently working as Principal and Professor, Department of Electrical Engineering at Jaipur Engineering College. He did B.E. in Electrical Engineering in 2003, M.Tech in 2008, and Ph.D. in 2016 from MNIT, Jaipur. He has published more than 36 papers in International and National Journals.</p>
                        </div>
                    </div>

                    <div className="admissions-expert-card">
                        <div className="admissions-expert-img-wrapper">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2F(Dr.)%20Sunita%20Goyal%20Rawat.jpg?alt=media&token=4c2571f6-5711-4c1a-95f8-3885907e22bc" alt="Prof. (Dr.) Sunita Goyal Rawat" />
                        </div>
                        <div className="admissions-expert-content">
                            <div className="admissions-expert-name">Prof. (Dr.) Sunita Goyal Rawat</div>
                            <span className="admissions-expert-role">Director</span>
                            <p className="admissions-expert-bio">Ph.D. in Organometallic Chemistry from University of Rajasthan (2003). Published 14 papers in reputed journals. Awarded Young Scientist Award from International Society of Ecology and Best Faculty Award. She is the Controller of Examination.</p>
                        </div>
                    </div>

                    <div className="admissions-expert-card">
                        <div className="admissions-expert-img-wrapper">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/mehto4.png?alt=media&token=ef613d73-8294-46e3-a5a1-dfc5c0f6a187" alt="Prof. Dalgobind Mahto" />
                        </div>
                        <div className="admissions-expert-content">
                            <div className="admissions-expert-name">Prof. Dalgobind Mahto</div>
                            <span className="admissions-expert-role">Director (R&D)</span>
                            <p className="admissions-expert-bio">His academic career reflects 20+ years of experience in industries, teaching, research, and administrative accomplishments. His directorial roles involve significant innovation in curriculum development and research productivity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="admissions-section-padding admissions-testimonial-section">
                <div className="max-width-container">
                    <h2 className="admissions-section-title">What <span>Alumni Says</span></h2>
                    <div className="admissions-testimonial-grid">

                        <div className="admissions-t-card">
                            <i className="fas fa-quote-right admissions-t-quote-icon"></i>
                            <p className="admissions-t-text">"Academic experience with world-class infrastructure and faculty at JEC has endowed me with excellence. Exceptional programmes and teaching methodologies, backed by practical skills, have given me confidence to pursue my career"</p>
                            <div className="admissions-t-author">
                                <img src="/images/f3.png" alt="Sunil Sharma" className="admissions-t-avatar" />
                                <div className="admissions-t-info">
                                    <h5>Sunil Sharma</h5>
                                    <span>HawksCode (Graduated 2012)</span>
                                </div>
                            </div>
                        </div>

                        <div className="admissions-t-card">
                            <i className="fas fa-quote-right admissions-t-quote-icon"></i>
                            <p className="admissions-t-text">"JEC has always believed in helping and guiding its students and it was no different during the placement season. Regular classes held at our college to help us with our aptitude and employability skills were of great help."</p>
                            <div className="admissions-t-author">
                                <img src="/images/f1.png" alt="Puneet Mudgal" className="admissions-t-avatar" />
                                <div className="admissions-t-info">
                                    <h5>Puneet Mudgal</h5>
                                    <span>CEO, Silicis Road LLP</span>
                                </div>
                            </div>
                        </div>

                        <div className="admissions-t-card">
                            <i className="fas fa-quote-right admissions-t-quote-icon"></i>
                            <p className="admissions-t-text">"Jaipur Engineering College has got one of the best infrastructural facilities and brilliant faculty. Having a placement policy in order makes thing even more transparent. I am really lucky and proud to have been a part of this institution."</p>
                            <div className="admissions-t-author">
                                <img src="/images/f2.png" alt="Shelly" className="admissions-t-avatar" />
                                <div className="admissions-t-info">
                                    <h5>Shelly</h5>
                                    <span>Writer</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="admissions-bottom-cta">
                <div className="max-width-container">
                    <h2>Secure Your Future Today</h2>
                    <p>Join the ranks of successful engineers at JEC.</p>
                    {/* Added onClick functionality to navigate to /admission-enquiry */}
                    <button
                        className="admissions-hero-cta"
                        style={{ background: 'var(--admissions-logo-gold)', color: 'black', border: 'none' }}
                        onClick={() => window.open('https://admission.jeckukas.org.in/', '_blank', 'noopener,noreferrer')}
                    >
                        APPLY NOW
                    </button>
                </div>
            </section>

            {/* Added LogoCarousel at the bottom */}
            <LogoCarousel />

        </div>
    );
}