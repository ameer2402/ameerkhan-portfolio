import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Apprentice Hacks 2025",
      issuer: "Google",
      code: "Hackathon",
      date: "Nov 2025",
      color: "from-blue-500 to-cyan-500",
      url: ""
    },
    {
      title: "Start Writing Prompts like a Pro",
      issuer: "Google (Coursera)",
      code: "FLKGI2QY40T5",
      date: "Nov 2025",
      color: "from-emerald-500 to-teal-600",
      url: "https://www.coursera.org/account/accomplishments/records/FLKGI2QY40T5"
    },
    {
      title: "Introduction to AI",
      issuer: "Google (Coursera)",
      code: "R2D0HQN1VC7G",
      date: "Nov 2025",
      color: "from-blue-400 to-blue-600",
      url: "https://www.coursera.org/account/accomplishments/verify/R2D0HQN1VC7G"
    },
    {
      title: "Prompt Design in Vertex AI Skill Badge",
      issuer: "Google",
      code: "Skill Badge",
      date: "Apr 2025",
      color: "from-indigo-500 to-purple-600",
      url: "https://www.credly.com/badges/3fb747d3-b2a7-4003-9d39-9691fb723b3c/linked_in_profile"
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      code: "B66CD619EFCA",
      date: "Sep 2024",
      color: "from-green-500 to-green-600",
      url: "https://www.hackerrank.com/certificates/b66cd619efca"
    },
    {
      title: "Java (Basics) Certification",
      issuer: "HackerRank",
      code: "B6AC224300A1",
      date: "Aug 2023",
      color: "from-orange-500 to-red-600",
      url: "https://www.hackerrank.com/certificates/b6ac224300a1"
    },
    {
      title: "Joy of Computing Using Python (Elite)",
      issuer: "IIT Madras / NPTEL",
      code: "NPTEL22CS122S53690079",
      date: "Oct 2022",
      color: "from-yellow-500 to-orange-500",
      url: "https://drive.google.com/file/d/1FMvYIH5YSJZaj4_Ma9iZxzOL0aObBjJ6/view?usp=sharing"
    },
    {
      title: "View all on LinkedIn",
      issuer: "LinkedIn Profile",
      code: "Verification",
      date: "Present",
      color: "from-blue-600 to-blue-800",
      url: "https://www.linkedin.com/in/ameerkhan-dev/"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional credentials and achievements</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const CardContent = (
              <>
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Award className="text-white" size={24} />
                  </div>

                  <h3 className={`font-bold text-lg mb-2 ${cert.url ? 'group-hover:text-primary transition-colors' : ''}`}>
                    {cert.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.issuer}
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                    <span className={`px-2 py-1 text-[10px] font-bold rounded-md bg-gradient-to-r ${cert.color} text-white truncate max-w-[120px]`}>
                      {cert.code}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium whitespace-nowrap">
                      <CheckCircle size={14} className="text-primary" />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </>
            );

            return cert.url ? (
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-2xl hover-lift relative overflow-hidden group flex flex-col h-full cursor-pointer block"
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-2xl hover-lift relative overflow-hidden group flex flex-col h-full"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Continuously expanding my knowledge through certifications and hands-on learning
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
