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
  const primerDia = new Date(año, mes, 1);

  /*
   * Cantidad de dias del mes.
   */
  
  const cantidadDias = new Date(
    año,
    mes + 1,
    0
  ).getDate();

  /*
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
    setAñoActual(nuevoAño);
    setFechaSeleccionada(null);

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
   * Saber si un dia del mes tiene eventos
   */
  const tieneEvento = (dia: number) => {

    const fecha = obtenerFecha(dia);

    return eventos.some(
      (evento) => evento.fecha === fecha
    );
  };

  return (
  <div
  className="
    mt-6
    w-full
    rounded-3xl
    border
    border-blue-400
    bg-white
    p-4
    shadow-sm
    md:p-6
  "
>

    {/* ========================= */}
    {/* ENCABEZADO */}
    {/* ========================= */}

    <div className="flex items-center justify-between bg-blue-700 rounded-3xl ">

      <button
        type="button"
        onClick={() => cambiarMes(-1)}
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white
          text-white
          transition-all
          duration-300
          hover:border-[#2790ec]
          hover:bg-[#2790ec]
          hover:text-white
        "
        aria-label="Mes anterior"
      >
        <ChevronLeft size={18} />
      </button>


      <div className="text-center">

        <h2
          className="
            text-xl
            font-bold
            text-white
            sm:text-2xl
          "
        >
          {meses[mes]}
        </h2>

        <p className="mt-0.5 text-xs text-white">
          {año}
        </p>

      </div>


      <button
        type="button"
        onClick={() => cambiarMes(1)}
        className="
          flex
          h-7
          w-7
          shrink-1
          items-center
          justify-center
          rounded-full
          border
          border-white
          text-white
          transition-all
          duration-300
          hover:border-[#2790ec]
          hover:bg-[#2790ec]
          hover:text-white
        "
        aria-label="Mes siguiente"
      >
        <ChevronRight size={18} />
      </button>

    </div>


    {/* ========================= */}
    {/* DÍAS DE LA SEMANA */}
    {/* ========================= */}

    <div className="mt-7 grid grid-cols-7">

      {diasSemana.map((dia) => (

        <div
          key={dia}
          className="
            pb-3
            text-center
            text-[10px]
            font-semibold
            uppercase
            tracking-wide
            text-gray-500
            sm:text-xs
          "
        >
          {dia}
        </div>

      ))}

    </div>


    {/* ========================= */}
    {/* DÍAS */}
    {/* ========================= */}

    <div className="grid grid-cols-7 gap-y-2">

      {dias.map((dia, index) => {

        if (!dia) {

          return (
            <div
              key={`empty-${index}`}
              className="h-10 sm:h-11"
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

            className={`
              relative
              mx-auto
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-xs
              transition-all
              duration-200

              sm:h-10
              sm:w-10
              sm:text-sm

              ${
                seleccionado
                  ? `
                    bg-[#2790ec]
                    font-bold
                    text-white
                    shadow-md
                  `
                  : hayEvento
                    ? `
                      font-bold
                      text-[#1449e8]
                      hover:bg-[#1449e8]/10
                    `
                    : `
                      text-gray-700
                    `
              }
            `}
          >
            
            {dia}


            {/* Indicador */}

            {hayEvento && !seleccionado && (

              <span
                className="
                  absolute
                  bottom-[-1]
                  h-2
                  w-2
                  rounded-full
                  bg-[#0cbe5f]
                  bg-[#0cbe5f]
                  sm:bottom-[-1]
                "
              />

            )}

          </button>

        );

      })}

    </div>


    {/* ========================= */}
    {/* LEYENDA */}
    {/* ========================= */}

    <div
      className="
        mt-6
        flex
        items-center
        gap-2
        border-t
        border-gray-100
        pt-5
      "
    >

      <span
        className="
          h-2
          w-2
          rounded-full
          bg-[#0cbe5f]
        "
      />

      <span
        className="
          text-xs
          font-bold
          text-black
        "
      >
        DÍAS CON EVENTOS
      </span>

    </div>

  </div>
);
}


