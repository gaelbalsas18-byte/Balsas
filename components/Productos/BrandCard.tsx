"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  brand: {
    id: string;
    slogan: string;
    logo: string;
    image: string;
    color: string;
    glow: string;
  };
  onClick: () => void;
}

export default function BrandCard({
  brand,
  onClick,
}: Props) {
  return (
    <motion.div
      layoutId={brand.id}
      onClick={onClick}
      whileHover={{
        y: -12,
      }}
      whileTap={{
        scale: 0.97,
      }}
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
      }}
      transition={{
        duration: 0.6,
      }}
      style={{
        cursor: "pointer",
      }}
      className="group relative overflow-hidden rounded-[38px] shadow-2xl"
    >

      {/* ===================== */}
      {/* COLOR DE FONDO */}
      {/* ===================== */}

      <div
        className={`
          absolute inset-0
          ${brand.color}
        `}
      />

      {/* ===================== */}
      {/* OVERLAY */}
      {/* ===================== */}

      <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/15" />

      {/* ===================== */}
      {/* CONTENIDO */}
      {/* ===================== */}

      <div className="relative z-10 flex h-[420px] flex-col justify-between p-10 md:p-15">

        {/* ===================== */}
        {/* LOGO CENTRADO */}
        {/* ===================== */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.3,
          }}
          className="flex justify-center pt-8"
        >
          <div className="relative h-[80px] w-[150px] md:h-[160px] md:w-[220px]">
            <Image
              src={brand.logo}
              alt={`${brand.id} logo`}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* ===================== */}
        {/* INFORMACIÓN */}
        {/* ===================== */}

        <div>

          <motion.div
            whileHover={{
              x: 8,
            }}
            className="mt-8 flex items-center gap-3 text-lg font-semibold text-white"
          >
            Explorar

            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14m-6-6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

        </div>

      </div>

    </motion.div>
  );
}