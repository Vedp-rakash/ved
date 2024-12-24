import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#2A2A2A] mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-[#4A90E2]" />
                <span className="text-gray-600">ved.prakash@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#4A90E2]" />
                <span className="text-gray-600">+91 1234567890</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-[#4A90E2]" />
                <span className="text-gray-600">Prayagraj, Uttar Pradesh</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-[#2A2A2A] hover:text-[#4A90E2]"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-[#2A2A2A] hover:text-[#4A90E2]"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#4A90E2] text-white py-3 rounded-lg font-medium"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};