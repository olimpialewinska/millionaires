"use client";
import { fields } from "@/constants/fields";
import { use, useEffect, useState } from "react";
import Image from "next/image";

import chest from "@/assets/images/chest.png";
import chance from "@/assets/images/chance.png";

export default function Game() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    console.log(window.innerHeight);
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setHeight(window.innerHeight);
      });
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="rounded-md border-2 border-black shadow-lg"
        style={{
          height: `${height - 10}px`,
          width: `${height}px`,
          display: "grid",
          gridTemplateColumns: "13% repeat(9, 1fr) 13%",
          gridTemplateRows: "13% repeat(9, 1fr) 13%",
          gap: "1px",
          position: "relative",
        }}
      >
        {fields.map((field, index) => (
          <div key={index} className="bg-green-500 w-fill h-fill">
            {index}
          </div>
        ))}
        <div
          className="w-fill h-fill flex justify-between items-center flex-col p-16 md:p-24"
          style={{
            gridColumn: "2 / 11",
            gridRow: "2 / 11",
          }}
        >
          <Image
            src={chance}
            alt="chance"
            width={140}
            className="rounded-md border-2 border-black shadow-lg"
          />
          <div className="text-3xl font-bold md:text-6xl">Millionaires</div>
          <Image
            src={chest}
            alt="chest"
            width={140}
            className="rounded-md border-2 border-black shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
