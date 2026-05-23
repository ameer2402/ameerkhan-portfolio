import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C++", "HTML5", "CSS3", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Angular", "Bootstrap", "Spring Boot", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Postman", "Swagger", "Docker", "Linux", "Vercel", "VS Code"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Gen AI & AI Tools",
      skills: ["Antigravity", "Gemini", "Claude", "ChatGPT", "RAG", "LangGraph", "Prompt Engineering"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "CS Fundamentals",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "System Design"],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-medium shadow-lg cursor-default`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
