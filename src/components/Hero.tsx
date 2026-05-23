import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const skillSets = [
    "Software Developer | Java | Spring Boot | React.js",
    "Full Stack | JavaScript | TypeScript | Node.js",
    "Gen AI | Prompt Engineering | LangGraph | RAG",
    "Databases | MySQL | PostgreSQL | MongoDB",
    "Version Control & Tools | Git | Docker | Postman"
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skillSets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="text-lg origin-bottom-right"
              >
                👋
              </motion.span> 
              Welcome to my portfolio
            </span>
          </motion.div>

          <div className="flex justify-center mb-10 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ] 
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.1 },
                scale: { duration: 0.6, delay: 0.1 },
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" } 
              }}
              className="relative w-56 h-56 md:w-64 md:h-64 p-1 bg-gradient-to-tr from-primary via-accent to-primary animate-gradient shadow-[0_0_40px_rgba(var(--primary),0.4)]"
            >
              <div 
                className="w-full h-full bg-background overflow-hidden" 
                style={{ borderRadius: "inherit" }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}ameer_pic.png`}
                  alt="Mohammed AmeerKhan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient inline-block" style={{ backgroundSize: "200% 200%" }}>Mohammed AmeerKhan</span>
          </motion.h1>

          <div className="h-20 md:h-12 flex items-center justify-center mb-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSkillIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                {skillSets[currentSkillIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Turning complex ideas into seamless software solutions. Full Stack Developer & AI Enthusiast based in Hyderabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-primary to-accent text-white min-w-[200px] shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-all duration-300 border-none"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out skew-x-12 z-0" />
                <Mail className="mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" size={20} />
                <span className="relative z-10">Hire Me</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="relative overflow-hidden group border-2 border-primary text-foreground min-w-[200px] bg-transparent hover:!bg-primary hover:!text-white hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300"
                onClick={() => {
                  window.open(`${import.meta.env.BASE_URL}ameer_resume.pdf`, '_blank');
                }}
              >
                <Download className="mr-2 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                <span className="relative z-10 font-medium">Download Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/ameer2402"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ameerkhan-dev/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer"
            >
              <Mail size={22} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/*<motion.div*/}
      {/*  initial={{ opacity: 0 }}*/}
      {/*  animate={{ opacity: 1 }}*/}
      {/*  transition={{ delay: 1, duration: 0.6 }}*/}
      {/*  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"*/}
      {/*>*/}
      {/*  <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">*/}
      {/*    <motion.div*/}
      {/*      animate={{ y: [0, 12, 0] }}*/}
      {/*      transition={{ duration: 1.5, repeat: Infinity }}*/}
      {/*      className="w-1.5 h-1.5 bg-primary rounded-full mt-2"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</motion.div>*/}
    </section>
  );
};

export default Hero;
