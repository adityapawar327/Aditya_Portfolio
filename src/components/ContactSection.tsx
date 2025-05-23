
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <div className="neuro-flat p-6 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              Have a project in mind or want to know more? I'd love to hear from you!
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="neuro-convex p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="neuro-pressed w-full p-4 rounded-lg bg-transparent focus:outline-none focus:shadow-neuro-flat"
                  placeholder="Aditya Pawar"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="neuro-pressed w-full p-4 rounded-lg bg-transparent focus:outline-none focus:shadow-neuro-flat"
                  placeholder="adityapawar327@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="neuro-pressed w-full p-4 rounded-lg bg-transparent focus:outline-none focus:shadow-neuro-flat"
                  placeholder="How can I help you?"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`neuro-flat hover:neuro-pressed transition-all duration-300 
                  w-full py-4 rounded-lg flex items-center justify-center gap-2
                  ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? (
                  <>Processing<span className="animate-pulse">...</span></>
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="neuro-convex p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="neuro-pressed p-4 rounded-full">
                    <Phone className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href="tel:+917738561876" className="text-gray-300 hover:text-violet-400 transition-colors">
                      +91 7738561876
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="neuro-pressed p-4 rounded-full">
                    <Mail className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a href="mailto:adityapawar327@gmail.com" className="text-gray-300 hover:text-violet-400 transition-colors">
                      adityapawar327@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="neuro-convex p-8">
              <h3 className="text-2xl font-bold mb-6">Profile Links</h3>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/adityapawar327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neuro-flat hover:neuro-pressed transition-all duration-300 py-3 px-6 rounded-full flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/adityapawar327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neuro-flat hover:neuro-pressed transition-all duration-300 py-3 px-6 rounded-full flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            
            <motion.div 
              className="neuro-flat p-6 text-center"
              animate={{ 
                boxShadow: [
                  "5px 5px 10px #0b0a0c, -5px -5px 10px #151216", 
                  "10px 10px 20px #0b0a0c, -10px -10px 20px #151216",
                  "5px 5px 10px #0b0a0c, -5px -5px 10px #151216"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-gradient font-bold">Looking forward to connecting with you!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
