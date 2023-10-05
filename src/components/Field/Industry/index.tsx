import { FieldProps } from "@/constants/fields";
import train from "@/assets/images/train.png";
import Image from "next/image";

export const Industry = ({ field }: FieldProps) => {
  return (
    <div className="field">
      {field.name}
      <div className="center">
        <Image
          src={field.type === "station" ? train : ""}
          alt={field.type === "station" ? "train" : ""}
          width={70}
          height={60}
        />
      </div>
      {field.price && <div className="price">{field.price} $</div>}
    </div>
  );
};
