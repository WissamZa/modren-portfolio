// src/components/SlideTabs.tsx
import { useRef, useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Use Link for SPA navigation
import { useNavigation } from "../../hooks/useNavigation";

// Define the type for the cursor's position state
interface Position {
  left: number;
  width: number;
  opacity: number;
}

// Define the props for the Tab component
interface TabProps {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
}

export const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<Array<HTMLLIElement | null>>([]);
  const navigation = useNavigation(); // ✅ Get reactive navigation

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({
            left: selectedTab.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full bg-white dark:border-white dark:bg-gray-900"
    >
      {navigation.map((tab, i) => (
        <Tab
          key={tab.name}
          href={tab.href}
          ref={(el: HTMLLIElement | null) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onClick={() => setSelected(i)}
        >
          {tab.name}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = forwardRef<HTMLLIElement, TabProps>(
  ({ children, href, setPosition, onClick }, ref) => {
    return (
      <Link to={href} className="w-fit block">
        <li
          ref={ref}
          onClick={onClick}
          onMouseEnter={() => {
            if (!ref || typeof ref === "function" || !ref.current) return;

            const { width } = ref.current.getBoundingClientRect();

            setPosition({
              left: ref.current.offsetLeft,
              width,
              opacity: 1,
            });
          }}
          className="relative z-10 block cursor-pointer px-3 text-xs uppercase text-white mix-blend-difference md:px-5 md:pt-2 font-bold md:text-xs"
        >
          {children}
        </li>
      </Link>
    );
  }
);

Tab.displayName = "Tab"; // 🔧 Good practice for DevTools

interface CursorProps {
  position: Position;
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-5 rounded-full bg-black dark:bg-white md:h-8"
    />
  );
};
