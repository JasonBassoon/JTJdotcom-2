import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    id: 1,
    position: "Early Responsibility and Work Ethic",
    company: "Early Development",
    start_date: "Elementary School",
    end_date: "Jr. High",
    location: "Meadows Place, TX",
    description: "Before fifth grade, I served as a student crossing guard at my elementary school, helping direct traffic and ensure the safety of younger students. At the time, this responsibility was entrusted to students; today it is typically handled by paid adults. This role established early lessons in accountability, trust, and responsibility for others. Shortly after, I became a Houston Chronicle newspaper carrier. This required waking up around 5:00 a.m. daily to deliver newspapers by bicycle throughout my neighborhood, regardless of weather. I was also responsible for collecting overdue payments from customers, an unusual level of financial and interpersonal responsibility for a child. These experiences reinforced discipline, reliability, and follow-through. I was also active in Cub Scouts through Webelos, reinforcing citizenship, teamwork, responsibility, and self-discipline.",
    highlights: ["Accountability", "Discipline", "Reliability", "Financial Responsibility", "Customer Service"]
  },
  {
    id: 2,
    position: "Early Industrial Experience",
    company: "Technical Work",
    start_date: "Age 14-16",
    end_date: null,
    location: "Sugar Land, TX",
    description: "At age fifteen, I began working in my father's gas turbine repair business. I performed hands-on industrial labor including TIG welding, grinding, sandblasting, forklift operation, assisting with turbine component repair and dye-penetrant testing (PT) of repaired turbine parts. This PT work would foreshadow my future work in the Non-destructive Testing (NDT) field. This environment required precision, adherence to safety procedures, and respect for industrial risk. The income from this job allowed me to purchase my first drum set, earned entirely through my own labor. After my father passed away, that job came to an end.",
    highlights: ["TIG Welding", "Industrial Safety", "Precision Work", "Equipment Operation", "Quality Testing"]
  },
  {
    id: 3,
    position: "Service and Customer-Facing Work",
    company: "Service Industry",
    start_date: "High School / Early Career",
    end_date: null,
    location: "Meadows Place, TX and Houston, TX",
    description: "I later worked as a lifeguard and swim instructor at a community pool, responsible for safety, instruction, and emergency response. Around the same time, I worked at an AMC movie theater (Southway 6 at Gessner and Beechnut). I progressed from concessionist to usher, and eventually became the first male employee trained as a cashier at that location. At the time, ticketing was cash-only with no registers, requiring mental calculations and accurate change handling. During a projectionist union strike, I was named the build-up/tear-down guy and I was trained to assemble and disassemble film reels. I performed late-night build-up and tear-down of films, sequencing reels, trailers, headers, footers, and preparing outgoing films for shipment. Accuracy was critical, as errors directly impacted theater operations.",
    highlights: ["Emergency Response", "Public Safety", "Customer Service", "Mental Math", "Technical Precision"]
  },
  {
    id: 4,
    position: "Military Service – United States Navy",
    company: "Military",
    start_date: "1987",
    end_date: "1989",
    location: "Battleship USS Iowa - BB61 Norfolk, VA",
    description: "I enlisted in the United States Navy and served aboard the USS Iowa as a Damage Controlman. I was responsible for maintaining firefighting and flood-control equipment and training crew members in emergency response procedures. I advanced to Petty Officer Third Class (E-4) and gained my first exposure to formal security practices through a Confidential security clearance. I was aboard the USS Iowa during the April 19, 1989 turret explosion, an event that permanently reinforced the importance of procedure, safety culture, and risk management.",
    highlights: ["Emergency Response", "Safety Training", "Security Clearance", "Risk Management", "Leadership", "Procedure Adherence"]
  },
  {
    id: 5,
    position: "Commercial Diving and Non-Destructive Testing",
    company: "Technical Inspection",
    start_date: "Mid-1990's and Mid-2000's",
    end_date: null,
    location: "14+ States",
    description: "After the Navy, I attended The Ocean Corporation and trained as a commercial diver while studying non-destructive testing (NDT). I gained experience in Ultrasonic Testing (UT), Magnetic Particle Testing (MT), Dye Penetrant Testing (PT), and Eddy Current Testing (ECT). I worked in refineries, chemical plants, pipeline terminals, tank farms, nuclear facilities, and on Alaska's North Slope. I spent extended time at the Palo Verde Nuclear Generating Station in Arizona and performed pipeline inspections under hazardous conditions.",
    highlights: ["NDT Testing", "Commercial Diving", "Hazardous Environments", "Nuclear Safety", "Technical Analysis"]
  },
  {
    id: 6,
    position: "Industrial Leadership and Technical Documentation",
    company: "Management & Documentation",
    start_date: "Mid-1990's and Mid-2000's",
    end_date: null,
    location: "14+ States",
    description: "I worked for inspection firms including HMT Inspection and TesTex. I advanced from field technician to Level II inspector and crew lead, coordinating teams ranging from small crews to full shutdown operations involving multiple shifts and dozens of personnel. At HMT, I was promoted to Operations Coordinator, managing personnel assignments, equipment logistics, compliance requirements, and scheduling across multiple job sites nationwide. I authored inspection reports for engineers and clients, combining technical writing with diagrams and visual documentation. Though informal at the time, this work constituted professional technical documentation.",
    highlights: ["Team Leadership", "Operations Management", "Technical Writing", "Logistics", "Compliance", "Multi-site Coordination"]
  },
  {
    id: 7,
    position: "Creative Technology and Software Foundations",
    company: "Technology & Creative",
    start_date: "1996",
    end_date: "1998",
    location: "Sugar Land, TX",
    description: "I studied computer graphics and interactive media, learning Adobe Illustrator, Photoshop, and Macromedia Director with its scripting language, Lingo. This led to a contract role in the marketing graphics department at the Anadrill Schlumberger headquarters in Sugar Land, Texas. I worked with professional artists producing technical and marketing presentations for the general workforce, lawyers, and the C-suite. This role revealed my strength in independently learning complex software systems through documentation.",
    highlights: ["Graphic Design", "Software Learning", "Technical Presentations", "Self-directed Learning", "Documentation Analysis"]
  },
  {
    id: 8,
    position: "Caregiving, Education, and Resilience",
    company: "Personal Growth",
    start_date: "2008",
    end_date: "2020",
    location: "Meadows Place, TX; Clear Lake, TX; Houston, TX",
    description: "From 2008 until my mother's passing in August 2020, I shared full-time caregiving responsibilities with my sister. During this period, I earned an Associate of Science degree from Houston Community College and later studied molecular biology at the University of Houston–Clear Lake, coming close to completing a bachelor's degree. I supported myself through part-time work including bartending, retail, and later delivery-based gig roles, balancing employment with caregiving.",
    highlights: ["Caregiving", "Time Management", "Resilience", "Academic Achievement", "Work-Life Balance"]
  },
  {
    id: 9,
    position: "Recent Work and Transition to Cybersecurity",
    company: "Current Path",
    start_date: "2019",
    end_date: "Present",
    location: "Houston Metropolitan Area",
    description: "Following my mother's passing and during the COVID-19 pandemic, I worked for Postmates, Favor, DoorDash, Uber Eats, GrubHub, and Amazon Flex. These roles required ongoing background checks and trust verification. Concurrently, I began a focused transition into technology, studying Linux, Python, networking fundamentals, and cybersecurity concepts. I am currently building and documenting a home Security Operations Center (SOC) lab involving firewall hardening, network segmentation, and SIEM deployment using Wazuh.",
    highlights: ["Linux", "Python", "Networking", "SIEM", "Firewall Configuration", "Security Operations"]
  },
  {
    id: 10,
    position: "Why Cybersecurity?",
    company: "Career Focus",
    start_date: "2023",
    end_date: "Present",
    location: "",
    description: "It all started when I received an email from the VA about free career training for veterans through the D'Aniello Institute for Veterans and Military Families at Syracuse University. I explored the options, chose IT, and eventually narrowed it down to Security+. It looked challenging, and that appealed to me. Looking forward to transitioning into IT, I bought a laptop with Linux preinstalled on it.\n\nI completed the course and earned the certificate but I quickly realized that earning a credential and being truly capable are two different things.\n\nThe deeper I went, the more gaps I saw: networking fundamentals, Linux fluency, real-world troubleshooting experience.\n\nSo I started filling them.\n\nI began studying networking more seriously because security depends on it. I enrolled in Harvard's CS50 for Python course on edX.org to build programming fundamentals. I followed working analysts and engineers on YouTube to understand what the job actually looks like day to day. Many of them recommended hands-on platforms like TryHackMe.com so I started working through labs there.\n\nI also noticed that many people serious about breaking into cybersecurity had personal websites documenting their progress. So I built one. Using a tool I found on YouTube, (Bolt.new), I created JasonsTechJourney.com to track what I'm learning and to hold myself accountable. It became more than a website. It became proof that I'm actively building toward this field.\n\nThe more I learn, the more I realize how much more there is to learn. Instead of discouraging me, that is what keeps me going.\n\nAt some point, this stopped being about passing an exam and started being about building real capability.\n\nThat commitment eventually turned into building and maintaining a fully segmented home SOC lab, because I learn best by breaking, fixing, and documenting real systems. I'm very proud of this accomplishment. Please read about my SOC lab in the Projects section.",
    highlights: ["Security+ Certified", "CS50 Python", "TryHackMe Labs", "Self-Directed Learning", "Home SOC Lab", "Continuous Improvement"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Life Experience</h2>
        <p className="section-subtitle">
          Professional journey and hands-on experience building technical skills
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={24} />
                </div>
                <div className="experience-title-group">
                  <h3 className="experience-position">{exp.position}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
              </div>

              <div className="experience-meta">
                <div className="experience-meta-item">
                  <Calendar size={16} />
                  <span>
                    {exp.end_date === null ? exp.start_date : `${exp.start_date} - ${exp.end_date || 'Present'}`}
                  </span>
                </div>
                {exp.location && (
                  <div className="experience-meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                )}
              </div>

              {exp.description && (
                <p className="experience-description">{exp.description}</p>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}

              {index < experiences.length - 1 && (
                <div className="experience-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}