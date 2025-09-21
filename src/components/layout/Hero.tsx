import React from "react";
import LiquidEther from "../ui/LiquidEther";

interface HeroBackgroundProps {
  height?: number; // Optional: let parent control height
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  resolution?: number;
  isBounce?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

const Hero: React.FC<HeroBackgroundProps> = ({
  height = '100svh',
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  resolution = 0.5,
  isBounce = false,
  autoDemo = true,
  autoSpeed = 0.6,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 800,
  autoRampDuration = 0.6,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LiquidEther
        colors={colors}
        mouseForce={mouseForce}
        cursorSize={cursorSize}
        isViscous={isViscous}
        viscous={viscous}
        iterationsViscous={iterationsViscous}
        iterationsPoisson={iterationsPoisson}
        resolution={resolution}
        isBounce={isBounce}
        autoDemo={autoDemo}
        autoSpeed={autoSpeed}
        autoIntensity={autoIntensity}
        takeoverDuration={takeoverDuration}
        autoResumeDelay={autoResumeDelay}
        autoRampDuration={autoRampDuration}
      />
    </div>
  );
};

export default Hero;