"use client";
import React from 'react';
import '@/styles/IIC.css'; 
import LogoCarousel from '@/components/LogoCarousel'; // <--- IMPORT ADDED

// export const metadata = {
//   title: "Institution Innovation Council | Jaipur Engineering College " ,
//   description: "Ministry of Human Resource Development (MHRD), Govt. of India has established ‘MHRD’s Innovation Cell (MIC)’ to systematically foster...",
//   keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",

// };


export default function IIC() {
  return (
    <div className="iic-page">

      <section className="innovation-hero">
        <div className="max-width-container">
          <h1>Institution Innovation Council @JEC</h1>
          <p>"Learn radically different thinking. Work smarter, generate breakthrough ideas, achieve better results. Learn the process of taking ideas from inception to impact."</p>
        </div>
      </section>

      <div className="max-width-container">
        <div className="stats-bar">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Companies Visited</p>
          </div>
          <div className="stat-item">
            <h3>95+</h3>
            <p>FDP / STTP / Symposia</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>MOUs Signed</p>
          </div>
          <div className="stat-item">
            <h3>Network</h3>
            <p>IITs, NITs, NITTTR</p>
          </div>
        </div>
      </div>

      <section className="intro-section">
        <div className="max-width-container">
          <h2 className="section-title">About IIC-JEC</h2>
          <div className="intro-text">
            <p>Ministry of Human Resource Development (MHRD), Govt. of India has established ‘MHRD’s Innovation Cell (MIC)’ to systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes.</p>
            <p>According to MIC guidelines, Jaipur Engineering College has established the Institution's Innovation Council. The IIC is named as <strong>IIC JEC</strong> (ID: <strong>IC201810272</strong>).</p>
          </div>
        </div>
      </section>

      <section className="info-grid-section">
        <div className="max-width-container grid-container">
          
          {/* CARD 1: FOCUS (Red) */}
          <div className="info-card focus">
            <h3><i className="fas fa-bullseye" style={{ color:'var(--logo-red)' }}></i> Major Focus of IIC</h3>
            <ul>
              <li>To create a vibrant local innovation ecosystem.</li>
              <li>Start-up supporting Mechanism in HEIs.</li>
              <li>Prepare institute on Innovation Achievements Framework.</li>
              <li>Establish Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas.</li>
              <li>Develop better Cognitive Ability for Technology Students.</li>
            </ul>
          </div>

          {/* CARD 2: FUNCTIONS (Blue) */}
          <div className="info-card functions">
            <h3><i className="fas fa-cogs" style={{ color:'var(--logo-blue)' }}></i> Functions of IIC</h3>
            <ul>
              <li>Promote innovation in the Institution through multitudinous modes.</li>
              <li>Conduct various innovation and entrepreneurship-related activities.</li>
              <li>Identify and reward innovations and share success stories.</li>
              <li>Organize periodic workshops, seminars, and interactions with entrepreneurs.</li>
              <li>Network with peers and national entrepreneurship organizations.</li>
              <li>Organize Hackathons, idea competitions, and mini-challenges.</li>
            </ul>
          </div>

          {/* CARD 3: BENEFITS (Gold - Full Width) */}
          <div className="info-card benefits">
            <h3><i className="fas fa-gift" style={{ color:'var(--logo-gold)' }}></i> Benefits to Institute, Faculty & Students</h3>
            <ul className="benefits-list">
              <li>No major capital investment required; use existing ecosystem.</li>
              <li>Exclusive opportunity to participate in MHRD Innovation initiatives.</li>
              <li>Win exciting Prizes/Certificates every month.</li>
              <li>Meet/Interact with renowned Business Leaders and academicians.</li>
              <li>Opportunity to nurture and prototype new ideas.</li>
              <li>Mentoring by Industry Professionals.</li>
              <li>Experimentation with new/latest technologies.</li>
              <li>Visit new places and learn a new culture.</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="cert-section">
        <div className="max-width-container">
          <h2 className="section-title">Recognitions & Certificates</h2>
          <p>Certificates issued by MoE, IIC, and AICTE acknowledging JEC's commitment to innovation.</p>
          
          <div className="cert-grid">
            <div className="cert-frame">
              <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2Fssdf.jpeg?alt=media&token=f2916513-8e67-467b-9dc9-38499efbfe51" alt="IIC Establishment Certificate 2020-21" />
              <div className="cert-caption">IIC Certificate 2020-21</div>
            </div>
            
            <div className="cert-frame">
              <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2Fdownload.jpeg?alt=media&token=2ef9ca52-2664-4dce-98a1-69adf362e432" alt="IIC Establishment Certificate 2018-19" />
              <div className="cert-caption">IIC Certificate 2018-19</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="max-width-container">
          <div className="contact-box">
            <h3>Let's Work Together</h3>
            <p style={{ marginBottom: '20px' }}>Great things can be designed if joined for working in togetherness and inspire the next...</p>
            
            <h4>Prof. (Dr.) D. G. Mahto</h4>
            <p><strong>President : IIC-JEC</strong></p>
            <p>Director & Prof. in ME, Jaipur Engineering College</p>
            <p>SP-43, RIICO Industrial Area, Kukas, Jaipur: 302028</p>
            <p style={{ marginTop: '15px' }}>
              <i className="fas fa-envelope"></i> 
              <a href="mailto:Director@jeckukas.org.in" style={{ color: 'white' }}>Director@jeckukas.org.in</a>
            </p>
          </div>
        </div>
      </section>

      {/* --- ADDED LOGO CAROUSEL --- */}
      <LogoCarousel />

    </div>
  );
}