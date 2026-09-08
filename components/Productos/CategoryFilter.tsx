"use client";

import { motion } from "motion/react";

export type Category =
  | "all"
  | "clinica"
  | "laboratorio"
  | "Laboratorio Digital";

interface Props {
  selected: Category;
  onChange: (category: Category) => void;
}

/*
 * Estructura de filtros
 *
 * Universo
 *    ↓
 * Especialidad
 *    ↓
 * ¿Necesitas algo?
 */

const filtros = {
  Clínica: {
    Restaurativa: [
      "Resinas dentales",
      "Adhesivos dentales",
      "Cementos dentales",
    ],

    Prótesis: [
      "Cementos dentales",
      "Resinas provisionales",
      "Cerámica",
      "Zirconia",
      "Disilicato",
    ],

    Cirugía: [
      "Instrumental",
      "Fresas",
      "Desinfectantes",
    ],

    Periodoncia: [
      "Instrumental",
      "Fresas",
      "Desinfectantes",
    ],

    Endodoncia: [
      "Limas de endo",
      "Instrumental",
      "Fresas",
    ],

    Ortodoncia: [
      "Brackets",
      "Arcos de ortodoncia",
      "Instrumental",
    ],
  },

  Laboratorio: {
    Restaurativa: [
      "Resinas dentales",
      "Fresas",
      "Fresones",
      "Pulidores",
    ],

    Prótesis: [
      "Yesos",
      "Ceras",
      "Cerámica",
      "Zirconia",
      "Disilicato",
      "Resinas provisionales",
      "Fresas",
      "Fresones",
      "Pulidores",
    ],

    Cirugía: [
      "Instrumental",
      "Fresas",
      "Desinfectantes",
    ],

    Periodoncia: [
      "Instrumental",
      "Fresas",
    ],

    Endodoncia: [
      "Limas de endo",
      "Instrumental",
      "Fresas",
    ],

    Ortodoncia: [
      "Brackets",
      "Arcos de ortodoncia",
      "Instrumental",
    ],
  },

  "Laboratorio Digital": {
    Restaurativa: [
      "Resinas dentales",
      "Fresas",
      "Pulidores",
    ],

    Prótesis: [
      "Escáner dental",
      "Impresión digital",
      "Sistemas de fresado",
      "Cerámica",
      "Zirconia",
      "Disilicato",
      "Resinas provisionales",
    ],

    Cirugía: [
      "Escáner dental",
      "Impresión digital",
      "Radiología",
    ],

    Periodoncia: [
      "Escáner dental",
      "Radiología",
    ],

    Endodoncia: [
      "Escáner dental",
      "Radiología",
    ],

    Ortodoncia: [
      "Escáner dental",
      "Impresión digital",
      "Radiología",
    ],
  },
} as const;


/*
 * Props del filtro
 */

interface CategoryFilterProps {
  universo: string;
  especialidad: string;
  necesidad: string;

  setUniverso: (value: string) => void;
  setEspecialidad: (value: string) => void;
  setNecesidad: (value: string) => void;
}


/*
 * Componente
 */

export default function CategoryFilter({
  universo,
  especialidad,
  necesidad,
  setUniverso,
  setEspecialidad,
  setNecesidad,
}: CategoryFilterProps) {

  /*
   * Especialidades disponibles según el Universo
   */

  const especialidadesDisponibles =
    universo && universo in filtros
      ? Object.keys(
          filtros[universo as keyof typeof filtros]
        )
      : [];


  /*
   * Necesidades disponibles según
   * Universo + Especialidad
   */

  const necesidadesDisponibles =
    universo &&
    especialidad &&
    universo in filtros &&
    especialidad in
      filtros[universo as keyof typeof filtros]
      ? filtros[
          universo as keyof typeof filtros
        ][
          especialidad as keyof (typeof filtros)[keyof typeof filtros]
        ]
      : [];


  return (
    <div className="flex justify-center">

      <div className="w-full max-w-6xl rounded-2xl bg-[#00539bde] p-6 shadow-xl">

        {/* Título */}

        <div className="mb-6 text-center">

          <h2 className="text-lg font-bold text-white">
            ¿QUÉ ESTÁS BUSCANDO?
          </h2>

          <p className="mt-1 text-sm text-white">
            Selecciona las opciones para encontrar los productos que necesitas
          </p>

        </div>


        {/* Filtros */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


          {/* =========================
              UNIVERSO
          ========================= */}

          <div>

            <label
              htmlFor="universo"
              className="mb-2 block text-center text-lg font-bold text-white"
            >
              Universo
            </label>

            <select
              id="universo"
              value={universo}
              onChange={(e) => {

                const value = e.target.value;

                setUniverso(value);

                // Reiniciamos filtros dependientes
                setEspecialidad("");
                setNecesidad("");

              }}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            >

              <option value="">
                Selecciona Universo
              </option>

              <option value="Clínica">
                Clínica
              </option>

              <option value="Laboratorio">
                Laboratorio
              </option>

              <option value="Laboratorio Digital">
                Laboratorio Digital
              </option>

            </select>

          </div>


          {/* =========================
              ESPECIALIDAD
          ========================= */}

          <div>

            <label
              htmlFor="especialidad"
              className="mb-2 block text-center text-lg font-bold text-white"
            >
              Especialidad
            </label>

            <select
              id="especialidad"
              value={especialidad}
              disabled={!universo}
              onChange={(e) => {

                const value = e.target.value;

                setEspecialidad(value);

                // Reiniciamos necesidad
                setNecesidad("");

              }}
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                !universo
                  ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                  : "border-gray-200 bg-gray-50 text-gray-700 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              }`}
            >

              <option value="">
                {universo
                  ? "Seleccionar especialidad"
                  : "Selecciona un universo primero"}
              </option>

              {especialidadesDisponibles.map(
                (item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                )
              )}

            </select>

          </div>


          {/* =========================
              ¿QUÉ NECESITAS?
          ========================= */}

          <div>

            <label
              htmlFor="necesidad"
              className="mb-2 block text-center text-lg font-bold text-white"
            >
              ¿Qué necesitas?
            </label>

            <select
              id="necesidad"
              value={necesidad}
              disabled={!especialidad}
              onChange={(e) =>
                setNecesidad(e.target.value)
              }
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                !especialidad
                  ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                  : "border-gray-200 bg-gray-50 text-gray-700 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              }`}
            >

              <option value="">
                {especialidad
                  ? "Seleccionar producto"
                  : "Selecciona una especialidad primero"}
              </option>

              {necesidadesDisponibles.map(
                (item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                )
              )}

            </select>

          </div>

        </div>

      </div>

    </div>
  );
}