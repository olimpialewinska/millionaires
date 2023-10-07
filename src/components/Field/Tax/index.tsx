import { FieldProps } from "@/constants/fields";
import src from "@/assets/images/tax.png";
import Image from "next/image";

export const Tax = ({ field }: FieldProps) => {
  return (
    <div className="field">
      {field.name}
      <div className="center">
        <Image src={src} alt={field.name} layout="fill" objectFit="contain" />
      </div>
      <div className="price">{field.price} $</div>
    </div>
  );
};
