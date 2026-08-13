"use client";

import Image from "next/image";
import type { Evento } from "./EventosContent";


interface EventoCardProps {
  evento: Evento;
  onClick: () => void;
}


export default function EventoCard({
  evento,
  onClick,
}: EventoCardProps) {

  return (
    <article
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >

      {/* Imagen */}
      <div className="relative h-56 w-full overflow-hidden">

        <Image
          src={evento.imagen}
          alt={evento.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Fecha */}
        <div className="absolute left-4 top-4 rounded-xl bg-white px-4 py-2 shadow-md">

          <span className="text-xs font-bold uppercase tracking-wider text-[#00529B]">
            {evento.fechaTexto}
          </span>

        </div>

      </div>


      {/* Contenido */}
      <div className="p-6">

        {/* Marca */}
        {evento.marca && (
          <span className="text-xs font-bold uppercase tracking-widest text-[#00529B]">
            {evento.marca}
          </span>
        )}


        {/* Título */}
        <h3 className="mt-2 text-xl font-bold text-gray-900">
          {evento.titulo}
        </h3>


        {/* Descripción */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {evento.descripcion}
        </p>


        {/* Información */}
        <div className="mt-5 space-y-2 text-sm text-gray-500">

          <p>
            <span className="font-semibold text-gray-700">
              Hora:
            </span>{" "}
            {evento.hora}
          </p>

          <p>
            <span className="font-semibold text-gray-700">
              Lugar:
            </span>{" "}
            {evento.lugar}
          </p>

        </div>


        {/* Botón */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-6 text-sm font-semibold text-[#00529B] transition hover:text-[#003C73]"
        >
          Ver evento →
        </button>

      </div>

    </article>
  );
}