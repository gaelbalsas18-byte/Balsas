"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import EventosContent from "@/components/eventos/EventosContent";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const eventos = [
  {
    mes: "NOVIEMBRE",
    mesNumero: 10,
    imagen: "/Eventos/Fest/Dia1.jpg",
    rotation: -6,
  },
  {
    mes: "DICIEMBRE",
    mesNumero: 11,
    imagen: "/Eventos/Fest/fest.jpg",
    rotation: -2,
  },
  {
    mes: "ENERO",
    mesNumero: 0,
    imagen: "/Eventos/Fest/Dia1.jpg",
    rotation: 3,
  },
  {
    mes: "FEBRERO",
    mesNumero: 1,
    imagen: "/Eventos/Fest/fest3.jpg",
    rotation: 6,
  },
];

export default function Evento() {
  const cardsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(cardsRef, {
    amount: 0.45,
    once: true,
  });

  const [mesSeleccionado, setMesSeleccionado] = useState<number | null>(
    null
  );

  const [isMobile, setIsMobile] = useState(false);

  /*
   * Detectar tamaño de pantalla
   */
  useEffect(() => {
    const comprobarPantalla = () => {
      setIsMobile(window.innerWidth < 640);
    };

    comprobarPantalla();

    window.addEventListener("resize", comprobarPantalla);

    return () => {
      window.removeEventListener("resize", comprobarPantalla);
    };
  }, []);

  const seleccionarMes = (mes: number) => {
    setMesSeleccionado(mes);
  };

  /*
   * Posiciones para computadora
   */
  const posicionesDesktop = [
    -420,
    -140,
    140,
    420,
  ];

  /*
   * Posiciones para celular
   */
  const posicionesMobile = [
    -120,
    -45,
    35,
    120,
  ];

  return (
    <section 
    id="eventos"
    className="w-full overflow-hidden bg-white py-10">

      {/* ===================== */}
      {/* ENCABEZADO */}
      {/* ===================== */}

      <div className={`${manrope.className} mt-3 text-center`}>
        <span className="rounded-full bg-[#2790ec] px-6 py-2 font-semibold text-white">
          EVENTOS
        </span>
      </div>


      {/* ===================== */}
      {/* TEXTO */}
      {/* ===================== */}

      <div
        className={`${manrope.className} mx-auto mt-7 max-w-3xl px-5 text-center`}
      >
        <h3 className="text-base leading-relaxed text-black sm:text-lg">
          Los eventos que quedan esta segunda parte del año
        </h3>

        <p className="mt-2 text-base leading-relaxed text-black sm:text-lg">
          Checa los eventos de cada mes.
          <br />
          No te pierdas de las experiencias que Balsas Dental te ofrece.
        </p>
      </div>


      {/* ===================== */}
      {/* TARJETAS */}
      {/* ===================== */}

      <div
        ref={cardsRef}
        className="
          relative
          mx-auto
          mt-14
          h-[300px]
          w-full
          max-w-7xl

          sm:mt-20
          sm:h-[420px]
        "
      >

        {eventos.map((evento, index) => {

          const posicion = isMobile
            ? posicionesMobile[index]
            : posicionesDesktop[index];

          return (
            <motion.button
              key={evento.mes}
              type="button"
              onClick={() => seleccionarMes(evento.mesNumero)}
              aria-label={`Ver eventos de ${evento.mes}`}

              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-gray-100
                shadow-xl
                outline-none
                focus:ring-4
                focus:ring-[#2790ec]/40

                h-[250px]
                w-[145px]

                sm:h-[360px]
                sm:w-[260px]
              "

              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 0.9,
              }}

              animate={
                isInView
                  ? {
                      x: posicion,
                      y: index % 2 === 0 ? 0 : -5,
                      rotate: evento.rotation,
                      scale: 1,
                    }
                  : {
                      x: 0,
                      y: 0,
                      rotate: 0,
                      scale: 0.9,
                    }
              }

              transition={{
                duration: 1.2,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                scale: 1.04,
              }}

              whileTap={{
                scale: 0.97,
              }}

              style={{
                zIndex: index + 1,
              }}
            >

              {/* ===================== */}
              {/* IMAGEN */}
              {/* ===================== */}

              <Image
                src={evento.imagen}
                alt={`Evento ${evento.mes}`}
                fill
                className="object-cover"
                priority={index < 2}
              />


              {/* ===================== */}
              {/* DEGRADADO */}
              {/* ===================== */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />


              {/* ===================== */}
              {/* MES */}
              {/* ===================== */}

              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                <p className="text-center text-sm font-bold tracking-wider text-white sm:text-xl">
                  {evento.mes}
                </p>
              </div>

            </motion.button>
          );
        })}

      </div>


      {/* ===================== */}
      {/* CALENDARIO / EVENTOS */}
      {/* ===================== */}

      {mesSeleccionado !== null && (
        <div className="mt-16 sm:mt-20">
          <EventosContent
            mesInicial={mesSeleccionado}
          />
        </div>
      )}

    </section>
  );
}