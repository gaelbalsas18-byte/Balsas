"use client";

import Image from "next/image";
import NameForm from "./NameForm";
import Menu from "./Menu";
import { motion } from "motion/react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  userName: string;
  saveName: (name: string) => void;
}

export default function ChatWindow({
  isOpen,
  setIsOpen,
  userName,
  saveName,
}: Props) {

  if (!isOpen) return null;

  return (
  <motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 30,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    scale: 0.8,
    y: 30,
  }}
  transition={{
    duration: .35,
  }}
  className="relative h-[470px] w-[340px] overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-2xl"
>

    {/* Botón cerrar */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute right-5 top-5 text-xl text-gray-400 transition hover:text-red-500"
    >
      ✕
    </button>

    <div className="flex h-full flex-col">

      {/* Header */}
      <div className="border-b border-slate-100 px-6 py-5">

        <div className="flex items-center gap-4">

          <Image
            src="/logos/logo balsas.png"
            alt="Balsas"
            width={75}
            height={75}
            className="h-auto"
          />

          <div>

            {userName ? (
              <>
                <h2 className="text-xl font-bold text-blue-700">
                  Hola, {userName} 👋
                </h2>

                <p className="text-sm text-gray-500">
                  Bienvenido a Balsas Dental
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-blue-700">
                  Bienvenido
                </h2>

                <p className="text-sm text-gray-500">
                  Ingresa tu nombre para comenzar.
                </p>
              </>
            )}

          </div>

        </div>

      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-y-auto px-6 py-6">

        {userName ? (
          <Menu />
        ) : (
          <NameForm saveName={saveName} />
        )}

      </div>

    </div>

  </motion.div>
);

}