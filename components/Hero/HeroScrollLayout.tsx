"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Props = {
  children: ReactNode;
};

export default function HeroScrollLayout({ children }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Hero
  const heroWidth = useTransform(scrollYProgress, [0, 0.45], ["100%", "62%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.45], [0, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 0.92]);

  // Panel derecho
  const panelWidth = useTransform(scrollYProgress, [0, 0.45], ["0%", "38%"]);
  const panelOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const panelX = useTransform(scrollYProgress, [0.15, 0.35], [80, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[250vh] bg-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="flex h-full w-full">

          {/* HERO */}

          <motion.div
            style={{
              width: heroWidth,
              borderRadius,
              scale,
            }}
            className="relative h-full overflow-hidden shadow-2xl"
          >
            {children}
          </motion.div>

          {/* PANEL DERECHO */}

          <motion.div
            style={{
              width: panelWidth,
              opacity: panelOpacity,
              x: panelX,
            }}
            className="flex items-center justify-center overflow-hidden"
          >
            <div className="max-w-md px-10">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Balsas Dental
              </span>

              <h2 className="mt-5 text-5xl font-bold leading-tight text-blue-700">
                Tecnología que transforma la odontología
              </h2>

              <p className="mt-8 text-lg leading-8 text-black">
                Trabajamos con las mejores marcas del mercado para ofrecer
                soluciones innovadoras, equipos de alta precisión y materiales
                que elevan la práctica clínica.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}