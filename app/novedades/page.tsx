"use client";
import NovedadesContent from "@/components/novedades/NovedadesContent";
import Footer from "@/components/sections/Footer";
import { motion } from "motion/react";

export default function NovedadesPage() {
  return (
    <main className="min-h-screen bg-gray-50 ">

      <section 
      id="novedades"
      className="px-6 py-16 lg:px-10">
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
          Novedades
        </h2>

        <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-[#244adf]" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500">
          Encuentra lo mas nuevo que Balsas Dental tiene para ti.
        </p>

      </motion.div>

          {/* Contenido */}
          <NovedadesContent />
        </div>
      </section>
      <Footer/>
    </main>
  );
}