"use client";

import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import EventosContent from "@/components/eventos/EventosContent";
import { Manrope } from "next/font/google";
import { motion } from "motion/react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Evento() {
  return (
    <section
      id="eventos"
      className="w-full overflow-hidden bg-white py-10 sm:py-14"
    >

      {/* ===================== */}
      {/* ENCABEZADO */}
      {/* ===================== */}

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
          Eventos
        </h2>

        <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-[#244adf]" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500">
          Enterate de los cursos que Balsas Dental tiene para ti.
        </p>

      </motion.div>

      <div
        className={`
          ${manrope.className}
          mx-auto
          mt-8
          grid
          w-full
          max-w-5xl
          grid-cols-1
          gap-8
          px-6
          text-center
          md:grid-cols-2
          md:gap-14
          md:px-8
        `}
      >

        {/* ===================== */}
        {/* TEXTO IZQUIERDO */}
        {/* ===================== */}

        <div className="flex items-center">

          <p className="text-base leading-7 text-black sm:text-base">

            En{" "}
            <strong className="text-[#0057b8]">
              Balsas Dental
            </strong>{" "}
            impulsamos la excelencia en la odontología moderna.

            Participamos activamente en los congresos más importantes del
            sector, como la AMIC Dental, e impartimos cursos especializados
            de alto nivel.

          </p>

        </div>


        {/* ===================== */}
        {/* TEXTO DERECHO */}
        {/* ===================== */}

        <div className="flex items-center">

          <p className="text-base leading-7 text-black sm:text-base">

            El sector odontológico está en constante evolución y en Balsas
            te acercamos a los mejores expertos.

            Descubre nuestras próximas capacitaciones internacionales en
            carillas y estética dental.

          </p>

        </div>

      </div>


      {/* ===================== */}
      {/* IMAGEN PRINCIPAL */}
      {/* ===================== */}

      <FadeIn>

        <div
          className="
            relative
            mx-auto
            mt-10
            h-[200px]
            w-[90%]
            max-w-6xl
            overflow-hidden
            rounded-3xl

            sm:h-[300px]
            sm:w-[80%]

            md:h-[380px]
            md:w-[70%]

            lg:h-[430px]
            lg:w-[60%]
          "
        >

          <Image
            src="/Eventos/Fest/Dia1.jpg"
            alt="Eventos Balsas Dental"
            fill
            sizes="
              (max-width: 640px) 90vw,
              (max-width: 1024px) 80vw,
              60vw
            "
            className="object-cover"
            priority
          />


          {/* Texto sobre imagen */}

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

            <p
              className={`
                ${manrope.className}
                text-center
                text-lg
                font-bold
                text-white
                sm:text-2xl
                md:text-3xl
              `}
            >
              ¡Vive Nuevas Experiencias!
            </p>

          </div>

        </div>

      </FadeIn>


      {/* ===================== */}
{/* CALENDARIO */}
{/* ===================== */}

<div
  className={`
    ${manrope.className}
    mx-auto
    mt-20
    w-full
    max-w-6xl
    px-5
    sm:mt-24
    sm:px-8
  `}
>
    <div className="mx-auto w-full">
      <EventosContent />
    </div>
  
</div>

    </section>
  );
}