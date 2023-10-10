import * as React from "react";
import "./styles.scss";
import { TProps, TSingleFace, TValue } from "./_types";
import {
  defaultFaceGrid,
  faceClasses,
  faceTransformMap,
  times,
  valueClassMap,
} from "./_utils";

const { useState, useEffect, forwardRef, useImperativeHandle } = React;

const getFaceArray = (size: number): TSingleFace[] => {
  return faceClasses.map((className: string, index: number) => ({
    className,
    children: (
      <div className={`defaultFace ${valueClassMap[(index + 1) as TValue]}`}>
        {times(25, (idx) => (
          <div key={idx}>
            {defaultFaceGrid[(index + 1) as TValue].includes(idx) && <span />}
          </div>
        ))}
      </div>
    ),
    style: {
      ...faceTransformMap[(index + 1) as TValue](size / 2),
      width: size + "px",
      height: size + "px",
    },
  }));
};

const Dice = forwardRef((props: TProps, ref: any) => {
  const { defaultValue = 6, size = 60, rolling, ...rest } = props;
  const [value, setValue] = useState<TValue>(defaultValue);
  const [faceArray, setFaceArray] = useState<TSingleFace[]>([]);
  const [placementStyles, setPlacementStyles] = useState<React.CSSProperties>(
    {}
  );
  const [buttonStyles, setButtonStyles] = useState<React.CSSProperties>({});

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setFaceArray(getFaceArray(size));
  }, [size]);

  useEffect(() => {
    setButtonStyles({
      ...rest,
      ...placementStyles,
      width: size + "px",
      height: size + "px",
    });
  }, [placementStyles, size]);

  if (!faceArray?.length) return null;

  return (
    <button
      disabled={rolling}
      style={buttonStyles}
      className={`_space3d ${valueClassMap[value]} ${rolling && "rolling"}`}
    >
      <div className="_3dbox">
        <div {...faceArray[0]} />
        <div {...faceArray[1]} />
        <div {...faceArray[2]} />
        <div {...faceArray[3]} />
        <div {...faceArray[4]} />
        <div {...faceArray[5]} />
      </div>
    </button>
  );
});

Dice.displayName = "Dice";

export default Dice;
