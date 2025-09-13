import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Award, Users, Coffee, Code } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const AboutPage: React.FC = () => {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Corrected easing: 'easeOut' is a valid pre-defined string
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile', 'Mentoring'] }
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate full-stack developer with a love for creating exceptional digital experiences 
              that make a difference in people's lives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm"
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              ref={aboutRef}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm a Creative Developer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  With over 5 years of experience in web development, I specialize in creating 
                  modern, responsive, and user-friendly applications. I'm passionate about 
                  clean code, innovative solutions, and continuous learning.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey started with a curiosity about how websites work, and it has evolved 
                  into a career focused on building digital experiences that solve real-world problems. 
                  I believe in the power of technology to make life better and more efficient.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-4">
                <Button size="lg" className="group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {value}
                  </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A comprehensive toolkit for building modern web applications and solving complex problems.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {skills.map(({ category, items }) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {items.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;