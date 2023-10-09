import { Divider } from "@/components/Divider";
import { IField } from "@/utils/interfaces";

interface StreetProps {
  field: IField;
}

export const Back = ({ field }: StreetProps) => {
  return (
    <div className="flex-1 w-[220px] flex flex-col items-center justify-center h-full bg-red-400 transform rotate-180">
      <p className="text-lg text-center mb-4 font-bold uppercase">
        {field.name}
      </p>
      <p className="text-lg text-center mb-4">
        Wartość hipoteczna <br />
        {field.costs?.back.mortgage} $
      </p>
      <p className="text-lg text-center mb-4">
        Spłata hipoteki <br /> {field.costs?.back.repayment} $
      </p>
    </div>
  );
};
