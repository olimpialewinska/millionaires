import { FieldProps } from "@/constants/fields";
import classnames from "classnames";

export const Street = ({ field }: FieldProps) => {
  return (
    <div className="flex flex-col bg-green-200 text-xs text-center">
      <div className="h-4" style={{ backgroundColor: field.color ?? "" }}></div>
      <div className="flex-1 flex flex-col justify-between py-1">
        <p>{field.name}</p>
        <p className="text-xs text-gray-600">{field.price} $</p>
      </div>
    </div>
  );
};
