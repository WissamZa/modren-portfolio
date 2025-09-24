// src/components/ui/slide-tabs.tsx
import { useRef, useState, useEffect, forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigation } from "../../hooks/useNavigation";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
  index: number;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onActivate: (index: number) => void;
}

export const SlideTabs = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const tabsRef = useRef<Array<HTMLLIElement | null>>([]);
  const navigation = useNavigation();

  const currentBasePath = useMemo(() => {
    // Split and remove first segment if it's a language
    const segments = location.pathname.split("/").filter(Boolean);
    const first = segments[0];
    const hasLang = first === "en" || first === "ar";
    const cleanSegments = hasLang ? segments.slice(1) : segments;
    const cleanPath = cleanSegments.join("/");
    return cleanPath === "" ? "/" : `/${cleanPath}`;
  }, [location.pathname]);

  const navItems = useMemo(() => {
    return navigation.map((item) => {
      const itemPath =
        item.href === "" ? "/" : `/${item.href.replace(/^\/+/, "")}`;
      const fullPath = `/${i18n.language}${itemPath === "/" ? "" : itemPath}`;
      const isActive = currentBasePath === itemPath;
      return { ...item, fullPath, isActive, itemPath };
    });
  }, [navigation, i18n.language, currentBasePath]);

  const activeIndex = navItems.findIndex((item) => item.isActive);

  // Update position when activeIndex or language changes
  useEffect(() => {
    if (activeIndex >= 0 && tabsRef.current[activeIndex]) {
      const activeTab = tabsRef.current[activeIndex];
      const { width } = activeTab.getBoundingClientRect();
      setPosition({
        left: activeTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [activeIndex, i18n.language]); // Added i18n.language as dependency

  const handleActivate = (index: number) => {
    if (tabsRef.current[index]) {
      const tab = tabsRef.current[index];
      const { width } = tab.getBoundingClientRect();
      setPosition({
        left: tab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  // Reset position when language changes and no active tab is found
  useEffect(() => {
    if (activeIndex === -1) {
      setPosition({
        left: 0,
        width: 0,
        opacity: 0,
      });
    }
  }, [activeIndex]);

  return (
    <ul className="relative mx-auto flex w-fit rounded-full bg-white dark:border-white dark:bg-gray-900">
      {navItems.map((item, i) => (
        <Tab
          key={`${item.name}-${i18n.language}`} // Updated key to include language
          to={item.fullPath}
          isActive={item.isActive}
          index={i}
          ref={(el) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onActivate={handleActivate}
        >
          {item.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = forwardRef<HTMLLIElement, TabProps>(
  ({ children, to, isActive, index, setPosition, onActivate }, ref) => {
    const handleClick = () => onActivate(index);

    const handleMouseEnter = () => {
      if (ref && typeof ref !== "function" && ref.current) {
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }
    };

    return (
      <Link to={to} className="w-fit block">
        <li
          ref={ref}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          className={`
            relative z-10 block cursor-pointer px-3 text-xs uppercase md:px-5 md:pt-2 font-bold md:text-xs
            ${
              isActive
                ? "text-white mix-blend-difference"
                : "text-black dark:text-white mix-blend-difference"
            }
          `}
        >
          {children}
        </li>
      </Link>
    );
  }
);

Tab.displayName = "Tab";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-5 rounded-full bg-black dark:bg-white md:h-8"
    />
  );
};

export default SlideTabs;