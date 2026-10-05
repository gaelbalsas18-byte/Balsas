"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Manrope } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function EscuelaPage() {

  const escuelas = [
  {
    nombre: "Universidad Anáhuac",
    ciudad: "Ciudad de México",
    curso: "ALEJANDRO",
    descripcion:
      "Experiencias de aprendizaje donde la teoría y la práctica se encuentran.",
    fotos: [
      "/Educa/anahuac/1.jpg",
      "/Educa/anahuac/2.jpg",
      "/Educa/anahuac/3.jpg",
      "/Educa/anahuac/4.jpg",
    ],
  },

  {
    nombre: "Universidad La Salle",
    ciudad: "Ciudad de México",
    curso: "HUGO",
    descripcion:
      "Compartiendo conocimiento, innovación y nuevas soluciones para la odontología.",
    fotos: [
      "/Educa/lasalle/1.jpg",
      "/Educa/lasalle/2.jpg",
      "/Educa/lasalle/3.jpg",
      "/Educa/lasalle/4.jpg",
    ],
  },

  {
    nombre: "UNITEC",
    ciudad: "Ciudad de México",
    curso: "KARLA",
    descripcion:
      "Nuevas experiencias para las futuras generaciones de profesionales.",
    fotos: [
      "/Educa/unitec/1.jpg",
      "/Educa/unitec/2.jpg",
      "/Educa/unitec/3.jpg",
      "/Educa/unitec/4.jpg",
    ],
  },

  {
    nombre: "Universidad del Valle de México",
    ciudad: "México",
    curso: "ALAN DARDON",
    descripcion:
      "Acercando nuevas tecnologías y materiales al entorno académico.",
    fotos: [
      "/Educa/uvm/1.jpg",
      "/Educa/uvm/2.jpg",
      "/Educa/uvm/3.jpg",
      "/Educa/uvm/4.jpg",
    ],
  },

  {
    nombre: "Universidad Autónoma",
    ciudad: "México",
    curso: "OCTAVIO RANGEL",
    descripcion:
      "Formación continua para mantenerse al día con la evolución odontológica.",
    fotos: [
      "/Educa/autonoma/1.jpg",
      "/Educa/autonoma/2.jpg",
      "/Educa/autonoma/3.jpg",
      "/Educa/autonoma/4.jpg",
    ],
  },

  {
    nombre: "Escuela de Odontología",
    ciudad: "México",
    curso: "JOSE OJEDA",
    descripcion:
      "Conocimiento y práctica para transformar la experiencia profesional.",
    fotos: [
      "/Educa/escuela/1.jpg",
      "/Educa/escuela/2.jpg",
      "/Educa/escuela/3.jpg",
      "/Educa/escuela/4.jpg",
    ],
  },

  {
    nombre: "Centro de Formación",
    ciudad: "México",
    curso: "MAURICIO MADERA",
    descripcion:
      "Experiencias prácticas que acercan la innovación a los profesionales.",
    fotos: [
      "/Educa/centro/1.jpg",
      "/Educa/centro/2.jpg",
      "/Educa/centro/3.jpg",
      "/Educa/centro/4.jpg",
    ],
  },
];

  return (
    <main className={`${manrope.className} min-h-screen bg-white`}>

      {/* =====================================================
          INTRODUCCIÓN
      ===================================================== */}

      <section className="bg-white px-6 py-20 sm:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

          {/* Imagen */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <Image
              src="/Educa/1.jpg"
              alt="Estudiantes en capacitación"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black">
              Formación
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3258f0]">
              El conocimiento nunca se detiene
            </p>
            
            <h2 className="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
              Formación que conecta
              <span className="text-[#3258f0]"> teoría y práctica.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-black sm:text-lg">
              En Balsas Dental creemos que mantenerse actualizado es
              parte fundamental del crecimiento profesional. Por eso
              participamos en espacios de capacitación, cursos y
              experiencias prácticas junto a estudiantes y profesionales
              del mundo odontológico.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[#2790ec]" />
              <span className="text-sm uppercase tracking-wider text-white/50">
                Balsas Dental
              </span>
            </div>
          </motion.div>

        </div>
      </section>
      {/* =====================================================
          MOMENTOS QUE DEJAN HUELLA
      ===================================================== */}

      <section className="bg-[#3258f0] px-6 py-20 sm:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">

          {/* ENCABEZADO */}

          <div className="mb-12 text-center md:mb-16">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Educación Continua
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Momentos que
              <br />
              <span className="text-white">
                dejan huella.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Conoce algunos de los momentos que hemos compartido
              junto a estudiantes y profesionales de diferentes
              instituciones.
            </p>

          </div>

    {/* =================================================
        CARRUSEL DE UNIVERSIDADES
    ================================================= */}

    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      allowTouchMove
      className="w-full"
    >

      {escuelas.map((escuela, escuelaIndex) => (

        <SwiperSlide key={escuela.nombre}>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[0.3fr_1.7fr] md:gap-10">

            {/* INFORMACIÓN */}

            <div className="text-center md:text-left">

              <span className="text-sm font-semibold text-[#2790ec]">
                {String(escuelaIndex + 1).padStart(2, "0")} /{" "}
                {String(escuelas.length).padStart(2, "0")}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                {escuela.nombre}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {escuela.descripcion}
              </p>

              <div className="mt-6 hidden h-px w-16 bg-[#2790ec] md:block" />

            </div>

            {/* =========================================
                CARRUSEL DE 4 FOTOS
            ========================================= */}

            <div className="relative overflow-hidden rounded-3xl">

              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop
                className="w-full"
              >

                {escuela.fotos.slice(0, 4).map((foto, index) => (

                  <SwiperSlide key={foto}>

                    <div className="relative aspect-[16/10] w-full">

                      <Image
                        src={foto}
                        alt={`${escuela.nombre} - fotografía ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 75vw"
                        className="object-cover"
                      />

                      {/* OVERLAY */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      {/* TEXTO SOBRE IMAGEN */}

                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2790ec]">
                          Educación Continua
                        </span>

                        <h4 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                          {escuela.curso}
                        </h4>

                        <p className="mt-1 text-sm text-white/60">
                          {escuela.ciudad}
                        </p>

                      </div>

                    </div>

                  </SwiperSlide>

                        ))}

                      </Swiper>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>
          </div>
        </section>

      {/* =====================================================
          ÁREAS DE FORMACIÓN
      ===================================================== */}

      <section className="bg-white px-6 py-20 sm:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3258f0]">
              Educación
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Tres formas de
              <br />
              <span className="text-[#3258f0]">seguir creciendo.</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">

            {/* CARD */}

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <span className="text-5xl font-bold text-[#3258f0]">
                01
              </span>

              <h3 className="mt-10 text-2xl font-bold text-black">
                Cursos
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                Capacitación especializada para conocer nuevas
                técnicas, materiales y soluciones odontológicas.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[#3258f0] p-8"
            >
              <span className="text-5xl font-bold text-white/40">
                02
              </span>

              <h3 className="mt-10 text-2xl font-bold text-white">
                Hands On
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Experiencias prácticas donde el conocimiento se
                transforma en habilidades reales.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[#111111] p-8"
            >
              <span className="text-5xl font-bold text-[#3258f0]">
                03
              </span>

              <h3 className="mt-10 text-2xl font-bold text-white">
                Actualización
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Mantente al día con las nuevas tecnologías,
                productos e innovaciones del sector.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-white px-6 py-24 text-center sm:px-10 md:py-32">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3258f0]">
            Sigue aprendiendo
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
            El siguiente paso
            <br />
            <span className="text-[#3258f0]">
              comienza aquí.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black">
            Descubre nuestras próximas experiencias de formación,
            cursos y eventos de Educación Continua.
          </p>
          <a
            href="/#eventos"
            className="mt-9 inline-block border border-[#3258f0] bg-[#3258f0] px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-[#2790ec]"
          >
            Ver cursos
          </a>

        </motion.div>

      </section>

    </main>
  );
}