"use client";

import { motion } from "motion/react";

export default function Notice() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="
        rounded-2xl
        border
        border-blue-100
        bg-blue-50
      "
    >
      <p
        className="
          text-center
          text-sm
          leading-7
          text-slate-600
        "
      >
        🔒 Las recomendaciones son generadas únicamente utilizando el
        catálogo de productos <br /> distribuidos por{" "}
        <span className="font-semibold text-slate-800">
          Balsas Dental
        </span>.
        <br />
        Esta herramienta sirve como apoyo al profesional y no sustituye
        el criterio clínico.
      </p>
    </motion.div>
  );
}