
"use client";

import FadeIn from "../animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const marcas = [
  {
    imagen: "/Marcas/Tokuyama.jpg",
    descripcion:
      "Contribuyendo al mantenimiento y mejora de una vida saludable en todo el mundo con la tecnología del siglo",
  },

  {
    imagen: "/Marcas/Renfert.jpg",
    descripcion:
      "Comprometidos con el objetivo de simplificarte el trabajo en el laboratorio y la clínica",
  },

  {
    imagen: "/Marcas/Shining.jpg",
    descripcion:
      "Soluciones de escaneo 3D de alta precisión para todos",
  },

  {
    imagen: "/Marcas/Edenta.jpg",
    descripcion:
      "Presente en todo el mundo por sus instrumentos de precisión innovadores, dando un sello de calidad",
  },

  {
    imagen: "/Marcas/Zhermack.jpg",
    descripcion:
      "Materiales y soluciones para los sectores dental, industrial y del bienestar",
  },

  {
    imagen: "/Marcas/Wave.jpg",
    descripcion:
      "Los dentistas ya no tienen que elegir entre rendimiento y precio, ni entre precio y disponibilidad.",
  },

  {
    imagen: "/Marcas/Vericom.jpg",
    descripcion:
      "El lema de Vericom ha sido 'la calidad primero'. Aunque todas las partes del cuerpo son importantes para el ser humano, los dientes se han considerado una de las partes más importantes de nuestro cuerpo.",
  },

  {
    imagen: "/Marcas/G&H.jpg",
    descripcion:
      "G&H Orthodontics ha encarnado una calidad y un servicio excepcionales. Como fabricante, poseemos todo lo que hacemos con un nivel de responsabilidad que no se encuentra en ningún otro lugar.",
  },

  {
    imagen: "/Marcas/Dentsplay.jpg",
    descripcion:
      "Dentsply Sirona ha establecido un estándar global para la fabricación dental, el desarrollo tecnológico, el tratamiento digital y la educación clínica.",
  },

  {
    imagen: "/Marcas/Audental.jpg",
    descripcion:
      "Audental es un fabricante líder de biomateriales dentales, cerámica de vidrio, una amplia gama de aleaciones metales dentales y soluciones digitales avanzadas.",
  },
];

export default function Marcas() {
  const [marcaActiva, setMarcaActiva] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMarcaActiva((actual) => (actual + 1) % marcas.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
<section
  id="Marcas"
  className="relative min-h-[100svh] overflow-hidden md:min-h-[120vh]"
>
      {/* =====================================================
          BACKGROUNDS
          ===================================================== */}

      {marcas.map((marca, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            marcaActiva === index
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >

          <Image
            src={marca.imagen}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center md:object-center"
            />
        </div>
        
      ))}

      {/* =====================================================
          CONTENIDO
          ===================================================== */}

      <div
        className={`${manrope.className} relative z-10 flex min-h-[120vh] items-center justify-center px-6 py-24`}
        >
        <div className="mx-auto w-full max-w-4xl text-center">

          {/* =================================================
              ENCABEZADO
              ================================================= */}

          <FadeIn>
            <div className="-translate-y-54">
                <span className="inline-block rounded-full bg-white px-6 py-2 font-semibold text-blue-700">
                MARCAS
                </span>

                <h3 className="mt-4 mb-3 text-sm font-semibold uppercase tracking-widest text-white">
                Balsas Dental
                </h3>

                <p className="mx-auto max-w-2xl py-3 text-lg leading-relaxed text-white md:text-xl">
                Manejamos las mejores marcas para que obtengas
                <br className="hidden md:block" />
                <strong>¡Los mejores resultados!</strong>
                </p>
            </div>
            </FadeIn>

          {/* =================================================
              DESCRIPCIÓN DINÁMICA
              ================================================= */}

          <div
            key={marcaActiva}
            className="mx-auto translate-y-40 max-w-3xl"
          >
            <p className="text-lg leading-relaxed text-white drop-shadow-lg md:text-lg">
              {marcas[marcaActiva].descripcion}
            </p>
          </div>

          {/* =================================================
              BOTÓN
              ================================================= */}

          <FadeIn>
            <div className="translate-y-45">
              <Link href="/Productos">
                <button className="inline-block border border-white bg-transparent px-10 py-3 text-sm uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-blue-700">
                  Ver Marcas
                </button>
              </Link>
            </div>
          </FadeIn>

          {/* =================================================
              INDICADORES
              ================================================= */}

          <div className="translate-y-55 flex justify-center gap-2">
            {marcas.map((_, index) => (
              <button
                key={index}
                onClick={() => setMarcaActiva(index)}
                aria-label={`Mostrar marca ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  marcaActiva === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

