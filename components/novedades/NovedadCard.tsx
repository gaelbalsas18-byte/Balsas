"use client";

import Image from "next/image";

interface Novedad {
  id: number;
  universo: string;
  marca: string;
  etiquetas: string[];
  fecha: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  logo: string;
}

interface NovedadCardProps {
  novedad: Novedad;
  onClick: () => void;
}

export default function NovedadCard({
  novedad,
  onClick,
}: NovedadCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Imagen */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={novedad.imagen}
          alt={novedad.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">

        {/* Logo + Fecha */}
        <div className="flex items-start justify-between gap-4">

          {/*logo marca */}
          <div className="relative h-10 w-28">
            <Image
            src={novedad.logo}
            alt={novedad.marca}
            fill
            className="object-contain object-left"/>
          </div>

          {/* Fecha */}
          <span className="pt-1 text-xs text-black">
            {novedad.fecha}
          </span>

        </div>

        {/* Universo */}
        <p className="mt-4 text-sm font-medium text-gray-500">
          {novedad.universo}
        </p>

        {/* Título */}
        <h3 className="mt-2 text-xl font-bold text-gray-900">
          {novedad.titulo}
        </h3>

        {/* Leer más */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
        >
          Leer más →
        </button>

      </div>
    </article>
  );
}