"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  brand: {
    id: string;
    name: string;
    slogan: string;
    description: string;
    logo: string;
    image: string;
    color: string;
    glow: string;
    link: string;
    pdf: string;
  };

  onClose: () => void;
}

export default function BrandExperience({
  brand,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className={`
          fixed
          inset-0
          z-[9999]
          overflow-y-auto
          bg-gradient-to-br
          ${brand.color}
        `}
      >

        {/* =================================================
            GLOWS
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[550px]
            w-[550px]
            rounded-full
            bg-white/20
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-[450px]
            w-[450px]
            rounded-full
            bg-white/10
            blur-[120px]
          "
        />


        {/* =================================================
            CONTENIDO
        ================================================= */}

        <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 md:px-10">

          {/* =================================================
              REGRESAR
          ================================================= */}

          <motion.button
            whileHover={{
              x: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onClose}
            className="
              rounded-full
              bg-white/15
              px-5
              py-2
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/25
            "
          >
            ← Regresar
          </motion.button>


          {/* =================================================
              LOGO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mt-6
              flex
              justify-center
            "
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={280}
              height={120}
              className="
                h-auto
                max-h-[100px]
                w-auto
                object-contain
                drop-shadow-2xl
              "
            />
          </motion.div>


          {/* =================================================
              CONTENIDO PRINCIPAL
          ================================================= */}

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-6xl
              items-center
              gap-10
              lg:grid-cols-2
              lg:gap-16
            "
          >

            {/* =================================================
                LADO IZQUIERDO
            ================================================= */}

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
                duration: 0.7,
                delay: 0.1,
              }}
              className="text-center lg:text-left"
            >

              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/60
              ">
                {brand.slogan}
              </p>

              <h1
                className="
                  mt-4
                  text-4xl
                  font-black
                  leading-tight
                  text-white
                  md:text-5xl
                "
              >
                {brand.name}
              </h1>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-base
                  leading-relaxed
                  text-white/90
                  md:text-lg
                  lg:mx-0
                "
              >
                {brand.description}
              </p>

            </motion.div>


            {/* =================================================
                LADO DERECHO
            ================================================= */}

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
                duration: 0.7,
                delay: 0.2,
              }}
              className="flex flex-col items-center"
            >

              {/* IMAGEN */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative
                  w-full
                  max-w-[500px]
                  overflow-hidden
                  rounded-[30px]
                  shadow-2xl
                "
              >

                <Image
                  src={brand.image}
                  alt={`${brand.name} - imagen`}
                  width={900}
                  height={600}
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    md:h-[320px]
                  "
                />

              </motion.div>


              {/* =================================================
                  BOTONES
              ================================================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  justify-center
                  gap-4
                "
              >

                {/* PDF */}

                {brand.pdf ? (
                  <motion.a
                    href={brand.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      min-w-[120px]
                      rounded-xl
                      bg-white
                      px-6
                      py-3
                      text-center
                      text-sm
                      font-semibold
                      text-blue-700
                      shadow-lg
                      transition
                      hover:shadow-xl
                    "
                  >
                    PDF
                  </motion.a>
                ) : (
                  <span
                    className="
                      min-w-[120px]
                      cursor-not-allowed
                      rounded-xl
                      bg-white/30
                      px-6
                      py-3
                      text-center
                      text-sm
                      font-semibold
                      text-white/60
                    "
                  >
                    PDF
                  </span>
                )}


                {/* LINK */}

                {brand.link ? (
                  <motion.a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      min-w-[120px]
                      rounded-xl
                      bg-white
                      px-6
                      py-3
                      text-center
                      text-sm
                      font-semibold
                      text-blue-700
                      shadow-lg
                      transition
                      hover:shadow-xl
                    "
                  >
                    Conoce más
                  </motion.a>
                ) : (
                  <span
                    className="
                      min-w-[120px]
                      cursor-not-allowed
                      rounded-xl
                      bg-white/30
                      px-6
                      py-3
                      text-center
                      text-sm
                      font-semibold
                      text-white/60
                    "
                  >
                    Conoce más
                  </span>
                )}

              </div>

            </motion.div>

          </div>

        </div>

      </motion.div>
    </AnimatePresence>
  );
}