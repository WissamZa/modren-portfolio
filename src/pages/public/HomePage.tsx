import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguageNavigation } from '../../hooks/useLanguageNavigation';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { getLanguageUrl } = useLanguageNavigation();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'GraphQL'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100, 0],
                y: [0, Math.random() * 100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200%' }}
              >
                {t('home.heroTitle')}
              </motion.h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.heroSubtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to={getLanguageUrl('/projects')}>
                <Button size="lg" className="group">
                  {t('home.viewMyWork')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg" className="group">
                <Download className="w-5 h-5 mr-2" />
                {t('common.downloadResume')}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={featuresRef}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="text-center space-y-16"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {t('home.skillsTitle')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.skillsSubtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card glass hoverable className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {skill.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill}
                    </h3>
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

export default HomePage;