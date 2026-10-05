"use client";

import { motion } from "motion/react";
import CategoryFilter from "./CategoryFilter";

interface Props {
  universo: string;
  especialidad: string;
  necesidad: string;

  setUniverso: (value: string) => void;
  setEspecialidad: (value: string) => void;
  setNecesidad: (value: string) => void;
}

export default function IntroBrands({
  universo,
  especialidad,
  necesidad,
  setUniverso,
  setEspecialidad,
  setNecesidad,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px]" />

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

         <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >

        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#244adf]/60">
          BALSAS DENTAL
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-[#1736a8] sm:text-4xl">
          Marcas internacionales
        </h2>

        <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-[#244adf]" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500">
          Encuentra las mejores marcas que manejamos para ti.
        </p>

      </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg leading-9 text-black"
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

        {/* Filtros */}

        <div className="mt-10 w-full">

          <CategoryFilter
            universo={universo}
            especialidad={especialidad}
            necesidad={necesidad}
            setUniverso={setUniverso}
            setEspecialidad={setEspecialidad}
            setNecesidad={setNecesidad}
          />

        </div>

      </div>

    </section>
  );
}