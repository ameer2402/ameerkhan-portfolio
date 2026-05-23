import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Application Developer Apprentice",
      company: "Google",
      period: "April 2025 – March 2026",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Developed a multi-tier sourcing system for Google Search, prioritizing first-party structured knowledge sources over third-party APIs, improving data reliability for 500M+ monthly queries.",
        "Designed and shipped a scalable Query Result Service (QRS) data provider framework, serving 100+ structured data points for traditional and EV two-wheeler specifications to AI-driven search tools (AIM).",
        "Built a textualization service enabling AI answers to cite structured knowledge sources, boosting answer accuracy by 40% and meeting enterprise-grade auditability and compliance requirements.",
        "Applied Prompt Engineering to generate diverse query sets for intent-matching evaluation, driving a 50% increase in tool selection rate for the Motorcycle feature.",
        "Delivered frontend UI components for the PriceBreakDown feature with INR currency localization, achieving a 5% uplift in user engagement through cross-functional collaboration with UX and QA."
      ],
    },
    {
      role: "Software Engineer",
      company: "LTI Mindtree",
      period: "December 2024 – March 2025",
      location: "Bhubaneswar, Odisha",
      achievements: [
        "Led a 5-engineer team delivering a full-stack Pet Care platform in a 10-day Agile sprint; owned HLD, LLD, and data structure decisions across a normalized 8+ entity relational schema.",
        "Engineered secure REST APIs using Spring Boot and Spring Security (RBAC + JWT) for 3+ user roles.",
        "Built a Hibernate ORM/JPA persistence layer with optimized mappings and documented 30+ endpoints using Swagger.",
        "Managed Maven builds and Git version control across 50+ commits, led code reviews, and drove weekly client syncs."
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Oasis Infobyte",
      period: "August 2023 – September 2023",
      location: "Hyderabad, Telangana",
      achievements: [
        "Created 3+ frontend applications following MVC architecture using HTML5, CSS3, and Vanilla JavaScript, applying modular design patterns.",
        "Conducted cross-browser and responsive UI testing across 4 major browsers and multiple device sizes using DevTools and debugging workflows.",
        "Resolved layout and CSS issues for consistent UX across applications."
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background hidden md:block" />

              <div className="md:ml-20 glass-card p-8 rounded-2xl hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold text-lg flex items-center gap-2">
                      <Briefcase size={18} />
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-foreground/90">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
