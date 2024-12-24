import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center relative text-center px-4"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[
            'Ved Prakash | Full-Stack Developer',
            1000,
          ]}
          wrapper="h1"
          speed={50}
          className="text-4xl md:text-6xl font-bold text-[#2A2A2A] mb-6"
          repeat={1}
        />
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          BCA Student at United University, Prayagraj (2025)
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg font-medium"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#4A90E2] text-[#4A90E2] px-8 py-3 rounded-lg font-medium"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} className="text-[#4A90E2]" />
      </motion.div>
    </motion.section>
  );
};