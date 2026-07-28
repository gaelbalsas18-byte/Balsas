"use client";

import { motion } from "motion/react";

export default function HeroProductos() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-white"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-[-100px] top-10 h-96 w-96 rounded-full bg-white"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[120px]"
      />

      {/* ==========================
            Contenido
      ========================== */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-6 rounded-full bg-blue-800 px-6 py-2 text-sm font-semibold tracking-widest text-white"
        >
          CENTRO DE PRODUCTOS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .8,
            delay: .2,
          }}
          className="max-w-5xl text-5xl font-black leading-tight text-slate-900"
        >
          Descubre las mejores
          <br />

          <span className="bg-gray-400 bg-clip-text text-transparent">
            soluciones odontológicas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .5,
          }}
          className="mt-8 max-w-3xl text-xl leading-9 text-black"
        >
          Explora cientos de productos distribuidos por
          <strong className="text-blue-800">
            {" "}Balsas Dental
          </strong>,
          organizados por marca y categoría para que encuentres
          exactamente lo que necesitas.
        </motion.p>

        {/* Barra de búsqueda */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .7,
          }}
          className="mt-14 w-full max-w-2xl"
        >

        </motion.div>

        {/* Boton */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          className="mt-10 rounded-full bg-blue-700 px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-300 transition hover:bg-blue-800"
        >
          Explora las mejores marcas
        </motion.button>

      </div>

    </section>
  );
}

