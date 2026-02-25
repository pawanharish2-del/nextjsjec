// "use client";
import React from 'react';
import '@/styles/GamesAndSports.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 


export const metadata = {
  title: "Successfull Students of Jaipur Engineering Collge | JEC Kukas",
  description: "Know about Successfull Students of Jaipur Engineering Collge. With the worldwide shortage of qualified engineers expected to hit a critical point in the next 15 years...",
  keywords: "Journey from JEC Group to IIT, Suresh Kumar Choudhary, former Student of Computer Science (CS) Branch, JEC Group got admission in M Tech, IIT Kanpur through GATE-12. His strategy to GATE",
};

const GamesAndSports = () => {
  return (
    <div className="games-page">
      {/* 2. HERO SECTION */}
      <header className="hero">
        <h1>Games and Sports</h1>
        <p>Teamwork Makes the Dream Work!</p>
      </header>

      {/* 3. FLOATING STATS */}
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">10+</div>
            <div className="stat-label">Sports Facilities</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">09</div>
            <div className="stat-label">Student Clubs</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Unitedly</div>
            <div className="stat-label">Setting Standards</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Witnessed</div>
            <div className="stat-label">Strategic Development</div>
          </div>
        </div>
      </div>

      {/* 4. CONTENT SECTIONS */}
      <div className="container">
        
        {/* Quote */}
        <div className="quote-banner">
            “Always play to win, but whenever you lose, say it to yourself: Get up, dust off and start again.”
        </div>

        {/* Intro Split Section */}
        <div className="section-split">
            <div className="text-block">
                <h3>Relax, Refresh, Win</h3>
                <p>Games and Sport is a great way to relax, refresh, and attain a healthy mind in a healthy body to have a winning streak in one. Besides the academic activities, Students would like attention relieved and focused on fun and physique. Sports activities help the students to keep them fit both mentally and physically.</p>
                <p>It isn't about winning or losing. What matters is the competitive spirit that should never die out because you are not a failure unless you believed that you have failed. At JEC, it has been a constant endeavor to create sporting spirit fervor and the sports fever only seems to be growing with each passing academic session. Hard sweat, high energy, tons of cheering and complete fun, despite the rain and scorching heat, shows the spirit in the players for the game.</p>
            </div>
            <div className="img-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2Fbanner-47ab556a-a577-4ff5-98bf-79739f11a0f3?alt=media&token=2fff18e2-078d-4378-bafe-c252409f6a47" alt="JEC Sports Team" />
            </div>
        </div>

        {/* Facilities Grid */}
        <div className="section-header">
            <span>Infrastructure</span>
            <h2>Abundant Facilities</h2>
            <p>Our students know all the angles to bring laurels to the College and themselves.</p>
        </div>

        <div className="facility-grid">
            <div className="fac-badge"><i className="fas fa-basketball-ball"></i> Basketball</div>
            <div className="fac-badge"><i className="fas fa-futbol"></i> Football</div>
            <div className="fac-badge"><i className="fas fa-baseball-ball"></i> Cricket</div>
            <div className="fac-badge"><i className="fas fa-volleyball-ball"></i> Volleyball</div>
            <div className="fac-badge"><i className="fas fa-running"></i> Kabaddi</div>
            <div className="fac-badge"><i className="fas fa-users"></i> Kho-Kho</div>
            <div className="fac-badge"><i className="fas fa-table-tennis"></i> Table Tennis</div>
            <div className="fac-badge"><i className="fas fa-dumbbell"></i> Weight-lifting</div>
            <div className="fac-badge"><i className="fas fa-chess"></i> Chess/Carom</div>
        </div>

        {/* Achievements */}
        <div className="section-header">
            <span>Timeline</span>
            <h2>Victories & Selections</h2>
        </div>

        <div className="achievements-wrapper">
            <div className="win-card">
                <h3><i className="fas fa-trophy" style={{ color: 'var(--gold)' }}></i> Tournament Wins</h3>
                <ul className="win-list">
                    <li><span className="win-year">2015</span> <span className="win-desc">Winner - RTU Inter College Badminton (at SIT)</span></li>
                    <li><span className="win-year">2015</span> <span className="win-desc">Winner - Volleyball (at SBCET)</span></li>
                    <li><span className="win-year">2015</span> <span className="win-desc">II Position - Kabaddi (at RIET)</span></li>
                    <li><span className="win-year">2014</span> <span className="win-desc">I Position - Kabaddi (at RTU)</span></li>
                    <li><span className="win-year">2014</span> <span className="win-desc">I Position - Badminton (at RTU)</span></li>
                    <li><span className="win-year">2014</span> <span className="win-desc">II Position - Volleyball (at RTU)</span></li>
                </ul>
            </div>

            <div className="win-card" style={{ borderTopColor: 'var(--accent)' }}>
                <h3><i className="fas fa-medal" style={{ color: 'var(--accent)' }}></i> National Selections</h3>
                <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>Year after year, students of JEC have made their presence felt across all sporting events.</p>
                <ul className="win-list">
                    <li><span className="win-year">2015</span> <span className="win-desc">3 Students - Badminton (RTU Team)</span></li>
                    <li><span className="win-year">2015</span> <span className="win-desc">3 Students - Volleyball (RTU Team)</span></li>
                    <li><span className="win-year">2015</span> <span className="win-desc">3 Students - Kabaddi (RTU Team)</span></li>
                    <li><span className="win-year">2014</span> <span className="win-desc">2 Students - Badminton (RTU Team)</span></li>
                </ul>
            </div>
        </div>

        {/* Gallery */}
        <div className="section-header">
            <span>Gallery</span>
            <h2>Testimony of Our Win</h2>
            <p>Some trophies from our winning streak.</p>
        </div>

        <div className="trophy-grid">
            <div className="trophy-frame">
                <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2FChampions.JPG?alt=media&token=1f9eb873-66f1-46ff-9405-1b595933c1d1" alt="Trophy 1" />
                <div className="trophy-label">Champions</div>
            </div>
            
            <div className="trophy-frame">
                <img src="/JECCup.JPG" alt="Trophy 2" />
                <div className="trophy-label">JEC Cup</div>
            </div>

            <div className="trophy-frame">
                <img src="/Volleyball Winners.JPG" alt="Trophy 3" />
                <div className="trophy-label">Basketball Winners</div>
            </div>
        </div>

        {/* Teams & Venues */}
        <div className="section-header">
            <span>Participation</span>
            <h2>Teams & Venues</h2>
        </div>

        <div className="team-grid">
            <div className="team-card">
                <div className="team-header">
                    <span>Basketball Boys</span> <i className="fas fa-basketball-ball"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">Global Inst. of Tech, Modi Inst., Shankara Inst., SKIT, LNMIIT</div>
                </div>
            </div>

            <div className="team-card">
                <div className="team-header">
                    <span>Basketball Girls</span> <i className="fas fa-basketball-ball"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">Global Inst. of Tech, Shankara Inst., SKIT, LNMIIT</div>
                </div>
            </div>

            <div className="team-card">
                <div className="team-header">
                    <span>Badminton Boys</span> <i className="fas fa-table-tennis"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">LNMIIT, LIET Alwar, GIT, Shankara Institute</div>
                </div>
            </div>

            <div className="team-card">
                <div className="team-header">
                    <span>Badminton Girls</span> <i className="fas fa-table-tennis"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">GIT, Shankara Inst., LIET Alwar, MODI Inst., LNMIIT</div>
                </div>
            </div>

            <div className="team-card">
                <div className="team-header">
                    <span>Football Boys</span> <i className="fas fa-futbol"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">IIT Jodhpur, Shankara Inst., Arya Institute</div>
                </div>
            </div>

            <div className="team-card">
                <div className="team-header">
                    <span>Cricket</span> <i className="fas fa-baseball-ball"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">LNMIIT</div>
                </div>
            </div>

            <div className="team-card">
                <div className="team-header">
                    <span>Volleyball Boys</span> <i className="fas fa-volleyball-ball"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">SKIT, Shankara Institute of Technology, LNMIIT</div>
                </div>
            </div>

            <div className="team-card">
                <div className="team-header">
                    <span>Kabaddi Girls</span> <i className="fas fa-running"></i>
                </div>
                <div className="team-body">
                    <div className="played-at">Played At:</div>
                    <div className="venues">Global Institute of Technology</div>
                </div>
            </div>
        </div>

        {/* CTA */}
        <div className="cta-section">
            <div className="cta-content">
                <h2 style={{ color: 'var(--gold)', fontFamily: 'var(--font-head)' }}>Join the Legacy</h2>
                <p>Hard sweat, high energy, tons of cheering and complete fun.</p>
            </div>
        </div>

      </div>
      
      <LogoCarousel />
    </div>
  );
};

export default GamesAndSports;