import { Divider } from "@/components/Divider";
import { IField } from "@/utils/interfaces";

interface StreetProps {
  field: IField;
}

export const Street = ({ field }: StreetProps) => {
  return (
    <div className="flex-1 w-[220px] flex flex-col items-center">
      <div
        className="w-full flex flex-col items-center p-2 min-h-[80px] justify-center"
        style={{
          backgroundColor: field.color!,
          color:
            field.color === "#451a03" || field.color === "#1e40af"
              ? "#e5ffc9"
              : "#000",
        }}
      >
        <p className="text-sm">Karta wlasności</p>
        <p className="text-xl text-center">{field.name + field.id}</p>
      </div>
      <div className="p-2 w-full">
        <div className="row">
          <p>Czynsz </p>
          <p>{field.costs?.front?.tax} $</p>
        </div>
        <div className="row">
          <p>Czynsz - pełny kolor </p>
          <p>{field.costs!.front?.fullSet} $</p>
        </div>
        <div className="row">
          <p>Czynsz 1 dom</p>
          <p>{field.costs!.front?.withOne} $</p>
        </div>
        <div className="row">
          <p>Czynsz 2 domy</p>
          <p>{field.costs!.front?.withTwo} $</p>
        </div>
        <div className="row ">
          <p>Czynsz 3 domy</p>
          <p>{field.costs!.front?.withThree} $</p>
        </div>
        <div className="row mb-3">
          <p>Czynsz 4 domy</p>
          <p>{field.costs!.front?.withFour} $</p>
        </div>
        <Divider />
        <div className="row mt-3">
          <p>Koszt domu:</p>
          <p>{field.costs!.front?.houseCost} $</p>
        </div>
        <div className="row mb-3">
          <p>Koszt domu:</p>
          <p>{field.costs!.front?.hotelCost} $</p>
        </div>
      </div>
    </div>
  );
};
