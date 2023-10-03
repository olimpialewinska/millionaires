"use client";
import { fields } from "@/constants/fields";
import { use, useEffect, useState } from "react";

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

  const fieldsIDs = fields.map((field) => field.id);
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        style={{
          height: `${height}px`,
          width: `${height}px`,
          display: "grid",
          gridTemplateColumns: "13% repeat(9, 1fr) 13%",
          gridTemplateRows: "13% repeat(9, 1fr) 13%",
          gap: "1px",
        }}
      >
        {Array.from({ length: 121 }, (_, index) => (
          <div
            key={index}
            className={`${
              fieldsIDs.includes(index)
                ? "bg-green-500 w-fill h-fill"
                : "bg-red-500 w-4 h-1"
            } `}
          >
            {fieldsIDs.includes(index) ? index : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
