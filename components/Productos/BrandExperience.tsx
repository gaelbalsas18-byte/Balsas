"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { products } from "../data/products";

import ProductGrid from "./ProductGrid";
import ProductFilters from "./ProductFilters";

// ESTE IMPORT LO USAREMOS EN EL SIGUIENTE PASO
import ProductExperience from "./ProductExperience";

interface Props {
  brand: {
    id: string;
    name: string;
    slogan: string;
    logo: string;
    color: string;
    glow: string;
    products?: number;
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

          {/* Header */}

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Logo */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .7,
              }}
              className="flex justify-center"
            >

              <Image
                src={brand.logo}
                alt={brand.name}
                width={420}
                height={260}
                className="object-contain drop-shadow-2xl"
              />

            </motion.div>

            {/* Información */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .7,
                delay: .15,
              }}
            >

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                Distribuidor Oficial
              </span>

              <h1 className="mt-6 text-6xl font-black text-white">
                {brand.name}
              </h1>

              <p className="mt-8 text-xl leading-9 text-white/90">
                {brand.slogan}
              </p>

              <div className="mt-10 flex gap-5">

                <div className="rounded-2xl bg-white/15 px-8 py-5 backdrop-blur-xl">

                  <p className="text-sm text-white/70">
                    Productos
                  </p>

                  <h2 className="text-3xl font-bold text-white">
                    {brand.products}+
                  </h2>

                </div>

                <div className="rounded-2xl bg-white/15 px-8 py-5 backdrop-blur-xl">

                  <p className="text-sm text-white/70">
                    Calidad
                  </p>

                  <h2 className="text-3xl font-bold text-white">
                    Premium
                  </h2>

                </div>

              </div>

            </motion.div>

          </div>

          {/* Catálogo */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .4,
            }}
            className="mt-24"
          >

            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <h2 className="text-5xl font-bold text-white">
                  Catálogo
                </h2>

                <p className="mt-3 text-lg text-white/80">
                  Descubre todos los productos disponibles de {brand.name}
                </p>

              </div>

              <div className="rounded-full bg-white/15 px-6 py-3 text-white backdrop-blur-xl">

                Mostrando

                <strong className="mx-2">

                  {filteredProducts.length}

                </strong>

                de

                <strong className="mx-2">

                  {brandProducts.length}

                </strong>

                productos

              </div>

            </div>

            <ProductFilters
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />

            {/* GRID */}

            <ProductGrid
              products={filteredProducts}
              onSelect={setSelectedProduct}
            />

          </motion.div>

        </div>

        {/* EXPERIENCIA DEL PRODUCTO */}

        <AnimatePresence>

          {selectedProduct && (

            <ProductExperience

              product={selectedProduct}

              brand={brand}

              onClose={() => setSelectedProduct(null)}

            />

          )}

        </AnimatePresence>

      </motion.div>

    </AnimatePresence>

  );

}