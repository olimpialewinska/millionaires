import { FieldProps } from "@/constants/fields";
import train from "@/assets/images/train.png";
import pipe from "@/assets/images/pipe.png";
import bulb from "@/assets/images/bulb.png";
import Image from "next/image";

export const Industry = ({ field }: FieldProps) => {
  const getImageSrcAndAlt = () => {
    if (field.type === "station") {
      return { src: train };
    } else if (field.type === "industry" && field.name === "Elektrownia") {
      return { src: bulb };
    } else {
      return { src: pipe };
    }
  };

  const { src } = getImageSrcAndAlt();
  return (
    <div className="field">
      {field.name}
      <div className="center">
        <Image src={src} alt={field.name} width={70} height={60} />
      </div>
      {field.price && <div className="price">{field.price} $</div>}
    </div>
  );
};
