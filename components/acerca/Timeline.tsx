"use client";

import { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { history } from "./data";
import TimelineItem from "./TimelineItem";
import TimelineLine from "./TimelineLine";

export default function Timeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"],
  });

  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <section
      ref={ref}
      className="mt-40"
    >
      {/* Encabezado */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: .8,
        }}
        className="text-center"
      >
        <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">
          NUESTRA HISTORIA
        </span>

        <h3 className="mt-4 text-sm font-semibold uppercase tracking-widest text-blue-700">
          Balsas Dental
        </h3>

        <h2 className="mt-8 text-5xl font-semibold text-black">
          Un camino construido con experiencia
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-black">
          Durante más de tres décadas hemos evolucionado junto con la
          odontología, incorporando nuevas tecnologías y fortaleciendo
          alianzas con fabricantes internacionales.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="relative mt-28">

        <TimelineLine progress={progress} />

        <div className="grid grid-cols-1 gap-20 md:grid-cols-4 xl:grid-cols-4">

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

    </section>
  );
}