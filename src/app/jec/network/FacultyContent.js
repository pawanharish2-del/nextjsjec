"use client";
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '@/firebase';
import Image from 'next/image';
import LogoCarousel from '@/components/LogoCarousel';
import '@/styles/network.css';

// export const metadata = {
//   title: "JAIPUR ENGINEERING COLLEGE | Human-Network",
//   description:" JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality." ,
//   keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
// };

// Image path
const building = "/images/jec-building.jpeg";

// --- Helper Functions ---
const isHOD = (member) => {
    if (member.isHod === true) return true;
    if (!member.role) return false;
    const r = member.role.toLowerCase();
    return r.includes('hod') || r.includes('head of department') || r.includes('head of dept');
};

const getExperienceYears = (expString) => {
    if (!expString) return 0;
    const match = expString.toString().match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
};

// --- Sub-Component: Faculty Card ---
const FacultyCard = ({ member }) => {
    const isHead = isHOD(member);

    return (
        <div
            className={`faculty-card ${isHead ? 'hod-card' : ''}`}
            // Force relative positioning to contain badges/shadows correctly from the start
            style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}
        >
            {isHead && <div className="hod-badge"></div>}

            <div className="card-header">
                {/* Avatar Wrapper with Inline Styles to prevent layout shift */}
                <div className="avatar-wrapper" style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 15px' }}>
                    <img
                        src={member.image || "https://www.w3schools.com/howto/img_avatar.png"}
                        alt={member.name}
                        className="avatar"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '25%',
                            border: '3px solid white',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            display: 'block' // Prevents inline-block spacing issues
                        }}
                    />
                </div>
                <div className="faculty-name">{member.name}</div>
                <div className="faculty-role">{member.role}</div>
            </div>
            <div className="card-body">
                <div className="info-row">
                    <i className="fas fa-graduation-cap"></i> <span>Qualification: {member.qualification}</span>
                </div>
                <div className="info-row">
                    <i className="fas fa-briefcase"></i> <span>Experience: {member.experience}</span>
                </div>
                <div className="research-area">
                    <i className="fas fa-microscope"></i> {member.researchArea}
                </div>
            </div>
            <div className="card-footer">
                <a href={`mailto:${member.email}`} className="email-btn">
                    <i className="fas fa-envelope"></i> Email Me
                </a>
            </div>
        </div>
    );
};

// --- Main Component ---
function HumanNetwork() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [faculty, setFaculty] = useState([]);
    const [loading, setLoading] = useState(true);

    const departments = [
        { id: 'cse', title: 'Computer Science Engineering' },
        { id: 'ee', title: 'Electrical Engineering' },
        { id: 'ece', title: 'Electronics & Comm. Engg.' },
        { id: 'me', title: 'Mechanical Engineering' },
        { id: 'ash', title: 'Applied Sciences & Humanities' },
        { id: 'civil', title: 'Civil Engineering' }
    ];

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                const facultyRef = collection(db, "faculty_members");
                const q = query(facultyRef, orderBy("order"));
                const querySnapshot = await getDocs(q);

                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setFaculty(data);
            } catch (error) {
                console.error("Error fetching faculty:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFaculty();
    }, []);

    const filterFaculty = (dept) => {
        setActiveFilter(dept);
    };

    // --- Loading View ---
    if (loading) {
        return (
            <div className="human-network-page">
                <section
                    className="faculty-hero"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        height: '400px',
                        backgroundColor: '#0072c6'
                    }}
                >
                    <div style={{ zIndex: 3, position: 'relative', color: 'white' }}>
                        <h1>Loading Network...</h1>
                    </div>
                </section>
            </div>
        );
    }

    // --- Main View ---
    return (
        <div className="human-network-page">

            {/* HERO SECTION - With Priority Loading & Inline Styles */}
            <section
                className="faculty-hero"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    height: '400px',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    backgroundColor: '#0072c6',
                    overflow: 'hidden'
                }}
            >
                <Image
                    src={building}
                    alt="Campus Building"
                    fill
                    priority={true}
                    style={{ objectFit: 'cover', zIndex: 1 }}
                />

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 2
                    }}
                ></div>

                <div className="network-hero-overlay" style={{ zIndex: 3, position: 'relative', width: '100%' }}>
                    <div className="max-width-container">
                        <h1>Human Network @ JEC</h1>
                        <p>Meet the dedicated minds shaping the future of engineering.</p>
                    </div>
                </div>
            </section>

            {/* Filter Buttons */}
            <div className="filter-container">
                <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filterFaculty('all')}>All Departments</button>
                <button className={`filter-btn ${activeFilter === 'cse' ? 'active' : ''}`} onClick={() => filterFaculty('cse')}>Computer Science</button>
                <button className={`filter-btn ${activeFilter === 'ee' ? 'active' : ''}`} onClick={() => filterFaculty('ee')}>Electrical Engg.</button>
                <button className={`filter-btn ${activeFilter === 'ece' ? 'active' : ''}`} onClick={() => filterFaculty('ece')}>Electronics & Comm.</button>
                <button className={`filter-btn ${activeFilter === 'me' ? 'active' : ''}`} onClick={() => filterFaculty('me')}>Mechanical Engg.</button>
                <button className={`filter-btn ${activeFilter === 'ash' ? 'active' : ''}`} onClick={() => filterFaculty('ash')}>Applied Sciences</button>
                <button className={`filter-btn ${activeFilter === 'civil' ? 'active' : ''}`} onClick={() => filterFaculty('civil')}>Civil Engg.</button>
            </div>

            <div className="max-width-container faculty-section">
                {departments.map((dept) => {
                    if (activeFilter !== 'all' && activeFilter !== dept.id) return null;

                    const rawMembers = faculty.filter(m => {
                        if (Array.isArray(m.department)) {
                            return m.department.includes(dept.id);
                        } else {
                            return m.department === dept.id;
                        }
                    });

                    const deptMembers = [...rawMembers].sort((a, b) => {
                        const aIsHod = isHOD(a);
                        const bIsHod = isHOD(b);
                        if (aIsHod && !bIsHod) return -1;
                        if (!aIsHod && bIsHod) return 1;
                        const expA = getExperienceYears(a.experience);
                        const expB = getExperienceYears(b.experience);
                        return expB - expA;
                    });

                    if (deptMembers.length === 0) return null;

                    return (
                        <div key={dept.id}>
                            <h2 className="dept-title show">{dept.title}</h2>
                            <div className="faculty-grid show">
                                {deptMembers.map(member => (
                                    <FacultyCard key={member.id} member={member} />
                                ))}
                            </div>
                        </div>
                    );
                })}

                {faculty.length === 0 && (
                    <p style={{ textAlign: 'center' }}>No faculty members found. Please check your database connection.</p>
                )}
            </div>

            <LogoCarousel />
        </div>
    );
}

export default HumanNetwork;