"use client";

import { useEffect, useState } from "react";
import NovedadesFilter from "./NovedadesFilter";
import NovedadCard from "./NovedadCard";
import NovedadModal from "./NovedadModal";
import Image from "next/image";

interface Novedad {
  id: number;
  universo: string;
  marca: string;
  etiquetas: string[];
  fecha: string;
  año: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  logo: string;
}

const novedades: Novedad[] = [
  {
    id: 1,
    universo: "Clínica",
    marca: "Tokuyama",
    etiquetas: ["Resinas dentales", "Restaurativa"],
    fecha: "11 Agosto 2026",
    año: "2026",
    titulo: "Nuevas soluciones restaurativas",
    descripcion:
      "Descubre las nuevas soluciones para procedimientos restaurativos.",
    imagen: "/novedades/novedad-1.jpg",
    logo: "/logos/marcas/tokuyama.png",
  },

  {
    id: 2,
    universo: "Clínica",
    marca: "Zhermack",
    etiquetas: ["Restaurativa"],
    fecha: "05 Agosto 2026",
    año: "2026",
    titulo: "Nuevos materiales para clínica",
    descripcion:
      "Conoce las novedades y soluciones para profesionales de la clínica dental.",
    imagen: "/novedades/novedad-2.jpg",
    logo: "/logos/marcas/zhermack.jpg",
  },

  {
    id: 3,
    universo: "Laboratorio",
    marca: "Renfert",
    etiquetas: ["Laboratorio", "Restaurativa"],
    fecha: "28 Julio 2026",
    año: "2026",
    titulo: "Soluciones para laboratorio",
    descripcion:
      "Productos y soluciones para optimizar el trabajo en laboratorio dental.",
    imagen: "/novedades/novedad-3.jpg",
    logo: "/logos/marcas/renfert.jpg",
  },

  {
    id: 4,
    universo: "Laboratorio Digital",
    marca: "Shining",
    etiquetas: ["Laboratorio Digital"],
    fecha: "20 Julio 2026",
    año: "2026",
    titulo: "Innovación en laboratorio digital",
    descripcion:
      "Tecnología para llevar el laboratorio dental al siguiente nivel.",
    imagen: "/novedades/novedad-4.jpg",
    logo: "/logos/marcas/Shining.png",
  },

  {
    id: 5,
    universo: "Clínica",
    marca: "Vericom",
    etiquetas: ["Adhesivos dentales"],
    fecha: "15 Julio 2026",
    año: "2026",
    titulo: "Nuevos adhesivos dentales",
    descripcion:
      "Soluciones adhesivas para procedimientos clínicos.",
    imagen: "/novedades/novedad-5.jpg",
    logo: "/logos/marcas/vericom.png",
  },

  {
    id: 6,
    universo: "Laboratorio",
    marca: "Audental",
    etiquetas: ["Restaurativa"],
    fecha: "10 Julio 2026",
    año: "2026",
    titulo: "Nuevas soluciones Audental",
    descripcion:
      "Conoce las novedades para el laboratorio dental.",
    imagen: "/novedades/novedad-6.jpg",
    logo: "/logos/marcas/audental.png",
  },

  {
    id: 7,
    universo: "Clínica",
    marca: "Tokuyama",
    etiquetas: ["Resinas dentales", "Restaurativa"],
    fecha: "11 Agosto 2026",
    año: "2026",
    titulo: "Nuevas soluciones restaurativas",
    descripcion:
      "Descubre las nuevas soluciones para procedimientos restaurativos.",
    imagen: "/novedades/novedad-1.jpg",
    logo: "/logos/marcas/tokuyama.png",
  },

  {
    id: 8,
    universo: "Clínica",
    marca: "Tokuyama",
    etiquetas: ["Resinas dentales", "Restaurativa"],
    fecha: "32 Agosto 2026",
    año: "2026",
    titulo: "Nuevas soluciones restaurativas",
    descripcion:
      "Descubre las nuevas soluciones para procedimientos restaurativos.",
    imagen: "/novedades/novedad-1.jpg",
    logo: "/logos/marcas/tokuyama.png",
  },

  {
    id: 9,
    universo: "Clínica",
    marca: "Tokuyama",
    etiquetas: ["Resinas dentales", "Restaurativa"],
    fecha: "33 Agosto 2026",
    año: "2026",
    titulo: "Nuevas soluciones restaurativas",
    descripcion:
      "Descubre las nuevas soluciones para procedimientos restaurativos.",
    imagen: "/novedades/novedad-1.jpg",
    logo: "/logos/marcas/tokuyama.png",
  },

  {
    id: 10,
    universo: "Clínica",
    marca: "Tokuyama",
    etiquetas: ["Resinas dentales", "Restaurativa"],
    fecha: "34 Agosto 2026",
    año: "2026",
    titulo: "Nuevas soluciones restaurativas",
    descripcion:
      "Descubre las nuevas soluciones para procedimientos restaurativos.",
    imagen: "/novedades/novedad-1.jpg",
    logo: "/logos/marcas/tokuyama.png",
  },
];


