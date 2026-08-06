"use client";

import AboutHero from "../acerca/AboutHero";
import Timeline from "../acerca/Timeline";

export default function AcercaDe() {
  return (
    <section
      id="AcercaDe"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Glow superior */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/30 blur-[150px]" />

      {/* Glow inferior */}

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-200/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ===========================
            HERO DE ACERCA DE
        =========================== */}

        <AboutHero />

        {/* ===========================
            TIMELINE
        =========================== */}

        <Timeline />

      </div>
    </section>
  );
}