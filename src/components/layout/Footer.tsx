import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';
const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/WissamZa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/wissam-zaidi', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:wissam_zaidi@proton.me', label: 'Email' }
  ];
  const { t } = useTranslation(); 
  const navItems = Object.entries(
    t('footer.navigation', { returnObjects: true })
  );
 
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const [key, label] = item;
                return (
                  <li key={key}>
                    <a
                      href={`/modren-portfolio/${i18n.language}/${label.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("footer.Connect")}</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-1">
              <span>© 2025 Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and React</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;