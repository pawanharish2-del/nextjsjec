// "use client";
import React from 'react';
import '@/styles/EngineeringProjects.css'; 
import LogoCarousel from '@/components/LogoCarousel'; 


export const metadata = {
  title: "Engineering Projects: Jaipur Engineering College",
  description: "Engineering projects offer students with a platform to apply engineering to the real world, discover the joy of working in a team",
  keywords: "JIET focuses on meaningful education and prepares students to think beyond a degree. Engineering projects offer students with a platform to apply engineering to the real world, discover the joy of working in a team and extend the experience to new domains",
};

const EngineeringProjects = () => {
  return (
    <div className="projects-page">
      
      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-content-layer">
        <h1>Engineering Projects</h1>
        <p>Students Learn, Innovate, Create & Demonstrate Themselves</p>
        <a
                        href="mailto:info@jeckukas.org.in"
                        className="hero-apply-btn" >
                        Email us 
                    </a>
        </div>
      </header>

      {/* STATS SECTION */}
      <div className="stats-container">
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-value">Plenty / Year</div>
                <div className="stat-label">Real World Projects</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">Premier</div>
                <div className="stat-label">Network with IITs/NITs</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">Innovation</div>
                <div className="stat-label">Students Learn & Create</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">04</div>
                <div className="stat-label">Research Cells</div>
            </div>
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="max-width-container">

        <div className="quote-banner">
            “The aims, objectives, education, technology and real world all became practical today.”
        </div>

        <div className="section-split">
            <div className="text-block">
                <h3>Thinking Beyond a Degree</h3>
                <p>Engineering projects involve creative problem solving of real world problems. So, JEC focuses on meaningful education and prepares students to think beyond a degree. Students learn how to work with other group members and present the progress to their peers and faculties.</p>
                <p>Engineering projects offer students with a platform to apply engineering to the real world, discover the joy of working in a team and extend the experience to new domains. They are eager to try, experiment and learn from their failures. Excellent projects are completed by students in previous academic sessions.</p>
            </div>
            <div className="img-block">
                <img src="/images/yulii-shtel-3PJNIvkf-Tw-unsplash.jpg" alt="Students in Lab" />
            </div>
        </div>

        <div className="section-header">
            <span>Showcase</span>
            <h2>Notable Student Projects</h2>
            <p>To name a few...</p>
        </div>

        <div className="projects-grid">
            
            {/* Project 1 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600" alt="Drilling Machine" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Automatic Pneumatic Drilling Machine</div>
                    <div className="proj-team">By: Subhash Lamba, Santosh Mahatu, Pradeep Kumar Das, Manjeet Kumar Sen</div>
                    <div className="proj-desc">
                        In this project drilling machine uses pneumatic power instead of motor power. The drilling operation is carried out with the help of pneumatic cylinder which provides the up down motion to the drill tool. This project is very useful in industries in order to save time and manpower. Time control unit is used to control the drilling operation. It's a low cost multipurpose machine which can also carry out operations like grinding, screw driving with less consumption of time and high accuracy.
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600" alt="Virtual Medical" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Virtual Medical</div>
                    <div className="proj-team">By: Himanshu, Ashish Deo, Bhuvan Rohtagi, Jitesh Singhal</div>
                    <div className="proj-desc">
                        The project is aimed at providing remedies to various medical conditions, taking as input the symptoms and the present condition of the patient. It simply compares the present condition of the patient to the standard set of the symptoms of the disease and suggests a remedy to the disease. It aims at providing a complete information portal of the patient's present condition, medical history, hereditary disease (if any) etc. to the doctor.
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600" alt="Electricity Generation" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Generation of Electricity by Garden Gate</div>
                    <div className="proj-team">By: Ashish Bhardwaj, Mohsin Khan, Rajkumar Jha, Rohan Bhati</div>
                    <div className="proj-desc">
                        A rotating wheel is employed at the top of the wooden cardboard with the help of supporting dynamo board. This wheel is connected with a dynamo whose output is connected to a battery. In day time, when lamps are not in use we can charge the battery and power can be produced by rotating the wheel in any direction. This technique can be used in many places like parks, roads, children swings, etc. IIT-D, Sahara Hotel, Dubai, is currently using this technique.
                    </div>
                </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="/images/Fully Automated Mobile Beverage Serving Unit.png" alt="Mobile Beverage" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Fully Automated Mobile Beverage Serving Unit</div>
                    <div className="proj-team">By: Mohd. Talib, Dharma Ram, Asif Mohd Sheikh, Gaurav Kumar, Upadhyay Aman</div>
                    <div className="proj-desc">
                        Solar energy can be used to power a system to accomplish its objectives. We utilize solar energy to provide a service for persons far from traditional power sources. We designed and constructed a mobile unit to serve hot or cold water on command from an app. The mobile unit will be powered by a battery which is charged by a sun tracking solar panel charging station.
                    </div>
                </div>
            </div>

            {/* Project 5 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="/images/Brass collection.jpg" alt="Brass Casing" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Brass Casing Collector</div>
                    <div className="proj-team">By: Simran Grover, Chaitali Jaiswal, Mahesh Kumar Dubey, Shivam Kumar Singh</div>
                    <div className="proj-desc">
                        Practice and training of defense units requires firing of millions of rounds of ammunition from hand-carried weapons which results in extensive empty shells and casings scattered about firing ranges and training areas. Our design allows for a fully automated system that collects casings of various calibers efficiently on different terrains.
                    </div>
                </div>
            </div>

            {/* Project 6 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=600" alt="Lawn Mower" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Fully Automated Lawn Mowing System</div>
                    <div className="proj-team">By: Deepak, Sourav, Harshit, Kalpana</div>
                    <div className="proj-desc">
                        Design a fully automated lawn care system which can control the direction and speed of the mower remotely and autonomously. The system should have extended functionality including mowing, seeding, aerating, and fertilizing. The system should optimize the lawn care process by minimizing distance traveled, time, and energy usage.
                    </div>
                </div>
            </div>

            {/* Project 7 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="/images/syed-maaz-pGEGdfNRdG4-unsplash.jpg" alt="Cupcake Production" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Fully Automated Multi-layer Cupcake Production</div>
                    <div className="proj-team">By: Vivek, Kashish, Pllavi, Ratnakar</div>
                    <div className="proj-desc">
                        Design and construct a fully automated and flexible cupcake machine capable of receiving orders from customers and delivering desired cupcakes on time. It is capable of baking, applying layers of batter, adding other items to get baked inside the cupcake, and ice as requested by the user.
                    </div>
                </div>
            </div>

            {/* Project 8 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600" alt="UAS Drone" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Cleaning Parks Using UAS</div>
                    <div className="proj-team">By: Deepak Sharma, Ahatshyam, Sunil Shukla, Nikhil Jain, Yamini Kachwaha</div>
                    <div className="proj-desc">
                        UAS has been widely used for surveillance and inspection. There is a potential to use UAS to accomplish labor intensive tasks. One example is to clean beaches. There is often litter left on parks which is difficult to clean up. Design and construct a UAS-based system to identify and collect the bottles and cans.
                    </div>
                </div>
            </div>

            {/* Project 9 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="/images/3cbccd01-5de0-48da-9827-1875516d583d.jpg" alt="Robotic Gripper" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Robotics with Dexterous Gripper for Fruit Inspection</div>
                    <div className="proj-team">By: Ravi Ranjan, Gaurav Kumar, Aman Upadhyay, Rashmi, Satya Narayan</div>
                    <div className="proj-desc">
                        Many people order fruit baskets online during the holidays. In order to satisfy the huge demand, we have designed and constructed a robotic system for automated fruit basket production. This system is able to pick the right fruit to a basket and deliver at the correct time based on a customer's order.
                    </div>
                </div>
            </div>

            {/* Project 10 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="/images/oxygen tank.jpg" alt="Oxygen System" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Follow Me Oxygen Tank System</div>
                    <div className="proj-team">By: Binay Gupta, F A Khan, Shakir, Anushka D Jha</div>
                    <div className="proj-desc">
                        Design and construct a low cost, fully automated oxygen tank cart that follows the person who requires continuous use of oxygen. The system needs to provide up-to-date information about the layout of the person’s movement, current oxygen flow rate, alerts the medical person in charge of the unusual status, and recommends the time of tank replacement.
                    </div>
                </div>
            </div>

            {/* Project 11 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="/images/traffic and mobile.jpg" alt="Traffic Robot" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Robot and Mobile Traffic Stop Light</div>
                    <div className="proj-team">By: Shahrukh, Aman Upadhyay, Mahesh Dubey, Chaitali, Swapnil Kewaliya</div>
                    <div className="proj-desc">
                        Design a robot and mobile traffic stop light so law enforcement personnel do not need to serve as traffic cops at churches on Sundays. Mobile units could also be used when electric power is lost at an intersection. The township or city will drop robots with mobile traffic stop lights to set them up for specific durations.
                    </div>
                </div>
            </div>

            {/* Project 12 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600" alt="Amazon Picking" />
                </div>
                <div className="project-content">
                    <div className="proj-title">Amazon Picking Challenge</div>
                    <div className="proj-team">By: Rashmi Upadhyay, Yamini, Kashish Kumari, Aditya, Navneet</div>
                    <div className="proj-desc">
                        Amazon is able to quickly package and ship millions of items. However, commercially viable automated picking in unstructured environments still remains a difficult challenge. The objective is to design and construct a fully automated order retrieval system that is able to pick and retrieve items from shelves and place them into a container.
                    </div>
                </div>
            </div>

            {/* Project 13 */}
            <div className="project-card">
                <div className="project-img-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/jec-website-55397.firebasestorage.app/o/hardcode%20images%2F3D%20printer.jpg?alt=media&token=ce1f3deb-aa9d-4aa8-9aa3-2f2b4b3915c4" alt="3D Printer" />
                </div>
                <div className="project-content">
                    <div className="proj-title">3D Printer for Fabricating Fiber-Reinforced Materials</div>
                    <div className="proj-team">By: Priya Sharma, Harshit, Abhishek Sharma, Parth Sarthi, Vishnu Verma, Manish Saxena</div>
                    <div className="proj-desc">
                        3D printing technology has been considered the next generation of manufacturing technology. Composite materials with short fibers have been used in 3D printing. Fabrication with continuous fiber reinforced material is still challenging. We have already developed a 3D printer, which can print materials with continuous fibers.
                    </div>
                </div>
            </div>

        </div>

        {/* CTA Section */}
        <div className="cta-section">
            <div className="cta-content">
                <h2>Innovate. Create. Compete. Celebrate!!!</h2>
                <p>Join the community of creators and problem solvers at JEC.</p>
            </div>
        </div>

      </div>
      
      <LogoCarousel />
    </div>
  );
};

export default EngineeringProjects;