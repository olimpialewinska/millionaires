import { useCallback, useEffect, useState } from "react";
import { fields } from "@/constants/fields";
import { IField } from "@/utils/interfaces";
import { Card } from "@/components/Card";
import { Street } from "@/components/Card/Street";
import { Back } from "@/components/Card/Back";
import { Station } from "@/components/Card/Station";
import { Industry } from "@/components/Card/Industry";

export const CardModal = () => {
  const groupByColor = useCallback((fields: IField[]) => {
    const groups: { [color: string]: IField[] } = {};
    fields.forEach((field) => {
      if (field.color === null && field.type === "station") {
        groups["station"]
          ? groups["station"].push(field)
          : (groups["station"] = [field]);
      } else if (field.color === null && field.type === "industry") {
        groups["industry"]
          ? groups["industry"].push(field)
          : (groups["industry"] = [field]);
      } else if (!field.color || field.color === null) return;
      else
        groups[field.color]
          ? groups[field.color].push(field)
          : (groups[field.color] = [field]);
    });
    return groups;
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] max-w-[calc(100vw-40px)] items-center">
      <div className="flex flex-col h-full overflow-scroll">
        {Object.keys(groupByColor(fields)).map((color) => (
          <div key={color} className="flex flex-row mb-4 gap-[1rem]">
            {groupByColor(fields)[color].map((field) => (
              <div key={field.id}>
                {field.type === "station" ? (
                  <Card
                    front={<Station field={field} />}
                    back={<Back field={field} />}
                  />
                ) : field.type === "industry" ? (
                  <Card
                    front={<Industry field={field} />}
                    back={<Back field={field} />}
                  />
                ) : (
                  <Card
                    front={<Street field={field} />}
                    back={<Back field={field} />}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
