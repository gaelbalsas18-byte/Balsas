"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  brand: {
    id: string;
    name: string;
    slogan: string;
    logo: string;
    color: string;
    glow: string;
    products?: number;
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
        scale: .97,
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
        duration: .6,
      }}

      style={{
        cursor: "pointer",
      }}

      className="group relative overflow-hidden rounded-[38px] shadow-2xl"
    >

      {/* Fondo */}

      <div
        className={`
          absolute inset-0
          bg-gradient-to-br
          ${brand.color}
        `}
      />

      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-white/20
          blur-[90px]
          transition-all
          duration-700
          group-hover:scale-125
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/10"/>

      {/* Contenido */}

      <div className="relative z-10 flex h-[420px] flex-col justify-between p-10">

        {/* Badge */}

        <div>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">

            {brand.products}+ Productos

          </span>

        </div>

        {/* Logo */}

        <motion.div

          whileHover={{
            scale: 1.08,
          }}

          transition={{
            duration: .3,
          }}

          className="flex justify-center"

        >

          <Image
            src={brand.logo}
            alt={brand.name}
            width={260}
            height={160}
            className="object-contain drop-shadow-2xl"
          />

        </motion.div>

        {/* Información */}

        <div>

          <h2 className="text-4xl font-black text-white">

            {brand.name}

          </h2>

          <p className="mt-3 leading-relaxed text-white/90">

            {brand.slogan}

          </p>

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