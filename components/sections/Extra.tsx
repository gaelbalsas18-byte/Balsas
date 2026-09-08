"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Manrope } from "next/font/google";
import { useEffect, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const conceptos = [
  {
    palabra: "APRENDER",
    descripcion: "El conocimiento nos mueve.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.45)",
    posicion:
      "left-[2%] top-[12%] sm:left-[5%] sm:top-[15%] lg:left-[10%] lg:top-[17%]",
  },
  {
    palabra: "CONECTAR",
    descripcion: "Las grandes ideas nacen juntas.",
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.45)",
    posicion:
      "right-[2%] top-[12%] sm:right-[5%] sm:top-[15%] lg:right-[10%] lg:top-[17%]",
  },
  {
    palabra: "INSPIRAR",
    descripcion: "Cada experiencia deja algo.",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.45)",
    posicion:
      "left-[2%] bottom-[12%] sm:left-[5%] sm:bottom-[15%] lg:left-[10%] lg:bottom-[17%]",
  },
  {
    palabra: "TRANSFORMAR",
    descripcion: "Lo aprendido se convierte en acción.",
    color: "#F43F5E",
    glow: "rgba(244,63,94,0.45)",
    posicion:
      "right-[2%] bottom-[12%] sm:right-[5%] sm:bottom-[15%] lg:right-[10%] lg:bottom-[17%]",
  },
];

