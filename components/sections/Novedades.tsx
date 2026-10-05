
"use client";

import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Novedades() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">

        {/* ================================
            ENCABEZADO
        ================================= */}
        <FadeIn>
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
          Encuentra lo mas nuevo de balsas dental y mantente al tanto.
        </p>

      </motion.div>
        </FadeIn>

        {/* ================================
            CONTENIDO PRINCIPAL
        ================================= */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">

          {/* =================================
              IMAGEN 1
          ================================= */}
          <FadeIn>
            <div className="group relative h-[230px] overflow-hidden rounded-[30px] sm:h-[290px] md:h-[260px]">

              <Image
                src="/nove/2.jpg"
                alt="Novedad Balsas Dental"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

            </div>
          </FadeIn>

          {/* =================================
              TEXTO 1
          ================================= */}
          <FadeIn>
            <div
              className={`${manrope.className} relative flex h-full min-h-[230px] items-center justify-center overflow-hidden rounded-[30px] bg-white px-7 py-10 text-center sm:px-12`}
            >

              {/* Elemento decorativo */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2561e4]/100" />
              <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-[#2561e4]/100" />

              <div className="relative z-10 max-w-md">

                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#0057b8]">
                  Descubre
                </span>

                <p className="text-base leading-8 text-gray-700 sm:text-lg">
                  Checa las nuevas novedades que tiene{" "}
                  <strong className="font-bold text-[#0057b8]">
                    Balsas Dental
                  </strong>{" "}
                  para ti.
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                  Mantente al día con las últimas innovaciones,
                  productos, tecnologías y soluciones que tenemos
                  para el mundo odontológico.
                </p>

              </div>

            </div>
          </FadeIn>

          {/* =================================
              COLUMNA IZQUIERDA INFERIOR
          ================================= */}
          <div className="flex flex-col gap-7">

            {/* IMAGEN 2 */}
            <FadeIn>
              <div className="group relative h-[210px] overflow-hidden rounded-[30px] sm:h-[260px]">

                <Image
                  src="/nove/1.jpg"
                  alt="Novedades Balsas Dental"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>
            </FadeIn>

            {/* TEXTO 2 ================== */}
            <FadeIn>
              <div className={`${manrope.className} relative flex h-full min-h-[230px] items-center justify-center overflow-hidden rounded-[30px] bg-white px-7 py-10 text-center sm:px-12`}>
                {/*Elementos decorativos */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2561e4]/100"/>
                <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-[#2561e4]/100"/>

                <div className="relative z-10 max-w-md">
                  <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#2790ec]">
                    Nuestras marcas
                  </span>

                  <p className="text-base leading-8 text-gray-700 sm:text-lg"> 
                    Descubre las novedades de las mejores marcas que trabajan con nosotros y conoce todo lo nuevo. 
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base"> 
                    Explora y encuentra nuevas herramientas para llevar tu práctica y laboratorio al siguiente nivel. 
                    </p>
                </div>
              </div>
            </FadeIn>


          </div>

          {/* =================================
              IMAGEN 3
          ================================= */}
          <FadeIn>
            <div className="group relative min-h-[430px] overflow-hidden rounded-[30px] sm:min-h-[520px] md:min-h-[570px]">

              <Image
                src="/nove/odonto.jpg"
                alt="Innovación odontológica"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Contenido sobre imagen */}
              <div
                className={`${manrope.className} absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9`}
              >

                <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="h-px w-7 bg-white" />
                  Innovación
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Lo nuevo del mundo odontológico.
                </h3>

              </div>

            </div>
          </FadeIn>

        </div>

        {/* ================================
            BOTÓN
        ================================= */}
         <FadeIn>
           <div className="text-center">
              <Link href="/novedades">
                  <button className="mt-12 inline-block border border-blue-700 bg-white px-10 py-3 text-sm uppercase tracking-wide text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-white">
                     Novedades
                  </button>
                 </Link>
              </div>
          </FadeIn>

      </div>
    </section>
  );
}

