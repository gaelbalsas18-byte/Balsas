"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import AssistantWelcome from "./AssistantWelcome";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AssistantModal({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fondo */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-slate-900/45 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: 20,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[9999]

              h-[95vh]
              w-[95vw]
              max-w-6xl

              -translate-x-1/2
              -translate-y-1/2

              overflow-hidden

              rounded-[34px]

              border
              border-slate-200

              bg-gradient-to-b
              from-white
              to-slate-50

              shadow-[0_35px_90px_rgba(15,23,42,.22)]
            "
          >
            {/* Glow Superior */}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-blue-700/5 to-transparent" />

            {/* Header */}

            <div
              className="
                relative
                flex
                items-center
                justify-between

                border-b
                border-slate-200

                bg-white/90

                px-7
                py-3

                backdrop-blur-xl
              "
            >
              <div>

                <div className="flex items-center gap-3">

                  <div
                className="
                    flex
                    h-18
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-800
                    shadow-lg
                "
                >
                <Image
                    src="/logos/BalsasTrans.png"
                    alt="Icono dental"
                    width={64}
                    height={64}
                    className="object-contain"
                />
                </div>

                  <div>

                    <h2 className="text-3xl font-black tracking-tight text-blue-800">

                    Balsas IA

                    </h2>

                    <p className="mt-1 text-neutral-500">

                      Balsas GPT

                    </p>

                  </div>

                </div>

              </div>

              {/* Botón cerrar */}

              <button
                onClick={onClose}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-slate-200

                  bg-white

                  text-xl
                  text-slate-600

                  transition-all
                  duration-300

                  hover:border-blue-700
                  hover:bg-blue-700
                  hover:text-white
                "
              >
                ✕
              </button>

            </div>

            {/* Contenido */}

            <div
              className="
                relative

                h-[calc(90vh-97px)]

                overflow-y-auto

                px-4
              "
            >

              <AssistantWelcome />

            </div>

          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
}
