import React from 'react';
import '@/styles/KeyTeams.css';
import LogoCarousel from '@/components/LogoCarousel'; // <--- 1. IMPORT ADDED


export const metadata = {
  title: "Jaipur Engineering college Team and Key Functions",
  description: "Know about Jaipur Engineering college Team and Key Functions. Team work in essence requires not only people skills but also a sense of maturity...",
  keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};


export default function KeyTeamsFunctions() {
  return (
    <div className="kt-page">
      
      {/* Hero Section */}
      <header className="kt-hero">
        <div className="kt-hero-overlay"></div>
        <h1>Key Teams & Functions</h1>
        <p>JEC thinks positive, thinks society always first!</p>
      </header>

      <div className="kt-stats-container">
        <div className="kt-stats-grid">
            <div className="kt-stat-card">
                <div className="kt-stat-icon"><i className="fas fa-bullseye"></i></div>
                <div className="kt-stat-label">Management By Objectives</div>
            </div>
            <div className="kt-stat-card">
                <div className="kt-stat-icon"><i className="fas fa-hands-helping"></i></div>
                <div className="kt-stat-label">Helping Organization</div>
            </div>
            <div className="kt-stat-card">
                <div className="kt-stat-icon"><i className="fas fa-user-tie"></i></div>
                <div className="kt-stat-label">Corporate Etiquettes</div>
            </div>
            <div className="kt-stat-card">
                <div className="kt-stat-icon"><i className="fas fa-brain"></i></div>
                <div className="kt-stat-label">Strong Success Mindset</div>
            </div>
        </div>
      </div>

      <div className="kt-container">

        <div className="kt-philosophy-section">
            <div className="kt-text-block">
                <h2>Our Philosophy of Teamwork</h2>
                <p>Team work in essence requires not only people skills but also a sense of maturity, which allows the individual to think and work amicably with fellow members in all situations and with empathy.</p>
                <p>The AIATERF team members are well educated, experienced, and armed with essential skills like Communication, Support, Problem Solving, Listening & Feedback, and Conflict Management. Their values reflect ethics, practices, standards, and other norms within a commercial environment.</p>
                <p>We admit the challenge that comes with working together with diversity. Therefore, with the aim of maximizing team effort, suitable teams and functions have been determined.</p>
            </div>
            <div className="kt-chart-container">
                {/* Ensure the image exists in public/images/ folder */}
                <img src="/images/management.png" alt="AIATERF Organizational Chart" className="kt-chart-img" />
                <p className="kt-chart-caption">Key teams functioning within the ambit of AIATERF</p>
            </div>
        </div>

        <div className="kt-section-header">
            <span>Operational Excellence</span>
            <h2>Core Teams of AIATERF</h2>
        </div>

        <div className="kt-team-grid">
            <div className="kt-team-card">
                <div className="kt-tc-icon"><i className="fas fa-project-diagram"></i></div>
                <div className="kt-tc-title">Project Management Team</div>
                <div className="kt-tc-desc">
                    Handles government approvals, project planning & execution, infrastructure development, and liaisoning with agencies. This team works 24x7 to complete tasks on time.
                </div>
                <div className="kt-leader-badge">
                    <i className="fas fa-user-shield"></i> Head: Er Lalit Kumar Saraogi
                </div>
            </div>

            <div className="kt-team-card">
                <div className="kt-tc-icon"><i className="fas fa-laptop-house"></i></div>
                <div className="kt-tc-title">Virtual Team</div>
                <div className="kt-tc-desc">
                    Carries out society activities from outside Jaipur. The operation head is a person of determination, always on wheels for industry works, yet delivering results just in time.
                </div>
                <div className="kt-leader-badge">
                    <i className="fas fa-user-tie"></i> Head: Mr Sunil Kumar Saraogi
                </div>
            </div>

            <div className="kt-team-card">
                <div className="kt-tc-icon"><i className="fas fa-users-cog"></i></div>
                <div className="kt-tc-title">Cross Functional Team</div>
                <div className="kt-tc-desc">
                    Experienced persons from different departments work on society goals. Tasks are allotted, instructions passed, and follow-up actions carried out at regular intervals.
                </div>
                <div className="kt-leader-badge">
                    <i className="fas fa-user-graduate"></i> Head: Director of JEC
                </div>
            </div>
        </div>

        <div className="kt-innovation-box">
            <div className="kt-inn-content">
                <h3><i className="fas fa-wifi"></i> E-Learning Team</h3>
                <p><strong>E-learning is living innovation today.</strong> Web-based learning is meant to bring education to everyone, everywhere.</p>
                <p>Today people search for queries on the internet rather than looking for books. Catching the nerve of society, JEC has strategically planned to enter into e-learning as per the directives of the <strong>New Education Policy 2020</strong>.</p>
                <p>The AIATERF is continually working towards the betterment of the e-learning system to reach individuals who actually need it. 3...2...1...e-learning!</p>
            </div>
            
            <div className="kt-leader-card-dark">
                <h4>Team Lead</h4>
                <div style={{fontSize:'1.5rem', fontWeight:'700', marginBottom:'10px'}}>Prof. (Dr.) D G Mahto</div>
                <p>A seasoned educationist with a PhD from NIT Jamshedpur. Ask the man from e-learning whatever you want in education!</p>
            </div>
        </div>

        <div style={{textAlign:'center', marginTop:'4rem', padding:'2rem', background:'#F0F9FF', border:'1px solid #BAE6FD', borderRadius:'16px'}}>
            <h3 style={{color:'var(--kt-blue)', fontFamily:'var(--kt-font-head)'}}>E-Learning to bring out the best!</h3>
            <p style={{color:'var(--kt-text-muted)', marginBottom:'1rem'}}>Sounds interesting? Feel free to contact us who you are, wherever you are.</p>
            <p style={{fontWeight:'700', color:'var(--kt-text-main)', fontSize:'1.1rem'}}>&quot;Let us pledge to make this world more beautiful to live in TOGETHER.&quot;</p>
        </div>

      </div>
     <LogoCarousel />
   
    </div>
  );

}