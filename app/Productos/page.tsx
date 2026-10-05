"use client";

import { useState } from "react";
import IntroBrands from "@/components/Productos/IntroBrands";
import BrandGrid from "@/components/Productos/BrandGrid";
import Footer from "@/components/sections/Footer";
import AssistantButton from "@/components/AsistenteIA/AssistantButton";
import AssistantOverlay from "@/components/AsistenteIA/AssistantOverlay";

export default function Productos() {

  const [universo, setUniverso] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [necesidad, setNecesidad] = useState("");

  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <>

      <IntroBrands
        universo={universo}
        especialidad={especialidad}
        necesidad={necesidad}
        setUniverso={setUniverso}
        setEspecialidad={setEspecialidad}
        setNecesidad={setNecesidad}
      />

      <BrandGrid
        universo={universo}
        especialidad={especialidad}
        necesidad={necesidad}
      />

      <Footer />

      {/* Botón flotante */}

      <AssistantButton
        onClick={() => setAssistantOpen(true)}
      />

      {/* Capa del asistente */}

      <AssistantOverlay
        open={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />

    </>
  );
}