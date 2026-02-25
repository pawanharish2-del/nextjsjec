import React from 'react';
import '@/styles/jec-vibrant-india.css'; // Importing the preserved CSS
import LogoCarousel from '@/components/LogoCarousel';


export const metadata = {
  title: "JEC: Vibrant India | Jaipur Engineering College I Incredible India I Incredible Rajasthan",
  description: "Engineering affects virtually every aspect of our society and engages a substantial set of the population in carrying out engineers' plans and...",
  keywords: "JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering &amp; Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality.",
};

const VibrantIndia = () => {
  return (
    <div className="vibrant-page">
      {/* HERO SECTION */}
      <header className="hero">
        {/* Placeholder for the banner image */}
        <img 
            src="https://cdn-icons-png.flaticon.com/512/5351/5351486.png" 
            alt="Vibrant India Banner" 
            className="hero-banner-img"
            style={{ width: '150px', marginBottom: '20px' }} 
        />
        
        <h1>JEC: Vibrant India</h1>
        <p>Ideal Mix of Academics & Cultural Activities</p>
      </header>

      {/* STATS SECTION */}
      <div className="stats-container">
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-value">Ideal Mix</div>
                <div className="stat-label">Academics & Culture</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">Global</div>
                <div className="stat-label">Interactions</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">Rise & Act</div>
                <div className="stat-label">Opportunity</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">7,300+</div>
                <div className="stat-label">Alumni Network</div>
            </div>
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="container">

        <div className="section-header">
            <span>Philosophy</span>
            <h2>Innovate. Create. Compete. Celebrate.</h2>
        </div>
        
        <p className="text-justified">JEC is an integral part of its host city of Jaipur, a diverse and vibrant community noted for its intellectual life, history, and thriving innovation climate. With a campus nestled in Aravali Hills in Kukas Jaipur, and near to glorious world heritage "THE AMER FORT", the Institute is optimally positioned to collaborate with its neighbors and to contribute to its community.</p>
        
        <p className="text-justified">Innovate. Create. Compete. Celebrate!!! At JEC, we welcome and support a diverse community of remarkable talent. But we know that to make a better world, we must work to continually make a better JEC. With that inspiration, we strive to remove barriers to talent wherever we find them, to build mutual understanding across our campus, to celebrate our wonderful range of cultures and backgrounds — and to help everyone in our community feel at home at JEC.</p>

        <div className="quote-banner" style={{ background: '#F1F5F9', borderColor: 'var(--primary)', color: 'var(--text-main)', fontStyle: 'normal', textAlign: 'left' }}>
            <strong style={{ color:'var(--primary)', display:'block', marginBottom:'10px' }}>Engineering & Society</strong>
            As we know that engineering affects virtually every aspect of our society and engages a substantial set of the population in carrying out engineers' plans and designs. But what is the nature of that activity? What is the role of engineering in responding to society's needs as well as in shaping them? How well does engineering carry out that role? These questions are being asked with increasing urgency by a society that has benefited from great advances in technology, and at the same time, seen dislocations and experienced fears associated with technology—a society that has become increasingly dependent on technology, but also increasingly ambivalent about it. Often the questions about technology are confused with questions about engineering in the mind of the public despite a growing literature on the relation of technology to the rest of society. In recent years several symposia by the National Academy of Engineering and other engineering organizations, as well as various reports and articles have addressed aspects of this relationship.
        </div>

        <div className="quote-banner">
            “Cultural engineering is a conceptual approach to cultural development planning and management that takes into account the changing concepts of culture and the design of practical strategies for dealing with issues and problems raised by culture and development in diverse contexts…. In other words, cultural engineering is about systems, processes, alternatives and the formulation of creative solutions to challenges in the development of cultural institutions and the promotion of people’s participation in cultural life”.
        </div>
        
        <p className="text-justified">These cultural life at Engineering are more often called E-Fests or Engineering Festivals” E-Fests, or engineering festivals, are WAY more than just a series of events. It’s a movement driven by engineering students that has gained force globally. These year-round programs empower engineering students like YOU to ignite innovation, build your resume, expand your knowledge, participate in stimulating competitions, jump start your career and most importantly, celebrate engineering!</p>

        <div className="section-header">
            <span>Heritage</span>
            <h2>Celebrating Values</h2>
        </div>
        <p className="text-justified">Like all professionals, engineers must possess a well-developed ability to synthesize issues and communicate effectively to diverse audiences. These E-Fests are designed to emphasize the value of an ability to deliver clear, concise and effective oral presentations, particularly pertaining to some sphere in which an engineer is or should be involved. If engineers are to play a more decisive and enlightened social role, the engineering community must be willing to act in line of the culture and rituals too on a number of issues. To fulfill this social vacuum within the budding engineers JEC has taken a step forward to celebrate festivals of diverse cultures and society. In this line the JEC family is proud to say that the social & cultural festivals like Buddha Poornima, Vivekanand Jayanti, Durga Puja, Holi, Depawali, Arya Samaj activities etc are celebrated with much fanfare in JEC Campus every year as deeper understanding of the consumer and cultural experience are key to making exceptional things.</p>
        
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem' }}>The briefs of selected few E-Fest activities organized year after year are given below</p>

        {/* SECTION SPLIT 1 */}
        <div className="section-split">
            <div className="text-block">
                <h3>Swami Vivekananda Jayanti</h3>
                <p>The 156th Birth Anniversary of Swami Vivekananda (Swami Vivekananda Jayanti) was celebrated at college campus with solemnity on 8th January 2019. A special worship of Swamiji, Vedic Chanting, Bhajans, Havan and devotional singing marked this special occasion. Such initiatives fulfill the aim to foster new relationships to team up with peer engineering students, community and the world.</p>
                <p>We try to follow his saying <strong>"Truth can be stated in a thousand different ways, yet each one can be true.”</strong></p>
            </div>
            <div className="img-block">
                <img src="/Vivekananda.png" alt="Swami Vivekananda" />
            </div>
        </div>

        {/* SECTION SPLIT 2 (REVERSE) */}
        <div className="section-split reverse">
            <div className="text-block">
                <h3>Swami Keshvanand Jayanti</h3>
                <p>To adorn the ideals of Swami Keshvanand's deep understanding of the rural society every year JEC celebrates Swami Keshvanand Jayanti. The teachings of the desert region can be gleaned from his book "Maru Bhumi Seva Karya". In this book, he has explained the peculiarities of the Desert region, identified the problems and suggested solutions. It was Swami Keshvanand's lifelong endeavour to eradicate social evils like untouchability, illiteracy, child marriage, indebtedness, poverty, backwardness, alcohol abuse, moral dissipation, etc.</p>
                <p>Swami Keshvanand, born in a Jat Hindu family of Dhaka clan, and a renunciate belonging to the Udasi sect which was propagated by Srichandji, son of guru Nanakdevji, the founder of the Sikh faith, was a unique example of communal harmony. He organised celebrations in honour of Sikh, Bishnoi, Namdhari and Jain gurus. During the partition of India in 1947, he looked after wounded Muslims admitted to hospitals and arranged food and shelter for them. To be true engineering professionals his teachings of equality ought to be inherited by engineers.</p>
            </div>
            <div className="img-block">
                <img src="/Keshwanand.png" alt="Community Service" />
            </div>
        </div>

        {/* SECTION SPLIT 3 */}
        <div className="section-split">
            <div className="text-block">
                <h3>Arya Samaj</h3>
                <p>Although, we are an engineering college, we promote, the values of Arya Samaj, the equality of all human beings and the empowerment of women. The Arya Samaj members consider the Gayatri Mantra ,as the most holy mantra and chants it peridically, do the meditation known as 'Sandhya' and make offering to the holy fire '('havan).</p>
                <p>The havan can be performed with a priest for special occassions or without a priest for personal worship. The havan is performed as per the havan pustika, usually a simplified guide to do havan, having mantras for general or special occasions. The priest is generally a Vedic scholar from the local Arya Samaj Mandir or Gurukul. Sometimes elder members of family or neighbours can also perform the havan acting as a purohit. The host is known as the 'Yajmana'. The priest can be called an 'Acharya', 'Swami ji' or 'Pandit Ji' depending upon his scholar status and local reputation. It is customary to give a nominal 'dakshina' to the priest after havan, although in Arya Samaj it is more symbolic and the priest doesn't state any sum.</p>
                <p><strong>The Diya with four wicks of Arya Samaj points in each direction represent N-North, W-West, S- South and E-East. This has some kind of resemblance with Vastu-Shastra and Engineering.</strong></p>
            </div>
            <div className="img-block">
                <img src="/Arya.png" alt="Havan Ritual" />
            </div>
        </div>

        {/* FOOTER AREA (CONCLUSION) */}
        <div className="vibrant-section">
            <div className="vib-content">
                <span style={{ color:'var(--primary)', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', display:'block', marginBottom:'10px' }}>Community</span>
                <h2>Vibrant India: Symbols of Success</h2>
                <p>Students like you are what make our campus community great. Our diversity and international engagement make us more inquisitive as scholars and more compassionate as human beings. Our doors remain open to everyone. JEC, Jaipur is known as the City of Good Neighbors for good reason. Here, we take care of one another. Here, you'll be supported by friendly people willing to help you if you need it. Here, you can be yourself while being a part of an exciting Jaipur city.</p>
                <p>Enthusiasm for our undeniable cultural diversity is what makes JEC such a welcoming place. You won’t have any trouble finding an international-themed event happening on nearby campus and in city , from our annual Fiesta and Education Week to our multicultural Alumni.</p>
                
                <div className="vib-quote">
                    “I am an Indian and we celebrate all festivals in every region of every religion. That is why it is called Incredible India!” <br />
                    — Vinayak Muraleedharan
                </div>
            </div>
        </div>

      </div>
      <LogoCarousel />
    </div>
  );
};

export default VibrantIndia;