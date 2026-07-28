"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  product: any;
  brand: any;
  onClose: () => void;
}

export default function ProductExperience({
  product,
  brand,
  onClose,
}: Props) {

  // ==========================
  // Obtener únicamente imágenes válidas
  // ==========================
  const images = useMemo(() => {

    const list: string[] = [];

    if (Array.isArray(product.images)) {
      product.images.forEach((img: string) => {
        if (typeof img === "string" && img.trim() !== "") {
          list.push(img);
        }
      });
    }

    if (
      typeof product.image === "string" &&
      product.image.trim() !== ""
    ) {
      list.push(product.image);
    }

    return list;

  }, [product]);

  // Imagen seleccionada
  const [selectedImage, setSelectedImage] = useState<string | null>(
    images.length > 0 ? images[0] : null
  );

  return (
    <AnimatePresence>

      <motion.div
        layoutId={product.id}
        className="fixed inset-0 z-[10000] overflow-y-auto bg-white"
      >

        {/* Fondo */}

        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-br
            ${brand.color}
            opacity-10
          `}
        />

        {/* Glow */}

        <div className="absolute right-0 top-0 h-[550px] w-[550px] rounded-full bg-blue-300/30 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-8 py-16">

          {/* Botón regresar */}

          <motion.button
            whileHover={{
              x: -5,
            }}
            whileTap={{
              scale: .95,
            }}
            onClick={onClose}
            className="mb-16 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold shadow-sm transition hover:bg-gray-50"
          >
            ← Regresar
          </motion.button>

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* ==========================
                Imagen
            ========================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >

              <AnimatePresence mode="wait">

                <motion.div
                  key={selectedImage ?? "empty"}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: .95,
                  }}
                  transition={{
                    duration: .35,
                  }}
                >

                  {selectedImage ? (

                    <Image
                      src={selectedImage}
                      alt={product.name}
                      width={650}
                      height={650}
                      className="mx-auto object-contain"
                    />

                  ) : (

                    <div className="flex h-[500px] items-center justify-center rounded-3xl border-2 border-dashed border-gray-300">

                      <p className="text-gray-500">

                        Imagen no disponible

                      </p>

                    </div>

                  )}

                </motion.div>

              </AnimatePresence>

              {/* Miniaturas */}

              {images.length > 1 && (

                <div className="mt-10 flex flex-wrap justify-center gap-5">

                  {images.map((img) => (

                    <button
                      key={img}
                      onClick={() => setSelectedImage(img)}
                      className={`
                        overflow-hidden
                        rounded-2xl
                        border-2
                        transition

                        ${
                          selectedImage === img
                            ? "border-blue-700 shadow-lg"
                            : "border-transparent"
                        }
                      `}
                    >

                      <Image
                        src={img}
                        alt={product.name}
                        width={90}
                        height={90}
                        className="h-20 w-20 object-cover"
                      />

                    </button>

                  ))}

                </div>

              )}

            </motion.div>

            {/* ==========================
                Información
            ========================== */}

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
                delay: .15,
              }}
            >

              <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">

                {brand.name}

              </span>

              <h1 className="mt-6 text-6xl font-black text-gray-900">

                {product.name}

              </h1>

              <p className="mt-8 text-xl leading-9 text-gray-600">

                {product.description}

              </p>

              {/* Beneficios */}

              {product.features?.length > 0 && (

                <div className="mt-12">

                  <h3 className="mb-6 text-2xl font-bold text-gray-900">

                    Beneficios

                  </h3>

                  <div className="space-y-5">

                    {product.features.map((feature: string) => (

                      <motion.div
                        key={feature}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="flex items-center gap-4"
                      >

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">

                          ✓

                        </div>

                        <p className="text-lg text-gray-700">

                          {feature}

                        </p>

                      </motion.div>

                    ))}

                  </div>

                </div>

              )}

              {/* Botones */}

              <div className="mt-14 flex flex-wrap gap-5">

                <button className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">

                  Solicitar información

                </button>

                <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100">

                  Descargar ficha técnica

                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </motion.div>

    </AnimatePresence>
  );
}