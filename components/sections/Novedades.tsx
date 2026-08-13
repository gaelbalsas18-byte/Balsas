"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Novedades() {
  return(
    <section className="w-full bg-white py-24">

      <div className="text-center mt-3">
        <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">NOVEDADES</span>
      </div>
    </section>
  )
}
