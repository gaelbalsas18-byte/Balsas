"use client";

import BrandExperience from "./BrandExperience";
import { useState } from "react";

import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

import { brands } from "../data/brands";
import BrandCard from "./BrandCard";
import { Category } from "./CategoryFilter";

interface Props {
  selectedCategory: Category;
}

export default function BrandGrid({
  selectedCategory,
}: Props) {

  const [selectedBrand, setSelectedBrand] = useState<
    (typeof brands)[0] | null
  >(null);

  const filteredBrands =
  selectedCategory === "all"
    ? brands
    : brands.filter((brand) =>
        brand.categories.includes(selectedCategory)
      );
  return (
    <section className="bg-white pb-32">

      <div className="mx-auto max-w-7xl px-6">

        <AnimatePresence>

          <motion.div
            layout
            transition={{
                layout: {
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1], // easing tipo Apple
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
                          scale: .88,
                          y: 40,
                      }}
                      animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                      }}
                      exit={{
                          opacity: 0,
                          scale: .82,
                          y: -25,
                      }}
                      transition={{
                          duration: .55,
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