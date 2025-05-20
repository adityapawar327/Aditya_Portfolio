
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="mb-6 neuro-convex p-2 w-32 h-32 rounded-full mx-auto overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Avatar className="w-full h-full">
            <AvatarImage 
              src="/lovable-uploads/2523981c-8f46-44e2-90cd-2485b3ceae20.png" 
              alt="Aditya Pawar" 
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-purple-700 to-blue-500 w-full h-full rounded-full flex items-center justify-center text-3xl font-bold">
              AP
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-gradient">Aditya Pawar</span>
        </motion.h1>

        <motion.div
          className="neuro-flat p-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
        
          <h2 className="text-xl md:text-3xl font-medium text-gray-300">
            Full-Stack Engineer | AI/ML Developer
          </h2>
          
        </motion.div>

        <motion.div 
          className="flex space-x-4 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a 
            href="https://github.com/adityapawar327" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neuro-flat hover:neuro-pressed transition-all duration-300 p-3 rounded-full"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/adityapawar327/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neuro-flat hover:neuro-pressed transition-all duration-300 p-3 rounded-full"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:adityapawar327@gmail.com" 
            className="neuro-flat hover:neuro-pressed transition-all duration-300 p-3 rounded-full"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a 
            href="#about" 
            className="neuro-flat hover:neuro-pressed inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Explore My Portfolio</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="animate-bounce"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