export default function Extra() {
  const [planetaActivo, setPlanetaActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPlanetaActivo((actual) => (actual + 1) % 4);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  const colorActivo = conceptos[planetaActivo].color;

  return (
    <section
      id="extra"
      className={`${manrope.className} relative w-full overflow-hidden bg-white py-28 sm:py-36`}
    >
      {/* ========================================================= */}
      {/* FONDO */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 ">
        {/* Glow central */}

        <motion.div
          animate={{
            backgroundColor: conceptos[planetaActivo].glow,
          }}
          transition={{ duration: 0.6 }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[120px]
          "
        />

        {/* Línea horizontal */}

        <div
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#2790ec]/10
            to-transparent
            
          "
        />

        {/* Línea vertical */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-[#2790ec]/5
            to-transparent
            
          "
        />
      </div>

      {/* ========================================================= */}
      {/* CONTENIDO */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* ======================================================= */}
        {/* ENCABEZADO */}
        {/* ======================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              rounded-full
              bg-[#0057b8]
              px-5
              py-2
              text-xs
              font-bold
              tracking-[0.2em]
              text-white
              sm:text-sm
            "
          >
            EL SIGUIENTE PASO
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              mt-8
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[#0057b8]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Todo lo que hacemos
            <br />
            <span className="text-black">
              nos lleva hacia adelante.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
              
            "
          >
            Conocimiento, experiencias y personas que comparten una misma
            visión: seguir transformando la odontología.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* SISTEMA SOLAR */}
        {/* ========================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-20
            h-[430px]
            w-full
            max-w-[950px]
            sm:mt-24
            sm:h-[520px]
          "
        >
          {/* ===================================================== */}
          {/* ÓRBITA PRINCIPAL */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#2790ec]/10
              sm:h-[400px]
              sm:w-[400px]
              
            "
          />

          {/* ===================================================== */}
          {/* ÓRBITA INTERIOR */}
          {/* ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[210px]
              w-[210px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-[#2790ec]/15
              sm:h-[285px]
              sm:w-[285px]
              
            "
          />

          {/* ===================================================== */}
          {/* COMETA */}
          {/* ===================================================== */}

          <motion.div
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            onUpdate={(latest) => {
              const rot = Number(latest.rotate);

              /*
               * Convertimos la rotación en una estación.
               *
               * 0°   → APRENDER
               * 90°  → CONECTAR
               * 180° → TRANSFORMAR
               * 270° → INSPIRAR
               */

              let estacion = Math.round(rot / 90) % 4;

              if (estacion < 0) {
                estacion += 4;
              }

              setPlanetaActivo(estacion);
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              sm:h-[400px]
              sm:w-[400px]
              
            "
          >
            {/* Punto */}

            <motion.div
              animate={{
                backgroundColor: colorActivo,
                boxShadow: `0 0 25px ${colorActivo}`,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute
                left-1/2
                top-[-6px]
                h-4
                w-4
                -translate-x-1/2
                rounded-full
                sm:h-5
                sm:w-5
                
              "
            />

            {/* Cola */}

            <motion.div
              animate={{
                background: `linear-gradient(to top, transparent, ${colorActivo})`,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute
                left-1/2
                top-[-35px]
                h-8
                w-[3px]
                -translate-x-1/2
                rounded-full
                blur-[1px]
                
              "
            />
          </motion.div>

          {/* ===================================================== */}
          {/* CENTRO */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.4,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 80,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-[0_20px_70px_rgba(0,87,184,0.15)]
              sm:h-40
              sm:w-40
            "
          >
            {/* Glow */}

            <motion.div
              animate={{
                backgroundColor: conceptos[planetaActivo].glow,
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-0
                rounded-full
                blur-2xl
              "
            />

            {/* Logo */}

            <div
              className="
                relative
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-gray-100
                bg-yellow-200
                sm:h-32
                sm:w-32
              "
            >
              <Image
                src="/logos/BalsasTrans.png"
                alt="Balsas Dental"
                width={100}
                height={60}
                className="
                  h-auto
                  w-[75px]
                  object-contain
                  sm:w-[95px]
                "
              />
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* CONCEPTOS */}
          {/* ===================================================== */}

          {conceptos.map((concepto, index) => {
            const activo = planetaActivo === index;

            return (
              <motion.div
                key={concepto.palabra}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.12,
                }}
                className={`absolute ${concepto.posicion}`}
              >
                <motion.div
                  animate={{
                    scale: activo ? 1.18 : 1,
                    y: activo ? -6 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative"
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      blur-xl
                    "
                    style={{
                      backgroundColor: concepto.glow,
                      opacity: activo ? 1 : 0,
                      transform: activo ? "scale(1.5)" : "scale(1)",
                      transition: "all 350ms ease",
                    }}
                  />

                  {/* PLANETA */}

                  <div
                    className="
                      relative
                      rounded-full
                      border
                      px-5
                      py-3
                      shadow-[0_10px_35px_rgba(0,0,0,0.06)]
                      backdrop-blur-md
                      sm:px-6
                      sm:py-3.5
                    "
                    style={{
                      backgroundColor: activo
                        ? concepto.color
                        : "#ffffff",

                      borderColor: activo
                        ? concepto.color
                        : "#f3f4f6",

                      boxShadow: activo
                        ? `0 15px 45px ${concepto.glow}`
                        : "0 10px 35px rgba(0,0,0,0.06)",

                      transition:
                        "background-color 400ms ease, border-color 400ms ease, box-shadow 400ms ease",
                    }}
                  >
                    {/* Nombre */}

                    <p
                      className="
                        whitespace-nowrap
                        text-xs
                        font-bold
                        tracking-[0.18em]
                        sm:text-sm
                      "
                      style={{
                        color: activo
                          ? "#ffffff"
                          : "#0057b8",
                        transition: "color 400ms ease",
                      }}
                    >
                      {concepto.palabra}
                    </p>

                    {/* Descripción */}

                    <p
                      className="
                        mt-1
                        hidden
                        whitespace-nowrap
                        text-[10px]
                        sm:block
                      "
                      style={{
                        color: activo
                          ? "rgba(255,255,255,0.85)"
                          : "#9ca3af",
                        transition: "color 400ms ease",
                      }}
                    >
                      {concepto.descripcion}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MENSAJE */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="text-center"
        >
          <p className="text-xl font-bold text-black sm:text-2xl">
            Y esto...
          </p>

          <motion.p
            animate={{
              color: colorActivo,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              mt-2
              text-2xl
              font-bold
              sm:text-4xl
            "
          >
            apenas comienza.
          </motion.p>
        </motion.div>

        {/* ========================================================= */}
        {/* BOTÓN */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#footer"
            className="
              group
              flex
              items-center
              gap-4
              rounded-full
              border
              border-gray-200
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-[#0057b8]
              shadow-sm
              transition-all
              duration-300
              hover:border-[#2790ec]/40
              hover:shadow-[0_10px_35px_rgba(39,144,236,0.12)]
            "
          >
            <span>Conoce más de Balsas</span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#0057b8]
                text-white
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            >
              ↓
            </span>
          </a>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* LÍNEA HACIA FOOTER */}
      {/* ========================================================= */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          origin-center
          bg-gradient-to-r
          from-transparent
          via-[#0057b8]
          to-transparent
        "
      />
    </section>
  );
}