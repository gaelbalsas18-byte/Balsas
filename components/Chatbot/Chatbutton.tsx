"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  onClick: () => void;
}

export default function ChatButton({ onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        y: {
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 shadow-2xl"
    >
      {/* Halo */}
      <span className="absolute inset-0 rounded-full bg-blue-800"></span>

      {/* Logo */}
      <Image
        src="/logos/BalsasTrans.png"
        alt="Balsas Assistant"
        width={60}
        height={60}
        className="relative z-10"
      />
    </motion.button>
  );
}


