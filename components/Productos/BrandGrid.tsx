"use client";

import BrandExperience from "./BrandExperience";
import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { brands } from "../data/brands";
import BrandCard from "./BrandCard";

interface Props {
  universo: string;
  especialidad: string;
  necesidad: string;
}

export default function BrandGrid({
  universo,
  especialidad,
  necesidad,
}: Props) {
  const [selectedBrand, setSelectedBrand] = useState<
    (typeof brands)[0] | null
  >(null);

  /*
   * FILTRO DE MARCAS
   *
   * Las tarjetas se filtran directamente desde brands.ts
   * No utilizamos products.ts
   */
  const filteredBrands = brands.filter((brand) => {
    // Filtrar por Universo
    if (
      universo &&
      !brand.universo.includes(universo)
    ) {
      return false;
    }

    // Filtrar por Especialidad
    if (
      especialidad &&
      !brand.especialidades.includes(especialidad)
    ) {
      return false;
    }

    // Filtrar por Necesidad
    if (
      necesidad &&
      !brand.necesidades.includes(necesidad)
    ) {
      return false;
    }

    return true;
  });

  return (
    <section className="bg-white pb-32">
      <div className="mx-auto max-w-7xl px-6">

        <AnimatePresence>
          <motion.div
            layout
            transition={{
              layout: {
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            animate={{
              opacity: selectedBrand ? 0 : 1,
              scale: selectedBrand ? 0.96 : 1,
              filter: selectedBrand
                ? "blur(12px)"
                : "blur(0px)",
            }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.88,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.82,
                    y: -25,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <BrandCard
                    brand={brand}
                    onClick={() => setSelectedBrand(brand)}
                  />
                </motion.div>
              ))}

            </AnimatePresence>

          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedBrand && (
            <BrandExperience
              brand={selectedBrand}
              onClose={() => setSelectedBrand(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}