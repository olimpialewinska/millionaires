import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Player } from "./Player";

interface SlidingPanelProps {
  open: boolean;
  onClick: () => void;
}

export const SlidingPanel = ({ open, onClick }: SlidingPanelProps) => {
  const springProps = useSpring({
    left: open ? 0 : -100,
    transform: open ? "translateX(0)" : "translateX(-100%)",
    config: {
      tension: 300,
      friction: 30,
    },
  });

  return (
    <animated.div
      style={springProps}
      className="absolute bottom-[44px] flex flex-col gap-2 bg-green-300 w-[100px] rounded-r-md p-2"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Player key={index} player="xdxdxdxdxdxs" />
      ))}
    </animated.div>
  );
};
