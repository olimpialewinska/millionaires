interface ICardBack {
  mortgage: number;
  repayment: number;
}

export interface IStreet {
  front: {
    tax: number;
    fullSet: number;
    withOne: number;
    withTwo: number;
    withThree: number;
    withFour: number;
    withHotel: number;
    houseCost: number;
    hotelCost: number;
  };
  back: ICardBack;
}

export interface IStation {
  front: {
    tax: number;
    taxForTwo: number;
    taxForThree: number;
    taxForFour: number;
  };
  back: ICardBack;
}

export interface IIndustry {
  front: {
    tax: number;
    taxForTwo: number;
  };
  back: ICardBack;
}

export interface IField {
  id: number;
  name: string;
  color: string | null;
  price?: number;
  position: string;
  type: Field;
  costs?: IStreet | IStation | IIndustry;
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
