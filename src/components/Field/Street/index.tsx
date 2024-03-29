import { FieldProps } from "@/constants/fields";
import classnames from "classnames";

export const Street = ({ field }: FieldProps) => {
  return (
    <div className="flex flex-col bg-green-200 text-xs text-center min-w-[70px] min-h-[70px]">
      <div className="h-4" style={{ backgroundColor: field.color ?? "" }}></div>
      <div className="flex-1 flex flex-col justify-between py-1">
        <p>{field.name}</p>
        <p className="price">{field.price} $</p>
      </div>
    </div>
  );
};
