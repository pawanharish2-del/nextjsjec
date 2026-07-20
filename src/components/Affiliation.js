"use client";
import React from 'react';
import Image from 'next/image';
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
            <div className="logo-item"><Image src="/assets/logos/aicte.png" alt="AICTE" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
            <div className="logo-item"><Image src="/assets/logos/rtu.png" alt="RTU" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
            <div className="logo-item"><Image src="/assets/logos/google-cloud.png" alt="Google Cloud" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
            <div className="logo-item"><Image src="/assets/logos/startup-india.png" alt="Startup India" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
            <div className="logo-item"><Image src="/assets/logos/jec-nen.png" alt="JEC NEN" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
            <div className="logo-item"><Image src="/assets/logos/tcs-ion.png" alt="TCS iON" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
            <div className="logo-item"><Image src="/assets/logos/nptel.png" alt="NPTEL" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
            <div className="logo-item"><Image src="/assets/logos/iste.png" alt="ISTE" width={120} height={60} style={{ objectFit: 'contain' }} /></div>
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