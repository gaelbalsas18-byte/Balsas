"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface Novedad {
  id: number;
  universo: string;
  marca: string;
  etiquetas: string[];
  fecha: string;
  año: string;
  titulo: string;
  descripcion: string;
  contenido?: string;
  imagen: string;
  logo: string;
}

interface NovedadModalProps {
  novedad: Novedad | null;
  onClose: () => void;
}

export default function NovedadModal({
  novedad,
  onClose,
}: NovedadModalProps) {
  if (!novedad) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Boton cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-gray-100"
        >
          <X size={22} />
        </button>
        <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-2">
          {/* Imagen */}
          <div className="relative min-h-[300px] md:min-h-[600px]">
            <Image
              src={novedad.imagen}
              alt={novedad.titulo}
              fill
              className="object-cover"
             />
          </div>

          <div className="absolute h-12 w-50 translate-x-6">
            <Image
            src={novedad.logo}
            alt={novedad.marca}
            fill
            className="object-contain object-left"/>
          </div>
          
          {/* Información */}
          <div className="flex flex-col p-8 md:p-10 lg:p-12">

            {/* Marca */}
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              {novedad.marca}
            </span>

            {/* Título */}
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {novedad.titulo}
            </h2>

            {/* Fecha */}
            <p className="mt-3 text-sm text-gray-400">
              {novedad.fecha}
            </p>

            {/* Universo */}
            <div className="mt-6">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                {novedad.universo}
              </span>
            </div>

            {/* Etiquetas */}
            <div className="mt-6 flex flex-wrap gap-2">
              {novedad.etiquetas.map((etiqueta) => (
                <span
                  key={etiqueta}
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600"
                >
                  {etiqueta}
                </span>
              ))}
            </div>

            {/* Descripción */}
            <div className="mt-8">
              <p className="text-base leading-7 text-gray-600">
                {novedad.descripcion}
              </p>
            </div>

            {/* Contenido */}
            {novedad.contenido && (
              <div className="mt-6">
                <p className="whitespace-pre-line text-sm leading-7 text-gray-600">
                  {novedad.contenido}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
