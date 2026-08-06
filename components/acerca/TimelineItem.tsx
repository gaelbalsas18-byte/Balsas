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
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.18,
      }}
      whileHover={{
        y: -12,
      }}
      className="relative text-center"
    >
      {/* Punto */}

      <motion.div
        whileHover={{
          scale: 1.25,
          boxShadow: "0px 0px 35px rgba(37,99,235,.45)",
        }}
        transition={{
          duration: .35,
        }}
        className={`
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          rounded-full
          bg-blue-800
          ring-8
          ring-blue-100
          ${
            highlight
              ? "h-12 w-12"
              : "h-10 w-10"
          }
        `}
      />

      {/* Tarjeta */}

      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        className="
          pt-20
          rounded-3xl
          px-6
          py-8
          transition-all
          duration-500
        "
      >
        <h3
          className={`
            font-black
            text-blue-700

            ${
              highlight
                ? "text-4xl"
                : "text-3xl"
            }
          `}
        >
          {year}
        </h3>

        <h4
          className={`
            mt-4
            text-slate-900

            ${
              highlight
                ? "text-2xl font-black"
                : "text-2xl font-bold"
            }
          `}
        >
          {title}
        </h4>

        <p className="mt-6 leading-8 text-black">
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
}