"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function TypingBubble() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: 20,
        scale: 0.95,
      }}
      transition={{
        duration: .35,
      }}
      className="w-[220px] overflow-hidden rounded-3xl border border-slate-250 bg-white shadow-2xl"
    >

      {/* Encabezado */}

      <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">

          <Image
            src="/logos/logo balsas.png"
            alt="Balsas"
            width={28}
            height={28}
          />

        </div>

        <div>

          <h3 className="font-semibold text-slate-800">
            Asistente Balsas
          </h3>

          <p className="text-xs text-green-500">
            Escribiendo...
          </p>

        </div>

      </div>

      {/* Cuerpo */}

      <div className="px-6 py-8">

        <div className="flex gap-3">

          <span className="typing-dot"></span>
          <span className="typing-dot delay-150"></span>
          <span className="typing-dot delay-300"></span>

        </div>

      </div>

    </motion.div>
  );
}