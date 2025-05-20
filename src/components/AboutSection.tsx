
import { motion } from "framer-motion";
import { Book, Star } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "SRM Institute of Science and Technology, Chennai",
      period: "2024-2026",
      grade: "CGPA: 9.39"
    },
    {
      degree: "BSc. Computer Science",
      institution: "Pillai College of Arts, Commerce and Science, Mumbai",
      period: "2021-2024",
      grade: "CGPA: 8.95"
    }
  ];
  
  const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "Javascript", "Typescript", "R"] },
    { 
      category: "Frameworks & Libraries", 
      items: [
        "React.js", "Next.js", "Node.js", "Express.js", 
        "Flask", "Django", "Spring Boot", 
        "Pandas", "NumPy", "Matplotlib", 
        "Scikit-Learn", "TensorFlow"
      ] 
    },
    { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Convex"] },
    { category: "Tools & Technologies", items: ["AWS", "Google Cloud", "Git/Github", "Vercel", "LangGraph", "N8N"] },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="neuro-flat p-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              A passionate Full Stack Developer and Data Scientist with expertise in building innovative web applications and implementing data-driven solutions. I specialize in creating robust, scalable applications with modern frameworks and technologies.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              My journey in technology began with a curiosity for solving real-world problems through code. Today, I focus on developing clean, efficient solutions that deliver exceptional user experiences while leveraging the power of data science and machine learning.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, I enjoy exploring emerging technologies, contributing to open-source projects, and sharing knowledge through technical blogs and community engagement. I believe in continuous learning and pushing the boundaries of what's possible with technology.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <motion.div
            className="neuro-convex p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="neuro-pressed p-3 rounded-full mr-4">
                <Book className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  variants={item} 
                  className="neuro-flat p-5 hover:neuro-pressed transition-all duration-300 w-full"
                >
                  <h4 className="font-bold text-xl mb-2">{edu.degree}</h4>
                  <p className="text-violet-400 text-lg">{edu.institution}</p>
                  <div className="flex justify-between mt-3 text-sm text-gray-400">
                    <span>{edu.period}</span>
                    <span>{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="neuro-convex p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="neuro-pressed p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skills.map((skillGroup, index) => (
                <motion.div key={index} variants={item} className="neuro-flat p-4 hover:neuro-pressed transition-all duration-300">
                  <h4 className="font-bold text-violet-400 mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="neuro-pressed px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
