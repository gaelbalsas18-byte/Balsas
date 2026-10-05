"use client";

import { motion } from "motion/react";

type Props = {
  year: string;
  title: string;
  text: string;
  highlight?: boolean;
  index: number;
};

export default function TimelineItem({
  year,
  title,
  text,
  highlight,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="relative pt-12 md:pt-0"
    >
      {/* Punto */}
      <div className="relative z-20 flex justify-center">
        <motion.div
          whileHover={{
            scale: 1.15,
          }}
          transition={{
            duration: 0.3,
          }}
          className={`relative flex items-center justify-center rounded-full border-4 border-white bg-blue-700 shadow-lg shadow-blue-700/20 ${
            highlight ? "h-16 w-16" : "h-14 w-14"
          }`}
        >
          {/* Pulso para el año actual */}
          {highlight && (
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-blue-500"
            />
          )}

          <div className="relative h-3 w-3 rounded-full bg-white" />
        </motion.div>
      </div>

      {/* Tarjeta */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={`relative mt-7 rounded-3xl border bg-white px-6 py-7 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
          highlight
            ? "border-blue-200 shadow-lg shadow-blue-100/60"
            : "border-slate-100"
        }`}
      >
        {/* Actualidad */}
        {highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-700 px-4 py-1 text-xs font-bold tracking-widest text-white shadow-lg shadow-blue-700/20">
            ACTUALIDAD
          </div>
        )}

        {/* Año */}
        <div className="flex items-center justify-center">
          <span
            className={`font-black tracking-tight ${
              highlight
                ? "text-4xl text-blue-700"
                : "text-3xl text-slate-900"
            }`}
          >
            {year}
          </span>
        </div>

        {/* Línea */}
        <div
          className={`mx-auto mt-4 h-1 rounded-full ${
            highlight
              ? "w-16 bg-blue-700"
              : "w-10 bg-slate-200"
          }`}
        />

        {/* Título */}
        <h3
          className={`mt-5 text-center ${
            highlight
              ? "text-2xl font-black text-slate-900"
              : "text-xl font-bold text-slate-900"
          }`}
        >
          {title}
        </h3>

        {/* Descripción */}
        <p className="mt-4 text-center text-sm leading-7 text-slate-500 sm:text-base">
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
}