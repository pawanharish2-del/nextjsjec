import React from 'react';
import '@/styles/AgrasenCollege.css';


export const metadata = {
  title: "Other Institutes Agrasen College",
  description: "Know about Jaipur Engineering college Linkages and collaboration with National &amp; International Associations and Societies." ,
  keywords: "Other Institutes JCES College",
};

export default function AgrasenCollege() {
  return (
    <div className="ac-page">
      
      {/* Hero Section */}
      <header className="ac-hero">
        <div className="ac-hero-overlay"></div>
        <h1>Know Agrasen College</h1>
        <p>A Success Story in Education</p>
        <div className="ac-course-badges">
            <span className="ac-badge">B.A.</span>
            <span className="ac-badge">B.Sc. (Bio)</span>
            <span className="ac-badge">B.Sc. (Math)</span>
        </div>
      </header>

      <div className="ac-container">

        {/* Split Section (History) */}
        <div className="ac-section-split">
            <div className="ac-text-block">
                <h2><i className="fas fa-history" style={{color:'var(--ac-red)'}}></i> The Journey</h2>
                <p>Agrasen College, established in 2018 as an affiliating college of the <strong>University of Rajasthan</strong>, has a story to tell... a success story.</p>
                <p>In the life span of an educational institution, two years may be just a tiny ray in the vast spectrum, but for Agrasen College, the last two years have been truly constructive, much like the building blocks. The blocks have been reconfigured time and again from simple structures to more comprehensive ones, in tandem with the emerging paradigms of the techno-savvy world of today.</p>
                <p>The college is a <strong>Co-Educational College</strong>, christened as Agrasen College, after a great Indian ruler. Catering to the educational demands of the thickly populated Jaipur and adjoining rural areas, the College is today attracting the student intelligentsia from various parts of Rajasthan.</p>
            </div>
            <div className="ac-img-block">
                {/* Ensure the image exists in public/images/ folder */}
                <img src="/images/hero.jpg" alt="Agrasen College Campus" />
            </div>
        </div>

        {/* Quote Section */}
        <div className="ac-quote-section">
            <i className="fas fa-quote-left"></i>
            <div className="ac-quote-text">
                &quot;Tell me and I forget. Teach me and I remember. Involve me and I Learn.&quot;
            </div>
            <div className="ac-quote-sub">The echo that resounds in every page of Agrasen College</div>
        </div>

        {/* Features Grid */}
        <div className="ac-features-grid">
            <div className="ac-feature-card">
                <div className="ac-fc-title"><i className="fas fa-chalkboard-teacher"></i> Learner-Centric</div>
                <div className="ac-fc-text">
                    The veracity of our philosophy is illustrated in the classrooms of Agrasen College. The thrust has always been on <strong>two-way communication</strong>: a process of building partnerships between the learner and the learned.
                </div>
            </div>

            <div className="ac-feature-card">
                <div className="ac-fc-title"><i className="fas fa-seedling"></i> Beyond Classrooms</div>
                <div className="ac-fc-text">
                    Learning is no longer sacrosanct to be encircled in a sanctuary of classrooms and library. It spills over in the lawns, on the stage, and in playgrounds. We believe in holistic development.
                </div>
            </div>

            <div className="ac-feature-card">
                <div className="ac-fc-title"><i className="fas fa-users"></i> Extension Activities</div>
                <div className="ac-fc-text">
                    Participation of students in extension activities with vigour has led to strong bonds between the residents of <strong>Natata in Jaipur District</strong>. Leadership Development Programs help students work towards locality upliftment.
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="ac-cta-section">
            <h2>Explore More</h2>
            <p>To know in depth about Agrasen College Kukas Jaipur, visit our official website.</p>
            <a href="http://www.agrasencollege.org.in" target="_blank" rel="noreferrer" className="ac-btn-visit">
                Visit Official Website <i className="fas fa-external-link-alt" style={{marginLeft:'8px'}}></i>
            </a>
        </div>

      </div>
    </div>
  );
}