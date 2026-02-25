import React from 'react';
import '@/styles/JCES.css';
import LogoCarousel from '@/components/LogoCarousel'; // <--- 1. IMPORT ADDED


export const metadata = {
  title: "Other Institutes Jaipur College of Education and Science",
  description: "Know about Jaipur Engineering college Linkages and collaboration with National &amp; International Associations and Societies.",
  keywords: "Other Institutes JCES College",
};

export default function JCES() {
  return (
    <div className="jces-page">
      
      {/* Note: We skip the HTML navbar because your site already has a main Header */}

      <header className="jces-hero">
        {/* Background Image Overlay */}
        <div className="jces-hero-overlay"></div>
        
        <h1>Jaipur College of Education & Science</h1>
        <p>Affiliated to University of Rajasthan | Kukas, Jaipur</p>
        
        <div className="jces-course-container">
            <div className="jces-badge jces-badge-running">Course: B.Ed.</div>
            <div className="jces-badge jces-badge-proposed">Proposed: M.Ed.</div>
            <div className="jces-badge jces-badge-proposed">Proposed: 4 Year Integrated B.Ed. (Graduation + B.Ed.)</div>
        </div>
      </header>

      <div className="jces-container">

        <div className="jces-intro-card">
            <h2>Serving Humanity Through Education</h2>
            <p>Acceding to the <strong>Maharaja Agrasen’s ideals</strong>—a united icon of Non-Violence, Social Upbringing, Sacrifice, Compassion, Peace, and Prosperity—& the desire to serve humanity by producing quality teachers for primary, secondary and senior secondary schools by imparting holistic teaching learning education is the motivation behind starting of Jaipur College of Education & Science, Jaipur.</p>
            <p>The bridge from human resource development to economic growth has to be built by well trained teachers. <strong>The most important agent of change in knowledge society is the teacher.</strong> The twenty first century presents a radically different economy and society, which likely to have profound implications on education and training.</p>
            <p>The education system must adapt to the key features which include globalization & sustainability, ICT revolution, Emergence of knowledge society and rapid knowledge obsolesces. Such thoughts and the burning desire to bring the young mind of Jaipur to be a teacher at par with global standards got coupled in the minds of members of AIATERF; the result was the starting of Jaipur College of Education & Science, Jaipur.</p>
        </div>

        <div className="jces-section-split">
            <div className="jces-text-block">
                <h3>Academic Excellence & Technology</h3>
                <p>The College management remains in constant touch with the latest development in technology that can be best utilized for imparting a modern education system out of its strife for academic excellence keeping fully the countries stride towards the social economic developments.</p>
                <p>Management`s conviction that young Indian minds are in no way incompetent when competed against those of other more developed place, has been consolidated by the Jaipur College of Education & Science way of teaching and learning.</p>
                <p>We are very proud to be telling you about our College which is located in the midst of beautiful Aravalli Hills of Jaipur.</p>
                
                <div className="jces-ncte-box">
                    <p><strong>Approved by NCTE:</strong> We offer a comprehensive Bachelor of Education course, duly approved by the National Council for Teacher Education (NCTE), New Delhi.</p>
                    <p>The National Policy on Education (NPE), 1986 and the Programme of Action there under, envisaged a National Council for Teacher Education with statutory status and necessary resources as a first step for overhauling the system of teacher education.</p>
                    <p>The National Council for Teacher Education as a statutory body came into existence in pursuance of the National Council for Teacher Education Act, 1993 (No. 73 of 1993) on the <strong>17th August,1995</strong>.</p>
                </div>
            </div>
            <div className="jces-img-block">
                {/* Ensure the image exists in public folder */}
                <img src="/JECbuilding.jpg" alt="JCES Campus View" />
            </div>
        </div>

        <div className="jces-section-header">
            <span>Campus Life</span>
            <h2>Infrastructure & Facilities</h2>
        </div>

        <div className="jces-facilities-grid">
            <div className="jces-facility-card">
                <div className="jces-fc-icon"><i className="fas fa-building"></i></div>
                <div className="jces-fc-title">Spacious Campus</div>
                <div className="jces-fc-text">Excellent facilities including spacious College buildings and fields located in the midst of beautiful Aravalli Hills.</div>
            </div>
            <div className="jces-facility-card">
                <div className="jces-fc-icon"><i className="fas fa-history"></i></div>
                <div className="jces-fc-title">20 Year Legacy</div>
                <div className="jces-fc-text">Inherits 20 years of legacy of the society involved in teaching learning process through different streams.</div>
            </div>
            <div className="jces-facility-card">
                <div className="jces-fc-icon"><i className="fas fa-book-reader"></i></div>
                <div className="jces-fc-title">Proactive Learning</div>
                <div className="jces-fc-text"><strong>12x6 Dawn till Dusk</strong> proactive learning environment with a well-equipped College library.</div>
            </div>
            <div className="jces-facility-card">
                <div className="jces-fc-icon"><i className="fas fa-users"></i></div>
                <div className="jces-fc-title">Student Centre</div>
                <div className="jces-fc-text">Proud of the successes and excellent relationships we have with our Students and families within our community.</div>
            </div>
        </div>

        <div className="jces-values-section">
            <h3><i className="fas fa-lightbulb"></i> The Resourceful Mindset</h3>
            <p>We believe that <strong>resourcefulness</strong> is an essential mindset, particularly in the context of achieving difficult goals or finding our paths obscured by complications. Resourcefulness alludes to the active contribution of new ideas, innovative solutions, and improving present methods.</p>
            <p>When we perform our work with a resourceful mindset, we develop an attitude that encourages and drives us to find a way through our problems. Being resourceful involves building a widespread personal and professional network while attempting to develop meaningful relationships with others.</p>
            <p>At Jaipur College of Education & Science, we hope to inspire creative, out-of-the-box thinking that allows each of our team members to apply the knowledge and skills they gain through problem-solving. To facilitate this we have created the best infrastructure and upto date faculties as per norms.</p>
            <p>We search for ways to ensure that all of our employees relate strongly to our college values, to unite individuals with a variety of personalities, communication styles, and organizational roles. We believe in constant improvement and innovation in all aspects; we prioritize work-life balance, creativity and cultivating a mindset that fosters forward-thinking.</p>
        </div>

        <div className="jces-cta-card">
            
            <h2 style={{fontFamily:'var(--jces-font-head)', color:'var(--jces-text-main)'}}>Join the Future of Teaching</h2>
            <p style={{color:'var(--jces-text-muted)', maxWidth:'800px', margin:'1rem auto'}}>Prospective students are welcome to visit the College. Please contact us to make an appointment. We shall be delighted to show you round our College and discuss with you and our pedagogy to upbring you to be a knowledge driven teacher of the future!</p>
            
            <a href="http://www.jaipurcollege.org" target="_blank" rel="noreferrer" className="jces-btn-visit">
                Visit Official Website <i className="fas fa-external-link-alt"></i>
            </a>
        </div>

      </div>
     <LogoCarousel />

    </div>
  );
}