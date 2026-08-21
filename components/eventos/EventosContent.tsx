"use client";

import { useState } from "react";
import EventosCalendar from "./EventosCalendar";
import EventoCard from "./EventoCard";
import EventoModal from "./EventoModal";


export interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  fechaTexto: string;
  hora: string;
  lugar: string;
  modalidad: string;
  descripcion: string;
  contenido: string;
  imagen: string;
  marca?: string;
}


const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Curso de Restaurativa",
    fecha: "2026-08-18",
    fechaTexto: "18 Agosto 2026",
    hora: "10:00 AM",
    lugar: "Ciudad de México",
    modalidad: "Presencial",
    descripcion:
      "Curso especializado en técnicas y materiales para restauración dental.",
    contenido:
      "En este curso conocerás nuevas técnicas, materiales y soluciones para mejorar tus procedimientos restaurativos.",
    imagen: "/eventos/evento-1.jpg",
    marca: "Tokuyama",
  },

  {
    id: 2,
    titulo: "Workshop Tokuyama",
    fecha: "2026-08-22",
    fechaTexto: "22 Agosto 2026",
    hora: "09:00 AM",
    lugar: "Guadalajara, Jalisco",
    modalidad: "Presencial",
    descripcion:
      "Workshop enfocado en soluciones restaurativas y nuevos materiales.",
    contenido:
      "Una experiencia práctica para conocer las características y aplicaciones de los materiales Tokuyama.",
    imagen: "/eventos/evento-2.jpg",
    marca: "Tokuyama",
  },

  {
    id: 3,
    titulo: "Innovación en Laboratorio Digital",
    fecha: "2026-09-05",
    fechaTexto: "05 Septiembre 2026",
    hora: "11:00 AM",
    lugar: "Monterrey, Nuevo León",
    modalidad: "Presencial",
    descripcion:
      "Conoce las nuevas tecnologías para el laboratorio dental digital.",
    contenido:
      "Presentación de nuevas herramientas y soluciones para optimizar los procesos dentro del laboratorio digital.",
    imagen: "/eventos/evento-3.jpg",
    marca: "Shining",
  },

  {
    id: 4,
    titulo: "Actualización para Laboratorio",
    fecha: "2026-09-12",
    fechaTexto: "12 Septiembre 2026",
    hora: "10:00 AM",
    lugar: "Ciudad de México",
    modalidad: "Presencial",
    descripcion:
      "Un encuentro para conocer nuevas soluciones para laboratorio.",
    contenido:
      "Conoce las novedades y soluciones que Balsas Dental tiene para profesionales del laboratorio.",
    imagen: "/eventos/evento-4.jpg",
    marca: "Renfert",
  },
];


interface EventosContentProps {
  mesInicial?: number;
}

export default function EventosContent({
  mesInicial,
}: EventosContentProps) {

  /*
  * Mes que actualmente está mostrando el calendario
  */

  const [mesActual, setMesActual] = useState(
    mesInicial ?? new Date().getMonth()
  );

  const [añoActual, setAñoActual] = useState(
    new Date().getFullYear()
  );

  /*
  * Día seleccionado
  */
  const [fechaSeleccionada, setFechaSeleccionada] =
    useState<string | null>(null);

  /*
  * Evento seleccionado para el modal
  */
  const [eventoSeleccionado, setEventoSeleccionado] =
    useState<Evento | null>(null);


  /*
  * Filtramos los eventos del mes que
  * actualmente está mostrando el calendario.
  */
  const eventosDelMes = eventos.filter((evento) => {

    const fechaEvento = new Date(
      `${evento.fecha}T00:00:00`
    );

    return (
      fechaEvento.getMonth() === mesActual &&
      fechaEvento.getFullYear() === añoActual
    );
  });


  /*
   * Si hay una fecha seleccionada,
   * mostramos únicamente los eventos de ese día.
   *
   * Si no hay fecha seleccionada,
   * mostramos los eventos del mes actual.
   */
  const eventosVisibles = fechaSeleccionada
    ? eventos.filter(
        (evento) => evento.fecha === fechaSeleccionada
      )
    : eventosDelMes;


  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">

        {/* Calendario */}
        <EventosCalendar
          eventos={eventos}
          fechaSeleccionada={fechaSeleccionada}
          setFechaSeleccionada={setFechaSeleccionada}
          mesActual={mesActual}
          añoActual={añoActual}
          setMesActual={setMesActual}
          setAñoActual={setAñoActual}
        />


        {/* Eventos */}
        <div className="flex flex-col gap-6">

          {eventosVisibles.length > 0 ? (

            eventosVisibles.map((evento) => (
              <EventoCard
                key={evento.id}
                evento={evento}
                onClick={() =>
                  setEventoSeleccionado(evento)
                }
              />
            ))

          ) : (

            <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center">

              <div>

                <h3 className="text-lg font-semibold text-gray-900">
                  No hay eventos
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  No hay eventos programados para este mes.
                </p>

              </div>

            </div>

          )}

        </div>

      </div>


      {/* Modal */}
      <EventoModal
        evento={eventoSeleccionado}
        onClose={() => setEventoSeleccionado(null)}
      />

    </>
  );
}