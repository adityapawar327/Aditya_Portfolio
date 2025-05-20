
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Oil and Natural Gas Corporation Limited (ONGC)",
      period: "May 2025 - Present",
      location: "South Mumbai, Maharashtra, India · On-site",
      description: [
        "Currently working on the migration of data from diverse formats into PostgreSQL, ensuring data integrity and optimized storage.",
        "Developing a web application using Python, with Streamlit for the user interface and PostgreSQL as the backend for managing and storing data.",
        "Integrating AI capabilities using Large Language Models (LLMs) to automate operations such as data preprocessing, cleaning, and intelligent manipulation."
      ],
      skills: ["Web Application Development", "Python", "PostgreSQL", "Artificial Intelligence (AI)", "Data Migration"]
    },
    {
      title: "Coding Expertise for AI Training - Freelance",
      company: "Outlier",
      period: "Jan 2025 - Apr 2025",
      location: "Remote",
      description: [
        "Developing and implementing coding solutions to enhance AI/LLM training: designing efficient code, optimizing algorithms, and building tools to improve accuracy, scalability, and performance."
      ],
      skills: ["Large Language Models (LLM)", "Artificial Intelligence (AI)"]
    },
    {
      title: "Full Stack Developer",
      company: "ShulaTech Solutions",
      period: "Feb 2025 - Mar 2025",
      location: "Remote",
      description: [
        "Developed scalable web applications using the MERN stack.",
        "Implemented responsive design principles for cross-platform compatibility."
      ],
      skills: ["MongoDB", "Node.js", "Express.js", "React.js"]
    },
    {
      title: "Full Stack Developer - Internship",
      company: "Prodigy InfoTech",
      period: "Feb 2025 - Mar 2025",
      location: "Remote",
      description: [
        "Working on a full-stack project using the MERN (MongoDB, Express, React, Node.js) stack, building scalable and dynamic web applications.",
        "The project involves implementing RESTful APIs, user authentication, and an intuitive frontend for seamless user interaction."
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "User Authentication"]
    },
    {
      title: "Data Analyst Trainee",
      company: "MedTourEasy",
      period: "Dec 2024 - Jan 2025",
      location: "Remote",
      description: [
        "Analyzed healthcare data to identify patterns and trends.",
        "Created visualization dashboards to present insights to stakeholders."
      ],
      skills: ["Data Analysis", "Data Visualization", "Healthcare Analytics"]
    },
    {
      title: "Data Analyst - Internship",
      company: "LetsGrowMore",
      period: "Jun 2023 - Aug 2023",
      location: "Remote",
      description: [
        "Performed exploratory data analysis on various datasets.",
        "Built predictive models using machine learning algorithms."
      ],
      skills: ["Data Analysis", "Python", "Machine Learning", "Statistical Analysis"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="neuro-flat p-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              My professional journey in software development, data science, and AI
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-blue-500"></div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full neuro-pressed border-2 border-violet-500 z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 md:px-8">
                  <div 
                    className={`neuro-convex p-6 h-full hover:glow transition-all duration-500 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                      <div className="neuro-pressed p-2 rounded-full">
                        <Briefcase className="h-5 w-5 text-violet-400" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg text-violet-400 mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">• {item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="neuro-pressed px-3 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
