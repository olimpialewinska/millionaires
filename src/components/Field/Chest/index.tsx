import { FieldProps } from "@/constants/fields";
import smallChest from "@/assets/images/small-chest.png";
import Image from "next/image";

export const Chest = ({ field }: FieldProps) => {
  return (
    <div className="field">
      <p>{field.name}</p>
      <div className="center">
        <Image
          src={smallChest}
          alt="small chest"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
