// "use client";
import React from 'react';
import '@/styles/MentalHealth.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 


// export const metadata = {
//   title: ,
//   description: ,
//   keywords: ,
// };

const MentalHealth = () => {
  return (
    <div className="mental-health-page">
      
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Student Wellbeing</div>
          <h1>Empower Mental Health</h1>
          <p>Jaipur Engineering College (JEC)</p>
        </div>
      </section>

      {/* 2. INTRO & VIDEO SECTION */}
      <section className="intro-section">
        <div className="max-width-container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Let’s be strong & deal with challenges together.</h2>
              <div className="intro-paragraph">
                <p>Over 90% of college students stay inside their homes due to changing times. It is vital to prioritize our wellbeing. Let’s take care of our mind and body to keep learning strong!</p>
                <br />
                <p><strong>Watch this message</strong> to understand how small changes in your daily routine can make a big impact on your mental health.</p>
              </div>
            </div>

            <div className="video-wrapper">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/ClwEhPVGjDs?rel=0" 
                  title="JEC Mental Health Awareness" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIPS GRID SECTION */}
      <section className="card-section">
        <div className="max-width-container">
          <div className="card-grid">

            <div className="core-card">
              <div className="card-number">01</div>
              <div className="card-content">
                <div className="card-icon-wrapper"><i className="fas fa-clock"></i></div>
                <h3>Maintain a Routine</h3>
                <p>It’s important to maintain a routine while staying home. Sleep and wake up on time. Attend extra classes or learn new things regularly.</p>
              </div>
            </div>

            <div className="core-card">
              <div className="card-number">02</div>
              <div className="card-content">
                <div className="card-icon-wrapper"><i className="fas fa-chalkboard-teacher"></i></div>
                <h3>Stay in Touch</h3>
                <p>Reach out for guidance and emotional support from Teachers & Counselors. Talking helps you manage stress and build resilience.</p>
              </div>
            </div>

            <div className="core-card">
              <div className="card-number">03</div>
              <div className="card-content">
                <div className="card-icon-wrapper"><i className="fas fa-users"></i></div>
                <h3>Build Support Network</h3>
                <p>Stay connected with friends and family. Share your thoughts and support each other to stay positive during challenging times.</p>
              </div>
            </div>

            <div className="core-card">
              <div className="card-number">04</div>
              <div className="card-content">
                <div className="card-icon-wrapper"><i className="fas fa-running"></i></div>
                <h3>Get Active</h3>
                <p>Move your body — eat healthy, sleep well, and include short exercise or meditation sessions daily to keep your energy up.</p>
              </div>
            </div>

            <div className="core-card">
              <div className="card-number">05</div>
              <div className="card-content">
                <div className="card-icon-wrapper"><i className="fas fa-ban"></i></div>
                <h3>Avoid Harmful Habits</h3>
                <p>Stay away from drugs and alcohol. If you find it hard to control, seek help immediately — your long-term wellbeing matters.</p>
              </div>
            </div>

            <div className="core-card">
              <div className="card-number">06</div>
              <div className="card-content">
                <div className="card-icon-wrapper"><i className="fas fa-carrot"></i></div>
                <h3>Eat a Healthy Diet</h3>
                <p>Choose fresh, nutritious food and eat regularly. Good food supports a good mood and fuels your mind for learning!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <div className="cta-banner">
        <h3>We are here for you.</h3>
        <p>If you need support, please contact the JEC Counseling Cell.</p>
      </div>

      <LogoCarousel />
    </div>
  );
};

export default MentalHealth;