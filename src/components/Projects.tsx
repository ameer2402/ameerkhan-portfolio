import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Query Result Service (QRS) for Google Search",
      description: "A scalable data provider framework and AI tool developed at Google to process complex natural language queries regarding traditional and EV two-wheeler specifications.",
      bullets: [
        "Designed and shipped a multi-tier sourcing system serving 100+ structured data points, prioritizing first-party knowledge over third-party APIs for 500M+ monthly queries.",
        "Built a textualization service utilizing NLP for precise entity extraction, enabling AI models to cite structured sources and boosting answer accuracy by 40%.",
        "Applied Prompt Engineering to generate diverse query sets for intent-matching evaluation, driving a 50% increase in tool selection rate."
      ],
      tech: ["C++", "SQL", "System Design", "Prompt Engineering", "NLP", "Evals & Testing"],
      category: "Enterprise AI Solutions",
      nda: true
    },
    {
      title: "Price Breakdown Feature for Google Search",
      description: "A dynamic, localized UI component integrated directly into Google Search results to provide comprehensive, location-based two-wheeler price breakdowns (On-Road, Ex-Showroom).",
      bullets: [
        "Delivered end-to-end frontend UI components with precise INR currency localization based on user geography.",
        "Achieved a 5% measurable uplift in user engagement through tight cross-functional collaboration with UX design and QA teams.",
        "Seamlessly bridged complex backend pricing data with intuitive, responsive frontend interfaces."
      ],
      tech: ["Java", "HTML5", "CSS3", "Frontend Architecture", "Cross-Functional Collaboration"],
      category: "Frontend & UI Engineering",
      nda: true
    },
    {
      title: "VedaMate – Multi-Agent RAG AI Teaching Assistant",
      description: "A production-grade Conversational AI Teaching Assistant that lets students upload 200+ page textbook PDFs and engage in intelligent, context-aware conversations. Features a hybrid parallel search architecture using Python asyncio, querying ChromaDB and Google Custom Search simultaneously to reduce latency by 40%.",
      bullets: [
        "Orchestrated 6+ specialized AI agents via LangGraph",
        "Improved answer relevance by 50% & reduced hallucinations by 30%",
        "Showcased at Google AI India Hackathon 2025"
      ],
      tech: ["Python", "LangGraph", "LangChain", "Gemini", "ChromaDB", "FastAPI"],
      category: "AI & Education",
      github: "https://github.com/ameer2402/VedaMate-Version-1"
    },
    {
      title: "BlogSpace – Full Stack MERN Blogging Platform",
      description: "A production-grade blogging platform engineered with strict request validation, full-text search indexing, secure authentication, and cloud-based media management.",
      bullets: [
        "Implemented robust authentication utilizing JWT, Google OAuth 2.0 integration, and Nodemailer OTP email flows.",
        "Integrated strict Zod contract schema validation, XSS input sanitization filters, and MongoDB Compound Text Search indexes.",
        "Designed an interactive Chart.js analytics dashboard, recursive nested comment structures, and a persistent CSS-variable dark mode."
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "OAuth 2.0", "Bootstrap"],
      category: "Full Stack Web",
      github: "https://github.com/ameer2402/BlogSpace",
      live: "https://blog-space-2rpkbtuiy-ameers-projects-44e10a15.vercel.app/"
    },
    {
      title: "Pet Care Management System",
      description: "A full-stack enterprise application built at LTIMindtree supporting Pet Owners, Veterinarians, and Admins with isolated permissions and secure data access.",
      bullets: [
        "Led a 5-member team to deliver in a strict 10-day Agile sprint",
        "Developed 30+ documented REST APIs with Swagger",
        "Engineered Spring Security (JWT + RBAC) over a normalized MySQL schema"
      ],
      tech: ["Java", "Spring Boot", "Hibernate", "Angular", "MySQL", "Swagger"],
      category: "Enterprise Systems",
    },
    {
      title: "CinePrestige – Movie Booking Platform",
      description: "A cloud-native, full-stack movie ticketing application delivering a premium cinematic user experience with interactive 3D carousels, real-time seat mapping, and secure booking flows.",
      bullets: [
        "Architected a scalable Spring Boot backend deployed via Docker on Render, ensuring concurrent-safe ticketing and robust data integrity.",
        "Engineered a high-performance Angular frontend hosted on Vercel, featuring a custom 3D stacked coverflow carousel for dynamic movie discovery.",
        "Implemented robust multi-role authorization (Admin, Manager, Customer) and responsive state management for seamless user workflows."
      ],
      tech: ["Java", "Spring Boot", "Angular", "Docker", "MySQL"],
      category: "Full Stack Web",
      github: "https://github.com/ameer2402/MovieBookingApplication",
      live: "https://movie-booking-application-sage.vercel.app/"
    },
    {
      title: "NewsTracker – React News Aggregator",
      description: "A lightning-fast, category-driven single-page application that fetches and displays the latest global news headlines in real-time via the Mediastack API.",
      bullets: [
        "Seamless client-side routing across 6+ categories (Business, Tech, Sports)",
        "Mobile-first responsive layout engineered with Bootstrap 5",
        "Dynamic REST API integration delivering live article retrieval"
      ],
      tech: ["React", "React Router", "Bootstrap", "JavaScript", "REST APIs"],
      category: "Frontend Development",
      github: "https://github.com/ameer2402/NewsTracker",
      live: "https://ameer2402.github.io/NewsTracker/"
    },
    {
      title: "Role-Based Access Control (RBAC) System",
      description: "A secure authentication and authorization platform featuring hierarchical user roles, JWT validation, and server-side session management.",
      bullets: [
        "Engineered a 3-tier access control matrix (Admin, Moderator, Client) with isolated permissions",
        "Implemented secure JWT authentication flows with password hashing and session flash messages",
        "Built dynamic admin dashboards for user lifecycle management using EJS templating"
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "EJS"],
      category: "Backend & Security",
      github: "https://github.com/ameer2402/RBAC",
      live: "https://rbac-fuipl711s-ameers-projects-44e10a15.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Some of my notable work</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl hover-lift group flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <ul className="text-sm text-foreground/80 mb-8 space-y-3 list-none">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 font-bold">✓</span>
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.live || project.nda) && (
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    {project.nda ? (
                      <span className="flex items-center gap-2 text-xs font-semibold text-amber-500/90">
                        <Lock size={14} />
                        <span>Proprietary Project - Details under NDA</span>
                      </span>
                    ) : (
                      <>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
