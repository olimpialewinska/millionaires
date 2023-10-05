import { IField } from "@/utils/interfaces";
import { Street } from "./Street";
import { FieldProps } from "@/constants/fields";
import { Chest } from "./Chest";
import { Chance } from "./Chance";
import { Corner } from "./Corner";
import { Tax } from "./Tax";
import { Industry } from "./Industry";

export const Field = ({ field }: FieldProps) => {
  if (field.type === "street") {
    return <Street field={field} />;
  }
  if (field.type === "communityChest") {
    return <Chest field={field} />;
  }
  if (field.type === "chance") {
    return <Chance field={field} />;
  }

  if (
    field.type === "start" ||
    field.type === "jail" ||
    field.type === "freeParking" ||
    field.type === "goToJail"
  ) {
    return <Corner field={field} />;
  }

  if (field.type === "tax") {
    return <Tax field={field} />;
  }

  if (field.type === "industry" || field.type === "station") {
    return <Industry field={field} />;
  }
};
