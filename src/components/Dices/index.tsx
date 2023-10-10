import { useState } from "react";
import Dice from "../Dice";
import { TValue } from "../Dice/_types";

export const Dices = () => {
  const [rolling, setRolling] = useState(false);
  const [values, setValues] = useState<TValue[]>([1, 1]);

  const handleDiceRoll = () => {
    setRolling(true);
    setTimeout(() => {
      setValues([
        (Math.floor(Math.random() * 6) + 1) as TValue,
        (Math.floor(Math.random() * 6) + 1) as TValue,
      ]);
      setRolling(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-10">
        <Dice size={60} rolling={rolling} defaultValue={values[0]} />
        <Dice size={60} rolling={rolling} defaultValue={values[1]} />
      </div>
      <div className="select" onClick={handleDiceRoll}>
        Roll dices
      </div>
    </div>
  );
};
