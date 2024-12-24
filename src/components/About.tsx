import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Frontend Development', icon: Globe, level: 90 },
    { name: 'Backend Development', icon: Database, level: 85 },
    { name: 'Full-Stack Development', icon: Code2, level: 88 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Ved Prakash"
              className="rounded-lg shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2A2A2A] mb-6">About Me</h2>
            <p className="text-gray-600 mb-8">
              I'm a passionate Full-Stack Developer and BCA student at United University, Prayagraj. 
              With a strong foundation in both frontend and backend technologies, I create seamless, 
              user-centric web applications that solve real-world problems.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <skill.icon className="text-[#4A90E2]" />
                    <span className="font-medium text-[#2A2A2A]">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <motion.div
                      className="h-full bg-[#4A90E2] rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};