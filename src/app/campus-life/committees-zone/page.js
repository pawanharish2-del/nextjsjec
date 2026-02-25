// src/pages/CommitteesZone.js
import React from 'react';
import '@/styles/CommitteesZone.css'; // Import the CSS

// Note: Ensure you have Font Awesome icons set up in your project (e.g., using react-icons/fa or a global CDN/package)


export const metadata = {
  title: "JAIPUR ENGINEERING COLLEGE | student committees | tudent fraternity | JEC Group of College",
  description: "The presence of student committees in the campus has given a real and different identity to the college. They stand out amongst their student fraternity by offering best possible contributions to the Institute.",
  keywords: "The presence of student committees in the campus has given a real and different identity to the college. They stand out amongst their student fraternity by offering best possible contributions to the Institute.",
};

const CommitteeCard = ({ iconClass, name, mentor, achievements, outcomes }) => (
    <div className="comm-card">
        <div className="comm-header">
            <div className="comm-title">
                <div className="comm-icon"><i className={iconClass}></i></div>
                <div className="comm-name">{name}</div>
            </div>
            <div className="comm-mentor">
                <i className="fas fa-chalkboard-teacher"></i> Mentor: {mentor}
            </div>
        </div>
        <div className="comm-body">
            <div className="comm-col">
                <h4>Achievements</h4>
                {achievements.map((p, index) => <p key={`ach-${index}`}>{p}</p>)}
            </div>
            <div className="comm-col learning-col">
                <h4>Learning Outcomes</h4>
                <p>{outcomes}</p>
            </div>
        </div>
    </div>
);


const CommitteesZone = () => {
    // Data structure for the committee cards
    const committees = [
        {
            iconClass: "fas fa-users-cog",
            name: "Alumni Committee",
            mentor: "Dr. Bharat Bhushan",
            achievements: [
                "Detailed database of around 3,000 alumni.",
                "Making a monthly e-newsletter 'JHAROKHA' for alumni and organizing alumni meet 'Milaap' annually."
            ],
            outcomes: "The art of persuasion, patience, to hold one's nerve till the work is done, better communication skills and co-ordination as a team."
        },
        {
            iconClass: "fas fa-industry",
            name: "Industry Interaction Committee",
            mentor: "Ms. Muskan Kundalwal",
            achievements: [
                "Organizing Industrial Visits to Bhabha Atomic Research Centre, Kalpakkam, NALCO (National Aluminium Company Ltd.), and other organizations."
            ],
            outcomes: "Industry Exposure, professionalism, communication."
        },
        {
            iconClass: "fas fa-theater-masks",
            name: "Cultural and Extra Curricular Activities Committee",
            mentor: "Dr. Sunita Goyal Rawat",
            achievements: [
                "Organizing the Technical Fest 'Technotsav' and the Cultural Fest 'Aparoksha' annually.",
                "All committees, especially the CCA committee, work to fulfill the aim of fostering new relationships with peer engineering students, the community, and the world."
            ],
            outcomes: "Creativity, Event Management, Time Management, and Problem-Solving Skills."
        },
        {
            iconClass: "fas fa-laptop-code",
            name: "Learning by Sharing Knowledge (LSK)",
            mentor: "Mr. Inesh Saraogi",
            achievements: [
                "Accomplished 15 days Computer Awareness Program at Janki Public School, Natata and Abhinav Vidya Bhawan, Kukas."
            ],
            outcomes: "Maturity, Leadership Skills and willingness to teach and sharing knowledge."
        },
    ];


    return (
        <div className="committees-page">
            {/* HERO SECTION */}
            <header className="hero">
                <h1>Committees Zone</h1>
                <p>Beyond the Curriculum: Lead, Organize, Excel</p>
            </header>

            {/* STATS SECTION (Floating) */}
            <div className="stats-container">
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                        <div className="stat-label">Experienced Faculty</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon"><i className="fas fa-hands-helping"></i></div>
                        <div className="stat-label">Volunteering Opportunities</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
                        <div className="stat-label">Measurable Outcomes</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon"><i className="fas fa-users"></i></div>
                        <div className="stat-label">Strong Network</div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="container">

                <div className="section-header">
                    <span>Involvement</span>
                    <h2>Campus Leadership & Development</h2>
                </div>

                {/* INTRO BOX */}
                <div className="intro-box">
                    <p className="intro-text">Engineers in their professional career have to play a multifaceted role which includes leadership, management, administration, policy making and implementation, research, project management and execution. All these skills must be acquired during the engineering degree so that the engineers after graduating can take up all the roles efficiently.</p>
                    <p className="intro-text">JEC provides an opportunity for students to acquire these valuable skills through various Committees and Clubs. The JEC Committees and Clubs are meant to provide students with a harmonious and enriching environment to ensure harmony across campus, develop leadership skills, and contribute to the JEC legacy.</p>
                </div>
                
                {/* COMMITTEES LIST */}
                <div className="committee-list">
                    {committees.map((comm, index) => (
                        <CommitteeCard 
                            key={index}
                            iconClass={comm.iconClass}
                            name={comm.name}
                            mentor={comm.mentor}
                            achievements={comm.achievements}
                            outcomes={comm.outcomes}
                        />
                    ))}
                </div>

                {/* CTA SECTION */}
                 {/* redy to section removed */}

            </div>
        </div>
    );
};

export default CommitteesZone;