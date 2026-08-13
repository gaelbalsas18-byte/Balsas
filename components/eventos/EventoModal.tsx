"use client";

import Image from "next/image";
import { X, CalendarDays, Clock, MapPin } from "lucide-react";
import type { Evento } from "./EventosContent";


interface EventoModalProps {
  evento: Evento | null;
  onClose: () => void;
}


export default function EventoModal({
  evento,
  onClose,
}: EventoModalProps) {

  if (!evento) return null;


  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >

      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-gray-100"
        >
          <X size={22} />
        </button>


        <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-2">

          {/* Imagen */}
          <div className="relative min-h-[300px] md:min-h-[600px]">

            <Image
              src={evento.imagen}
              alt={evento.titulo}
              fill
              className="object-cover"
            />

          </div>


          {/* Información */}
          <div className="flex flex-col p-7 md:p-10 lg:p-12">

            {/* Marca */}
            {evento.marca && (
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#00529B]">
                {evento.marca}
              </span>
            )}


            {/* Título */}
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {evento.titulo}
            </h2>


            {/* Información del evento */}
            <div className="mt-8 space-y-4">

              {/* Fecha */}
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#00529B]">
                  <CalendarDays size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Fecha
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {evento.fechaTexto}
                  </p>
                </div>

              </div>


              {/* Hora */}
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#00529B]">
                  <Clock size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Hora
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {evento.hora}
                  </p>
                </div>

              </div>


              {/* Lugar */}
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#00529B]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Lugar
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {evento.lugar}
                  </p>
                </div>

              </div>

            </div>


            {/* Modalidad */}
            <div className="mt-7">

              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-[#00529B]">
                {evento.modalidad}
              </span>

            </div>


            {/* Descripción */}
            <div className="mt-8">

              <h3 className="text-lg font-bold text-gray-900">
                Sobre el evento
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {evento.descripcion}
              </p>

            </div>


            {/* Contenido */}
            <div className="mt-5">

              <p className="whitespace-pre-line text-sm leading-7 text-gray-600">
                {evento.contenido}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}