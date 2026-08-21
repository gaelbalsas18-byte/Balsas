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
      className="group flex h-[330px] cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Imagen */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden">
        <Image
          src={novedad.imagen}
          alt={novedad.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5">

        {/* Logo + Fecha */}
        <div className="flex items-start justify-between gap-3">

          {/* Logo */}
          <div className="relative h-9 w-24">
            <Image
              src={novedad.logo}
              alt={novedad.marca}
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Fecha */}
          <span className="pt-1 text-[11px] text-gray-500">
            {novedad.fecha}
          </span>

        </div>

        {/* Universo */}
        <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gray-400">
          {novedad.universo}
        </p>

        {/* Título */}
        <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-tight text-gray-900">
          {novedad.titulo}
        </h3>

        {/* Leer más */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-auto pt-5 text-left text-sm font-semibold text-[#00529B] transition hover:text-[#003C73]"
        >
          Leer más →
        </button>

      </div>
    </article>
  );
}