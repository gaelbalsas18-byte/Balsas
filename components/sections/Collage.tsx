"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Collage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /*
    0      = entra la sección
    0.20   = las imágenes ya llegaron al centro
    0.55   = empiezan a separarse
    0.90   = quedan alrededor del texto
  */

    /*
=========================================================
PRIMERA ETAPA
Las imágenes permanecen abajo y suben al centro
=========================================================
*/

const stackY = useTransform(
  scrollYProgress,
  [0.20, 0.42],
  [900, 0]
);

const opacity = useTransform(
  scrollYProgress,
  [0.18, 0.30],
  [0, 1]
);

/*
=========================================================
SEGUNDA ETAPA
Ya estando en el centro comienzan a separarse
=========================================================
*/

const img1X = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, -430]
);

const img1YSpread = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, -220]
);

const img1Rotate = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, -4]
);

/* =========================== */

const img2X = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, 420]
);

const img2YSpread = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, -210]
);

const img2Rotate = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, 3]
);

/* =========================== */

const img3X = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, -360]
);

const img3YSpread = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, 220]
);

const img3Rotate = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, 6]
);

/* =========================== */

const img4X = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, 360]
);

const img4YSpread = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, 250]
);

const img4Rotate = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0, -5]
);

const scale = useTransform(
  scrollYProgress,
  [0.42, 0.72],
  [0.82, 1]
);
  return (
    <section
      ref={ref}
      id="Collage"
      className="relative h-[220vh] bg-white"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* TEXTO */}

        <div className="z-10 text-center">

          <h2 className="text-5xl font-black leading-tight text-pink-400 md:text-7xl">

            Innovación que transforma

            <br />

            la odontología.

          </h2>

        </div>

        {/* ========================= */}

        {/* IMAGEN 1 */}

        <motion.div
          style={{
            x: img1X,
            y: useTransform(
                [stackY, img1YSpread],
                ([stack, spread]) => Number(stack) + Number(spread)
            ),
            rotate: img1Rotate,
            scale,
            opacity,
            }}
          className="absolute z-20"
        >
          <Image
            src="/b2.jpg"
            alt=""
            width={320}
            height={200}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* IMAGEN 2 */}

        <motion.div
          style={{
            x: img2X,
            y: useTransform(
                [stackY, img2YSpread],
                ([stack, spread]) => Number(stack) + Number(spread)
            ),
            rotate: img2Rotate,
            scale,
            opacity,
            }}
          className="absolute z-30"
        >
          <Image
            src="/b2.jpg"
            alt=""
            width={320}
            height={200}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* IMAGEN 3 */}

        <motion.div
          style={{
            x: img3X,
            y: useTransform(
                [stackY, img3YSpread],
                ([stack, spread]) => Number(stack) + Number(spread)
            ),
            rotate: img3Rotate,
            scale,
            opacity,
            }}
          className="absolute z-40"
        >
          <Image
            src="/b3.jpg"
            alt=""
            width={320}
            height={200}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* IMAGEN 4 */}

        <motion.div
        style={{
        x: img4X,
        y: useTransform(
            [stackY, img4YSpread],
            ([stack, spread]) => Number(stack) + Number(spread)
        ),
        rotate: img4Rotate,
        scale,
        opacity,
        }}
          className="absolute z-50"
        >
          <Image
            src="/b3.jpg"
            alt=""
            width={320}
            height={200}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
