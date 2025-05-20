
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Winner, National Level Hackathon",
      date: "25 Feb 2025",
      description: "Received the 'Best Innovator' award at the National Level DATATHON for a project that leveraged Retrieval-Augmented Generation (RAG) to create a bot capable of intelligently interacting with spreadsheets, performing automated actions, and optimizing data."
    },
    {
      title: "Winner (Special Category), SRM Project Expo",
      date: "7 April 2025",
      description: "Achieved 1st Prize at SRM Project Expo 2025 for developing and presenting 'AI Agent for Automating Corporate Workload,' an innovative AI platform featuring multiple AI agents to automate and optimize business processes, showcasing the future of AI in corporate solutions."
    },
    {
      title: "Bronze, PAN India Web Scraping Challenge",
      date: "13 April 2025",
      description: "Secured Bronze level and achieved 18th rank in the PAN India Web Scraping Challenge 2025, organized by S.A. College of Arts & Science."
    },
    {
      title: "Top 25, UST Global Competition Sight 2.0",
      date: "Present",
      description: "Currently ranked in the top 25 teams in the UST Global competition, Sight 2.0, and will be showcasing AI agents at the next round on April 19th."
    },
    {
      title: "Head, Placement Committee",
      date: "2025-Present",
      description: "Led and managed placement activities for the Faculty of Science and Humanities (FSH) department, coordinated recruitment drives, facilitated industry interactions, and guided students in career development at SRM Institute of Science and Technology."
    },
    {
      title: "Member, Computer Association",
      date: "2021-2024",
      description: "Organized technical fests with 4,000+ attendees, coordinated hackathons, and led workshops on emerging technologies at Pillai College."
    }
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
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="neuro-flat p-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              Recognition and notable accomplishments throughout my academic and professional journey
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className="neuro-convex p-6 hover:glow transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <div className="neuro-pressed p-2 rounded-full">
                  <Award className="h-5 w-5 text-violet-400" />
                </div>
              </div>
              
              <div className="neuro-flat px-3 py-1 rounded-full inline-block mb-4">
                <span className="text-sm text-violet-400">{achievement.date}</span>
              </div>
              
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
