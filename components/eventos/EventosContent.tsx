"use client";

import { useState } from "react";
import EventosCalendar from "./EventosCalendar";
import EventoCard from "./EventoCard";
import EventoModal from "./EventoModal";
import { eventos } from "./EventosData";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  fechaTexto: string;
  hora: string;
  lugar: string;
  ciudad: string;
  modalidad: string;
  descripcion: string;
  contenido: string;
  imagen: string;
  marca?: string;
}

interface EventosContentProps {
  mesInicial?: number;
  añoInicial?: number;
}

export default function EventosContent({
  mesInicial,
  añoInicial,
}: EventosContentProps) {

  /*
   * ============================
   * MES ACTUAL
   * ============================
   */

  const [mesActual, setMesActual] = useState(
    mesInicial ?? new Date().getMonth()
  );

  /*
   * ============================
   * AÑO ACTUAL
   * ============================
   */

  const [añoActual, setAñoActual] = useState(
    añoInicial ?? new Date().getFullYear()
  );

  /*
   * ============================
   * FECHA SELECCIONADA
   * ============================
   */

  const [fechaSeleccionada, setFechaSeleccionada] =
    useState<string | null>(null);

  /*
   * ============================
   * ESTADO DE LA SECCIÓN
   * ============================
   *
   * false = Calendario
   * true  = Tarjetas
   */

  const [mostrarEventos, setMostrarEventos] = useState(false);

  /*
   * ============================
   * EVENTO PARA EL MODAL
   * ============================
   */

  const [eventoSeleccionado, setEventoSeleccionado] =
    useState<Evento | null>(null);

  /*
   * ============================
   * SELECCIONAR FECHA
   * ============================
   */

  const seleccionarFecha = (fecha: string | null) => {

    setFechaSeleccionada(fecha);

    if (fecha) {
      setMostrarEventos(true);
    }

  };

  /*
   * ============================
   * FECHA SELECCIONADA
   * ============================
   */

  const fechaSeleccionadaDate = fechaSeleccionada
    ? new Date(`${fechaSeleccionada}T00:00:00`)
    : null;

  /*
   * ============================
   * MES SELECCIONADO
   * ============================
   */

  const mesSeleccionado = fechaSeleccionadaDate
    ? fechaSeleccionadaDate.getMonth()
    : null;

  /*
   * ============================
   * AÑO SELECCIONADO
   * ============================
   */

  const añoSeleccionado = fechaSeleccionadaDate
    ? fechaSeleccionadaDate.getFullYear()
    : null;

  /*
   * ============================
   * EVENTOS DEL MES
   * ============================
   */

  const eventosDelMes = eventos.filter((evento) => {

    const fechaEvento = new Date(
      `${evento.fecha}T00:00:00`
    );

    return (
      fechaEvento.getMonth() === mesSeleccionado &&
      fechaEvento.getFullYear() === añoSeleccionado
    );

  });

  /*
   * ============================
   * NOMBRE DEL MES
   * ============================
   */

  const nombreMes = fechaSeleccionadaDate
    ? fechaSeleccionadaDate.toLocaleDateString("es-MX", {
        month: "long",
        year: "numeric",
      })
    : "";

  /*
   * ============================
   * REGRESAR AL CALENDARIO
   * ============================
   */

  const regresarCalendario = () => {

    setMostrarEventos(false);

    setFechaSeleccionada(null);

    setEventoSeleccionado(null);

  };

  /*
   * ============================
   * ABRIR MODAL
   * ============================
   */

  const abrirEvento = (evento: Evento) => {

    setEventoSeleccionado(evento);

  };

  /*
   * ============================
   * RENDER
   * ============================
   */

  return (
    <div className="w-full">

      {/* ================================================== */}
      {/* ESTADO 1 — CALENDARIO */}
      {/* ================================================== */}

      {!mostrarEventos && (

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-6xl
            grid-cols-1
            items-center
            gap-10
            px-4
            sm:px-6
            lg:grid-cols-[1fr_430px]
            lg:gap-20
            lg:px-8
          "
        >

          {/* ========================= */}
          {/* TEXTO IZQUIERDO */}
          {/* ========================= */}

          <div
            className={`
              ${manrope.className}
              text-center
              lg:text-left
            `}
          >

            <span
              className="
                inline-block
                text-2xl
                font-bold
                tracking-wide
                text-[#2790ec]
                sm:text-3xl
                md:text-4xl
              "
            >
              CALENDARIO
              <br />
              DE EVENTOS
            </span>

            <div
              className="
                mx-auto
                mt-5
                h-[2px]
                w-20
                bg-[#2790ec]
                lg:mx-0
              "
            />

            <p
              className="
                mx-auto
                mt-6
                max-w-md
                text-sm
                leading-6
                text-gray-600
                sm:text-base
                lg:mx-0
              "
            >
              Consulta nuestros próximos eventos,
              cursos y capacitaciones.
            </p>

            <p
              className="
                mx-auto
                mt-3
                max-w-md
                text-sm
                leading-6
                text-gray-600
                sm:text-base
                lg:mx-0
              "
            >
              Selecciona una fecha en el calendario
              para conocer los eventos disponibles.
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                text-sm
                font-medium
                text-[#0057b8]
                lg:justify-start
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#2790ec]" />

              Explora nuestro calendario

            </div>

          </div>

          {/* ========================= */}
          {/* CALENDARIO DERECHO */}
          {/* ========================= */}

          <div className="mx-auto w-full max-w-[430px]">

            <EventosCalendar
              eventos={eventos}
              fechaSeleccionada={fechaSeleccionada}
              setFechaSeleccionada={seleccionarFecha}
              mesActual={mesActual}
              añoActual={añoActual}
              setMesActual={setMesActual}
              setAñoActual={setAñoActual}
            />

          </div>

        </div>

      )}

      {/* ================================================== */}
      {/* ESTADO 2 — EVENTOS DEL MES */}
      {/* ================================================== */}

      {mostrarEventos && (

        <div
          className={`
            ${manrope.className}
            mx-auto
            w-full
            max-w-6xl
            px-4
            sm:px-6
            lg:px-8
          `}
        >

          {/* ========================= */}
          {/* ENCABEZADO */}
          {/* ========================= */}

          <div
            className="
              mb-8
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <h3
                className="
                  mt-1
                  text-2xl
                  font-bold
                  uppercase
                  text-gray-900
                  sm:text-3xl
                "
              >
                Eventos de {nombreMes}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Estos son los eventos disponibles para este mes.
              </p>

            </div>

            {/* ========================= */}
            {/* BOTÓN CALENDARIO */}
            {/* ========================= */}

            <button
              type="button"
              onClick={regresarCalendario}
              className="
                w-fit
                rounded-full
                border
                border-[#2790ec]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-[#2790ec]
                transition-all
                duration-300
                hover:bg-[#2790ec]
                hover:text-white
              "
            >
              ← Calendario
            </button>

          </div>

          {/* ========================= */}
          {/* TARJETAS */}
          {/* ========================= */}

          {eventosDelMes.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              "
            >

              {eventosDelMes.map((evento) => (

                <EventoCard
                  key={evento.id}
                  evento={evento}
                  onClick={() => abrirEvento(evento)}
                />

              ))}

            </div>

          ) : (

            /* ========================= */
            /* SIN EVENTOS */
            /* ========================= */

            <div
              className="
                flex
                min-h-[280px]
                items-center
                justify-center
                rounded-3xl
                border
                border-gray-100
                bg-gray-50
                px-6
                text-center
              "
            >

              <div>

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#2790ec]/10
                    text-2xl
                  "
                >
                  📅
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  No hay eventos
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  No hay eventos programados para {nombreMes}.
                </p>

                <button
                  type="button"
                  onClick={regresarCalendario}
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-[#2790ec]
                    hover:underline
                  "
                >
                  ← Regresar al calendario
                </button>

              </div>

            </div>

          )}

        </div>

      )}

      {/* ================================================== */}
      {/* MODAL DEL EVENTO */}
      {/* ================================================== */}

      <EventoModal
        evento={eventoSeleccionado}
        onClose={() => setEventoSeleccionado(null)}
      />

    </div>
  );
}