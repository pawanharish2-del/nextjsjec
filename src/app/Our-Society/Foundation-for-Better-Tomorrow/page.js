import React from 'react';
// FIXED: Explicitly import the CSS file here so Next.js loads the styles
import '@/styles/Foundation.css'; 
import LogoCarousel from '@/components/LogoCarousel';

// ✅ UNIQUE METADATA FOR HOME PAGE
export const metadata = {
  title: "All India Agrasen Technical Education and Research Foundation | JEC Kukas",
  description: "Welcome to JEC, the top engineering collegThe aim of Education in India is to provide access, equity, quality with accountability at affordable cost to all aspiring Citizens with utmost...",
  keywords: "EC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

export default function Foundation() {
  return (
    <div className="fbt-page">
      
      {/* Hero Section */}
      <header className="fbt-hero">
        <div className="fbt-hero-overlay"></div>
        <h1>Foundation for Better Tomorrow</h1>
        <p>Dedicated to helping, healing, and caring.</p>
      </header>

      {/* Stats Bar */}
      <div className="fbt-stats-container">
        <div className="fbt-stats-grid">
            <div className="fbt-stat-card">
                <div className="fbt-stat-icon"><i className="fas fa-leaf"></i></div>
                <div className="fbt-stat-label">Supportive Environment</div>
            </div>
            <div className="fbt-stat-card">
                <div className="fbt-stat-icon"><i className="fas fa-link"></i></div>
                <div className="fbt-stat-label">Professional Linkages</div>
            </div>
            <div className="fbt-stat-card">
                <div className="fbt-stat-icon"><i className="fas fa-flask"></i></div>
                <div className="fbt-stat-label">R & D Facilities</div>
            </div>
            <div className="fbt-stat-card">
                <div className="fbt-stat-icon"><i className="fas fa-project-diagram"></i></div>
                <div className="fbt-stat-label">2000+ Real Projects</div>
            </div>
        </div>
      </div>

      <div className="fbt-container">

        {/* About Card */}
        <div className="fbt-about-card">
            <h3>Who We Are</h3>
            <p>Acceding to <strong>Maharaja Agrasen’s</strong> ideals—a united icon of Non-Violence, Social Upbringing, Sacrifice, Compassion, Peace, and Prosperity—<strong>All India Agrasen Technical Education & Research Foundation (AIATERF)</strong> was set up as a registered society on April 29, 1999, in Delhi.</p>
            <p><strong>Sri L C Saraogi</strong>, a social reformist, came forward to establish this society on a &quot;helping, healing, and caring&quot; philosophy. His extraordinary activities and thoughts guided the nation to a new beginning in social upliftment.</p>
        </div>

        {/* Background Split */}
        <div className="fbt-section-split">
            <div className="fbt-text-block">
                <h3>The Background</h3>
                <p>The aim of Education in India is to provide access, equity, quality with accountability at an affordable cost. AIATERF believes this is achieved through the creation, dissemination, and application of knowledge.</p>
                <p>Social upliftment and poverty alleviation are possible only through imparting quality education. With the motto of creating a brighter tomorrow, the society vowed to start with an engineering college, envisioning reaching out to underserved regions.</p>
            </div>
            <div className="fbt-mission-box">
                <h4><i className="fas fa-bullseye" style={{color:'var(--fbt-red)'}}></i> Our Mission</h4>
                <p>To contribute, improve, enhance, and sustain the quality of life through the promotion and delivery of superior education. We endeavor to provide international standards of education and employment to rural masses, preparing students who demonstrate reflective practices and ethical decision-making.</p>
            </div>
        </div>

        {/* Objectives Grid */}
        <div className="fbt-section-header">
            <span>Our Focus</span>
            <h2>Core Aims & Objectives</h2>
        </div>
        <div className="fbt-obj-grid">
            <div className="fbt-obj-card">
                <div className="fbt-obj-icon"><i className="fas fa-graduation-cap"></i></div>
                <p>Helping each person attain educational achievement to the best of their potential.</p>
            </div>
            <div className="fbt-obj-card">
                <div className="fbt-obj-icon"><i className="fas fa-hand-holding-heart"></i></div>
                <p>Promoting respect, resilience, determination, and creative thinking to form good relationships and civic responsibility.</p>
            </div>
            <div className="fbt-obj-card">
                <div className="fbt-obj-icon"><i className="fas fa-users"></i></div>
                <p>Instilling an appreciation for inclusion within society, honoring diversity, and cultural knowledge.</p>
            </div>
        </div>

        {/* The Beginning Split */}
        <div className="fbt-section-split">
            <div className="fbt-text-block">
                <h3>The Beginning</h3>
                <p>AIATERF considers Engineering a noble profession to bring transformation in society. In the light of our core aims, <strong>Jaipur Engineering College (JEC), Kukas</strong> was established in the year 2000. This marked the beginning of an illustrious new era in technical education.</p>
            </div>
            <div className="fbt-text-block">
                <h3>The JEC Edge</h3>
                <p>Today, the JEC Group showcases AIATERF’s commitment to excel not only in engineering but also in Skill Development, PMKVY, UG Programs, and Teacher’s Training. Our focus has expanded to School Education with <strong>Sanctum World School</strong>.</p>
            </div>
        </div>

        {/* Scope Section */}
        <div className="fbt-scope-section">
            <div className="fbt-section-header" style={{marginBottom: '1rem'}}>
                <h2>Scope of Operation</h2>
                <p>Touching every spectrum of education while keeping roots in engineering.</p>
            </div>
            
            {/* Ensure the image exists in public/images/ folder */}
            <img src="/images/management.png" alt="AIATERF Scope of Operations Tree" className="fbt-scope-img" />
            
            <p style={{maxWidth:'800px', margin:'0 auto', color:'var(--fbt-text-muted)'}}>
                As adopted during the constitution of AIATERF, the society is growing rapidly. It has crafted a benchmark in diverse areas of education and training as illustrated above.
            </p>
        </div>

        {/* Quote Section */}
        <div className="fbt-quote-section">
            <img src="/images/hero.png" alt="Intelligence plus character - Martin Luther King Jr." />
        </div>

        {/* Links Grid */}
        <div className="fbt-links-header">
            <h2>Visit Our Websites</h2>
            <p>Explore our diverse educational initiatives.</p>
        </div>
        
        <div className="fbt-links-grid">
            <a href="http://www.agrasentechnical.com" target="_blank" rel="noreferrer" className="fbt-link-card">
                <i className="fas fa-globe"></i> Society Website
            </a>
            <a href="http://www.jeckukas.org.in" target="_blank" rel="noreferrer" className="fbt-link-card">
                <i className="fas fa-university"></i> Jaipur Engineering College
            </a>
            <a href="http://www.agrasencollege.org.in" target="_blank" rel="noreferrer" className="fbt-link-card">
                <i className="fas fa-book-reader"></i> Agrasen College
            </a>
            <a href="http://www.jaipurcollege.org" target="_blank" rel="noreferrer" className="fbt-link-card">
                <i className="fas fa-chalkboard-teacher"></i> Jaipur College of Edu.
            </a>
            <a href="https://sanctumgroupofschools.org/" target="_blank" rel="noreferrer" className="fbt-link-card">
                <i className="fas fa-school"></i> Sanctum
                      World School
            </a>
        </div>

        <div style={{textAlign:'center', marginTop:'3rem', padding:'2rem', background:'#F8FAFC', border: '1px solid var(--fbt-border)', borderRadius:'12px'}}>
            <p style={{marginBottom:'5px', color:'var(--fbt-text-main)'}}><strong>We believe that a diverse community results in better outcomes for all.</strong></p>
            <p>Email us: <a href="mailto:director@jeckukas.org.in" style={{color:'var(--fbt-red)', fontWeight:'700'}}>director@jeckukas.org.in</a></p>
        </div>

      </div>
      <LogoCarousel />
    </div>
  );
}