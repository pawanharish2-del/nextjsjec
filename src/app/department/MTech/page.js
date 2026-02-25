"use client";
import React from 'react';
import Link from 'next/link';
import LogoCarousel from '@/components/LogoCarousel'; // Import Added
import '@/styles/MTech.css';

function MTech() {
    return (
        <div className="mtech-page">

            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Master of Technology (M.Tech)</h1>
                    <p className="hero-desc">
                        A postgraduate degree designed to develop advanced technical knowledge, research aptitude, and industry-oriented skills. Ideal for students wishing to work on real-world engineering problems or pursue leadership roles in industry and academia.
                    </p>

                    <div className="program-highlights">
                        <div className="highlight-pill"><i className="fas fa-microscope"></i> Research Aptitude</div>
                        <div className="highlight-pill"><i className="fas fa-industry"></i> Industry Curriculum</div>
                        <div className="highlight-pill"><i className="fas fa-tools"></i> Modern Labs</div>
                        <div className="highlight-pill"><i className="fas fa-graduation-cap"></i> Ph.D. Preparation</div>
                    </div>
                </div>
            </header>

            <div className="container">

                <div className="section-header">
                    <h2>Specialized Courses Offered</h2>
                    <div className="divider"></div>
                </div>

                <div className="courses-grid">
                    {/* Course Card: CSE */}
                    <div className="course-card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-laptop-code"></i></div>
                            <h3 className="card-title">Computer Science Engineering</h3>
                        </div>
                        <div className="card-body">
                            <p className="course-desc">Provides in-depth knowledge of advanced computing concepts. Equips students with analytical and research skills for complex computational problems.</p>
                            <div className="focus-area-title">Key Focus Areas</div>
                            <ul className="focus-list">
                                <li>Advanced Data Structures & Algorithms</li>
                                <li>AI & Machine Learning</li>
                                <li>Data Science & Big Data Analytics</li>
                                <li>Cloud Computing & Distributed Systems</li>
                                <li>Cyber Security & Blockchain</li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <span className="career-label">Career Opportunities</span>
                            <p className="career-text">Software Architect, Data Scientist, AI Engineer, System Analyst, Research Engineer.</p>
                        </div>
                    </div>

                    {/* Course Card: Digital Comm */}
                    <div className="course-card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-satellite-dish"></i></div>
                            <h3 className="card-title">Digital Communication</h3>
                        </div>
                        <div className="card-body">
                            <p className="course-desc">Focuses on modern communication systems, signal processing, and the backbone of wireless networks, emphasizing both theory and application.</p>
                            <div className="focus-area-title">Key Focus Areas</div>
                            <ul className="focus-list">
                                <li>Digital Signal Processing</li>
                                <li>Wireless & Mobile Communication</li>
                                <li>Information Theory & Coding</li>
                                <li>Optical & Satellite Communication</li>
                                <li>VLSI & Communication Systems Design</li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <span className="career-label">Career Opportunities</span>
                            <p className="career-text">Communication Engineer, RF Engineer, Network Planner, System Designer.</p>
                        </div>
                    </div>

                    {/* Course Card: Power Systems */}
                    <div className="course-card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-bolt"></i></div>
                            <h3 className="card-title">Power Systems</h3>
                        </div>
                        <div className="card-body">
                            <p className="course-desc">Develops expertise in generation, transmission, and distribution. Addresses renewable integration, smart grids, and system optimization.</p>
                            <div className="focus-area-title">Key Focus Areas</div>
                            <ul className="focus-list">
                                <li>Power System Analysis & Stability</li>
                                <li>Protection & Control</li>
                                <li>High Voltage Engineering</li>
                                <li>Renewable Energy Systems</li>
                                <li>Smart Grids & Energy Management</li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <span className="career-label">Career Opportunities</span>
                            <p className="career-text">Power System Engineer, Electrical Designer, Energy Consultant, Grid Operations.</p>
                        </div>
                    </div>

                    {/* Course Card: Production */}
                    <div className="course-card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-cogs"></i></div>
                            <h3 className="card-title">Production Engineering</h3>
                        </div>
                        <div className="card-body">
                            <p className="course-desc">Focuses on advanced manufacturing, systems optimization, and industrial management to enhance productivity and quality.</p>
                            <div className="focus-area-title">Key Focus Areas</div>
                            <ul className="focus-list">
                                <li>Advanced Manufacturing Processes</li>
                                <li>CAD/CAM & Automation</li>
                                <li>Operations Research & Optimization</li>
                                <li>Quality Control & Reliability</li>
                                <li>Supply Chain Management</li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <span className="career-label">Career Opportunities</span>
                            <p className="career-text">Production Manager, Manufacturing Engineer, Process Planner, Quality Engineer.</p>
                        </div>
                    </div>

                    {/* Course Card: Environmental */}
                    <div className="course-card">
                        <div className="card-header">
                            <div className="card-icon"><i className="fas fa-leaf"></i></div>
                            <h3 className="card-title">Environmental Engineering*</h3>
                        </div>
                        <div className="card-body">
                            <p className="course-desc">Focuses on sustainable development and managing natural resources. Addresses water, air, and waste management challenges.</p>
                            <div className="focus-area-title">Key Focus Areas</div>
                            <ul className="focus-list">
                                <li>Water & Wastewater Treatment</li>
                                <li>Air Pollution Control</li>
                                <li>Solid & Hazardous Waste Management</li>
                                <li>Environmental Impact Assessment (EIA)</li>
                                <li>Sustainable Development</li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <span className="career-label">Career Opportunities</span>
                            <p className="career-text">Environmental Engineer, Sustainability Consultant, Environmental Analyst.</p>
                        </div>
                    </div>
                </div>

                <div className="section-header">
                    <h2>Alumni Success Stories</h2>
                    <div className="divider"></div>
                </div>

                <div className="alumni-grid">
                    {/* Alumni: Atul */}
                    <div className="alumni-card">
                        <div className="alumni-img-wrapper">
                            <img
                                src="/images/atul.jpg"
                                alt="Atul Kumar"
                                className="alumni-photo"
                            />
                        </div>
                        <h3 className="alumni-name">Atul Kumar</h3>
                        <div className="alumni-role">Assistant Manager</div>
                        <div className="alumni-company">Danish Power Limited</div>
                        <div className="alumni-details">
                            <p>M.Tech Power System (2019-21)</p>
                            <p style={{ marginTop: '5px' }}><strong>Package:</strong> <span className="pkg-badge">10 LPA</span></p>
                        </div>
                    </div>

                    {/* Alumni: Himanshu */}
                    <div className="alumni-card">
                        <div className="alumni-img-wrapper">
                            <img
                                src="/images/himanshu.jpeg"
                                alt="Himanshu Gupta"
                                className="alumni-photo"
                            />
                        </div>
                        <h3 className="alumni-name">Himanshu Gupta</h3>
                        <div className="alumni-role">Sr. Associate Consultant</div>
                        <div className="alumni-company">Infosys</div>
                        <div className="alumni-details">
                            <p>M.Tech Alumni</p>
                            <p style={{ marginTop: '5px' }}><strong>Package:</strong> <span className="pkg-badge">18 LPA</span></p>
                        </div>
                    </div>

                    {/* Alumni: Akshay */}
                    <div className="alumni-card">
                        <div className="alumni-img-wrapper">
                            <img
                                src="/images/akshay.jpeg"
                                alt="Akshay Tripathi"
                                className="alumni-photo"
                            />
                        </div>
                        <h3 className="alumni-name">Akshay Tripathi</h3>
                        <div className="alumni-role">Junior Engineer</div>
                        <div className="alumni-company">GETCO (Gujarat Electricity Board)</div>
                        <div className="alumni-details">
                            <p>M.Tech (2023-25)</p>
                            <p style={{ marginTop: '5px' }}><strong>Salary:</strong> <span className="pkg-badge">₹80k/Month</span></p>
                        </div>
                    </div>
                </div>

                {/* SCHOLARSHIP SECTION */}
                <div className="scholarship-section">
                    <div className="section-header">
                        <h2>Financial Support</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="scholarship-highlight-box">
                        <div className="scholarship-icon-circle">
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>
                        <div className="scholarship-text-content">
                            <h3>AICTE GATE Scholarship</h3>
                            <p>The AICTE GATE Scholarship provides <strong>₹12,400 per month</strong> for up to 24 months (2 years) to full-time M.Tech/ME/M.Arch students with a valid GATE/CEED score admitted to AICTE-approved PG programs.</p>
                        </div>
                    </div>
                </div>

                {/* ELIGIBILITY SECTION */}
                <div className="eligibility-section">
                    <div className="section-header" style={{ marginBottom: '30px' }}>
                        <h2 style={{ color: '#000' }}>Common Eligibility Criteria</h2>
                        <div className="divider" style={{ background: '#d4af37' }}></div>
                    </div>

                    <div className="eligibility-list">
                        <div className="eligibility-item">
                            <i className="fas fa-check-circle"></i>
                            <p><strong>Relevant Degree:</strong> Bachelor’s degree (B.Tech/B.E.) in a relevant engineering discipline.</p>
                        </div>
                        <div className="eligibility-item">
                            <i className="fas fa-check-circle"></i>
                            <p><strong>Entrance Score:</strong> Admission may be based on a valid GATE score and/or merit.</p>
                        </div>
                    </div>
                </div>

            </div>

            <section className="contact-bar">
                <div className="max-width-container">
                    <h3>Ready to Make a Difference?</h3>
                    <p>Secure one of the 18 seats available for this prestigious program.</p>
                    <Link href="/admission-enquiry" className="apply-btn">Apply Now</Link>
                </div>
            </section>

            {/* --- LOGO CAROUSEL ADDED HERE --- */}
            <LogoCarousel />
        </div>
    );
}

export default MTech;