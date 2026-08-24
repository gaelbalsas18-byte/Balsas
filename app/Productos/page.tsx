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

  return (
    <>

      <IntroBrands
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <BrandGrid
        selectedCategory={selectedCategory}
      />

      <Assistant />

      <Footer/>
    </>
  );
}
