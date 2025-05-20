
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 relative">
      <motion.div 
        className="max-w-6xl mx-auto neuro-flat p-6 rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Aditya Pawar</h2>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {currentYear} | All Rights Reserved</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
