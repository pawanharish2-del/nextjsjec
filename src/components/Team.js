"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '@/firebase'; 
import '@/styles/Team.css';

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const carouselRef = useRef(null);

  // Fetch faculty data from Firebase
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "faculty_home"));
        const members = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // If database is empty, use placeholder data so the site doesn't look broken
        if (members.length > 0) {
          setTeamMembers(members);
        } else {
          setTeamMembers([
            { id: 1, name: 'Dr. Ram K Sharma', title: 'Vice Chancellor, JEC', imageUrl: 'https://picsum.photos/400/500?random=1' },
            { id: 2, name: 'Prof. Vijaysekhar', title: 'Dean, Computer Science', imageUrl: 'https://picsum.photos/400/500?random=2' },
            { id: 3, name: 'Prof. Bhaskar Bhatt', title: 'Dean, Design', imageUrl: 'https://picsum.photos/400/500?random=3' },
          ]);
        }
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };

    fetchTeam();
  }, []);

  // Scroll function for the carousel
  const scrollCarousel = (scrollAmount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="stories">
      <div className="stories-content">
        <h2 className="stories-title">Our Team</h2>
        <p className="stories-subtitle">Meet the dedicated professionals...</p>
        
        <div className="stories-carousel" id="team-carousel" ref={carouselRef}>
          {/* We repeat the list twice to ensure a fuller scrolling effect */}
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div className="story-card" key={`${member.id}-${index}`}>
              <img src={member.imageUrl} alt={member.name} className="story-image" />
              <div className="story-content">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-wrapper">
          <div className="stories-nav">
            <button className="nav-button prev" onClick={() => scrollCarousel(-320)} aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="nav-button next" onClick={() => scrollCarousel(320)} aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
        
        <Link href="/jec/management" className="view-all-btn">
          View All
        </Link>
      </div>
    </section>
  );
}