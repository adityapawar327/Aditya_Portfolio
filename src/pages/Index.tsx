
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SplineBackground from "@/components/SplineBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-neuro-night">
          <motion.div
            className="neuro-convex p-8 rounded-full w-24 h-24 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-3xl font-bold text-gradient">AP</span>
          </motion.div>
          <motion.p 
            className="mt-6 text-gradient text-lg font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Experience...
          </motion.p>
        </div>
      ) : (
        <>
          <SplineBackground />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
