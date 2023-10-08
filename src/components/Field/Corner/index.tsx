import { FieldProps } from "@/constants/fields";
import Image from "next/image";
import jail from "@/assets/images/jail.png";
import car from "@/assets/images/car.png";
import policeman from "@/assets/images/policeman.png";

export const Corner = ({ field }: FieldProps) => {
  const getImageSrcAndAlt = () => {
    if (field.type === "jail") {
      return { src: jail, alt: "jail" };
    } else if (field.type === "freeParking") {
      return { src: car, alt: "car" };
    } else {
      return { src: policeman, alt: "policeman" };
    }
  };

  const { src, alt } = getImageSrcAndAlt();

  if (field.type === "start") {
    return (
      <div className={`field ${field.type} center`}>
        <p className="text-bold uppercase text-lg">{field.name}</p>
        <p className="text-gray-600">{`Pobierz $200`}</p>
      </div>
    );
  }

  return (
    <div className={`field ${field.type}`}>
      <p>{field.name}</p>
      <div className="center">
        <Image src={src} alt={alt} style={{ objectFit: "contain" }} fill />
      </div>
    </div>
  );
};
