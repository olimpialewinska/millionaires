import { Item } from "./Item";

export const GameList = () => {
  const clonedComponents = Array.from({ length: 20 }, (_, index) => (
    <Item key={index} />
  ));
  return (
    <div className="flex flex-1 flex-col gap-4 items-center bg-lime-50 rounded-3xl p-6 shadow-lg overflow-y-auto">
      {clonedComponents}
    </div>
  );
};
