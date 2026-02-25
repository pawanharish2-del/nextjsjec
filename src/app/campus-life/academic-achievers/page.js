// "use client";
import React from 'react';
import '@/styles/AcademicAchievers.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 



export const metadata = {
  title: "Academic Achievers of Jaipur Engineering College",
  description: "Know about Academic Achievers of Jaipur Engineering College. Academic achievement is defined as working at grade level in writing, reading, and speaking skills..",
  keywords: "Academic achievement achieved by Jec student in various fields of engineering &amp; sports",
};

const AcademicAchievers = () => {
  return (
    <div className="academic-achievers-page">
      
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="max-width-container">
          <h1>Academic Achievers</h1>
          <p>Celebrating Excellence in Education at JEC</p>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="intro-section">
        <div className="max-width-container">
          <div className="intro-text">
            <h2>Excellence is a habit.</h2>
            <p>At Jaipur Engineering College, we take immense pride in celebrating the academic achievements of our students. The list below recognizes the top performers from each year and branch, who have demonstrated exceptional dedication and secured the highest marks.</p>
            <p>Their success is a testament to the hard work they put into their studies and the quality of education provided by our faculty. They are the true role models for the entire JEC community. Congratulations to all our bright stars!</p>
          </div>
        </div>
      </section>

      {/* 3. ACHIEVERS GRID SECTIONS */}
      <div className="max-width-container">
        
        {/* Year IV Achievers */}
        <div className="year-section">
          <div className="year-title"><i className="fas fa-graduation-cap"></i> Year IV</div>
          <div className="branch-grid">
            
            <div className="branch-card">
              <div className="branch-header"><span>Computer Science</span> <span><i className="fas fa-laptop-code"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Priyanshu Sharma</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Harshita Yadav</td></tr>
                  <tr><td><span className="rank rank-3">III</span></td><td className="student-name">Amit Kumar</td></tr>
                </tbody>
              </table>
            </div>

            <div className="branch-card">
              <div className="branch-header"><span>Mechanical Engg.</span> <span><i className="fas fa-cogs"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Rohit Meena</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Anjali Singh</td></tr>
                  <tr><td><span className="rank rank-3">III</span></td><td className="student-name">Mohit Saxena</td></tr>
                </tbody>
              </table>
            </div>

            <div className="branch-card">
              <div className="branch-header"><span>Civil Engg.</span> <span><i className="fas fa-building"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Deepika Choudhary</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Vikas Pareek</td></tr>
                </tbody>
              </table>
            </div>
            
            <div className="branch-card">
              <div className="branch-header"><span>E.C. Engineering</span> <span><i className="fas fa-microchip"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Suresh Goyal</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Pooja Jangid</td></tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        
        {/* Year III Achievers */}
        <div className="year-section">
          <div className="year-title"><i className="fas fa-bookmark"></i> Year III</div>
          <div className="branch-grid">
            
            <div className="branch-card">
              <div className="branch-header"><span>Computer Science</span> <span><i className="fas fa-laptop-code"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Riya Jain</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Siddharth Kothari</td></tr>
                </tbody>
              </table>
            </div>

            <div className="branch-card">
              <div className="branch-header"><span>Mechanical Engg.</span> <span><i className="fas fa-cogs"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Nitin Verma</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Kriti Sharma</td></tr>
                </tbody>
              </table>
            </div>

            <div className="branch-card">
              <div className="branch-header"><span>Civil Engg.</span> <span><i className="fas fa-building"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Rajesh Khatri</td></tr>
                </tbody>
              </table>
            </div>
            
            <div className="branch-card">
              <div className="branch-header"><span>E.C. Engineering</span> <span><i className="fas fa-microchip"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Preeti Yadav</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Akash Gupta</td></tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* Year II Achievers */}
        <div className="year-section">
          <div className="year-title"><i className="fas fa-book-open"></i> Year II</div>
          <div className="branch-grid">
            
            <div className="branch-card">
              <div className="branch-header"><span>Computer Science</span> <span><i className="fas fa-laptop-code"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Misha Bhatia</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Gaurav Saini</td></tr>
                </tbody>
              </table>
            </div>

            <div className="branch-card">
              <div className="branch-header"><span>Mechanical Engg.</span> <span><i className="fas fa-cogs"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Aditya Sen</td></tr>
                  <tr><td><span className="rank rank-2">II</span></td><td className="student-name">Sonu Devi</td></tr>
                </tbody>
              </table>
            </div>

            <div className="branch-card">
              <div className="branch-header"><span>Civil Engg.</span> <span><i className="fas fa-building"></i></span></div>
              <table>
                <tbody>
                  <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Naman Gupta</td></tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        
        {/* Year I Achievers */}
        <div className="year-section">
            <div className="year-title"><i className="fas fa-seedling"></i> Year I</div>
            <div className="branch-grid">
                
                <div className="branch-card">
                    <div className="branch-header"><span>Computer Science</span> <span><i className="fas fa-laptop-code"></i></span></div>
                    <table>
                        <tbody>
                          <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Aman Kumawat</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="branch-card">
                    <div className="branch-header"><span>Mechanical Engg.</span> <span><i className="fas fa-cogs"></i></span></div>
                    <table>
                        <tbody>
                          <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Khushbu Sain</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="branch-card">
                    <div className="branch-header"><span>Civil Engg.</span> <span><i className="fas fa-building"></i></span></div>
                    <table>
                        <tbody>
                          <tr><td><span className="rank rank-1">I</span></td><td className="student-name">Arjun Singh</td></tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

      </div>
      
      {/* Footer / CTA Section */}
      <footer className="page-footer">
        <p>&copy; 2025 Jaipur Engineering College (JEC). All Rights Reserved. **Excellence Never Stops!**</p>
      </footer>

      <LogoCarousel />
    </div>
  );
};

export default AcademicAchievers;