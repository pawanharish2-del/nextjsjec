"use client";
import React from 'react';
import '@/styles/ConvenienceSafety.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 


// export const metadata = {
//   title: "Convenience Facility and Safety | Jaipur Engineering College",
//   description: "Know about Convenience Facility and Safety in Jaipur Engineering College. JEC runs a large fleet of buses with well-planned diverse routes.",
//   keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
// };

function ConvenienceAndSafety() {
  return (
    <div className="cs-page">
      
      {/* Hero Section */}
      <header className="cs-hero">
        <h1>Convenience & Safety</h1>
        <p>A Secure & Supportive Campus Environment</p>
      </header>

      {/* Stats Floating Container */}
      <div className="cs-stats-container">
        <div className="cs-stats-grid">
            <div className="cs-stat-card">
                <div className="cs-stat-icon"><i className="fas fa-bus-alt"></i></div>
                <div className="cs-stat-value">Bus Facility</div>
                <div className="cs-stat-label">Covering All City Routes</div>
            </div>
            <div className="cs-stat-card">
                <div className="cs-stat-icon"><i className="fas fa-briefcase-medical"></i></div>
                <div className="cs-stat-value">Medical Facilities</div>
                <div className="cs-stat-label">On-Campus Physician</div>
            </div>
            <div className="cs-stat-card">
                <div className="cs-stat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="cs-stat-value">24x7 Security</div>
                <div className="cs-stat-label">Skilled Guard Patrols</div>
            </div>
            <div className="cs-stat-card">
                <div className="cs-stat-icon"><i className="fas fa-futbol"></i></div>
                <div className="cs-stat-value">10+ Sports</div>
                <div className="cs-stat-label">Games & Facilities</div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="cs-container">
    
        <div className="cs-alert-box">
            <p>"The technologies of convenience are making our sphere of exploration and experience smaller!"</p>
        </div>

        {/* 1. Transport */}
        <div className="cs-content-grid">
            <div className="cs-text-content">
                <h2><i className="fas fa-bus-alt" style={{color: 'var(--cs-accent)'}}></i> Transport</h2>
                <p>JEC runs a large fleet of buses with well-planned diverse routes. They connect various convenient locations spread across the city to the college. The buses are well maintained and are driven by experienced drivers, who care for safety and comfort of the staff and students as well.</p>
                <p>The college provides transportation for students to visit camps and industry events organized outside the campus.</p>
            </div>
            <div className="cs-image-wrapper">
                <img src="/Bus.jpeg" alt="JEC Transport Bus" />
            </div>
        </div>

        {/* 2. Health Care (Image First) */}
        <div className="cs-content-grid cs-image-first">
            <div className="cs-image-wrapper">
                <img src="/medical.png" alt="Health Care Facility" />
            </div>
            <div className="cs-text-content">
                <h2><i className="fas fa-heartbeat" style={{color: 'var(--cs-accent)'}}></i> Health Care</h2>
                <p>Health care is the diagnosis, treatment, and prevention of disease. In order to serving carefully this activity, a medical unit is set up in the college. A part-time physician has been employed by the college who regularly visits college and hostels to monitor the health of students.</p>
                <p>Apart from this, the JEC has agreements with most reputed government and private hospitals of Jaipur, where our students and staff members can be admitted any time.</p>
            </div>
        </div>

        {/* 3. Security */}
        <div className="cs-content-grid">
            <div className="cs-text-content">
                <h2><i className="fas fa-user-shield" style={{color: 'var(--cs-accent)'}}></i> 24x7 Security</h2>
                <p>A security guard is a person employed to protect the college's assets (property, people, equipment, etc.) from a variety of hazards. To safeguard the campus in all respect, JEC has employed the services of skilled security guards who do this religiously 24x7.</p>
                <p>They maintain a high-visibility presence to deter illegal and inappropriate actions by looking (either directly, through patrols, or indirectly, by monitoring alarm systems or video surveillance cameras) for signs of hazards.</p>
            </div>
            <div className="cs-image-wrapper">
                <img src="/Security.png" alt="Campus Security" />
            </div>
        </div>
        
        {/* 4. ATM & Banking (Image First) */}
        <div className="cs-content-grid cs-image-first">
            <div className="cs-image-wrapper">
                <img src="/ATM.jpg" alt="ATM & Banking" />
            </div>
            <div className="cs-text-content">
                <h2><i className="fas fa-credit-card" style={{color: 'var(--cs-accent)'}}></i> ATM & Banking</h2>
                <p>Indian Overseas Bank has installed an ATM near the main entry gate of the campus. This provides students and staff with easy access to cash and banking services without needing to leave the college premises.</p>
                <p>Apart from that, branches of all leading Government and private banks are available in the nearby Kukas area, offering ready access to full-service banking facilities.</p>
            </div>
        </div>

      </div>
      
      <LogoCarousel />
    </div>
  );
}

export default ConvenienceAndSafety;