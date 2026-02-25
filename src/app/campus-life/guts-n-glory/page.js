// "use client";
import React from 'react';
import '@/styles/GutsNGlory.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 


export const metadata = {
  title: "Successfull Students of Jaipur Engineering Collge | JEC Kukas",
  description: "Know about Successfull Students of Jaipur Engineering Collge. With the worldwide shortage of qualified engineers expected to hit a critical point in the next 15 years...",
  keywords: "Journey from JEC Group to IIT, Suresh Kumar Choudhary, former Student of Computer Science (CS) Branch, JEC Group got admission in M Tech, IIT Kanpur through GATE-12. His strategy to GATE",
};

const GutsNGlory = () => {
  return (
    <div className="guts-page">
      {/* 2. HERO SECTION */}
      <header className="hero">
        <h1>Guts n Glory</h1>
        <p>Tales of Determination, Innovation & Success</p>
      </header>

      {/* 3. FLOATING STATS */}
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">40+</div>
            <div className="stat-label">Successful Entrepreneurs</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">9000+</div>
            <div className="stat-label">Campus Placements</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">500+</div>
            <div className="stat-label">Companies Visited</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">94%+</div>
            <div className="stat-label">Placement Rate</div>
          </div>
        </div>
      </div>

      {/* 4. CONTENT SECTIONS */}
      <div className="container">
        <div className="section-header">
          <span>Philosophy</span>
          <h2>Engineering: Myth vs Reality</h2>
        </div>

        <div className="intro-block">
          <p>
            With the worldwide shortage of qualified engineers expected to hit a critical point in the next 15 years, now might just be the best time in history to come out of College with an engineering degree. This demand for technical talent is certainly great news for anyone entering the engineering profession. But to paraphrase the old business institute saying, “with success comes increased competition.” And you can be sure the best jobs go to the best prepared.
          </p>

          <div className="quote-banner">
            "You may have heard that engineering is a man’s world... Wait a second, though! Is it really all about nuts and bolts, spanners and screwdrivers? Definitely not."
          </div>

          <p>
            Furthermore, you may have heard that the world of engineering is full of men who have all the technical skills in the world, but no social skills to match. In many people’s minds, an engineering career is a constant love affair between a man and his machines. And do women actually work in engineering? Of course they do! Now the time has changed and women are equally superior in all respect. Forget anything you’ve heard previously! Before you make the decision to get into engineering, you should firstly discover what it’s really all about.
          </p>

          <p>
            Engineers are all about solving problems using specialist technical and practical skills. It’s all about maths, science, research, prototypes, design, maintenance and production. Every industry and every area of society depends on the precise and efficient work of engineers. The engineers provide technological solutions to the problems, issues and ideas that affect every area of our lives. They design, manufacture and maintain almost everything people and industries use, from computers, spacecraft and boats to corkscrews, buildings and chemical reactors. Technological advances would never happen without engineers. Consequently, the people who work in this sector are massively important in developing the future of our society.
          </p>

          <p>
            There are so many different areas of engineering to work in; however, most engineers choose to specialise in just one, such as Electrical, automotive or robotics. Careers in engineering are constantly evolving and new processes and technologies are being developed all the time. This allows engineers to stay on the ball and react to new problems and challenges in their chosen field. Engineering careers are constantly varied in terms of their job responsibilities, but also in their working locations. As an engineer you could be working in an office, in a laboratory, on an oil rig in the middle of the ocean, in a factory, or even in outer space. Each engineering discipline requires professionals with very specific skill-sets. However, each and every area of this sector is as complex as the next. Consequently, all engineers need to have strong mathematical skills, logic and the ability to rise to intellectual and practical challenges. If you've got what it takes, you might be a successful engineering professional. Jaipur Engineering College is dedicated to produce best quality engineers. Here are some of the briefs of young JECians who adopted strategies for being successful.
          </p>
        </div>

        <div className="section-header">
          <span>Hall of Fame</span>
          <h2>Strategies for Success</h2>
        </div>

        {/* Story 1 */}
        <div className="story-card">
          <div className="story-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Rupshri%20Priya.png?alt=media&token=2030f0f3-bd00-4463-9d3b-521f39e7deea" alt="Rupshri Priya" />
          </div>
          <div className="story-content">
            <div className="story-header">
              <div className="story-name">Rupshri Priya</div>
              <div className="story-role">Electronics & Communication Engineering</div>
            </div>
            <div className="story-text">
              <p>
                Engineering College, as a discipline, ECE focuses on the design of underlying hardware systems. The curriculum is directed to applications in major areas such as telecommunications, energy and electronics sectors, while encouraging development of necessary skills for integration of hardware and software components. She believes that many creative opportunities exist at the boundaries of ECE, and she had accordingly planned for cross-training of students across disciplinary boundaries.
              </p>
            </div>
            <div className="success-mantra">
              <h4>Her Success Plan:</h4>
              <ul className="mantra-list">
                <li>Strengthen your physics and math fundamentals</li>
                <li>Learn how to read data sheets, circuits and devices</li>
                <li>Find out how to learn, unlearn and relearn.</li>
                <li>Discover how to design circuit boards using some good software and have them physically made and test them</li>
                <li>Buy a DMM and soldering iron, and USE them</li>
                <li>Learn C / C++, Python and Artificial Intelligence</li>
                <li>Start using Linux, IRC and get involved in hardware open source projects like fabathome.org, gnuradio.org</li>
                <li>Build your own capacitor, resistor, antenna or any other electrical components using paper, clips and other locally available material</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story 2 (Reverse) */}
        <div className="story-card reverse">
          <div className="story-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Hitendra%20Malviya.png?alt=media&token=dffdc016-3a6b-47ed-892d-6b10f8299cc2" alt="Hitendra Malviya" />
          </div>
          <div className="story-content">
            <div className="story-header">
              <div className="story-name">Hitendra Malviya</div>
              <div className="story-role">Information Technology (RAS Officer 2016)</div>
            </div>
            <div className="story-text">
              <p>
                Hitendra Malviya former Student of Information Technology (IT) Branch, JEC Group got selected as Rajasthan Administrative Services (RAS) Officer in 2016.
              </p>
            </div>
            <div className="success-mantra">
              <h4>His Strategy to RAS:</h4>
              <ul className="mantra-list">
                <li>During B Tech candidate can start their preparation for RAS</li>
                <li>Aptitude and Reasoning covers almost 20 percent of the syllabus.</li>
                <li>Buy some good and authenticate notes for study.</li>
                <li>Must go throughout with NCERT Books at least once from VIII onwards classes.</li>
                <li>Quality books must always be referred, as they offer depth and clarity which is the hallmark of cracking RAS.</li>
                <li>Solving previous 20 years papers of RAS and IAS can be very helpful.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story 3 */}
        <div className="story-card">
          <div className="story-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Suresh%20Kumar%20Choudhary.png?alt=media&token=cc1feddc-c984-433e-9c34-cb85781253a1" alt="Suresh Kumar" />
          </div>
          <div className="story-content">
            <div className="story-header">
              <div className="story-name">Suresh Kumar Choudhary</div>
              <div className="story-role">Computer Science (M.Tech IIT Kanpur)</div>
            </div>
            <div className="story-text">
              <p>
                Suresh Kumar Choudhary, former Student of Computer Science (CS) Branch, JEC Group got admission in M Tech, IIT Kanpur through GATE-12.
              </p>
            </div>
            <div className="success-mantra">
              <h4>His Strategy to Qualify GATE:</h4>
              <ul className="mantra-list">
                <li>II yr B Tech is the right time to start the preparation for the GATE as the curriculum of second year covers 40 percent of the syllabus.</li>
                <li>III yr B Tech covers almost 50 percent of the syllabus.</li>
                <li>Quality books must always be referred, as they offer depth and clarity which is the hallmark of cracking GATE.</li>
                <li>Solving previous 20 years papers of GATE, IES & PSU can be very helpful.</li>
                <li>Making monthly, weekly and daily plans is a good habit!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story 4 (Reverse) */}
        <div className="story-card reverse">
          <div className="story-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Urooz%20Khanam.png?alt=media&token=6c1c3253-6cdb-4a1f-b161-075f1a7be9e5" alt="Urooz Khanam" />
          </div>
          <div className="story-content">
            <div className="story-header">
              <div className="story-name">Urooz Khanam</div>
              <div className="story-role">Mechanical Engineering (2018 Pass Out)</div>
            </div>
            <div className="story-text">
              <p>
                Urooz Khanam, a 2018 pass out Mechanical Engineering student of Jaipur Engineering College, loves to work in challenging environments. She opted mechanical engineer in order to be quality engineer in MNC. But later on the advice of his father, she choose to work in a committed organization for developing educational support materials.
              </p>
            </div>
            <div className="success-mantra">
              <h4>Her Mantras of Success:</h4>
              <ul className="mantra-list">
                <li>Be strong in mathematics and science</li>
                <li>Make yourself highly analytical and detail-oriented</li>
                <li>Be sure to imaginative and creative</li>
                <li>Develop good communication skills</li>
                <li>Enjoy working in teams</li>
                <li>Get pleasure from building or improving the way things work.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story 5 */}
        <div className="story-card">
          <div className="story-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Sunil%20Sharma.png?alt=media&token=30aa52a8-58ec-43db-83dd-62475722d6bb" alt="Sunil Sharma" />
          </div>
          <div className="story-content">
            <div className="story-header">
              <div className="story-name">Sunil Sharma</div>
              <div className="story-role">Highest Paid Engineering Graduate (2012)</div>
            </div>
            <div className="story-text">
              <p>
                Is hard core programming done by urban students only? If you think the answer is yes, think it over again. Sunil Sharma, a boy from a farmer family in rural India, became the Highest Paid Engineering Graduate of 2012 batch in Rajasthan! Sunil graduated in 2012 from JEC Group in Computer Engineering. He did his schooling from an obscure village Dehlal in Lalsot Tehsil of Dausa, Rajasthan. He was in 11th class, when he came across the word 'Engineer' for the first time! An year later, while filling the form for AIEEE, he saw computer in a local cyber cafe and got fascinated.
              </p>
              <p>
                Here was an engineering student who had used the computer for the very first time in First Semester... Internet for the first time in Second Semester. Yet he refused to give in. He pursued studies single-mindedly and became one of the most regular students of his college. He used to attend all the classes and listen to faculty members with rapt attention and respect. The guidance he got by being humble and courteous to teachers, helped him to cross the threshold of knowledge in few years.
              </p>
              <p>
                He mastered JAVA and Oracle and honed programming skills through taking up variety of projects. He excelled not only in academics but also created a website that offers customized IT solutions to clients spread across continents. When he was in second year, he started utilizing the huge potential of LinkedIn. He made large number of contacts through it and started sending his CV to top notch people of IT industry.
              </p>
              <p>
                By now he had a rich experience of making software for national and international clients. Noticing the spark in him, he was recommended to Tony and Joe's Seafood Place. Although this job opportunity was not for fresher graduates, yet Sunil got shortlisted for the technical round. His competitors were experienced professionals across the world and yet, an unlettered farmer's son surpassed them all, bagging first position internationally!
              </p>
              <p>
                He was offered a whooping monthly salary of 10270 USD in Tony and Joe's Sea Food Place, Washington DC.
              </p>
            </div>
            <div className="success-mantra">
              <h4>Currently Playing Lead Roles In:</h4>
              <ul className="mantra-list">
                <li><strong>Hawks Code Softwares Pvt. Ltd.</strong> (Software Development Sector)</li>
                <li><strong>EasyShiksha.com</strong> - India's No. #1 Educational Product.</li>
                <li><strong>HawksCool</strong> - ERP</li>
                <li><strong>InstallerManiya</strong> - India's Best Installer Development Company</li>
                <li><strong>MusicManiya.com</strong> - Listen Free Live FM worldwide & Free songs</li>
                <li><strong>TCAIM:</strong> Take Control, IT & Affiliate Marketing Company (International IT, Marketing and Management Services with an Australian alliance)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story 6 (Reverse) */}
        <div className="story-card reverse">
          <div className="story-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Shailesh%20Jha.png?alt=media&token=4396a51b-07c7-4deb-b2ee-d4d9a99f0ed2" alt="Shailesh Jha" />
          </div>
          <div className="story-content">
            <div className="story-header">
              <div className="story-name">Shailesh Jha</div>
              <div className="story-role">Electrical Engineering (2008-2012)</div>
            </div>
            <div className="story-text">
              <p>
                Shailesh Jha, Batch 2008-2012 Electrical Engineering presently employed in TATA MOTORS, explains that for becoming an electrical engineer requires training, commitment, and the willingness to wonder about questions such as how a flat screen television manages to be energy efficient or how a Las Vegas casino manages to use so much electricity without blowing a fuse. Electrical engineers answer the tough electrical questions and may work on anything from handheld gadgets to massive electrical grids. In getting there, electrical engineers must consider questions such as: What level of degree should I get to maximize my income? What concentration should I learn to obtain my dream career? Do I have to join an engineering firm or can I work on my own?
              </p>
            </div>
            <div className="success-mantra">
              <h4>To Succeed as a Best Electrical Engineer:</h4>
              <ul className="mantra-list">
                <li>Use mathematical concepts to solve problems</li>
                <li>Understand how transmission lines carry alternate current</li>
                <li>Install and maintain power control equipment, motors and other electrical devices used in manufacturing plants and power plants</li>
                <li>Learn analyzing and designing complex electrical devices, software, and systems</li>
                <li>Communicate with other industries and business professionals effectively</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story 7 */}
        <div className="story-card">
          <div className="story-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/Harshita%20Bhat.png?alt=media&token=37ef146a-c1ad-44a2-84bf-91a76fd3055f" alt="Harshita Bhat" />
          </div>
          <div className="story-content">
            <div className="story-header">
              <div className="story-name">Harshita Bhat</div>
              <div className="story-role">Computer Science (2009-2013)</div>
            </div>
            <div className="story-text">
              <p>
                Harshita Bhat, 2009-2013 Batch CSE student of Jaipur Engineering College, advises that whether you enrolled for a Bachelor’s or a Master’s degree in Computer Science, you want to be a top student and prove you constantly advance your computing skills. Regardless of your specialization, Computer Science degrees are challenging, even if you are a super tech fanatic and passionate. So how do you deal and work with a significant amount of new information you learn every day matters a lot.
              </p>
            </div>
            <div className="success-mantra">
              <h4>Five Basic Tricks:</h4>
              <ul className="mantra-list">
                <li>Focus on practical skills</li>
                <li>Studying the night before a deadline will NOT work</li>
                <li>You could also make little websites or programs just for yourself, to test your abilities and push yourself further.</li>
                <li>Team work takes some skills you’ll need to brush up on and work constantly. Don’t forget that you’re not alone, and its’ highly unlikely you’ll be alone in the workplace as well. You’re likely to be part of a team.</li>
                <li>Your studies are critical, but they shouldn’t be the only thing in your life. Going out and having fun will refresh your mind and increase your grades. Relax, have fun, and good luck!</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      
      <LogoCarousel />
    </div>
  );
};

export default GutsNGlory;