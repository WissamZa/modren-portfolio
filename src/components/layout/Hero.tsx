import React from "react";
import PixelBlast from "../ui/PixelBlast";
import { PixelBlastProps } from "../ui/PixelBlast";

const Hero: React.FC<PixelBlastProps> = ({
  variant = "circle",
  pixelSize = 6,
  color = "#B19EEF",
  patternScale = 3,
  patternDensity = 1.2,
  pixelSizeJitter = 0.5,
  enableRipples,
  rippleSpeed = 0.4,
  rippleThickness = 0.12,
  rippleIntensityScale = 1.5,
  liquid,
  liquidStrength = 0.12,
  liquidRadius = 1.2,
  liquidWobbleSpeed = 5,
  speed = 0.6,
  edgeFade = 0.25,
  transparent = true,
}) => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PixelBlast
        variant={variant}
        pixelSize={pixelSize}
        color={color}
        patternScale={patternScale}
        patternDensity={patternDensity}
        pixelSizeJitter={pixelSizeJitter}
        enableRipples={enableRipples}
        rippleSpeed={rippleSpeed}
        rippleThickness={rippleThickness}
        rippleIntensityScale={rippleIntensityScale}
        liquid={liquid}
        liquidStrength={liquidStrength}
        liquidRadius={liquidRadius}
        liquidWobbleSpeed={liquidWobbleSpeed}
        speed={speed}
        edgeFade={edgeFade}
        transparent={transparent}
      />
    </div>
  );
};

export default Hero;
