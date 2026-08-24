"use client";

import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Novedades() {
  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">

        {/* ================================
            ENCABEZADO
        ================================= */}

        <div className="mb-8 flex items-center justify-between sm:mb-10">
         <div className={`${manrope.className}`}>
            <span className="rounded-full bg-[#2790ec] px-6 py-2 font-semibold text-white">
              NOVEDADES 
            </span>
          </div>

          <Image
            src="/logos/logo balsas.png"
            alt="Balsas Dental"
            width={120}
            height={80}
            className="w-20 object-contain sm:w-28"
          />
        </div>

        {/* ================================
            CONTENIDO PRINCIPAL
        ================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

            {/* =================================
                IMAGEN 1
            ================================= */}

            <FadeIn>
            <div className="rounded-3xl relative h-[220px] overflow-hidden sm:h-[280px] md:h-[250px]">
              <Image
                src="/nove/2.jpg"
                alt="Novedad Balsas Dental"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            </FadeIn>

            {/* =================================
                TEXTO 1
            ================================= */}

            <div
              className={`${manrope.className} flex items-center justify-center px-6 py-8 text-center sm:px-10`}
            >
              <p className="text-base leading-relaxed text-black sm:text-xl">
                Checa las nuevas novedades que tiene{" "}
                <strong className="text-[#2790ec]"><br/>
                  Balsas Dental
                </strong>{" "}
                para ti.
                <br />
                Mantente al día con las últimas innovaciones,
                productos, tecnologías y soluciones que tenemos
                para el mundo odontológico.
              </p>
            </div>

            {/* =================================
                COLUMNA IZQUIERDA INFERIOR
            ================================= */}

            <div className="flex flex-col gap-6">
              {/* IMAGEN 2 */}
              <FadeIn>
              <div className="rounded-3xl relative h-[200px] overflow-hidden sm:h-[250px]">
                <Image
                  src="/nove/1.jpg"
                  alt="Novedad Balsas Dental"
                  fill
                  sizes="(max-width: 768px) 140vw, 80vw"
                  className="object-cover"
                />
              </div>
              </FadeIn>

              {/* TEXTO 2 */}
              <div
                className={`${manrope.className} flex flex-1 items-center justify-center px-6 py-7 text-center sm:px-8`}
              >
                <p className="text-base leading-relaxed text-black sm:text-xl">
                  Descubre las novedades de las mejores marcas
                  que trabajan con nosotros y conoce todo lo nuevo.
                  
                  Explora y encuentra nuevas herramientas para llevar tu práctica y laboratorio
                  al siguiente nivel.
                </p>
              </div>
            </div>

            {/* =================================
                IMAGEN 3
            ================================= */}

            <FadeIn>
            <div className="rounded-3xl relative min-h-[400px] overflow-hidden sm:min-h-[500px] md:min-h-[560px]">
              <Image
                src="/nove/odonto.jpg"
                alt="Novedad Balsas Dental"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            </FadeIn>

          </div>
        
        {/* ================================
            BOTÓN
        ================================= */}

        <div className="mt-10 text-center sm:mt-12">
          <a
            href="/novedades"
            className={`${manrope.className} inline-block border border-[#2790ec] bg-[#2790ec] px-10 py-3 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-[#2790ec]`}
          >
            Novedades
          </a>
        </div>
      </div>
    </section>
  );
}