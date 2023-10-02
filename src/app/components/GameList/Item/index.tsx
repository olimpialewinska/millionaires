import arrow from "../../../../assets/images/arrow.svg";
import Image from "next/image";

export const Item = () => {
  return (
    <div className="w-full flex justify-between bg-lime-100 px-4 py-2 rounded-md shadow-inner border-4 items-center hover:border-green-700 transition-all ease-in-out cursor-pointer">
      <div className="flex flex-col">
        <div className="font-bold text-lg">Frontasie</div>
        <div className="text-sm opacity-60">10 players</div>
      </div>

      <Image
        src={arrow}
        alt="arrow"
        width={20}
        height={20}
        className="rotate-180  hover:translate-x-2 hover:scale-125 transition-all ease-in-out pr-[-20px]"
      />
    </div>
  );
};
