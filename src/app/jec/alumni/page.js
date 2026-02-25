import React from 'react';
import Link from 'next/link'; // Use Next.js Link
import '@/styles/Alumni.css'; // We will create this CSS file next
import LogoCarousel from '@/components/LogoCarousel'; // <--- 1. IMPORT ADDED

export const metadata = {
  title: "Alumni – Jaipur Engineering College",
  description: "JEC Group alumni have a rich heritage and diverse spanning over 19 years. This diversity helps us to think outside the program of study.",
  keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",

};

export default function Alumni() {
  return (
    // This wrapper class will scope all the new CSS
    <div className="alumni-page">

      <section className="alumni-hero">
        <div className="max-width-container">
          <h1>JEC Alumni Network</h1>
          <p>Our heritage spans over 21 years of excellence. Join a community of over 7300+ successful professionals shaping the future worldwide.</p>
          {/* Using Next.js Link for navigation */}
          <div className="alumni-hero-btn">Join Alumni Network</div>

        </div>
      </section>

      <div className="max-width-container">
        <div className="stats-bar">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Continents Presence</p>
          </div>
          <div className="stat-item">
            <h3>12K+</h3>
            <p>Successful Alumni</p>
          </div>
          <div className="stat-item">
            <h3>93%+</h3>
            <p>University Results</p>
          </div>
          <div className="stat-item">
            <h3>9</h3>
            <p>Active Student Clubs</p>
          </div>
        </div>
      </div>

      <section className="content-section">
        <div className="max-width-container">
          <h2 className="section-title">Legacy & Vision</h2>
          <div className="text-block">
            <p>JEC Group alumni have a rich heritage and diversity spanning over 21 years. This diversity helps us to think outside the program of study. Therefore, our approach is to offer holistic education through emphasis on emerging technologies, inventive thinking, teamwork, entrepreneurship, and overall development which helps one to be prepared for any challenges coming their way.</p>
            <p>By utilizing every enthusiastic alumnus, we turn new ideas into actions. They are our advisers, advocates, and allies to support the institutional mission. JECians working in diverse sectors will be setting examples for the batches of new aspiring engineers. They will be like torchbearers who pass on their knowledge to help juniors avoid pitfalls and bumps on the road.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="max-width-container">
          <h2 className="section-title">Alumni Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-network-wired"></i>
              <h4>Professional Network</h4>
              <p>Expand your professional reach with access to thousands of graduates across industries worldwide.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-briefcase"></i>
              <h4>Career Services</h4>
              <p>Access career fairs, counseling, webinars, and job opportunities exclusive to JEC graduates.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-university"></i>
              <h4>Campus Resources</h4>
              <p>Continued access to library materials, journals, and specific educational amenities post-graduation.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-handshake"></i>
              <h4>Mentorship</h4>
              <p>Connect with current students or faculty to mentor the next generation or collaborate on research.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-glass-cheers"></i>
              <h4>Social Events</h4>
              <p>Participate in mixers, galas, homecoming events, and class reunions to reconnect with friends.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-heart"></i>
              <h4>Giving Back</h4>
              <p>Opportunities to contribute to scholarships, endowments, and volunteer programs to support future JECians.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="max-width-container">
          <h2 className="section-title">Activities & Programmes</h2>
          <ul className="activities-list">
            <li className="activity-item">
              <h5>Alumni Day</h5>
              <p>Held every 3rd week of February to honor illustrious alumni for their lifetime achievements.</p>
            </li>
            <li className="activity-item">
              <h5>Expert Lectures</h5>
              <p>Alumni-led endowment lectures and scholarship funds for meritorious candidates.</p>
            </li>
            <li className="activity-item">
              <h5>Small Group Activities</h5>
              <p>Local alumni meetups in Jaipur, Jamshedpur, Chennai, Mumbai, Bangalore, Delhi, and more.</p>
            </li>
            <li className="activity-item">
              <h5>Job Mela Support</h5>
              <p>Providing support in organizing Job Melas for JECians since February 2013.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="benefits-section">
        <div className="max-width-container">
          <h2 className="section-title">Get Involved: Student & Alumni Clubs</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 30px', color: '#555' }}>Walk down memory lane and mentor current students in these active clubs.</p>

          <div className="clubs-grid">
            <div className="club-card">
              <div className="club-content">
                <h4><i className="fas fa-brain"></i> Atharva: Quizzing Club</h4>
                <p>Promotes out-of-the-box thinking through intra-college and corporate quizzes on Business, Sports, and more.</p>
              </div>
            </div>
            <div className="club-card">
              <div className="club-content">
                <h4><i className="fas fa-music"></i> Rhythm: Music Club</h4>
                <p>A platform for music enthusiasts to showcase flair through competitions, workshops, and karaoke nights.</p>
              </div>
            </div>
            <div className="club-card">
              <div className="club-content">
                <h4><i className="fas fa-camera"></i> Tripod: Photography Club</h4>
                <p>Capture campus life and enhance skills through workshops and exhibitions led by eminent photographers.</p>
              </div>
            </div>
            <div className="club-card">
              <div className="club-content">
                <h4><i className="fas fa-theater-masks"></i> Theatrix: Dramatic Club</h4>
                <p>For students interested in dramatics, staging plays and street performances across various fests.</p>
              </div>
            </div>
            <div className="club-card">
              <div className="club-content">
                <h4><i className="fas fa-pen-fancy"></i> LitCult: Literary Club</h4>
                <p>Pioneering innovative ideas through literature activities, debates, and the monthly magazine "Jharokha".</p>
              </div>
            </div>
            <div className="club-card">
              <div className="club-content">
                <h4><i className="fas fa-palette"></i> Alakriti: Arts Club</h4>
                <p>Spreading the art movement through campus decor, design, and art-related annual events.</p>
              </div>
            </div>
            <div className="club-card">
              <div className="club-content">
                <h4><i className="fas fa-shoe-prints"></i> Robo Foots: Dance Club</h4>
                <p>Representing JEC in dance competitions and organizing workshops on various dance styles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-bar">
        <div className="max-width-container">
          <h3>Connect with JEC Alumni Association</h3>
          <p>Interested in joining a club or updating your details? Drop us a line.</p>
          <a href="mailto:alumnijecgroup.world@gmail.com">alumnijecgroup.world@gmail.com</a>
        </div>
      </section>
      {/* --- 2. AFFILIATION LOGO CAROUSEL ADDED HERE --- */}
      <LogoCarousel />
    </div>
  );
}