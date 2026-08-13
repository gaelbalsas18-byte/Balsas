"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Evento } from "./EventosContent";


interface EventosCalendarProps {
  eventos: Evento[];
  fechaSeleccionada: string | null;
  setFechaSeleccionada: (fecha: string | null) => void;

  mesActual: number;
  añoActual: number;
  setMesActual: (mes: number) => void;
  setAñoActual: (año: number) => void;
}


const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];


const diasSemana = [
  "Lun",
  "Mar",
  "Mié",
  "Jue",
  "Vie",
  "Sáb",
  "Dom",
];


export default function EventosCalendar({
  eventos,
  fechaSeleccionada,
  setFechaSeleccionada,
  mesActual,
  añoActual,
  setMesActual,
  setAñoActual,
}: EventosCalendarProps) {

  const mes = mesActual;
  const año = añoActual;


  /*
   * Primer día del mes
   */
  const primerDia = new Date(año, mes, 1);

  /*
   * Cantidad de días del mes
   */
  const cantidadDias = new Date(
    año,
    mes + 1,
    0
  ).getDate();


  /*
   * JS comienza la semana en domingo.
   * Lo convertimos para que comience en lunes.
   */
  const primerDiaSemana =
    primerDia.getDay() === 0
      ? 6
      : primerDia.getDay() - 1;


  const dias = useMemo(() => {

    const resultado: (number | null)[] = [];

    for (let i = 0; i < primerDiaSemana; i++) {
      resultado.push(null);
    }

    for (let dia = 1; dia <= cantidadDias; dia++) {
      resultado.push(dia);
    }

    return resultado;

  }, [primerDiaSemana, cantidadDias]);


  /*
   * Cambiar mes
   */
  const cambiarMes = (direccion: number) => {

   let nuevoMes = mes;
   let nuevoAño = año;

   if(direccion === -1) {
    
    if(mes === 0) {
        nuevoMes = 11;
        nuevoAño = año - 1
    }else{
        nuevoMes = mes - 1
    }
   }else{
    if (mes === 11) {
        nuevoMes = 0;
        nuevoAño = año + 1;
    }else{
        nuevoMes = mes + 1;
    }
   }

   setMesActual(nuevoMes);
   setAñoActual(añoActual);

   {/*Esto quita cualquier mes seleccionado*/}
   setFechaSeleccionada(null);
  };

  /*
   * Crear fecha YYYY-MM-DD
   */
  const obtenerFecha = (dia: number) => {

    const mesFormateado = String(mes + 1).padStart(2, "0");
    const diaFormateado = String(dia).padStart(2, "0");

    return `${año}-${mesFormateado}-${diaFormateado}`;
  };


  /*
   * Saber si un día tiene eventos
   */
  const tieneEvento = (dia: number) => {

    const fecha = obtenerFecha(dia);

    return eventos.some(
      (evento) => evento.fecha === fecha
    );
  };


  return (
    <div className="rounded-3xl border border-gray-100 bg-[rgba(27,65,252,0.82)] p-3 shadow-sm md:p-8 lg:p-10 mt-6">

      {/* Encabezado calendario */}
      <div className="flex items-center justify-between">

        <button
          type="button"
          onClick={() => cambiarMes(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#00529B] hover:bg-[#00529B] hover:text-white"
          aria-label="Mes anterior"
        >
          <ChevronLeft size={22} />
        </button>


        <div className="text-center">

          <h2 className="text-2xl font-bold text-[rgb(255,255,255)] md:text-3xl">
            {meses[mes]}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {año}
          </p>

        </div>


        <button
          type="button"
          onClick={() => cambiarMes(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(255,255,255)] text-[rgb(255,255,255)] transition hover:border-[#00529B] hover:bg-[rgb(255,255,255)] hover:text-[rgb(18,52,221)]"
          aria-label="Mes siguiente"
        >
          <ChevronRight size={22} />
        </button>

      </div>


      {/* Días de la semana */}
      <div className="mt-10 grid grid-cols-7">

        {diasSemana.map((dia) => (
          <div
            key={dia}
            className="pb-4 text-center text-xs font-semibold uppercase tracking-wider text-[rgb(255,255,255)] md:text-sm"
          >
            {dia}
          </div>
        ))}

      </div>


      {/* Días */}
      <div className="grid grid-cols-7 gap-y-3">

        {dias.map((dia, index) => {

          if (!dia) {
            return (
              <div
                key={`empty-${index}`}
                className="h-14 md:h-20"
              />
            );
          }


          const fecha = obtenerFecha(dia);
          const hayEvento = tieneEvento(dia);
          const seleccionado =
            fechaSeleccionada === fecha;


          return (
            <button
              key={fecha}
              type="button"
              disabled={!hayEvento}
              onClick={() => {

                if (hayEvento) {
                  setFechaSeleccionada(
                    seleccionado ? null : fecha
                  );
                }

              }}
              className={`relative mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm transition md:h-16 md:w-16 md:text-base

                ${
                  seleccionado
                    ? "bg-[rgb(18,52,221)] font-bold text-white shadow-lg"
                    : hayEvento
                      ? "font-semibold text-[rgb(255,230,9)] hover:bg-blue-50 hover:text-[#00529B]"
                      : "text-[rgb(255,255,255)]"
                }
              `}
            >

              {dia}


              {/* Indicador de evento */}
              {hayEvento && !seleccionado && (
                <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-[rgb(255,230,9)] md:bottom-2" />
              )}

            </button>
          );
        })}

      </div>


      {/* Información inferior */}
      <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">

        <span className="h-2.5 w-2.5 rounded-full bg-[rgb(255,230,9)]" />

        <span className="text-sm text-[rgb(255,255,255)]">
          Días con eventos
        </span>

      </div>

    </div>
  );
}