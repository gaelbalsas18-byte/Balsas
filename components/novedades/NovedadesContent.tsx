"use client";

import { useState } from "react";
import NovedadesFilter from "./NovedadesFilter";
import NovedadCard from "./NovedadCard";
import NovedadModal from "./NovedadModal";

const novedades = [
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
    imagen: "/",
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
    imagen: "/",
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
    imagen: "/",
    logo: "/logos/marcas/renfert.jpg",
  },

  {
    id: 4,
    universo: "Laboratorio Digital",
    marca: "Shining",
    etiquetas: ["Laboratorio Digital"],
    fecha: "20 Julio 2025",
    año: "2025",
    titulo: "Innovación en laboratorio digital",
    descripcion:
      "Tecnología para llevar el laboratorio dental al siguiente nivel.",
    imagen: "/",
    logo: "/logos/marcas/Shining.png",
  },
];

export default function NovedadesContent() {
  const [universo, setUniverso] = useState("");
  const [marca, setMarca] = useState("");
  const [etiqueta, setEtiqueta] = useState("");
  const [fecha, setFecha] = useState("");

  // Novedad seleccionada para abrir el modal
  const [novedadSeleccionada, setNovedadSeleccionada] =
    useState<(typeof novedades)[number] | null>(null);


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

  return (
    <>
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


      {/* Resultados */}
      <div className="mt-12">

        {novedadesFiltradas.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {novedadesFiltradas.map((novedad) => (
              <NovedadCard
                key={novedad.id}
                novedad={novedad}
                onClick={() => setNovedadSeleccionada(novedad)}
              />
            ))}

          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">

            <h3 className="text-xl font-semibold text-gray-900">
              No encontramos novedades
            </h3>

            <p className="mt-2 text-gray-500">
              Intenta cambiar alguno de los filtros.
            </p>

          </div>
        )}
      </div>


      {/* Modal de la novedad */}
      <NovedadModal
        novedad={novedadSeleccionada}
        onClose={() => setNovedadSeleccionada(null)}
      />
    </>
  );
}