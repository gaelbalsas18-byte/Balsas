"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { history } from "./data";
import TimelineItem from "./TimelineItem";
import TimelineLine from "./TimelineLine";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <section
      ref={ref}
      className="relative mt-8 overflow-hidden rounded-[3rem] bg-white"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />

        <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[100px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.03] blur-[120px]" />
      </div>

      {/* Encabezado */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-4xl">
          Un camino construido
          <span className="block text-blue-700">
            con experiencia
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black sm:text-xl">
          Durante más de tres décadas hemos evolucionado junto con la
          odontología, incorporando nuevas tecnologías y fortaleciendo
          alianzas con fabricantes internacionales.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 mx-auto mt-24 max-w-6xl lg:mt-32">
        <TimelineLine progress={progress} />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-4 md:gap-6">
          {history.map((item, index) => (
            <TimelineItem
              key={item.year}
              index={index}
              year={item.year}
              title={item.title}
              text={item.text}
              highlight={item.highlight}
            />
          ))}
        </div>
      </div>

      {/* Cierre */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 mx-auto mt-24 max-w-2xl text-center lg:mt-32"
      >
        <div className="mx-auto mb-6 h-px w-16 bg-blue-600" />

        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Y esto apenas continúa...
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
          Seguimos construyendo el futuro de la odontología en México
          a través de innovación, calidad y confianza.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Innovación
          </span>
          
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Calidad
          </span>

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Confianza
          </span>
        </div>
      </motion.div>
    </section>
  );
}