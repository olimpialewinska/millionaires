interface PlayerProps {
  player: string;
}

export const Player = ({ player }: PlayerProps) => {
  return (
    <div
      className="text-sm p-1 rounded-md overflow-hidden whitespace-nowrap text-ellipsis hover:bg-green-400
        hover:cursor-pointer transition-all ease-in-out"
    >
      {player}
    </div>
  );
};
