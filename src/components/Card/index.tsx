import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

interface CardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export const Card = ({ front, back }: CardProps) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(500px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 4, tension: 500, friction: 80 },
  });
  return (
    <div
      className="flex items-center justify-center relative w-[220px] h-[350px]"
      onClick={() => set((state) => !state)}
    >
      <a.div
        className={"flippedCard "}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        {" "}
        {front}
      </a.div>
      <a.div
        className="flippedCard"
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        {back}
      </a.div>
    </div>
  );
};
