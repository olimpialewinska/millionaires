import { Divider } from "@/components/Divider";
import { IField } from "@/utils/interfaces";
import bulb from "@/assets/images/bulb.png";
import pipe from "@/assets/images/pipe.png";
import Image from "next/image";

interface StreetProps {
  field: IField;
}

export const Industry = ({ field }: StreetProps) => {
  return (
    <div className="flex-1 w-[220px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center p-2 min-h-[80px] justify-center mb-2">
        <Image
          src={field.name === "Elektrownia" ? bulb : pipe}
          width={160}
          height={80}
          alt="train"
        />
        <p className="text-xl text-center">{field.name}</p>
      </div>
      <div className="flex flex-col p-2 w-full text-center text-[14px] pt-0 gap-2">
        <div className="row">
          <p>
            Przy posiadaniu jednego Zakładu czynsz jest czterokrotnością ilości
            wyrzuconych oczek
          </p>
        </div>
        <div className="row">
          <p>
            {" "}
            Przy posiadaniu dwóch Zakładów, czynsz jest dziesięciokrotnością
            wyrzuconych oczek
          </p>
        </div>
      </div>
    </div>
  );
};
