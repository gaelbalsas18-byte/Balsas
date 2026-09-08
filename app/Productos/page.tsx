"use client";

import { useState } from "react";
import IntroBrands from "@/components/Productos/IntroBrands";
import BrandGrid from "@/components/Productos/BrandGrid";
import Assistant from "@/components/AsistenteIA/Assistant";
import { Category } from "@/components/Productos/CategoryFilter";
import Footer from "@/components/sections/Footer";

export default function Productos() {

  const [selectedCategory, setSelectedCategory] =
    useState<Category>("all");
    const [universo, setUniverso] = useState("");
    const [especialidad, setEspecialidad] = useState("");
    const [necesidad, setNecesidad] = useState("");

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

      <Assistant />

      <Footer/>
    </>
  );
}