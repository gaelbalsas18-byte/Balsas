"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  brand: {
    id: string;
    slogan: string;
    description: string;
    logo: string;
    image: string;
    image2:string;
    color: string;
    glow: string;
    link: string;
    link2?: string;
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
        `}
        
      >
         <Image
            src={brand.image}
            alt=""
            fill
            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            "
          />
          
         <div className="absolute inset-0 bg-black/55" />

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
                text-white
              ">
                {brand.slogan}
              </p>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-base
                  leading-relaxed
                  text-white
                  font-bold
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
                  max-w-[420px]
                  overflow-hidden
                  rounded-[40px]
                  shadow-2xl
                "
              >

                <Image
                  src={brand.image2}
                  alt={`${brand.image2} - imagen`}
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

                {/* LINK */}

                {brand.link2 ? (
                  <motion.a
                    href={brand.link2}
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
                    Adquiere sus productos!
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
                    Adquiere sus productos!
                  </span>
                )}

              </div>
              
            </motion.div>

            <div className="text-white font-base text-xs text-center uppercase">
                <p><strong>¡Recuerda!</strong> si tienes alguna duda de los productos de la marca que maneja Balsas Dental
                Dirijete con uno de nuestros asesores.</p>
              </div>
              <div>
                <a href=""></a>
              </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
