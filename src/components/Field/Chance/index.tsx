import { FieldProps } from "@/constants/fields";
import questionMark from "@/assets/images/question-mark.png";
import Image from "next/image";

export const Chance = ({ field }: FieldProps) => {
  return (
    <div className="field">
      <p>{field.name}</p>
      <div className="center">
        <Image src={questionMark} alt="small chest" width={80} />
      </div>
    </div>
  );
};
