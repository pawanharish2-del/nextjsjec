// "use client";
import React from 'react';
import '@/styles/MandatoryDisclosure.css'; 
import LogoCarousel from '@/components/LogoCarousel';



export const metadata = {
  title: "Mandatory Disclosure",
  description: "Mandatory Disclosure",
  keywords: "Mandatory Disclosure",
};

function MandatoryDisclosure() {
  return (
    <div className="md-page">
      
      {/* Hero Section */}
      <section className="md-hero">
        <h1>Mandatory Disclosure</h1>
        <div className="md-breadcrumb">
            <span>Home</span>
            <i className="fas fa-chevron-right" style={{fontSize:'0.7rem', color:'rgba(255,255,255,0.5)'}}></i>
            <span>Mandatory Disclosure</span>
        </div>
      </section>

      {/* Stats Container */}
      <div className="md-stats-container">
        <div className="md-stats-grid">
            <div className="md-stat-item">
                <h3>2000</h3>
                <p>Yr. of Estd</p>
            </div>
            <div className="md-stat-item">
                <h3>RTU</h3>
                <p>Affiliated </p>
            </div>
            <div className="md-stat-item">
                <h3>AICTE</h3>
                <p>Approved</p>
            </div>
            <div className="md-stat-item">
                <h3>Private</h3>
                <p>Self Financed</p>
            </div>
        </div>
      </div>

      <div className="md-container">

        {/* General Info Section */}
        <div className="md-section-header">
            <h2>General Information</h2>
            <div className="md-section-line"></div>
        </div>

        <div className="md-card">
            <div className="md-table-wrapper">
                <table className="md-kv-table">
                    <tbody>
                        <tr>
                            <th>Name of the College</th>
                            <td><strong>Jaipur Engineering College</strong></td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>SP 43, RIICO Industrial Area Kukas, Delhi Road, Jaipur: 302028, India</td>
                        </tr>
                        <tr>
                            <th>Website</th>
                            <td><a href="http://www.jeckukas.org.in" target="_blank" rel="noreferrer" style={{color:'var(--md-primary)', fontWeight:'600'}}>www.jeckukas.org.in</a></td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>District Head Quarter</td>
                        </tr>
                        <tr>
                            <th>Affiliating University</th>
                            <td>
                                <strong>Current:</strong> Rajasthan Technical University (RTU), Kota<br/>
                                <span style={{fontSize:'0.85rem', color:'var(--md-text-muted)'}}>Previous: University of Rajasthan (UoR), Jaipur</span>
                            </td>
                        </tr>
                        <tr>
                            <th>Year of Affiliation</th>
                            <td>
                                <strong>2000 - 2005:</strong> University of Rajasthan (UoR)<br/>
                                <strong>2006 - Present:</strong> Rajasthan Technical University (RTU)
                            </td>
                        </tr>
                        <tr>
                            <th>AICTE Approval</th>
                            <td>Since 2000 </td>
                        </tr>
                        <tr>
                            <th>Type & Category</th>
                            <td>Unaided, Self-Financed & Affiliated</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Courses Offered Section */}
        <div className="md-section-header">
            <h2>Courses Offered</h2>
            <div className="md-section-line"></div>
        </div>

        <div className="md-card">
            <div className="md-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Level</th>
                            <th>Duration</th>
                            <th>Intake</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Computer Science & Engineering(AI)</td>
                            <td>B.Tech</td>
                            <td>4 Years</td>
                            <td>120</td>
                        </tr>
                        <tr>
                            <td>Computer Science & Engineering</td>
                            <td>B.Tech</td>
                            <td>4 Years</td>
                            <td>180</td>
                        </tr>
                        <tr>
                            <td>Electronics Engineering</td>
                            <td>B.Tech</td>
                            <td>4 Years</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Electronics & Comm. Engineering</td>
                            <td>B.Tech</td>
                            <td>4 Years</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Mechanical Engineering</td>
                            <td>B.Tech</td>
                            <td>4 Years</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Civil Engineering</td>
                            <td>B.Tech</td>
                            <td>4 Years</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>IT</td>
                            <td>B.Tech</td>
                            <td>4 Years</td>
                            <td>30</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

        {/* Physical Facilities Section */}
        <div className="md-section-header">
            <h2>Physical Facilities</h2>
            <div className="md-section-line"></div>
        </div>

        <div className="md-infra-grid">
            <div className="md-infra-card">
                <div className="md-infra-icon"><i className="fas fa-building"></i></div>
                <div className="md-infra-content">
                    <h3>Land & Building</h3>
                    <p>State-of-the-art academic blocks, lush green campus, and modern laboratories spread across RIICO Industrial Area.</p>
                </div>
            </div>
            <div className="md-infra-card">
                <div className="md-infra-icon"><i className="fas fa-bed"></i></div>
                <div className="md-infra-content">
                    <h3>Hostel Facility</h3>
                    <p>Separate on-campus hostels for boys and girls equipped with mess, wi-fi, security, and recreational areas.</p>
                </div>
            </div>
        </div>

        {/* AICTE Approval Letters Section */}
        <div className="md-section-header">
            <h2 style={{color:'var(--md-accent)'}}>AICTE Approval Letters</h2>
            <div className="md-section-line"></div>
        </div>

        <div className="md-downloads-grid">
            {/* EOA Report 2025-2026 */}
            <a 
                href="/documents/EOA_Report_2025.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="md-file-card"
            >
                <div className="md-file-icon-box"><i className="fas fa-file-pdf"></i></div>
                <div className="md-file-info">
                    <span className="md-file-name">EOA Report 2025-2026</span>
                    <span className="md-file-meta">PDF Document</span>
                </div>
                <i className="fas fa-download md-download-arrow"></i>
            </a>

            {/* EOA Report 2024-2025 */}
            <a 
                href="/documents/EOA_Report_2024.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="md-file-card"
            >
                <div className="md-file-icon-box"><i className="fas fa-file-pdf"></i></div>
                <div className="md-file-info">
                    <span className="md-file-name">EOA Report 2024-2025</span>
                    <span className="md-file-meta">PDF Document</span>
                </div>
                <i className="fas fa-download md-download-arrow"></i>
            </a>
        </div>

        {/* University Affiliation Section */}
        <div className="md-section-header">
            <h2 style={{color:'var(--md-primary)'}}>University Affiliation</h2>
            <div className="md-section-line"></div>
        </div>

        <div className="md-downloads-grid">
            {/* Affiliation 2024-2025 */}
            <a 
                href="/documents/Affiliation_2024_25.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="md-file-card"
            >
                <div className="md-file-icon-box" style={{background:'rgba(0,114,198,0.1)', color:'var(--md-primary)'}}><i className="fas fa-university"></i></div>
                <div className="md-file-info">
                    <span className="md-file-name">Affiliation 2024-2025</span>
                    <span className="md-file-meta">RTU Kota</span>
                </div>
                <i className="fas fa-download md-download-arrow"></i>
            </a>

            {/* Affiliation 2021-2024 */}
            <a 
                href="/documents/Affiliation_2021_24.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="md-file-card"
            >
                <div className="md-file-icon-box" style={{background:'rgba(0,114,198,0.1)', color:'var(--md-primary)'}}><i className="fas fa-university"></i></div>
                <div className="md-file-info">
                    <span className="md-file-name">Affiliation 2021-2024</span>
                    <span className="md-file-meta">RTU Kota</span>
                </div>
                <i className="fas fa-download md-download-arrow"></i>
            </a>
        </div>

      </div>
      
      <LogoCarousel />

    </div>
  );
}

export default MandatoryDisclosure;