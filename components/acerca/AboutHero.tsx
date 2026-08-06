"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

export default function AboutHero() {

  const { scrollYProgress } = useScroll();

  // Movimiento suave
  const y = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 70]
  );

  // El logo aparece ligeramente más lento
  const scale = useTransform(
    scrollYProgress,
    [0, 0.20],
    [1, 0.92]
  );

  return (

    <div className="mx-auto grid max-w-6xl items-center gap-24 lg:grid-cols-2">

      {/* Texto */}

      <motion.div
        style={{ y }}
        initial={{
          opacity: 0,
          x: -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: .4,
        }}
        transition={{
          duration: .8,
        }}
      >

        <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">

          ACERCA DE NOSOTROS

        </span>

        <h2 className="mt-10 text-5xl font-bold leading-tight text-blue-700">

          Más de 30 años impulsando la innovación dental.

        </h2>

        <p className="mt-10 text-xl leading-10 text-slate-700">

          En Balsas Dental somos especialistas en la distribución de
          productos dentales de alta tecnología, colaborando con
          fabricantes líderes a nivel mundial para acercar innovación,
          calidad y confianza a clínicas, laboratorios,
          universidades y distribuidores en todo México.

        </p>

      </motion.div>

      {/* Logo */}

      <motion.div

        style={{
          scale,
        }}

        initial={{
          opacity: 0,
          x: 60,
        }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        viewport={{
          once: true,
          amount: .4,
        }}

        transition={{
          duration: .8,
        }}

        className="relative flex justify-center"

      >

        <div
          className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-300/20
          blur-[120px]
        "
        />

        <Image
          src="/logos/logo balsas.png"
          alt="Balsas Dental"
          width={430}
          height={430}
          className="relative z-10"
        />

      </motion.div>

    </div>

  );

}