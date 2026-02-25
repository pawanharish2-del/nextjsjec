"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/Employment.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 

// export const metadata = {
//   title: "Jaipur Engineering College Recruitment | Apply for Vacancies | JEC Kukas i Careers in JEC",
//   description: "Jaipur Engineering College is one of the top engineering college in Jaipur. Check latest recruitment and available vacancies in college. ",
//   keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
// };


export default function Employment() {
  const router = useRouter();

  return (
    <div className="employment-page">

      <section className="career-hero">
        <div className="max-width-container">
          <h1>Employment @ JEC</h1>
          <p>Bringing People and Opportunities Together to Build a Better World.</p>
          
          <a 
    href="mailto:director@jeckukas.org.in" 
    className="career-apply-btn" 
    style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
>
    Email Us
</a>
        </div>
      </section>

      <div className="max-width-container">
        <div className="highlights-bar">
          <div className="highlight-item">
            <i className="fas fa-book-open"></i>
            <h4>13 Courses</h4>
            <p>Diverse Academic Options</p>
          </div>
          <div className="highlight-item">
            <i className="fas fa-users"></i>
            <h4>Diversity & Inclusion</h4>
            <p>Cultivating a rich culture</p>
          </div>
          <div className="highlight-item">
            <i className="fas fa-hand-holding-heart"></i>
            <h4>Educational Outreach</h4>
            <p>Value-driven community work</p>
          </div>
          <div className="highlight-item">
            <i className="fas fa-lightbulb"></i>
            <h4>Real Life Projects</h4>
            <p>Practical problem solving</p>
          </div>
        </div>
      </div>

      <section className="content-section">
        <div className="max-width-container philosophy-grid">
          <div className="philosophy-text">
            <h2 className="section-title">Join Our Mission</h2>
            <p>Employment is a relationship between two parties, usually based on a contract where work is paid for. JEC believes in a relationship where everyone has abilities to contribute and that their work should be recognized and rewarded with fair pay, creating inclusive workplaces.</p>
            <p>JEC considers that employment enriches and adds meaning to every life. Workplaces and communities are enhanced when they embrace different experts and specialists. As we are into educating young minds through technical education, JEC employs people with technical inclination and teaching flair. We also look forward to Technical Associates who play an important role in up-keeping of labs and imparting live training to engineering students.</p>
            <p>The Institute values experienced Faculty Members & Technical Experts and invites them to be a part of its family.</p>
          </div>
          <div className="philosophy-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2FUntitled%20(Instagram%20Post).png?alt=media&token=627013a7-9295-431b-8cf3-917588dcf875" alt="Our Mission" />
          </div>
        </div>
      </section>

      <section className="vacancy-section">
        <div className="max-width-container">
          {/* ADDED 'center' CLASS HERE */}
          <h2 className="section-title center">Current Areas of Opportunity</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>We encourage applications from both experienced professionals and freshers with the required engineering & allied qualifications.</p>
          
          <div className="vacancy-grid">
            <div className="vacancy-card"><i className="fas fa-laptop-code"></i><h4>Computer Science Engineering</h4></div>
            <div className="vacancy-card"><i className="fas fa-brain"></i><h4>CSE (Artificial Intelligence)</h4></div>
            <div className="vacancy-card"><i className="fas fa-database"></i><h4>AI & Data Science</h4></div>
            <div className="vacancy-card"><i className="fas fa-network-wired"></i><h4>Information Technology</h4></div>
            <div className="vacancy-card"><i className="fas fa-microchip"></i><h4>Electronics & Comm. Engg.</h4></div>
            <div className="vacancy-card"><i className="fas fa-bolt"></i><h4>Electrical & Electronics Engg.</h4></div>
            <div className="vacancy-card"><i className="fas fa-cogs"></i><h4>Mechanical Engineering</h4></div>
            <div className="vacancy-card"><i className="fas fa-building"></i><h4>Civil Engineering</h4></div>
            <div className="vacancy-card"><i className="fas fa-atom"></i><h4>Applied Physics</h4></div>
            <div className="vacancy-card"><i className="fas fa-flask"></i><h4>Applied Chemistry</h4></div>
            <div className="vacancy-card"><i className="fas fa-square-root-alt"></i><h4>Engineering Mathematics</h4></div>
            <div className="vacancy-card"><i className="fas fa-language"></i><h4>Communicative English</h4></div>
          </div>
        </div>
      </section>

      <section className="induction-section">
        <div className="max-width-container induction-content">
          {/* ADDED 'center' CLASS HERE */}
          <h2 className="section-title center">Faculty Induction Programme</h2>
          <p>JEC believes teaching is an ethically and intellectually demanding profession. New teachers need rigorous preparation and opportunities for continuous professional development along with academic and professional support.</p>
          <p>One of the mandates set by the AICTE is the development and implementation of a high-quality Faculty Induction Programme for newly recruited faculty. In line with the AICTE mandate, JEC organizes these programs to ensure a healthy and learning environment.</p>
          
          <ul className="objectives-list">
            <li className="objective-item">
              <h5><i className="fas fa-user-tie"></i> Role Understanding</h5>
              <p>Understand roles and responsibilities as faculty members in engineering and technology sectors.</p>
            </li>
            <li className="objective-item">
              <h5><i className="fas fa-university"></i> Governance Familiarity</h5>
              <p>Familiarize with the structure, governance, rules, and professional expectations in higher education institutions like JEC.</p>
            </li>
            <li className="objective-item">
              <h5><i className="fas fa-chalkboard-teacher"></i> Pedagogical Processes</h5>
              <p>Explore curriculum planning, instructional planning, classroom management, and assessment resources.</p>
            </li>
            <li className="objective-item">
              <h5><i className="fas fa-seedling"></i> Holistic Development</h5>
              <p>Recognize the importance of self-development, socio-emotional growth, and nurturing ethics in students.</p>
            </li>
          </ul>
        </div>
      </section>

      <LogoCarousel />

    </div>
  );
}