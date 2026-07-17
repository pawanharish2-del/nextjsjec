"use client";
import React from 'react';
import '@/styles/RefuelRelax.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 


// export const metadata = {
//   title: "Best Engineering College with Cafeteria and Hostel in Jaipur",
//   description: "JEC has separate hostels for boys and girls with a capacity of 600+ students. Meals are served every day in hostel messes with a variety...",
//   keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
// };


function RefuelAndRelax() {
  return (
    <div className="refuel-page">
      
      {/* Hero Section */}
      <header className="refuel-hero">
        <h1>Refuel & Relax</h1>
        <p>Home Away From Home: Living & Wellness at JEC</p>
      </header>

      {/* Stats Floating Container */}
      <div className="refuel-stats-container">
        <div className="refuel-stats-grid">
            <div className="refuel-stat-card">
                <div className="refuel-stat-value">700+</div>
                <div className="refuel-stat-label">Boys Capacity</div>
            </div>
            <div className="refuel-stat-card">
                <div className="refuel-stat-value">300+</div>
                <div className="refuel-stat-label">Girls Capacity</div>
            </div>
            <div className="refuel-stat-card">
                <div className="refuel-stat-value">09</div>
                <div className="refuel-stat-label">Student Clubs</div>
            </div>
            <div className="refuel-stat-card">
                <div className="refuel-stat-value">10+</div>
                <div className="refuel-stat-label">Sports Facilities</div>
            </div>
        </div>
      </div>

      <div className="refuel-container">

        {/* Hostel Section */}
        <div className="refuel-section-split">
            <div className="refuel-text-block">
                <h2><i className="fas fa-bed" style={{color: 'var(--refuel-accent)'}}></i> Jaipur Engineering College Hostel</h2>
                <p>JEC has separate hostels for boys and girls with a capacity of 700+ for boys and 300+ for Girls respectively. Meals are served every day in hostel messes with a variety of meals to cater to the multi-ethnic tastes of the students and faculties hailing from different regions.</p>
                <p>Proximity to shopping areas, banking and medical facilities makes living convenient and comfortable for boarding students. A well-equipped gymnasium is accessible too. All hostel activities are carried out under the supervision of Hostel Wardens who are present 24X7 to look after the students, thus making JEC hostels a safe and comfortable zone for living.</p>
            </div>
            <div className="refuel-img-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2Fcontent-d4a85e62-53cb-4341-8b5b-ae6b20618698?alt=media&token=d05004bd-69b4-4e53-aa5b-48d0d077a875" alt="JEC Hostel" />
            </div>
        </div>

        {/* Cafeteria Section */}
        <div className="refuel-section-split">
            <div className="refuel-img-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/images%2Fcanteen.JPG?alt=media&token=729f6dca-faf6-4a36-88f4-c7ef7454e220" alt="JEC Cafeteria" />
            </div>
            <div className="refuel-text-block">
                <h2><i className="fas fa-coffee" style={{color: 'var(--refuel-gold)'}}></i> The Cafeteria</h2>
                <p>After a long hectic day schedule, cafeteria can be the best place to shed all your worries off with a cup of hot coffee. Clean and spacious cafe with a mouth-watering menu is open throughout the day for breakfast, lunch and snacks.</p>
                <p>It has a seating capacity of around 100 students. The vibrant atmosphere allows students to unwind themselves… they enjoy lighter moments with juniors, seniors as well as peers and build warm, healthy relationships.</p>
            </div>
        </div>

        {/* Activity Card */}
        <div className="refuel-activity-card">
            <h3><i className="fas fa-moon"></i> Life After Hours</h3>
            <p>Campus comes to life as the clock turns 5 in the evening. The playing grounds and courts bustle with energetic students, some experienced and some taking to sports for the first time! Sports Officers inculcate right mix of skills, persistence, discipline and regularity in each student. Besides, the Net Lab and Library are abuzz with those who love to explore and read. No one is Lecturer in evening hours at JEC Net Lab / Library, everyone is a Reader!</p>
        </div>

        {/* Wellness Header */}
        <div className="refuel-wellness-header">
            <span>Healthy Food, Healthy Life</span>
            <h2>Nutrition & Student Performance</h2>
            <p style={{color: 'var(--refuel-text-muted)', maxWidth: '800px', margin: '1rem auto'}}>The Dieticians of health are experimenting with students’ diets regularly. Studies show that nutritional status can directly affect mental capacity among Institute-aged children.</p>
        </div>

        {/* Science Grid */}
        <div className="refuel-science-grid">
            <div className="refuel-science-card">
                <h3>Increase Brain Function</h3>
                <ul>
                    <li>Iron deficiency can decrease dopamine transmission, impacting cognition.</li>
                    <li>Deficiencies in vitamins (B, E, Iodine, Zinc) inhibit concentration.</li>
                    <li>Amino acid and carbohydrate supplementation can improve perception and reasoning.</li>
                </ul>
            </div>
            <div className="refuel-science-card">
                <h3>Behavior & Environment</h3>
                <ul>
                    <li>Good nutrition reduces absences and increases attendance.</li>
                    <li>Malnutrition leads to behavior problems.</li>
                    <li>Balanced diets (protein, fat, fiber) counteract negative behavioral effects.</li>
                </ul>
            </div>
            <div className="refuel-science-card">
                <h3>Positive Outcomes</h3>
                <ul>
                    <li>Higher quality diets are associated with better exam performance.</li>
                    <li>Improving diet quality leads to students being on-task more often.</li>
                    <li>Eliminating sugary drinks reduces tardiness and disciplinary referrals.</li>
                </ul>
            </div>
        </div>

        <div style={{background: '#ECFDF5', padding: '2rem', borderRadius: '12px', borderLeft: '5px solid #10B981', marginBottom: '5rem'}}>
            <h4 style={{color: '#065F46', fontFamily: 'var(--refuel-font-head)', marginBottom: '0.5rem'}}>The Final Say</h4>
            <p style={{color: '#064E3B'}}>Every student has the potential to do well. Failing to provide good nutrition puts them at risk. Taking action today to provide healthier choices can help to set students up for a successful future full of possibilities.</p>
        </div>

        {/* Tips Grid */}
        <div className="refuel-section-header">
            <h2>Precious Advice</h2>
            <p>A Complete Diet Plan for Students to Achieve Their Goal</p>
        </div>

        <div className="refuel-tips-grid">
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-capsules"></i></div>
                <h4>Vitamin B & Iron</h4>
                <p>Include pulses, spinach, soybean, and eggs to stay re-charged mentally.</p>
            </div>
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-apple-alt"></i></div>
                <h4>Fruits over Pills</h4>
                <p>Eat oranges for Vitamin C instead of tablets. Loaded with fiber and minerals.</p>
            </div>
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-clock"></i></div>
                <h4>Regular Intervals</h4>
                <p>Eat frequently to keep energy up and quit the habit of improper snacking.</p>
            </div>
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-utensils"></i></div>
                <h4>Eat Less per Meal</h4>
                <p>Divide 3 heavy meals into 6 smaller ones to avoid falling asleep while studying.</p>
            </div>
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-bacon"></i></div>
                <h4>Don't Skip Breakfast</h4>
                <p>Skipping breakfast kills focus. Eat cornflakes, milk, or fruit to sharpen memory.</p>
            </div>
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-bolt"></i></div>
                <h4>Antioxidants</h4>
                <p>Bananas, blueberries, and sweet lime help brain function and memory.</p>
            </div>
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-carrot"></i></div>
                <h4>Dark Vegetables</h4>
                <p>Broccoli, spinach, and beetroot. The darker the color, the higher the value.</p>
            </div>
            <div className="refuel-tip-card">
                <div className="refuel-tip-icon"><i className="fas fa-tint"></i></div>
                <h4>Liquid Diet</h4>
                <p>Juices, green tea, and glucose drinks keep you fit all day long.</p>
            </div>
        </div>

      </div>
      
      <LogoCarousel />
    </div>
  );
}

export default RefuelAndRelax;