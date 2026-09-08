"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { products } from "../data/products";


interface Props {
  brand: {
    id: string;
    name: string;
    slogan: string;
    logo: string;
    color: string;
    glow: string;
  };

  onClose: () => void;
}

export default function BrandExperience({
  brand,
  onClose,
}: Props) {

  const brandProducts =
    products[brand.id as keyof typeof products] ?? [];

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("Todos");

  // Producto seleccionado
  const [selectedProduct, setSelectedProduct] =
    useState<any>(null);

  // Categorías
  const categories = useMemo(() => {

    const unique = Array.from(
      new Set(
        brandProducts.map((p) => p.category)
      )
    );

    return ["Todos", ...unique];

  }, [brandProducts]);

  // Productos filtrados
  const filteredProducts = useMemo(() => {

    return brandProducts.filter((product) => {

      const categoryOk =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;

      const searchOk =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryOk && searchOk;

    });

  }, [
    brandProducts,
    search,
    selectedCategory,
  ]);

  return (

    <AnimatePresence>

      <motion.div
        layoutId={brand.id}
        className={`
          fixed
          inset-0
          z-[9999]
          overflow-y-auto
          bg-gradient-to-br
          ${brand.color}
        `}
      >

        {/* Glow superior */}
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white/20 blur-[140px]" />

        {/* Glow inferior */}
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-8 py-16">

          {/* Regresar */}

          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: .95 }}
            onClick={onClose}
            className="mb-14 rounded-full bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/30"
          >
            ← Regresar
          </motion.button>

        </div>
        
      </motion.div>

    </AnimatePresence>

  );

}