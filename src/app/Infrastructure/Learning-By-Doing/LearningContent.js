"use client";
import React from 'react';
import '@/styles/LearningByDoing.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 


// export const metadata = {
//   title: "Best Engineering College with Labs in Jaipur | JEC Jaipur",
//   description: "Jaipur Engineering College is the Best Engineering College with Labs in Jaipur. Engineering is incomplete without DOING what is being taught in the classrooms.",
//   keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
// };

function LearningByDoing() {
  return (
    <div className="learning-page">
      
      {/* Hero Section */}
      <header className="learning-hero">
        <h1>Learning By Doing</h1>
        <p>Where Theory Meets Practice: Innovation in Action</p>
      </header>

      {/* Stats Floating Container */}
      <div className="learning-stats-container">
        <div className="learning-stats-grid">
            <div className="learning-stat-card">
                <div className="learning-stat-icon"><i className="fas fa-tasks"></i></div>
                <div className="learning-stat-content">
                    <h3>Aptitude & Mock Tests</h3>
                    <p>Rigorous preparation for real-world scenarios.</p>
                </div>
            </div>
            <div className="learning-stat-card">
                <div className="learning-stat-icon"><i className="fas fa-users"></i></div>
                <div className="learning-stat-content">
                    <h3>Group Discussions</h3>
                    <p>Forums for debating ideas and situational conversations.</p>
                </div>
            </div>
            <div className="learning-stat-card">
                <div className="learning-stat-icon"><i className="fas fa-project-diagram"></i></div>
                <div className="learning-stat-content">
                    <h3>Live Projects</h3>
                    <p>UG / PG level projects integrated with industry needs.</p>
                </div>
            </div>
            <div className="learning-stat-card">
                <div className="learning-stat-icon"><i className="fas fa-vial"></i></div>
                <div className="learning-stat-content">
                    <h3>Advanced Labs</h3>
                    <p>Experiments that impose designs on theoretical concepts.</p>
                </div>
            </div>
        </div>
      </div>

      <div className="learning-container">

        {/* Engineering Section Split */}
        <div className="learning-section-split">
            <div className="learning-text-block">
                <h2>Engineering is incomplete without DOING.</h2>
                <p>Engineering is incomplete without DOING what is being taught in the classrooms. Our well-equipped laboratory sessions enable each student to write codes, mend wires, work with machines, impose designs and do experiment with the theoretical concepts.</p>
                <p>Jaipur Engineering College (JEC) has some of the finest workshops for Mechanical, Electronics and Communication, Civil and Electrical Engineering. The Computer Science and Information Technology labs are provided with latest soft wares for students. Labs help students learn and develop a healthy thought process.</p>
            </div>
            <div className="learning-img-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2Flab.jpg?alt=media&token=c44886fe-3fef-42ed-b19c-8de68445e5fe" alt="Engineering Workshop" />
            </div>
        </div>

        {/* NetLab Section Split */}
        <div className="learning-section-split">
            <div className="learning-img-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2FCivil%20Engineering%20(1).png?alt=media&token=1d2cfc4e-669b-480c-8f19-1464116cd0f2" alt="NetLab Computers" />
            </div>
            <div className="learning-text-block">
                <h2>The High-Tech NetLab</h2>
                <p>Equipped with high-tech computer technology our NetLab has a collection of core processors with latest software and high speed internet access. There are experts around for any kind of assistance.</p>
                <p>These integrated connectivity systems help students to stay connected with the buoyant world of internet, enabling research and global collaboration.</p>
            </div>
        </div>

        {/* Lab Ecosystem Grid */}
        <div className="learning-lab-section">
            <div className="learning-lab-header">
                <h2>Explore Our Labs</h2>
                <p>Some of the labs in different departments of the College are:</p>
            </div>
            
            <div className="learning-lab-grid">
                <div className="learning-lab-card"><i className="fas fa-atom"></i> <span className="learning-lab-name">Physics</span></div>
                <div className="learning-lab-card"><i className="fas fa-flask"></i> <span className="learning-lab-name">Chemistry</span></div>
                
                <div className="learning-lab-card"><i className="fas fa-keyboard"></i> <span className="learning-lab-name">Computer Programming</span></div>
                <div className="learning-lab-card"><i className="fas fa-laptop-code"></i> <span className="learning-lab-name">Computer Aided System Design</span></div>
                <div className="learning-lab-card"><i className="fas fa-database"></i> <span className="learning-lab-name">Database Management System</span></div>
                <div className="learning-lab-card"><i className="fas fa-paint-brush"></i> <span className="learning-lab-name">Computer Graphics & Multimedia</span></div>
                <div className="learning-lab-card"><i className="fas fa-terminal"></i> <span className="learning-lab-name">Shell Programming</span></div>
                <div className="learning-lab-card"><i className="fas fa-brain"></i> <span className="learning-lab-name">Artificial Intelligence</span></div>
                <div className="learning-lab-card"><i className="fas fa-code-branch"></i> <span className="learning-lab-name">Advanced OOPs</span></div>
                <div className="learning-lab-card"><i className="fas fa-bar-chart"></i> <span className="learning-lab-name">Data Science</span></div>
                
                <div className="learning-lab-card"><i className="fas fa-bolt"></i> <span className="learning-lab-name">Industrial Electronics</span></div>
                <div className="learning-lab-card"><i className="fas fa-microchip"></i> <span className="learning-lab-name">Microprocessor</span></div>
                <div className="learning-lab-card"><i className="fas fa-robot"></i> <span className="learning-lab-name">Electronics Workshop</span></div>
                <div className="learning-lab-card"><i className="fas fa-satellite-dish"></i> <span className="learning-lab-name">Communication Lab</span></div>
                
                <div className="learning-lab-card"><i className="fas fa-square-root-alt"></i> <span className="learning-lab-name">MATLAB</span></div>
                <div className="learning-lab-card"><i className="fas fa-cogs"></i> <span className="learning-lab-name">Dynamics of Machine</span></div>
                <div className="learning-lab-card"><i className="fas fa-water"></i> <span className="learning-lab-name">Fluid Mechanics</span></div>
                <div className="learning-lab-card"><i className="fas fa-temperature-high"></i> <span className="learning-lab-name">Heat Transfer</span></div>
                <div className="learning-lab-card"><i className="fas fa-wave-square"></i> <span className="learning-lab-name">Mechanical Vibrations</span></div>
                <div className="learning-lab-card"><i className="fas fa-dumbbell"></i> <span className="learning-lab-name">Strength of Material</span></div>
                <div className="learning-lab-card"><i className="fas fa-fire"></i> <span className="learning-lab-name">Thermal Engineering</span></div>
                <div className="learning-lab-card"><i className="fas fa-building"></i> <span className="learning-lab-name">Building, Planning & Design</span></div>
                <div className="learning-lab-card"><i className="fas fa-gem"></i> <span className="learning-lab-name">Material and Geology</span></div>
            </div>
        </div>

        {/* Featured Case Study (FUSE) */}
        <div className="learning-story-wrapper">
            <div className="learning-story-header">
                <span>A Case in Point</span>
                <h3>Learning By Doing at JEC</h3>
            </div>

            <div className="learning-story-content">
                <div className="learning-story-text">
                    <p>Students in the <strong>Introduction to Engineering</strong> class take hands on learning to a whole new level of commitment – and they love doing it, despite the hours and hours it takes to complete the service learning projects. Called <strong>FUSE</strong>, an acronym for First Undergraduate Service Learning Experience, the program solicits projects from the public that let students apply the engineering design process to meet the unique needs of their customer.</p>
                    
                    <p>“In almost every case, the students have to create a customized solution to solve the problem,” said <strong>Deepti Arora</strong>, who coordinates the Introduction to Engineering classes at Jaipur Engineering College. “Through service learning, students are able to contribute to the community in a meaningful way by working with a client to design, develop and deliver a solution to a real-world problem.”</p>

                    <p>One such success story comes from Rahul Kumar, an Ambuja Cement employee who is looking after the services as maintenance engineer there taking the extra plant knowledge to qualify for a promotion.</p>
                    
                    <p>The project the students are talking about—the <strong>pyramid shaped rolling box</strong>—includes a small stereo, stick on letters, handles, and a white board. It’s on wheels that accommodate his standing walker but retract to be able to go through doorways, and the whole thing comes apart so it can go in a car trunk.</p>
                </div>

                <div className="learning-story-sidebar">
                    <div className="learning-quote-block">
                        "It took us five iterations and two prototypes to get this right."
                        <span className="learning-quote-author">— Rahul Kumar, Maintenance Engineer (Ambuja Cement)</span>
                    </div>

                    <div className="learning-project-details">
                        <h4>Project Breakdown</h4>
                        <div className="learning-detail-item"><i className="fas fa-check"></i> <span>Pyramid shaped rolling design</span></div>
                        <div className="learning-detail-item"><i className="fas fa-check"></i> <span>Retractable wheels for doorways</span></div>
                        <div className="learning-detail-item"><i className="fas fa-check"></i> <span>Modular disassembly for car trunks</span></div>
                        <div className="learning-detail-item"><i className="fas fa-check"></i> <span>Integrated stereo & whiteboard</span></div>
                    </div>
                </div>
            </div>
        </div>

      </div>
      
      <LogoCarousel />
    </div>
  );
}

export default LearningByDoing;