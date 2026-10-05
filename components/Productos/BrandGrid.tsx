"use client";

import BrandExperience from "./BrandExperience";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { brands } from "../data/brands";
import BrandCard from "./BrandCard";

interface Props {
  universo: string;
  especialidad: string;
  necesidad: string;
}

const CARDS_PER_PAGE = 4;
const AUTO_PLAY_TIME = 8000;

export default function BrandGrid({
  universo,
  especialidad,
  necesidad,
}: Props) {
  const [selectedBrand, setSelectedBrand] = useState<
    (typeof brands)[0] | null
  >(null);

  const [currentPage, setCurrentPage] = useState(0);

  /*
   * =====================================================
   * FILTRO
   * =====================================================
   *
   * ESTA PARTE NO SE MODIFICA.
   *
   * El filtro sigue trabajando directamente
   * con brands.ts.
   */
  const filteredBrands = brands.filter((brand) => {
    // Universo
    if (
      universo &&
      !brand.universo.includes(universo)
    ) {
      return false;
    }

    // Especialidad
    if (
      especialidad &&
      !brand.especialidades.includes(especialidad)
    ) {
      return false;
    }

    // Necesidad
    if (
      necesidad &&
      !brand.necesidades.includes(necesidad)
    ) {
      return false;
    }

    return true;
  });

  /*
   * =====================================================
   * PAGINACIÓN DEL CARRUSEL
   * =====================================================
   */

  const totalPages = Math.ceil(
    filteredBrands.length / CARDS_PER_PAGE
  );

  /*
   * Cada vez que cambia el filtro,
   * regresamos al primer grupo de tarjetas.
   */
  useEffect(() => {
    setCurrentPage(0);
  }, [universo, especialidad, necesidad]);

  /*
   * Si cambia la cantidad de páginas y la página actual
   * deja de existir, regresamos a la primera.
   */
  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage >= totalPages
    ) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  /*
   * =====================================================
   * AUTO PLAY
   * =====================================================
   *
   * Cambia automáticamente de 4 en 4.
   */
  useEffect(() => {
    if (totalPages <= 1 || selectedBrand) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentPage((current) =>
        current + 1 >= totalPages
          ? 0
          : current + 1
      );
    }, AUTO_PLAY_TIME);

    return () => clearInterval(interval);
  }, [totalPages, selectedBrand]);

  /*
   * =====================================================
   * TARJETAS ACTUALES
   * =====================================================
   */

  const startIndex =
    currentPage * CARDS_PER_PAGE;

  const visibleBrands = filteredBrands.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  /*
   * =====================================================
   * CONTROLES
   * =====================================================
   */

  const nextPage = () => {
    setCurrentPage((current) =>
      current + 1 >= totalPages
        ? 0
        : current + 1
    );
  };

  const previousPage = () => {
    setCurrentPage((current) =>
      current - 1 < 0
        ? Math.max(totalPages - 1, 0)
        : current - 1
    );
  };

  return (
    <section className="bg-white pb-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* =================================================
            CARRUSEL
        ================================================= */}

        <div className="relative">

          <AnimatePresence
            mode="wait"
          >
            <motion.div
              key={currentPage}
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {visibleBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <BrandCard
                    brand={brand}
                    onClick={() =>
                      setSelectedBrand(brand)
                    }
                  />

                </motion.div>
              ))}

            </motion.div>
          </AnimatePresence>


          {/* =================================================
              BOTÓN ANTERIOR
          ================================================= */}

          {totalPages > 1 && (
            <button
              type="button"
              onClick={previousPage}
              aria-label="Marcas anteriores"
              className="
                absolute
                left-0
                top-1/2
                z-20
                flex
                h-12
                w-12
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                shadow-lg
                transition
                duration-300
                hover:scale-110
                hover:shadow-xl
              "
            >
              <svg
                className="h-5 w-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}


          {/* =================================================
              BOTÓN SIGUIENTE
          ================================================= */}

          {totalPages > 1 && (
            <button
              type="button"
              onClick={nextPage}
              aria-label="Siguientes marcas"
              className="
                absolute
                right-0
                top-1/2
                z-20
                flex
                h-12
                w-12
                translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                shadow-lg
                transition
                duration-300
                hover:scale-110
                hover:shadow-xl
              "
            >
              <svg
                className="h-5 w-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

        </div>


        {/* =================================================
            INDICADORES
        ================================================= */}

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">

            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentPage(index)
                }
                aria-label={`Ir al grupo ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentPage === index
                      ? "w-8 bg-gray-900"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }
                `}
              />
            ))}

          </div>
        )}


        {/* =================================================
            SIN RESULTADOS
        ================================================= */}

        {filteredBrands.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              flex
              min-h-[250px]
              items-center
              justify-center
              text-center
            "
          >
            <div>
              <p className="text-xl font-semibold text-gray-800">
                No encontramos marcas
              </p>

              <p className="mt-2 text-gray-500">
                Prueba con otra combinación de filtros.
              </p>
            </div>
          </motion.div>
        )}


        {/* =================================================
            EXPERIENCIA DE MARCA
        ================================================= */}

        <AnimatePresence>
          {selectedBrand && (
            <BrandExperience
              brand={selectedBrand}
              onClose={() =>
                setSelectedBrand(null)
              }
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}