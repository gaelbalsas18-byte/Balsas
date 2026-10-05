"use client";

import Distribucion from "@/components/sections/Distribucion";
import { motion } from "framer-motion";
import Image from "next/image";


export default function DistribucionPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      {/* DISTRIBUCION*/}
      <section className="px-6 py-20 lg:px-10">
        {/* =========================
          ENCABEZADO
      ========================= */}
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
          Distribuidores en México
        </h2>

        <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-[#244adf]" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500">
          Encuentra distribuidores disponibles y puntos de atención
          en diferentes estados de la República Mexicana.
        </p>

      </motion.div>
      
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <Image
              src="/distribucion.jpg"
              alt="Estudiantes en capacitación"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black">
              Formación
            </div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3258f0]">
              Conoce a nuestros distribuidores
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-3xl">
              Formemos una alianza
              <span className="text-[#3258f0]">
                {" "}de valor.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-black sm:text-lg">
              En Balsas Dental tenemos depositos comprometidos con incrementar el reconocimiento de dentistas, 
              técnicos de laboratorio, odontólogos y especialistas, al proveerles de materiales, insumos y equipo con calidad y 
              excelencia a nivel mundial.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[#2790ec]" />

              <span className="text-sm uppercase tracking-wider text-black/50">
                Balsas Dental
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISTRIBUIDORES */}
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Distribucion />
        </div>
      </section>
    </main>
  );
}
