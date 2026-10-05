"use client";
import AboutHero from "@/components/acerca/AboutHero";
import Timeline from "@/components/acerca/Timeline";
import { motion } from "motion/react";

export default function AcercaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
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
          Historia
        </h2>

        <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-[#244adf]" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500">
          Demos un viaje en el tiempo y chequemos el recorrido de Balsas Dental.
        </p>

      </motion.div>

          {/* Contenido */}
          <AboutHero />

          {/* Línea de tiempo */}
          <Timeline />

        </div>
      </section>
    </main>
  );
}