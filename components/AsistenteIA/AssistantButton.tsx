"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
  onClick: () => void;
}

export default function AssistantButton({
  onClick,
}: Props) {

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {

    const open = setTimeout(() => {
      setExpanded(true);
    }, 1800);

    const close = setTimeout(() => {
      setExpanded(false);
    }, 7000);

    return () => {
      clearTimeout(open);
      clearTimeout(close);
    };

  }, []);

  return (

    <motion.button

      onClick={onClick}

      onMouseEnter={() => setExpanded(true)}

      onMouseLeave={() => setExpanded(false)}

      animate={{
        width: expanded ? 250 : 70,
        y: [0, -5, 0],
      }}

      transition={{
        width: {
          duration: .35,
        },

        y: {
          repeat: Infinity,
          duration: 3,
        },
      }}

      className="
        fixed
        bottom-8
        right-8
        z-[9997]

        flex
        h-[70px]
        items-center

        overflow-hidden

        rounded-full

        border
        border-white/20

        bg-blue-800

        px-5

        shadow-[0_20px_60px_rgba(0,90,255,.35)]

        backdrop-blur-xl
      "
    >

      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-white/10 blur-xl" />

      {/* Icono */}

      <motion.div
        whileHover={{
            rotate: 15,
            scale: 1.15,
        }}
        className="
            relative
            z-10
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
        "
        >
        <Image
            src="/logos/BalsasTrans.png"
            alt="Icono dental"
            width={45}
            height={45}
            className="object-contain"
        />
        </motion.div>

      {/* Texto */}

      <motion.div

        animate={{
          opacity: expanded ? 1 : 0,
          x: expanded ? 0 : 20,
        }}

        transition={{
          duration: .25,
        }}

        className="ml-5 text-left"

      >

        <p className="text-lg font-bold text-white">

          Asistente

        </p>

        <p className="text-sm text-blue-100">

          Balsas IA

        </p>

      </motion.div>

    </motion.button>

  );

}