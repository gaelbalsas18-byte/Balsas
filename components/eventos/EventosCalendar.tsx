"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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
   * =====================================================
   * INFORMACIÓN DEL MES
   * =====================================================
   */

  const primerDia = new Date(año, mes, 1);

  const cantidadDias = new Date(
    año,
    mes + 1,
    0
  ).getDate();

  /*
   * Convertimos domingo = 0
   * para que la semana comience en lunes.
   */

  const primerDiaSemana =
    primerDia.getDay() === 0
      ? 6
      : primerDia.getDay() - 1;

  /*
   * =====================================================
   * GENERAR CALENDARIO
   * =====================================================
   */

  const dias = useMemo(() => {
    const resultado: (number | null)[] = [];

    // Espacios antes del primer día
    for (let i = 0; i < primerDiaSemana; i++) {
      resultado.push(null);
    }

    // Días del mes
    for (let dia = 1; dia <= cantidadDias; dia++) {
      resultado.push(dia);
    }

    return resultado;
  }, [primerDiaSemana, cantidadDias]);

  /*
   * =====================================================
   * CAMBIAR MES
   * =====================================================
   */

  const cambiarMes = (direccion: number) => {
    let nuevoMes = mes;
    let nuevoAño = año;

    if (direccion === -1) {
      if (mes === 0) {
        nuevoMes = 11;
        nuevoAño = año - 1;
      } else {
        nuevoMes = mes - 1;
      }
    } else {
      if (mes === 11) {
        nuevoMes = 0;
        nuevoAño = año + 1;
      } else {
        nuevoMes = mes + 1;
      }
    }

    setMesActual(nuevoMes);
    setAñoActual(nuevoAño);

    // Quitamos la fecha seleccionada
    setFechaSeleccionada(null);
  };

  /*
   * =====================================================
   * FECHA YYYY-MM-DD
   * =====================================================
   */

  const obtenerFecha = (dia: number) => {
    const mesFormateado = String(mes + 1).padStart(2, "0");
    const diaFormateado = String(dia).padStart(2, "0");

    return `${año}-${mesFormateado}-${diaFormateado}`;
  };

  /*
   * =====================================================
   * EVENTOS
   * =====================================================
   */

  const tieneEvento = (dia: number) => {
    const fecha = obtenerFecha(dia);

    return eventos.some(
      (evento) => evento.fecha === fecha
    );
  };

  /*
   * =====================================================
   * FECHA DE HOY
   * =====================================================
   */

  const hoy = new Date();

  const fechaHoy =
    hoy.getFullYear() +
    "-" +
    String(hoy.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(hoy.getDate()).padStart(2, "0");

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        mt-6
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        bg-white
        shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)]
      "
    >

      {/* =================================================
          ENCABEZADO
      ================================================= */}

      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#1449e8]
          via-[#1976ee]
          to-[#2790ec]
          px-6
          py-7
          md:px-8
          md:py-8
        "
      >

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-64
            w-64
            rounded-full
            bg-white/15
            blur-[80px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            left-1/4
            h-52
            w-52
            rounded-full
            bg-cyan-300/10
            blur-[70px]
          "
        />

        <div
          className="
            relative
            flex
            items-center
            justify-between
          "
        >

          {/* Flecha izquierda */}

          <motion.button
            type="button"
            onClick={() => cambiarMes(-1)}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
            aria-label="Mes anterior"
          >
            <ChevronLeft size={21} strokeWidth={2} />
          </motion.button>


          {/* Mes */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${mes}-${año}`}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="text-center"
            >

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/60
                "
              >
                Calendario
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  md:text-3xl
                "
              >
                {meses[mes]}
              </h2>

              <p
                className="
                  mt-0.5
                  text-sm
                  font-medium
                  text-white/70
                "
              >
                {año}
              </p>

            </motion.div>
          </AnimatePresence>


          {/* Flecha derecha */}

          <motion.button
            type="button"
            onClick={() => cambiarMes(1)}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
            aria-label="Mes siguiente"
          >
            <ChevronRight size={21} strokeWidth={2} />
          </motion.button>

        </div>

      </div>


      {/* =================================================
          CUERPO
      ================================================= */}

      <div className="px-4 pb-5 pt-6 md:px-8 md:pb-7">

        {/* =================================================
            DÍAS DE LA SEMANA
        ================================================= */}

        <div className="grid grid-cols-7">

          {diasSemana.map((dia, index) => (
            <div
              key={dia}
              className={`
                pb-4
                text-center
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                ${
                  index >= 5
                    ? "text-gray-400"
                    : "text-gray-500"
                }
              `}
            >
              {dia}
            </div>
          ))}

        </div>


        {/* =================================================
            DÍAS
        ================================================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={`${mes}-${año}`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              grid
              grid-cols-7
              gap-y-2
            "
          >

            {dias.map((dia, index) => {

              /*
               * Espacio vacío
               */

              if (!dia) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="
                      h-12
                      md:h-14
                    "
                  />
                );
              }

              const fecha = obtenerFecha(dia);

              const hayEvento = tieneEvento(dia);

              const seleccionado =
                fechaSeleccionada === fecha;

              const esHoy =
                fecha === fechaHoy;

              const esFinDeSemana =
                index % 7 >= 5;

              return (
                <motion.div
                  key={fecha}
                  layout
                  className="
                    flex
                    justify-center
                  "
                >

                  <motion.button
                    type="button"
                    disabled={!hayEvento}
                    onClick={() => {
                      if (hayEvento) {
                        setFechaSeleccionada(
                          seleccionado
                            ? null
                            : fecha
                        );
                      }
                    }}
                    whileHover={
                      hayEvento
                        ? {
                            scale: 1.08,
                          }
                        : undefined
                    }
                    whileTap={
                      hayEvento
                        ? {
                            scale: 0.94,
                          }
                        : undefined
                    }
                    className={`
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      text-sm
                      font-medium
                      transition-all
                      duration-200

                      md:h-12
                      md:w-12

                      ${
                        seleccionado
                          ? `
                            bg-[#1449e8]
                            font-bold
                            text-white
                            shadow-lg
                            shadow-blue-500/30
                          `
                          : hayEvento
                            ? `
                              bg-blue-50
                              font-bold
                              text-[#1449e8]
                              hover:bg-blue-100
                            `
                            : `
                              ${
                                esFinDeSemana
                                  ? "text-gray-400"
                                  : "text-gray-700"
                              }
                            `
                      }

                      ${
                        esHoy && !seleccionado
                          ? `
                            ring-2
                            ring-[#2790ec]/30
                            ring-offset-2
                          `
                          : ""
                      }
                    `}
                  >

                    {dia}


                    {/* =================================================
                        INDICADOR DE EVENTO
                    ================================================= */}

                    {hayEvento && !seleccionado && (
                      <motion.span
                        initial={{
                          scale: 0,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        className="
                          absolute
                          bottom-1
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#0cbe5f]
                        "
                      />
                    )}


                    {/* =================================================
                        INDICADOR DE HOY
                    ================================================= */}

                    {esHoy && !seleccionado && (
                      <span
                        className="
                          absolute
                          right-1
                          top-1
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#2790ec]
                        "
                      />
                    )}

                  </motion.button>

                </motion.div>
              );
            })}

          </motion.div>

        </AnimatePresence>


        {/* =================================================
            LEYENDA
        ================================================= */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-x-6
            gap-y-3
            border-t
            border-gray-100
            pt-5
          "
        >

          <div className="flex items-center gap-2">

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
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-gray-500
              "
            >
              Días con eventos
            </span>

          </div>


          <div className="flex items-center gap-2">

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#2790ec]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-gray-500
              "
            >
              Hoy
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}