export default function NovedadesContent() {

  const [universo, setUniverso] = useState("");
  const [marca, setMarca] = useState("");
  const [etiqueta, setEtiqueta] = useState("");
  const [fecha, setFecha] = useState("");

  const [novedadSeleccionada, setNovedadSeleccionada] =
    useState<Novedad | null>(null);

  const [paginaActual, setPaginaActual] = useState(1);
  const novedadesPorPagina = 4;

  const textosCentro = [
  "Conoce lo más nuevo que Balsas Dental tiene para ti.",
  "Descubre las novedades de nuestras marcas y soluciones dentales.",
  "Innovación, tecnología y soluciones para el sector dental.",
  "Mantente al día con las últimas novedades de Balsas Dental.",
  ];

  const [textoCentroActual, setTextoCentroActual] = useState(0);

  /*
   * Filtros
   */
  const novedadesFiltradas = novedades.filter((novedad) => {

    const coincideUniverso =
      !universo ||
      novedad.universo === universo;

    const coincideMarca =
      !marca ||
      novedad.marca === marca;

    const coincideEtiqueta =
      !etiqueta ||
      novedad.etiquetas.includes(etiqueta);

    const coincideFecha =
      !fecha ||
      novedad.año === fecha;

    return (
      coincideUniverso &&
      coincideMarca &&
      coincideEtiqueta &&
      coincideFecha
    );
  });

  const totalPaginas = Math.ceil(
  novedadesFiltradas.length / novedadesPorPagina
  );

  const inicio = (paginaActual - 1) * novedadesPorPagina;

  const novedadesPagina = novedadesFiltradas.slice(
    inicio,
    inicio + novedadesPorPagina
  );

  /*
   * Las primeras 4 novedades serán
   * las tarjetas alrededor del banner.
   */
  const tarjetas = novedadesPagina;

  /*
   * Novedades disponibles para el banner.
   */
  const novedadesBanner =
    novedadesFiltradas.length > 0
      ? novedadesFiltradas
      : [];

  useEffect(() => {
  setPaginaActual(1);
}, [universo, marca, etiqueta, fecha]);



  useEffect(() => {
  const intervalo = setInterval(() => {
    setTextoCentroActual((actual) =>
      (actual + 1) % textosCentro.length
    );
  }, 5000);

  return () => clearInterval(intervalo);
}, []);

  return (
    <>
      {/* Filtros */}
      <NovedadesFilter
        universo={universo}
        marca={marca}
        etiqueta={etiqueta}
        fecha={fecha}
        setUniverso={setUniverso}
        setMarca={setMarca}
        setEtiqueta={setEtiqueta}
        setFecha={setFecha}
      />

      {totalPaginas >1 && (
        <div className="mt-10 flex items-center justify-center gap-6">

          <button
          type="button"
          disabled={paginaActual === 1}
          onClick={() =>
            setPaginaActual((pagina) => pagina -1)
          }
          className="text-sm font-semibold text-[#00529B] transition hover:text-[#003C73] disabled:cursor-not-allowed disabled:opacity-30"
          >

            {/*=========Manrope======*/}

            ← Anterior
          </button>

          <span className="text-sm text-gray-500">
            Pagina {paginaActual} de {totalPaginas}
          </span>

          <button
          type="button"
          disabled={paginaActual === totalPaginas}
          onClick={() =>
            setPaginaActual((pagina) => pagina + 1)
          }
          className="text-sm font-semibold text-[#00529B] transition hover:text-[#003C73] disabled:cursor-not-allowed disabled:opacity-30"
          >
            siguiente →
          </button>
        </div>
      )}

      {/* CONTENIDO */}
      <div className="mt-12">

        {novedadesFiltradas.length > 0 ? (

          <>
            {/* GRID PRINCIPAL */}
            <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr_1fr]">

              {/* ===================== */}
              {/* COLUMNA IZQUIERDA */}
              {/* ===================== */}

              <div className="grid content-start gap-6">

                {tarjetas.slice(0, 2).map((novedad) => (

                  <NovedadCard
                    key={novedad.id}
                    novedad={novedad}
                    onClick={() =>
                      setNovedadSeleccionada(novedad)
                    }
                  />

                ))}

              </div>

              {/* ===================== */}
              {/* TARJETA CENTRADA */}
              {/* ===================== */}
              <div className="flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#2790ec] px-8 py-12 text-center shadow-sm md:min-h-[600px] md:px-12">

                {/* Logo Balsas */}
                <div className="relative h-auto w-[180px] md:w-[220px]">

                  <Image
                    src="/logos/BalsasTrans.png"
                    alt="Balsas Dental"
                    width={220}
                    height={90}
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Separador */}
                <div className="my-8 h-px w-16 bg-white/40" />
                {/* Texto dinámico */}
                <div className="min-h-[120px] flex items-center justify-center">
                  <p
                    key={textoCentroActual}
                    className="text-xl font-medium leading-relaxed text-white transition-opacity duration-500 md:text-2xl"
                  >
                    {textosCentro[textoCentroActual]}
                  </p>
                </div>
              </div>

              {/* ===================== */}
              {/* COLUMNA DERECHA */}
              {/* ===================== */}
              <div className="grid content-start gap-6">

                {tarjetas.slice(2, 4).map((novedad) => (

                  <NovedadCard
                    key={novedad.id}
                    novedad={novedad}
                    onClick={() =>
                      setNovedadSeleccionada(novedad)
                    }
                  />

                ))}

              </div>

            </div>

          </>

        ) : (

          <div className="rounded-3xl bg-gray-50 px-6 py-20 text-center">

            <h3 className="text-xl font-semibold text-gray-900">
              No encontramos novedades
            </h3>

            <p className="mt-2 text-gray-500">
              Intenta cambiar alguno de los filtros.
            </p>

          </div>

        )}

      </div>

      {/* MODAL */}
      {novedadSeleccionada && (

        <NovedadModal
          novedad={novedadSeleccionada}
          onClose={() => setNovedadSeleccionada(null)}
        />

      )}

    </>
  );
}

