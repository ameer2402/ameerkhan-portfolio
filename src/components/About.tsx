import { motion } from "framer-motion";
import { Coffee, Terminal, Bug } from "lucide-react";

const About = () => {
  const funFacts = [
    {
      icon: Coffee,
      title: "Coffee to Code",
      description: "I have a proven track record of converting massive amounts of caffeine directly into scalable APIs.",
    },
    {
      icon: Terminal,
      title: "Tab Hoarder",
      description: "My browser is a graveyard of Stack Overflow tabs. Yes, I definitely still need that one from 2 weeks ago.",
    },
    {
      icon: Bug,
      title: "Bug Hunter",
      description: "I treat debugging like a high-stakes game of hide-and-seek. The bugs can hide, but I always win (eventually).",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know more about who I am</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I am a <span className="text-primary font-semibold">Full Stack Software Engineer</span> with over 1.5 years of experience building scalable web applications and robust backend systems. Most recently, I completed a highly selective Software Application Developer Apprenticeship at <span className="text-primary font-semibold">Google</span>, where I engineered AI-powered search infrastructure serving over 500 million monthly queries and improved AI answer accuracy by 40%.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Prior to Google, I served as a Software Engineer at <span className="text-accent font-semibold">LTIMindtree</span>, where I led a 5-person engineering team to successfully deliver a full-stack enterprise application within a strict 10-day Agile sprint. My expertise spans across designing normalized relational databases, developing secure RESTful APIs with role-based access control, and crafting responsive frontend architectures.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Driven by a deep understanding of the complete Software Development Lifecycle (SDLC), I thrive in bridging complex backend data with intuitive user interfaces. I am passionate about writing clean, maintainable code and building systems that deliver measurable, real-world impact at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Fun Facts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover-lift text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <fact.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{fact.title}</h4>
                  <p className="text-muted-foreground text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
