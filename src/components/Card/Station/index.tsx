import { Divider } from "@/components/Divider";
import { IField } from "@/utils/interfaces";
import train from "@/assets/images/train.png";
import Image from "next/image";

interface StreetProps {
  field: IField;
}

export const Station = ({ field }: StreetProps) => {
  return (
    <div className="flex-1 w-[220px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center p-2 min-h-[80px] justify-center mb-2">
        <Image src={train} width={200} height={120} alt="train" />
        <p className="text-xl text-center">{field.name}</p>
      </div>
      <div className="p-2 w-full">
        <div className="row">
          <p>Czynsz </p>
          <p>{field.costs?.front.tax} $</p>
        </div>
        <div className="row">
          <p>Przy posiadaniu 2 </p>
          <p>{field.costs!.front.taxForTwo} $</p>
        </div>
        <div className="row">
          <p>Przy posiadaniu 3</p>
          <p>{field.costs!.front.taxForThree} $</p>
        </div>
        <div className="row">
          <p>Przy posiadaniu 4</p>
          <p>{field.costs!.front.taxForFour} $</p>
        </div>
      </div>
    </div>
  );
};
