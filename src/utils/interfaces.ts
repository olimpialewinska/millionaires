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

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object | undefined
    ? RecursivePartial<T[P]>
    : T[P];
};

export interface IField {
  id: number;
  name: string;
  color: string | null;
  price?: number;
  position: string;
  type: Field;
  costs?: RecursivePartial<IStreet & IStation & IIndustry>;
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
