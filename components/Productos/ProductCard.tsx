"use client";

import Image from "next/image";
import { motion } from "motion/react";


interface Props {
  product: {
  id: string;
  name: string;
  category: string;
  description: string;

  images: string[];

  features: string[];

  presentations: string[];

  brochure: string;

  featured: boolean;
};

  onClick: () => void;
}

export default function ProductCard({
  product,
  onClick,
}: Props) {
  return (
    <motion.div
      layoutId={product.id}
      onClick={onClick}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group cursor-pointer overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-lg"
    >
      {/* Imagen */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-b from-slate-50 to-white">

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl transition duration-700 group-hover:scale-150" />

        <motion.div
          layoutId={`image-${product.id}`}
          className="relative flex h-full items-center justify-center"
        >
         <Image
            src={product.images[0]}
            alt={product.name}
            width={240}
            height={240}
            className="object-contain drop-shadow-2xl transition duration-500 group-hover:scale-110"
          />
        </motion.div>

        {/* Brillo */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-1000 group-hover:translate-x-full" />
      </div>

      {/* Información */}
      <div className="space-y-4 p-7">

        <motion.span
          layout
          className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
        >
          {product.category}
        </motion.span>

        <motion.h2
          layout
          className="text-2xl font-bold text-gray-900"
        >
          {product.name}
        </motion.h2>

        <motion.p
          layout
          className="line-clamp-3 leading-7 text-gray-600"
        >
          {product.description}
        </motion.p>

        <div className="flex items-center justify-between pt-2">

          {product.featured ? (
            <motion.span
              layout
              className="rounded-full bg-yellow-100 px-3 py-2 text-xs font-semibold text-yellow-700"
            >
              ⭐ Destacado
            </motion.span>
          ) : (
            <span />
          )}

          <motion.div
            whileHover={{
              x: 5,
            }}
            className="flex items-center gap-2 font-semibold text-blue-700"
          >
            Ver detalles

            <svg
              className="h-5 w-5"
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