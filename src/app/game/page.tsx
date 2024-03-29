"use client";
import { fields } from "@/constants/fields";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Socket, io } from "socket.io-client";
import chest from "@/assets/images/chest.png";
import chance from "@/assets/images/chance.png";
import assets from "@/assets/images/assets.png";
import exit from "@/assets/images/x.png";
import { Field } from "@/components/Field";
import Link from "next/link";
import { Modal } from "@/components/Modal";
import { SlidingPanel } from "@/components/SlidingPanel";
import { CardModal } from "@/components/Modal/CardsModal";
import { Dices } from "@/components/Dices";
import { createSocket } from "@/utils/socket";
import { useSearchParams } from "next/navigation";
import { ErrorPage } from "@/components/ErrorPage";
import { Popup } from "@/components/Popup";

export default function Game() {
  const [height, setHeight] = useState(0);
  const [cardModal, setCardModal] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const searchParams = useSearchParams();
  const namespace = searchParams.get("namespace");
  const username = searchParams.get("username");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [information, setInformation] = useState("Game is starting...");
  const [infoPopup, setInfoPopup] = useState(false);

  const handleOpenPopup = () => {
    setInfoPopup(true);

    const displayTime = 2000;

    setTimeout(() => {
      setInfoPopup(false);
    }, displayTime);
  };

  useEffect(() => {
    handleOpenPopup();
  }, [information]);

  useEffect(() => {
    if (!namespace || !username) {
      return;
    }
    const newSocket = createSocket(namespace, username);
    newSocket.on("connect", () => {
      setInformation("Gra zaraz się rozpocznie...");
      setSocket(newSocket);
    });
  }, [username, namespace]);

  const toggleCardModal = () => {
    setCardModal(!cardModal);
  };

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setHeight(window.innerHeight);
      });
    };
  }, []);

  if (!namespace || !username || !socket) {
    return <ErrorPage />;
  }

  return (
    <div className="flex justify-center items-center h-screen py-12 sm:py-2 relative">
      <Popup isOpen={infoPopup}>
        <p>{information}</p>
      </Popup>
      <div
        className="rounded-md shadow-lg bg-black overflow-scroll"
        style={{
          display: "grid",
          height: "100%",
          maxWidth: height + 250,
          gridTemplateColumns:
            "minmax(80px, auto) repeat(9, 1fr) minmax(80px, auto)",
          gridTemplateRows:
            "minmax(80px, auto) repeat(9, 1fr) minmax(80px, auto)",
          gap: "1px",
          padding: "1px",
        }}
      >
        {fields.map((field, index) => (
          <Field key={index} field={field} />
        ))}
        <div
          className="w-fill h-fill flex justify-between items-center flex-col p-16 md:p-24 bg-green-200"
          style={{
            gridColumn: "2 / 11",
            gridRow: "2 / 11",
          }}
        >
          <Image src={chance} alt="chance" width={140} className="card" />
          <div className="text-3xl font-bold md:text-6xl">Millionaires</div>
          <Dices />
          <Image src={chest} alt="chest" width={140} className="card" />
        </div>
      </div>

      <Link
        href="/"
        className="absolute top-0 left-0 bg-red-300 p-2 flex flex-row items-center justify-center hover:bg-red-400 transition-all ease-in-out rounded-br-md shadow-lg"
      >
        <Image src={exit} alt="exit" width={10} height={10} />
        <p className="ml-2 font-bold">Wyjdź</p>
      </Link>

      <div
        className="control bottom-0 right-0 rounded-tl-md"
        onClick={toggleCardModal}
      >
        <Image src={assets} alt="exit" width={18} height={18} />
        <p className="ml-2 font-bold">Karty</p>
      </div>
      <div className="absolute top-0 right-0 py-2 px-4 rounded-bl-md bg-cyan-300 text-xl">
        <p className="ml-2 font-bold">1000 $</p>
      </div>
      <div
        className="control bottom-0 left-0 rounded-tr-md"
        onClick={togglePanel}
      >
        <p className="ml-2 font-bold">Gracze</p>
      </div>

      <SlidingPanel open={panelOpen} onClick={togglePanel} />
      <Modal isOpen={cardModal} onClose={toggleCardModal}>
        <CardModal />
      </Modal>
    </div>
  );
}
