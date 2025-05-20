
import { motion } from "framer-motion";
import { Link, Github, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Legit",
      subtitle: "The Future of Decentralized Identity Verification",
      description: "A decentralized application built with Next.js, TypeScript, and Solidity to enable the creation of Decentralized Identifiers (DID) on the blockchain.",
      features: [
        "Integrated Shadcn for UI components and Pinata Cloud for decentralized file storage",
        "Implemented Privy for secure wallet connections alongside Metamask",
        "Leveraged Tailwind CSS for responsive design and Chainlist for multi-chain integration", 
        "Used Hardhat for developing and deploying Ethereum smart contracts"
      ],
      links: [
        { type: "github", url: "https://github.com/adityapawar327/Legit" },
        { type: "website", url: "https://legit-sooty.vercel.app/" }
      ],
      technologies: ["Next.js", "TypeScript", "Solidity", "Shadcn UI", "Pinata Cloud", "Privy", "Tailwind CSS", "Chainlist", "Hardhat"]
    },
    {
      title: "NaviGo",
      subtitle: "AI Trip Planner",
      description: "A trip planning application using React.js with Shadcn UI for the frontend and Firebase for the backend, enabling users to create personalized travel plans seamlessly.",
      features: [
        "Integrated Firestore for efficient data storage and management of user preferences",
        "Incorporated Google Places API for destination selection and Google OAuth for authentication",
        "Trained and integrated the Gemini Model for AI-driven trip generation",
        "Leveraged Google Cloud APIs for additional data processing and backend operations"
      ],
      links: [
        { type: "github", url: "https://github.com/adityapawar327/NaviGo-Trip-Planner" },
        { type: "website", url: "https://navigo-aditya.vercel.app/" }
      ],
      technologies: ["React.js", "Shadcn UI", "Firebase", "Firestore", "Google Places API", "Google OAuth", "Gemini Model", "Google Cloud"]
    },
    {
      title: "Axion",
      subtitle: "Generating Full-Stack Applications through AI",
      description: "A web-based SaaS platform utilizing Next.js, React, and Tailwind CSS to provide AI-powered code generation and an interactive development environment.",
      features: [
        "Integrated Google Generative AI for natural language processing and code generation",
        "Google OAuth 2.0 for secure authentication", 
        "Convex Database for seamless data storage and real-time updates",
        "Live code previews with Sandpack, secure payments via the PayPal API",
        "ShadCN for enhanced UI components"
      ],
      links: [
        { type: "github", url: "https://github.com/adityapawar327/Axion" },
        { type: "website", url: "https://axion-three.vercel.app/" }
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Google AI", "OAuth 2.0", "Convex", "PayPal API"]
    },
    {
      title: "AI Agent for Automating Corporate Workload",
      subtitle: "Intelligent Business Process Automation",
      description: "An AI-powered automation platform utilizing Large Language Models (LLMs), Multimodal AI, Retrieval-Augmented Generation (RAG), Vector Databases, SQL Databases, and N8N workflows to revolutionize business processes.",
      features: [
        "AI-Driven HR Assistant for automated candidate communication and screening",
        "AI Sales Agent for AI-driven prospect research",
        "AI-Powered Data Analysis Bot for spreadsheet querying",
        "AI Customer Feedback Sentiment Analysis for automated feedback analysis"
      ],
      links: [],
      technologies: ["LLM", "RAG", "Vector Databases", "SQL Databases", "N8N", "Workflow Automation"]
    },
    {
      title: "Carrier Connect",
      subtitle: "A Job Portal Website",
      description: "Developed a feature-rich job portal using Next.js, React.js, TypeScript, and JavaScript, with a MongoDB and Express.js backend, enabling seamless job posting, candidate search, and application tracking.",
      features: [
        "Advanced job discovery tools, including keyword-based search, category filters",
        "User authentication via Auth, ensuring a secure and personalized experience",
        "Fully responsive and scalable platform with ShadCN and Tailwind CSS"
      ],
      links: [
        { type: "github", url: "https://github.com/adityapawar327" }
      ],
      technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Express.js", "ShadCN", "Tailwind CSS"]
    },
    {
      title: "Real Time Intrusion Detection and Alert System",
      subtitle: "AI-Powered Security Monitoring",
      description: "Implemented machine learning-based motion detection using Python to differentiate between human intrusions and background noise, reducing false alarms.",
      features: [
        "Integrated Twilio API to automatically send SMS alerts when intrusion is detected",
        "Utilized OpenCV for background subtraction and contour-based tracking with an IP camera feed",
        "Event-based video recording and storage for security monitoring"
      ],
      links: [
        { type: "github", url: "https://github.com/adityapawar327" }
      ],
      technologies: ["Python", "OpenCV", "Machine Learning", "Twilio API", "Computer Vision"]
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="neuro-flat p-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              Notable projects showcasing my technical expertise and problem-solving abilities
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="neuro-convex p-6 hover:glow transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <h4 className="text-violet-400 text-lg mb-4">{project.subtitle}</h4>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <h5 className="font-bold mb-2">Key Features:</h5>
              <ul className="space-y-1 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-300">• {feature}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="neuro-pressed px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.links.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neuro-flat hover:neuro-pressed transition-all duration-300 p-3 rounded-full flex items-center gap-2"
                  >
                    {link.type === "github" ? (
                      <><Github size={16} /> <span>GitHub</span></>
                    ) : (
                      <><Link size={16} /> <span>Website</span></>
                    )}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
