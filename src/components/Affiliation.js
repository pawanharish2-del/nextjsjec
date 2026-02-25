"use client";
import React from 'react';
import '@/styles/Affiliation.css';

export default function Affiliation() {
  return (
    <div className="affiliation-wrapper">
      
      {/* 1. TOP LOGO SECTION */}
      <section className="affiliation-section">
        <div className="max-width-container">
          <h2 className="aff-title">AFFILIATION & ACCREDITATION</h2>
          <div className="aff-underline"></div>
          
          <div className="logo-grid">
            {/* Replace these src with your actual logo images from public/assets/logos/ */}
            <div className="logo-item"><img src="/assets/logos/aicte.png" alt="AICTE" /></div>
            <div className="logo-item"><img src="/assets/logos/rtu.png" alt="RTU" /></div>
            <div className="logo-item"><img src="/assets/logos/google-cloud.png" alt="Google Cloud" /></div>
            <div className="logo-item"><img src="/assets/logos/startup-india.png" alt="Startup India" /></div>
            <div className="logo-item"><img src="/assets/logos/jec-nen.png" alt="JEC NEN" /></div>
            <div className="logo-item"><img src="/assets/logos/tcs-ion.png" alt="TCS iON" /></div>
            <div className="logo-item"><img src="/assets/logos/nptel.png" alt="NPTEL" /></div>
            <div className="logo-item"><img src="/assets/logos/iste.png" alt="ISTE" /></div>
          </div>
        </div>
      </section>

      {/* 2. DARK BOTTOM BAR */}
      <div className="activities-bar">
        <div className="max-width-container activities-container">
          <span className="activities-label">JEC ACTIVITIES ASSOCIATED WITH</span>
          <div className="activities-badges">
            <span className="act-badge">AICTE Approved</span>
            <span className="act-badge">RTU Kota Affiliated</span>
            <span className="act-badge">NBA Accredited*</span>
          </div>
        </div>
      </div>

    </div>
  );
}