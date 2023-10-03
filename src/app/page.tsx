import { Button } from "../components/Button";
import { GameList } from "../components/GameList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center pt-12 w-screen h-screen overflow-hidden pb-0">
      <div className="flex text-6xl">Millionaires</div>
      <div className="flex flex-row min-w-full max-h-full justify-center flex-1 overflow-hidden p-12 pt-0 gap-2">
        <div className="flex flex-col flex-1 min-h-fit items-center justify-center">
          <Button />
        </div>

        <GameList />
      </div>
    </main>
  );
}
