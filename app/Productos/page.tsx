"use client";

import { useState } from "react";

import HeroProductos from "@/components/Productos/HeroProductos";
import Stats from "@/components/Productos/Stats";
import IntroBrands from "@/components/Productos/IntroBrands";
import BrandGrid from "@/components/Productos/BrandGrid";
import Assistant from "@/components/AsistenteIA/Assistant";

import { Category } from "@/components/Productos/CategoryFilter";

export default function Productos() {

  const [selectedCategory, setSelectedCategory] =
    useState<Category>("all");

  return (
    <>
      <HeroProductos />

      <Stats />

      <IntroBrands
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <BrandGrid
        selectedCategory={selectedCategory}
      />

      <Assistant />
    </>
  );
}
