"use client";

import { motion, type MotionValue } from "motion/react";

type Props = {
  progress: MotionValue<number>;
};

export default function TimelineLine({ progress }: Props) {
  return (
    <>
      {/* Línea base - Desktop */}
      <div
        className="
          pointer-events-none
          absolute
          left-[12.5%]
          right-[12.5%]
          top-7
          hidden
          h-[3px]
          rounded-full
          bg-slate-200
          md:block
        "
      />

      {/* Línea animada - Desktop */}
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="
          pointer-events-none
          absolute
          left-[12.5%]
          right-[12.5%]
          top-7
          hidden
          h-[3px]
          rounded-full
          bg-gradient-to-r
          from-blue-700
          via-blue-600
          to-cyan-400
          md:block
        "
      />

      {/* Línea vertical - Mobile */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          top-7
          w-[3px]
          -translate-x-1/2
          rounded-full
          bg-slate-200
          md:hidden
        "
      />

      {/* Línea animada vertical - Mobile */}
      <motion.div
        style={{
          scaleY: progress,
          transformOrigin: "top",
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          top-7
          w-[3px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-blue-700
          to-cyan-400
          md:hidden
        "
      />
    </>
  );
}