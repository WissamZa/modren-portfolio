import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Hero from "../../components/layout/Hero";
import HeroLayout from "../../components/layout/HeroLayout";
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage";
const HomePage: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "GraphQL"];
  const currentLang = useCurrentLanguage();

  return (
    <div className="min-h-screen">
      <HeroLayout height={800}>
        <Hero />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            gap: "2.5rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl text-center font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200%", marginBottom: "2.5rem" }}
            >
              Creative Developer
            </motion.h1>
            <p className="text-xl md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transforming ideas into exceptional digital experiences with
              modern technologies and innovative solutions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <Button
                id="workButton"
                size="lg"
                className={`group flex ${
                  currentLang === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                View My Work
                <ArrowRight className="w-5 h-5 mx-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a
              href="/media/WissamZaidi-Rusame.pdf"
              target="_self"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="group">
                <Download className="w-5 h-5 mx-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/wissamza",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/wissam-zaidi",
                label: "LinkedIn",
              },
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
        </div>
      </HeroLayout>
      {/* Skills Section */}
      <section ref={featuresRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="text-center space-y-16"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Technologies I Work With
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Leveraging cutting-edge technologies to build scalable,
                performant, and user-friendly applications.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {skills.map((skill) => (
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
