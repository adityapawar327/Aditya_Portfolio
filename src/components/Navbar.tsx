
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", name: "Home", icon: Home },
    { id: "about", name: "About", icon: User },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "projects", name: "Projects", icon: Code },
    { id: "contact", name: "Contact", icon: Mail },
  ];

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 py-3 px-4 rounded-full ${
        scrolled ? "glass" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <ul className="flex space-x-1 md:space-x-4 items-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`relative flex items-center justify-center px-3 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "neuro-pressed text-violet-400"
                  : "hover:text-violet-400"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(item.id);
              }}
            >
              <span className="md:hidden"><item.icon size={20} /></span>
              <span className="hidden md:block">{item.name}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute inset-0 rounded-full border border-violet-500/30 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
