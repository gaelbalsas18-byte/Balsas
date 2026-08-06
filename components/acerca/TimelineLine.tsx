"use client";

import { motion } from "motion/react";

type Props = {
  progress: any;
};

export default function TimelineLine({ progress }: Props) {
  return (
    <>
      <div className="absolute left-0 right-0 top-5 h-[4px] rounded-full bg-gray-200" />

      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="
            absolute
            left-0
            top-5
            h-[4px]
            w-full
            rounded-full
            bg-gradient-to-r
            from-blue-700
            to-cyan-400
        "
      />
    </>
  );
}