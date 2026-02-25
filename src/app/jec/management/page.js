import React from 'react';
import '@/styles/Management.css';
import LogoCarousel from '@/components/LogoCarousel'; // Import the EXISTING working component

export const metadata = {
  title: "Leadership - Jaipur Engineering College | JEC Management I Administration I BOG",
  description: "Know about the management team at jaipur engineering college. Check the names who are leading top engineering college in Jaipur, Rajasthan.",
  keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

export default function Management() {
  return (
    <div className="management-page-new">

      <section className="leadership-hero">
        <div className="max-width-container">
          <h1>Empowered Leadership Team</h1>
          <p>Turning Vision into Reality through Agility, Adaptability, and Wisdom.</p>
          <div className="hero-badges">
            <span className="badge">Visionary</span>
            <span className="badge">Strategic</span>
            <span className="badge">Innovative</span>
            <span className="badge">Student-Centric</span>
          </div>
        </div>
      </section>

      <section className="management-section">
        <div className="max-width-container">
          <h2 className="section-title">Our Torchbearers</h2>

          {/* CARD 1: L.C. Saraogi */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FIMG_9600.JPG?alt=media&token=f47c7559-9076-4f05-8d86-a49ce2efce6f" alt="Shri L.C. Saraogi" className="leader-img" />
            </div>
            <div className="leader-content">
              <div className="leader-name">Mr. L.C. Saraogi</div>
              <span className="leader-position">Chairman - AIATERF & JEC Group</span>
              <div className="bio-text">
                <p>Mr. L. C. Saraogi is a well-known personality in the field of education for the last 4 decades in northern India. He believes in hard work and lives by the motto: "Success is measured not by what you create for yourself but by what you leave behind."</p>
                <p>A Chartered Accountant by profession, he is a passionate leader with accurate communication skills and a long track record of successfully managing organizations. As a man of honesty and integrity, he sets an example for all and loves to stay connected with students, motivating and molding them into ideal citizens. His vision and commitment have elevated the group to international standards.</p>
              </div>
            </div>
          </div>

          {/* CARD 2: Lalit K. Saraogi */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2F1225%20(3)%20(1).png?alt=media&token=fc063e5b-4d0a-48ea-be1e-7ae1da0d3d2a" alt="Shri Lalit K. Saraogi" className="leader-img" />
            </div>
            <div className="leader-content">
              <div className="leader-name">Mr. Lalit K. Saraogi</div>
              <span className="leader-position">Director - AIATERF & JEC Group</span>
              <div className="bio-text">
                <p>Mr. Lalit K. Saraogi plays a key role in defining the vision, mission, and strategy for the growth and development of AIATERF and JEC Group of Colleges. An engineering graduate in Electronics & Telecommunication from Bangalore University, he brings invaluable experience in managing people.</p>
                <p>He is the most energetic member of the management team, actively managing educational institutions with full dedication.  He believes that our nation needs not just engineers and managers but virtuous men and women who can be trendsetting professionals armed with integrity and discipline.</p>
              </div>
            </div>
          </div>

          {/* CARD 3: Harish Saraogi */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FShri.%20Harish%20Saraogi.JPG?alt=media&token=9fb1d405-346e-4f0c-a036-c564bcf8a8f9" alt="Shri Harish Saraogi" className="leader-img" />
            </div>
            <div className="leader-content">
              <div className="leader-name">Mr. Harish Saraogi</div>
              <span className="leader-position">Director (Finance) - AIATERF & JEC Group</span>
              <div className="bio-text">
                <p>Mr. Harish Saraogi holds a degree in commerce and has honed technical and managerial skills through advanced training. The credit for the rapid and meteoric rise of the group goes to his astute skills in planning, budgeting, and managing resources.</p>
                <p> An avid lover of global travel, he brings a wealth of information on innovations taking place worldwide. His dedication and dynamic approach have been a guiding force behind the success of the group, elevating it to international standards.</p>
              </div>
            </div>
          </div>

           {/* CARD 4: Dr. Bharat Bhushan Jain */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FDr.%20Bharat%20Bhushan%20jain%20electr%20eng%20professor%20and%20principal%20phd.JPG?alt=media&token=5a3893e8-fcb6-4501-b0f0-5104ff574abb"
                alt="Prof. Dr. Bharat Bhushan Jain"
                className="leader-img"
              />
            </div>
            <div className="leader-content">
              <div className="leader-name">Prof. (Dr.) Bharat Bhushan Jain</div>
              <span className="leader-position">Principal</span>
              <div className="bio-text">
                <p>Dr. Bharat Bhushan Jain, Ph.D. in Electrical Engineering from MNIT Jaipur, is a distinguished academician with over two decades of experience. Since 2016, he has served as Principal, leading academic governance and research initiatives.</p>
                <p> A prolific researcher, Dr. Jain has published 117 papers and holds four patents. His administrative roles—Principal, Director Admissions, and NBA In-Charge—reflect his commitment to curriculum innovation, digital education, and quality assurance in engineering education.</p>
              </div>
            </div>
          </div>

          {/* CARD 5: Dr. Sunita Goyal Rawat */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2F(Dr.)%20Sunita%20Goyal%20Rawat.jpg?alt=media&token=4c2571f6-5711-4c1a-95f8-3885907e22bc"
                alt="Prof. Dr. Sunita Goyal Rawat"
                className="leader-img"
              />
            </div>
            <div className="leader-content">
              <div className="leader-name">Prof. (Dr.) Sunita Goyal Rawat</div>
              <span className="leader-position">Director</span>
              <div className="bio-text">
                <p>Prof. (Dr.) Sunita Goyal Rawat holds a Ph.D. in Organometallic Chemistry from the University of Rajasthan. She has published 14 papers in reputed journals and authored multiple books on chemistry and environmental engineering.</p>
                <p> She serves as the Controller of Examination and Convener of Academic Planning. Dr. Rawat is actively involved in building the careers of engineering students through her dedicated mentorship and academic leadership.</p>
              </div>
            </div>
          </div>

          {/* CARD 6: Dr. D. G. Mahto */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2Fmehto.jpg?alt=media&token=51704c46-5ab6-4605-91b7-59fd26ff7170"
                alt="Prof. Dr. D.G. Mahto"
                className="leader-img"
              />
            </div>
            <div className="leader-content">
              <div className="leader-name">Prof. (Dr.) D. G. Mahto</div>
              <span className="leader-position">Director (R & D)</span>
              <div className="bio-text">
                <p>Prof. Dalgobind Mahto’s career reflects 20+ years of experience in industries, teaching, research, and administration. His directorial roles have involved significant innovation in curriculum development.</p>
                <p>His accomplishments reflect strong leadership qualities in the challenging and complex environment of higher educational institutions, fostering regional economic development and collaboration with different institutions.</p>
              </div>
            </div>
          </div>

          {/* CARD 7: Lakshya Saraogi */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img
                src="/images/lakshaysaraogi.jpg" 
                alt="Mr. Lakshya Saraogi"
                className="leader-img"
              />
            </div>
            <div className="leader-content">
              <div className="leader-name">Mr. Lakshya Saraogi</div>
              <span className="leader-position">Assistant Director – Branding & Marketing</span>
              <div className="bio-text">
                <p>Mr. Lakshya Saraogi leads the institution's strategic communication, brand development, and digital outreach. With a keen understanding of modern marketing landscapes, he plays a critical role in shaping the public image of the college.</p>
                <p>Under his leadership, JEC has strengthened its digital presence and brand recognition. Lakshya believes that effective storytelling and authentic branding are essential tools in building trust and inspiring action.</p>
              </div>
            </div>
          </div>
          
          {/* CARD 8: Inesh Saraogi */}
          <div className="leader-card">
            <div className="leader-img-container">
              <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FMr.%20Inesh%20Saraogi.jpg?alt=media&token=98163b9e-f2c1-4d50-ac11-37672d34c98d" alt="Mr. Inesh Saraogi" className="leader-img" />
            </div>
            <div className="leader-content">
              <div className="leader-name">Mr. Inesh Saraogi</div>
              <span className="leader-position">Assistant Director – Student Affairs</span>
              <div className="bio-text">
                <p>Mr. Inesh Saraogi plays a pivotal role in enhancing the overall student experience and fostering a dynamic campus environment. Holding a BSc in Finance, Inesh brings a fresh perspective to institutional operations.</p>
                <p>He is committed to empowering students through engagement, mental well-being initiatives, and bridging the gap between administration and the student body. Inesh is on a mission to shape JEC into a leading institution for holistic development.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- REUSING THE WORKING COMPONENT FROM HOME PAGE --- */}
      <LogoCarousel />

    </div>
  );
}