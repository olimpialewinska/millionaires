export interface IField {
  id: number;
  name: string;
  color: string | null;
  price?: number;
  position: string;
  type: Field;
}

export type Field =
  | "start"
  | "jail"
  | "goToJail"
  | "freeParking"
  | "street"
  | "station"
  | "industry"
  | "chance"
  | "communityChest"
  | "tax";
