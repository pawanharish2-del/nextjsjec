// "use client";
import React from 'react';
import Link from 'next/link';
import '@/styles/StudentsCorner.css';
import LogoCarousel from '@/components/LogoCarousel';


export const metadata = {
    title: "JAIPUR ENGINEERING COLLEGE | Students Corner",
    description: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
    keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

const StudentsCorner = () => {
    return (
        // The main container for the page
        <div className="students-corner-page">

            <header className="hero">
                <h1>JEC Students Corner</h1>
                <p>Stay Updated. Stay Connected. Stay Ahead.</p>
            </header>

            <div className="stats-container">
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">93%+</div>
                        <div className="stat-label">University Results</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">08</div>
                        <div className="stat-label">Departments</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">1000+</div>
                        <div className="stat-label">Computers</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">A+</div>
                        <div className="stat-label">Sports Facilities</div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="section-header">
                    <span>Quick Access</span>
                    <h2>Useful Links & Forms</h2>
                    <p>Students are advised to visit this page regularly for the latest updates.</p>
                </div>

                <div className="dashboard-grid">
                    {/* Updated links to use Next.js Link component where applicable or keep as anchor for external/placeholders */}

                    {/* 1. Pay Fees */}
                    <a href="/admission/Fee-Structure" className="dash-card">
                        <div className="dash-icon"><i className="fas fa-rupee-sign"></i></div>
                        <div className="dash-title">Pay Fees</div>
                    </a>
                    {/* 2. Mandatory Disclosure */}
                    <a href="/admission/Mandatory-Disclosure" className="dash-card">
                        <div className="dash-icon"><i className="fas fa-file-alt"></i></div>
                        <div className="dash-title">Mandatory Disclosure</div>
                    </a>

                    {/* 3. Imp. Questions / FAQ */}
                    <a href="/jec/JEC-FAQ" className="dash-card">
                        <div className="dash-icon"><i className="fas fa-question-circle"></i></div>
                        <div className="dash-title">Imp. Questions</div>
                    </a>

                    {/* 4. RTU Results (External) */}
                    <a
                        href="https://www.esuvidha.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dash-card"
                    >
                        <div className="dash-icon"><i className="fas fa-trophy"></i></div>
                        <div className="dash-title">RTU Results</div>
                    </a>
                </div>

                <div className="info-grid">

                    <div className="info-box">
                        <h3><i className="fas fa-comments" style={{ color: 'var(--primary)' }}></i> JEC Feedback</h3>
                        <p>Your feedback matters. Help us improve Jaipur Engineering College.</p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <strong>Student Feedback:</strong><br />
                            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}>Submit Form &rarr;</a>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <strong>Faculty Feedback:</strong><br />
                            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}>Submit Form &rarr;</a>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <strong>Parents/Alumni:</strong><br />
                            <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600' }}>Submit Form &rarr;</a>
                        </div>
                    </div>

                    <div className="info-box" style={{ borderLeftColor: 'var(--gold)' }}>
                        <h3><i className="fas fa-landmark" style={{ color: 'var(--gold)' }}></i> AICTE Support</h3>
                        <p>Advanced resources from the All India Council for Technical Education.</p>
                        <ul className="info-list">
                            <li><a href="#" style={{ color: 'var(--text-main)' }}>AICTE Centralized Support System</a></li>
                            <li><a href="#" style={{ color: 'var(--text-main)' }}>AICTE Online Feedback Portal</a></li>
                        </ul>
                        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>Policies:</h4>
                            <ul className="info-list">
                                <li><strong>Anti-Ragging:</strong> Zero tolerance policy.</li>
                                <li><strong>Grievance Cell:</strong> Redressal system.</li>
                                <li><a href="#">View Academic Rules & Regulations</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="info-box" style={{ borderLeftColor: '#10B981' }}>
                        <h3><i className="fas fa-graduation-cap" style={{ color: '#10B981' }}></i> Degree Status</h3>
                        <p>Secure your degree from JEC & JIET by filling your details.</p>

                        <strong style={{ display: 'block', marginTop: '1rem', color: 'var(--text-main)' }}>Instructions for Collection:</strong>
                        <ul className="info-list">
                            <li>Handed to candidate only.</li>
                            <li>Bring Govt ID (Aadhar/PAN).</li>
                            <li>Bring Consolidated Mark Sheet.</li>
                            <li><strong>Time:</strong> 11 AM - 3 PM (Working Days).</li>
                        </ul>
                        <a href="#" className="btn-outline" style={{ borderColor: '#10B981', color: '#10B981' }}>Fill Degree Form</a>
                    </div>

                </div>

                <div className="club-section">
                    <div className="club-text">
                        <h3>Student Development Cell (SDC)</h3>
                        <p>"One bee cannot build a hive; one ant cannot build a colony." We believe in empowering students with grit and determination.</p>
                        <p>JEC encourages students to engage in more than <strong>30 co-curricular activities</strong> with <strong>7 established clubs</strong> catering to overall development. Inspired by Maharaja Agrasen’s values, we foster leadership, creativity, and community.</p>
                        <p>Interested to be a member?</p>
                        <a
                            href="mailto:director.marketing@jeckukas.org.in"
                            className="btn-outline"
                            style={{ borderColor: 'var(--gold)', color: 'var(--gold)', marginTop: '0' }}
                        >
                            Email Us &rarr;
                        </a>
                    </div>
                    <div className="club-img">
                        {/* Use the public folder path for images */}
                        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" alt="JEC Student Clubs" />
                    </div>
                </div>

                <div className="section-header">
                    <span>Digital Library</span>
                    <h2>Educational Web Links</h2>
                    <p>Valuable resources for academic growth and skill development.</p>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>S.No.</th>
                                <th>Web links / URL</th>
                                <th>Remarks / Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td><a href="https://onlinecourses.nptel.ac.in/" target="_blank" rel="noopener noreferrer">onlinecourses.nptel.ac.in</a></td><td>NPTEL online courses conducted by various IITs</td></tr>
                            <tr><td>2</td><td><a href="http://nptel.ac.in" target="_blank" rel="noopener noreferrer">nptel.ac.in</a></td><td>NPTEL courses materials/videos</td></tr>
                            <tr><td>3</td><td><a href="http://ocw.mit.edu/index.htm" target="_blank" rel="noopener noreferrer">ocw.mit.edu</a></td><td>MIT open course materials</td></tr>
                            <tr><td>4</td><td><a href="https://cec.nic.in/" target="_blank" rel="noopener noreferrer">cec.nic.in</a></td><td>E learning portal</td></tr>
                            <tr><td>5</td><td><a href="http://www.gian.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">gian.iitkgp.ac.in</a></td><td>Global initiative for Academic Network</td></tr>
                            <tr><td>6</td><td><a href="https://ndl.iitkgp.ac.in/index.php" target="_blank" rel="noopener noreferrer">ndl.iitkgp.ac.in</a></td><td>NDL resource portal</td></tr>
                            <tr><td>7</td><td><a href="https://www.edx.org/school/mitx" target="_blank" rel="noopener noreferrer">edx.org/course/subject</a></td><td>MIT open course ware</td></tr>
                            <tr><td>8</td><td><a href="https://www.oeconsortium.org/" target="_blank" rel="noopener noreferrer">oeconsortium.org</a></td><td>The Open Education Consortium (OEC)</td></tr>
                            <tr><td>9</td><td><a href="https://oyc.yale.edu/" target="_blank" rel="noopener noreferrer">oyc.yale.edu</a></td><td>Open Yale Courses</td></tr>
                            <tr><td>10</td><td><a href="https://open.umich.edu/" target="_blank" rel="noopener noreferrer">open.umich.edu</a></td><td>Open Michigan</td></tr>
                            <tr><td>11</td><td><a href="https://publichealth.jhu.edu/departments/international-health" target="_blank" rel="noopener noreferrer">Johns Hopkins Public Health</a></td><td>Johns Hopkins Public health knowledge for the world</td></tr>
                            <tr><td>12</td><td><a href="http://oli.cmu.edu/independent-learner-courses/" target="_blank" rel="noopener noreferrer">oli.cmu.edu</a></td><td>Carnegie Mellon University</td></tr>
                            <tr><td>13</td><td><a href="https://sites.tufts.edu/ocw/" target="_blank" rel="noopener noreferrer">sites.tufts.edu/ocw</a></td><td>Tufts Open Courseware</td></tr>
                            <tr><td>14</td><td><a href="https://www.nd.edu/" target="_blank" rel="noopener noreferrer">nd.edu</a></td><td>Notre Dame university</td></tr>
                            <tr><td>15</td><td><a href="http://webcast.berkeley.edu/" target="_blank" rel="noopener noreferrer">webcast.berkeley.edu</a></td><td>UC Berkeley's Webcast and Legacy Course</td></tr>
                            <tr><td>16</td><td><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">edx.org</a></td><td>EdX and its Members programs online for free</td></tr>
                            <tr><td>17</td><td><a href="https://www.linkedin.com/learning/me" target="_blank" rel="noopener noreferrer">linkedin.com/learning</a></td><td>LinkedIn Learning</td></tr>
                            <tr><td>18</td><td><a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">khanacademy.org</a></td><td>Free Online Courses, Lessons & Practice</td></tr>
                            <tr><td>19</td><td><a href="https://alison.com/" target="_blank" rel="noopener noreferrer">alison.com</a></td><td>Alison | Free Online Courses & Online Learning</td></tr>
                            <tr><td>20</td><td><a href="https://www.futurelearn.com/" target="_blank" rel="noopener noreferrer">futurelearn.com</a></td><td>Learn new skills, pursue your interests</td></tr>
                            <tr><td>21</td><td><a href="https://learndigital.withgoogle.com/digitalunlocked" target="_blank" rel="noopener noreferrer">learndigital.withgoogle.com</a></td><td>Google digital Unlocked</td></tr>
                            <tr><td>22</td><td><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">coursera.org</a></td><td>Online courses and credentials</td></tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <LogoCarousel />
        </div>
    );
};

export default StudentsCorner;