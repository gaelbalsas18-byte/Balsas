"use client";

import { motion } from "motion/react";
import CategoryFilter, { Category } from "./CategoryFilter";

interface Props {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function IntroBrands({
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px]" />

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white"
        >
          MARCAS INTERNACIONALES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl font-black text-slate-900"
        >
          Trabajamos únicamente con
          <span className="block bg-gray-400 bg-clip-text text-transparent">
            fabricantes líderes
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-xl leading-9 text-black"
        >
          Cada marca representa años de investigación,
          innovación y calidad para brindar soluciones
          confiables a odontólogos, laboratorios y especialistas.
        </motion.p>

        {/* Flecha */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-20"
        >

          
          <svg
            className="h-10 w-10 text-blue-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M12 5v14m0 0l6-6m-6 6l-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <div className="mt-10">

          <CategoryFilter
            selected={selectedCategory}
            onChange={onCategoryChange}
          />

        </div>

      </div>

    </section>
  );
}