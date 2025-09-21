// HeroLayout.tsx
import React from "react";

interface HeroLayoutProps {
  height?: number;
  children: React.ReactNode;
}

const HeroLayout: React.FC<HeroLayoutProps> = ({ height = 600, children }) => {
  return (
    <div style={{ position: "relative", height: height }}>
      {children}
    </div>
  );
};

export default HeroLayout;