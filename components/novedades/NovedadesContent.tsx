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
    etiquetas: ["Adhesivo", "Restaurativa"],
    fecha: "11 Agosto 2026",
    año: "2026",
    titulo: "Nuevo adhesivo Tokuyama Universal Bond",
    descripcion:
      "Es un sistema adhesivo para restauraciones directas e indirectas que puede utilizarse con técnicas de autograbado, grabado selectivo y grabado total.",
    imagen: "/Novedades/UBond.jpg",
    logo: "/logos/marcas/tokuyama.png",
  },

  {
    id: 2,
    universo: "Clínica",
    marca: "Tokuyama",
    etiquetas: ["Restaurativa", "Composite"],
    fecha: "05 Agosto 2026",
    año: "2026",
    titulo: "Nuevo Omnicrhoma",
    descripcion:
      "Es el primer compuesto universal del mundo que combina estéticamente a casi todos los pacientes con un solo tono. Sus rellenos supra-nano esféricos de tamaño uniforme permiten a PALFIQUE OMNICHROMA combinar todos los tonos, una ciencia que llamamos Tecnología Cromática Inteligente.",
    imagen: "/Novedades/Omnicrhoma.jpg",
    logo: "/logos/marcas/tokuyama.png",
  },

  {
    id: 3,
    universo: "Laboratorio",
    marca: "Vericom",
    etiquetas: ["Laboratorio", "Restaurativa"],
    fecha: "28 Julio 2026",
    año: "2026",
    titulo: "Care B&C",
    descripcion:
      "El producto dental Vericom Care C y B está diseñado para facilitar su uso. Su proceso de aplicación intuitivo reduce el tiempo en la silla, beneficiando tanto al dentista como al paciente. Con una adaptabilidad superior, logra una estética impresionante. Esto la hace ideal para clínicas que buscan altos estándares.",
    imagen: "/Novedades/Care.jpg",
    logo: "/logos/marcas/ver.jpg",
  },

  {
    id: 4,
    universo: "Laboratorio",
    marca: "Renfert",
    etiquetas: [""],
    fecha: "20 Julio 2026",
    año: "2026",
    titulo: "Silent Xs",
    descripcion:
      "SILENT XS es una unidad de succión totalmente móvil, diseñada específicamente para clínicas dentales y laboratorios internos. Su diseño compacto es impresionante y lo hace ideal para trabajos de acabado menores y a pequeña escala, por ejemplo, al realizar retoques finales en restauraciones temporales.",
    imagen: "/Novedades/Pulidora.jpg",
    logo: "/logos/marcas/renfert.jpg",
  },

  {
    id: 5,
    universo: "Laboratorio",
    marca: "Redon",
    etiquetas: ["Fresadora"],
    fecha: "15 Julio 2026",
    año: "2026",
    titulo: "La solución más sencilla para el fresado Woom",
    descripcion:
      "Realiza el fresado de tus bloques de zirconio de forma rapida y sencilla cubierta electrónica para cambiador automático de herramientas (ATC) Abre y cierra automáticamente durante el cambio de fresas. ¡Proteje tus fresas del polvo, las virutas y otros factores externos sin necesidad de intervención manual!.",
    imagen: "/Novedades/Woom.jpg",
    logo: "/logos/marcas/redon.png",
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
              <div className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-3xl px-8 py-12 text-center shadow-sm md:min-h-[600px] md:px-12">

                {/* Imagen de fondo */}
                <Image
                  src="/central.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />

                {/* Capa oscura para que el contenido se lea mejor */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center">

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
                  <div className="flex min-h-[120px] items-center justify-center">
                    <p
                      key={textoCentroActual}
                      className="text-xl font-medium leading-relaxed text-white transition-opacity duration-500 md:text-2xl"
                    >
                      {textosCentro[textoCentroActual]}
                    </p>
                  </div>

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
