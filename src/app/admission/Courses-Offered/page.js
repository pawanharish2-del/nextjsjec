// "use client";
import React from 'react';
import '@/styles/Courses.css';
import LogoCarousel from '@/components/LogoCarousel';


export const metadata = {
    title: "Best Courses in Engineering | B. Tech, M. Tech, Karma Courses | JEC Kukas",
    description: "Find Best courses in engineering like B. Tech, M. Tech, B. Voc with thier Fees Structure. Jaipur Engineering College is Top college for engineering.",
    keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

function CoursesOffered() {
    return (
        <div className="courses-offered-page">

            {/* Hero Section */}
            <section className="courses-hero">
                <div className="max-width-container">
                    <h1>Academic Programs</h1>
                    <p>Stimulating, supportive, and playful. JEC offers an exceptional education environment that values who you are. Explore our range of 13 courses across 8 departments.</p>
                </div>
            </section>

            {/* Stats Banner */}
            <div className="max-width-container">
                <div className="stats-bar">
                    <div className="stat-item">
                        <h3>13</h3>
                        <p>Courses Offered</p>
                    </div>
                    <div className="stat-item">
                        <h3>8</h3>
                        <p>Departments</p>
                    </div>
                    <div className="stat-item">
                        <h3>Value</h3>
                        <p>Added Courses</p>
                    </div>
                    <div className="stat-item">
                        <h3>Expert</h3>
                        <p>Faculty Members</p>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-width-container content-section">

                <div className="text-block">
                    <p>Intensely curious and driven to explore, JEC values rigorous analytical thinking, ingenuity, hands-on problem solving, and big new ideas. Globalization has beautifully integrated the world of technology. There is an ever-expanding requirement of quality human resources who can respond to the complex requirements of this sector.</p>
                </div>

                {/* 1. B.Tech (Default Gold) */}
                <h2 className="section-title">1. Bachelor of Technology (B.Tech)</h2>
                <div className="courses-text-block">
                    <p><strong>Duration:</strong> 4 Years / 8 Semesters (for 10+2 applicants)<br />
                        <strong>Eligibility:</strong> 10+2 passed with min 45% marks (40% for reserved). Subjects: Physics & Math (Compulsory) + one optional subject.</p>
                    <p>The exciting journey of B.Tech is for those willing to enrich themselves with the vastness of technology. JEC ensures purposeful environments through excellent faculty, motivated students, and modern infrastructure.</p>
                </div>

                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Discipline</th>
                                <th>Total Seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Computer Science Engineering</td><td>180</td></tr>
                            <tr><td>Computer Science Engineering (AI)</td><td>120</td></tr>
                            <tr><td>Electronics & Comm. Engineering</td><td>30</td></tr>
                            <tr><td>Electrical Engineering</td><td>60</td></tr>
                            <tr><td>Mechanical Engineering</td><td>60</td></tr>
                            <tr><td>Civil Engineering</td><td>60</td></tr>
                            <tr><td><strong>Total Intake</strong></td><td><strong>510</strong></td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 2. Lateral Entry (Explicitly Gold) */}
                <h2 className="section-title"> 2. Lateral Entry (Direct 2nd Year)</h2>
                <div className="highlight-box">
                    <p><strong>Duration:</strong> 3 Years / 6 Semesters</p>
                    <p>Intended for meritorious Diploma holders or B.Sc. graduates. 10% seats over total intake are reserved. Admission via centralized counseling or direct application based on AICTE norms.</p>
                </div>

                {/* 3. M.Tech (Default Gold) */}
                <h2 className="section-title">3. Master of Technology (M.Tech)</h2>
                <div className="text-block">
                    <p><strong>Duration:</strong> 2 Years / 4 Semesters</p>
                    <p>Approved by AICTE & Affiliated to RTU, Kota. Eligibility: B.Tech/BE with 50% marks (45% reserved).</p>
                </div>

                <div className="course-grid">
                    <div className="course-card mtech">
                        <h3>Digital Communication</h3>
                        <span className="duration">18 Seats</span>
                        <p>Advanced study in communication systems and signal processing.</p>
                    </div>
                    <div className="course-card mtech">
                        <h3>Production Engineering</h3>
                        <span className="duration">18 Seats</span>
                        <p>Focus on manufacturing technology and industrial management.</p>
                    </div>
                    <div className="course-card mtech">
                        <h3>Computer Science</h3>
                        <span className="duration">18 Seats</span>
                        <p>Specialization in algorithms, data science, and software architecture.</p>
                    </div>
                    <div className="course-card mtech">
                        <h3>Power System</h3>
                        <span className="duration">18 Seats</span>
                        <p>In-depth analysis of power generation, transmission, and distribution.</p>
                    </div>
                    <div className="course-card mtech">
                        <h3>
                            Environmental Engineering
                            <span style={{ color: 'red' }}> *</span>
                        </h3>
                        <span className="duration">18 Seats</span>
                        <p>Focuses on sustainable development and managing natural resources. Addresses water, air, and waste management challenges.</p>
                    </div>
                    <div className="course-card mtech">
                        <h3>Electrical Engineering</h3>
                        <span className="duration">18 Seats</span>
                        <p>Focuses on the generation, transmission, and efficient use of electrical energy. Addresses challenges in power systems, electronics, automation, and emerging technologies.</p>
                    </div>
                </div>


                {/* 5. KARMA (Default Styling) */}
                <div className="karma-section">
                    <h3>4. KARMA Skill Courses (AICTE)</h3>
                    <p className="courses-text-block">AICTE's "Kaushal Augmentation and Restructuring Mission" (KARMA) integrates vocational education. JEC offers various skill courses under this scheme.</p>
                    <ul className="karma-list" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Any 10th pass and above may join. No age bar.</li>
                        <li>Preference to local community learners.</li>
                        <li>5% seats offered to PwD students under fee waiver.</li>
                        <li>Round-the-year admission based on course duration.</li>
                    </ul>
                    <a href="https://jeckukas.org.in/admission/Skill-Courses-JEC" style={{ color: 'var(--courses-blue)', fontWeight: 'bold', marginTop: '15px', display: 'inline-block' }}>View 24 KARMA Courses &rarr;</a>
                </div>



                <h2 className="section-title" style={{ marginTop: '60px', borderColor: 'var(--logo-gold)' }}>5. "SURYAMITRA" Skill Development Programme</h2>
                <div className="text-block">
                    <p><strong>Focus Area:</strong> Solar Energy (Solar PV Technician Course)<br />
                        <strong>Sponsored By:</strong> MNRE (Ministry of New and Renewable Energy), Govt. of India in collaboration with NISE.</p>
                    <p>This program covers solar PV feasibility studies, basics of design, installation, operation, and maintenance of solar power plants. It is designed to prepare candidates to become new entrepreneurs in the Solar Sector.</p>
                </div>
                <div className="highlight-box">
                    <h4 style={{ color: 'var(--logo-red)', fontSize: '18px', marginBottom: '10px' }}><i className="fas fa-gift"></i> FREE PROGRAM - NEED NOT TO PAY ANYTHING</h4>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: '5px 0', width: '180px' }}><strong>Qualification:</strong></td>
                                <td style={{ padding: '5px 0' }}>ITI (Electrician, Wireman, Electronics) OR Diploma (Electrical, Electronics, Mechanical).</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '5px 0' }}><strong>Age Limit:</strong></td>
                                <td style={{ padding: '5px 0' }}>18 to 40 Years.</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '5px 0' }}><strong>Duration:</strong></td>
                                <td style={{ padding: '5px 0' }}>Residential programme of THREE MONTHS (600 HOURS).</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '5px 0' }}><strong>Medium:</strong></td>
                                <td style={{ padding: '5px 0' }}>Hindi and English Language.</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ marginTop: '15px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                        <p><strong>Admission Contact:</strong> "Suryamitra" Skill Development Center, JEC Group of Colleges<br />
                            SP-43 RIICO Industrial Area, Kukas- Jaipur (Rajasthan) - 302 028<br />
                            <i className="fas fa-phone-alt"></i> +91 94148 57536, +91 84400 44825, +91 94132 06287</p>
                    </div>
                </div>

                <h2 className="section-title" style={{ marginTop: '60px', borderColor: 'var(--logo-blue)' }}>6. "VAYUMITRA" Skill Development Program (VSDP)</h2>
                <div className="text-block">
                    <p><strong>Focus Area:</strong> Wind Energy (Wind Farm Engineer)<br />
                        <strong>Sponsored By:</strong> MNRE, Govt. of India in collaboration with NIWE (National Institute of Wind Energy) & NCVET.</p>
                    <p>A complete overview of Wind Power including resource assessment, installation, commissioning, O&M of wind farms, financial and policy aspects. Covers mechanical, electrical, and hydraulic components.</p>
                </div>
                <div className="highlight-box" style={{ borderLeftColor: 'var(--logo-red)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
                        <h4 style={{ color: 'var(--logo-red)', fontSize: '18px' }}><i className="fas fa-gift"></i> NO COURSE FEE</h4>
                        <span style={{ background: 'var(--logo-gold)', padding: '2px 10px', borderRadius: '4px', fontWeight: 'bold', fontSize: '13px' }}>30 Seats per Batch</span>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: '5px 0', width: '180px' }}><strong>Qualification:</strong></td>
                                <td style={{ padding: '5px 0' }}>ITI + Exp. / Diploma + Exp. / B.E./B. Tech (Electrical / Mechanical / Civil / Electronics & Instrumentation).</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '5px 0' }}><strong>Age Limit:</strong></td>
                                <td style={{ padding: '5px 0' }}>Minimum 22 Years.</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '5px 0' }}><strong>Duration:</strong></td>
                                <td style={{ padding: '5px 0' }}>Residential course of 81 Days.</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '5px 0' }}><strong>Certification:</strong></td>
                                <td style={{ padding: '5px 0' }}>Certificate from Govt. of India through NCVET/ NIWE /MNRE.</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ marginTop: '15px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                        <p><strong>Admission Contact:</strong> "Vayumitra" Skill Development Center, All India Agrasen Technical Education & Research Foundation<br />
                            Jaipur Engineering College Campus, SP-43 RIICO Industrial Area, Kukas, Jaipur<br />
                            <i className="fas fa-phone-alt"></i> 9414857536, 8440044825, 7891188636, 9116160495</p>
                    </div>
                </div>


                {/* Career Opportunities (Blue Border + Top Spacing) */}
                <h2 className="section-title courses-border-blue courses-spacing-top">Career Opportunities</h2>
                <div className="courses-text-block">
                    <p>Students have a gamut of career options after B.Tech in MNCs (Software, Core Engineering), Startups, or Higher Studies (M.Tech, MBA). Opportunities in Government sectors (PSUs like BEL, BHEL, ONGC, NTPC) are also vast through GATE scores.</p>
                </div>

            </div>

            <section className="contact-bar">
                <div className="max-width-container">
                    <h3>Meet Your Admission Counselor</h3>
                    <p>Don't miss out on your lifetime opportunity! We are here to assist you.</p>
                    <p style={{ marginTop: '15px', fontSize: '18px' }}>
                        <i className="fas fa-phone-alt"></i> 8875071333 (30 Lines) |
                        <i className="fas fa-envelope"></i> <a href="mailto:admission@jeckukas.org.in">admission@jeckukas.org.in</a>
                    </p>
                </div>
            </section>

            <LogoCarousel />

        </div>
    );
}

export default CoursesOffered;