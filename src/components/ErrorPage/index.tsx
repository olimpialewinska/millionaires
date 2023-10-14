import Link from "next/link";
import { Button } from "../Button";
import { use, useEffect, useState } from "react";

export const ErrorPage = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(true);
    }, 10000);
  }, []);

  if (!error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-4xl mb-10 uppercase">Ładownaie gry...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-4xl mb-10 uppercase">Nie znaleziono gry</p>
      <Link
        href="/"
        className="bg-orange-300 px-6 py-4 text-xl font-bold uppercase rounded-md border-4 border-transparent hover:border-orange-800 transition-all ease-in"
      >
        Strona główna
      </Link>
    </div>
  );
};
