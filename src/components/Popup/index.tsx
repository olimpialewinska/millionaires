import { animated, useSpring } from "@react-spring/web";
import React, { use, useState } from "react";

interface PopupProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Popup = ({ children, isOpen }: PopupProps) => {
  const springProps = useSpring({
    top: isOpen ? 0 : -100,
    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
    config: {
      tension: 300,
      friction: 30,
    },
  });

  return (
    <animated.div
      style={springProps}
      className="absolute flex flex-col bg-green-300 rounded-r-md p-4 w-full md:w-7/12 z-50 items-center"
    >
      {children}
    </animated.div>
  );
};
