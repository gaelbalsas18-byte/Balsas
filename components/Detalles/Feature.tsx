"use client";

import { motion } from "motion/react";

type FeatureProps = {
  text: string;
  pointX: number;
  pointY: number;
  cardX: number;
  cardY: number;
};

export default function Feature({
  text,
  pointX,
  pointY,
  cardX,
  cardY,
}: FeatureProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {/* Línea curva animada */}
        <motion.path
          d={`
            M ${cardX} ${cardY}
            Q ${(cardX + pointX) / 2} ${cardY}
            ${pointX} ${pointY}
          `}
          fill="none"
          stroke="#1031d8"
          strokeWidth="2"

          initial={{
            pathLength: 0,
          }}

          whileInView={{
            pathLength: 1,
          }}

          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}

          viewport={{
            once: true,
          }}
        />

        {/* Punto */}
        <motion.circle
          cx={pointX}
          cy={pointY}
          r="5"
          fill="#ffffff"

          initial={{
            scale: 0,
            opacity: 0,
          }}

          whileInView={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            delay: 1,
            duration: 0.3,
          }}

          viewport={{
            once: true,
          }}
        />
      </svg>

      {/* Tarjeta */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 1.15,
          duration: 0.4,
          ease: "easeOut",
        }}

        viewport={{
          once: true,
        }}

        className="
          absolute
          rounded-xl
          border
          border-black
          bg-blue-700
          px-5
          py-2
          shadow-lg
          text-white
          font-semibold
        "
        style={{
          left: cardX - 3,
          top: cardY - 23,
        }}
      >
        <p className="whitespace-nowrap text-sm font-medium">
          {text}
        </p>
      </motion.div>

    </div>
  );
}