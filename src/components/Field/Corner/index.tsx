import { FieldProps } from "@/constants/fields";

export const Corner = ({ field }: FieldProps) => {
  return <div className={`field ${field.type}`}>{field.name}</div>;
};
