"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function aboutHero(){
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.3], [0, 45]);
    const scale = useTransform(
      scrollYProgress,
      [0, 0.25],
      [1, 0.95]
    );

    return(
      <section className="relative overflow-hidden py-16 lg:py-8">

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            {/* Texto */}
            <motion.div style={{y}}
            initial={{opacity: 0, x: -50,}}
            whileInView={{opacity: 1, x: 0,}}
            viewport={{once: true, amount: 0.3,}}
            transition={{ duration: 0.8, ease: "easeOut",}}>

              {/*Heansing*/}

              <h2 className="max-w-3xl text-4xl font-bold leanding-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-4xl">
                Mas de {" "}

                <span className="text-blue-700">
                  30 años
                </span>{" "}
                Impulsando la innovación dental.
              </h2>
              
              {/* Accent */}
              <div className="mt-8 h-1 w-20 rounded-full bg-blue-700"/>

              {/*descrip */}

              <p className="mt-8 text-black max-w-2xl text-lg leanding-8 sm:text-xl">
                En Balsas Dental somos especialistas en la distribución de productos 
                dentales de alta tecnologia, colaborando con fabricantes lideres
                mundial para acercar la innovación, calidad y confianza a clinicas,
                laboratorios, universidades y distribucion en todo México.
              </p>
            </motion.div>

             {/* =========================
            LOGO ========================== */}

        <motion.div
          style={{
            scale,
          }}
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative flex min-h-[420px] items-center justify-center lg:min-h-[520px]"
        >

          {/* Large glow */}

          <div
            className="
              absolute
              h-[320px]
              w-[320px]
              rounded-full
              bg-blue-500/10
              blur-[90px]
              sm:h-[400px]
              sm:w-[400px]
            "
          />

          {/* Outer ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[330px]
              w-[330px]
              rounded-full
              border
              border-blue-600/10
              sm:h-[430px]
              sm:w-[430px]
            "
          />

          {/* Inner ring */}

          <div
            className="
              absolute
              h-[250px]
              w-[250px]
              rounded-full
              border
              border-blue-600/10
              sm:h-[340px]
              sm:w-[340px]
            "
          />

          {/* Decorative dots */}

          <div className="absolute right-[12%] top-[15%] h-3 w-3 rounded-full bg-blue-600/30" />

          <div className="absolute bottom-[17%] left-[12%] h-2 w-2 rounded-full bg-blue-600/40" />

          <div className="absolute right-[20%] bottom-[25%] h-2 w-2 rounded-full bg-cyan-500/30" />

          {/* Logo container */}

          <div
            className="
              relative
              z-10
              flex
              h-[270px]
              w-[270px]
              items-center
              justify-center
              rounded-full
              bg-white/70
              shadow-[0_25px_80px_rgba(37,99,235,0.12)]
              backdrop-blur-sm
              sm:h-[350px]
              sm:w-[350px]
            "
          >

            <Image
              src="/logos/logo balsas.png"
              alt="Balsas Dental"
              width={350}
              height={350}
              priority
              className="
                h-auto
                w-[220px]
                object-contain
                sm:w-[290px]
              "
            />

          </div>

        </motion.div>

          </div>
      </section>
    )
}

