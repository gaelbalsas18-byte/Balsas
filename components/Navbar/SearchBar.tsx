"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface ResultadoBusqueda {
  id: number;
  titulo: string;
  tipo: string;
  ruta: string;
  palabrasClave: string[];
}

const resultados: ResultadoBusqueda[] = [
  // =========================
  // UNIVERSOS
  // =========================

  {
    id: 1,
    titulo: "Clínica",
    tipo: "Universo",
    ruta: "/novedades",
    palabrasClave: [
      "clinica",
      "clínica",
      "odontologia",
      "odontología",
    ],
  },

  {
    id: 2,
    titulo: "Laboratorio",
    tipo: "Universo",
    ruta: "/novedades",
    palabrasClave: [
      "laboratorio",
      "lab",
      "dental",
    ],
  },

  {
    id: 3,
    titulo: "Laboratorio Digital",
    tipo: "Universo",
    ruta: "/novedades",
    palabrasClave: [
      "laboratorio digital",
      "digital",
      "cad cam",
      "cadcam",
    ],
  },

  // =========================
  // MARCAS
  // =========================

  {
    id: 4,
    titulo: "Tokuyama",
    tipo: "Marca",
    ruta: "/Productos",
    palabrasClave: [
      "tokuyama",
      "tokuyama dental",
    ],
  },

  {
    id: 5,
    titulo: "Zhermack",
    tipo: "Marca",
    ruta: "/Productos",
    palabrasClave: [
      "zhermack",
    ],
  },

  {
    id: 6,
    titulo: "Renfert",
    tipo: "Marca",
    ruta: "/Productos",
    palabrasClave: [
      "renfert",
    ],
  },

  {
    id: 7,
    titulo: "Shining",
    tipo: "Marca",
    ruta: "/Productos",
    palabrasClave: [
      "shining",
      "shining 3d",
    ],
  },

  {
    id: 8,
    titulo: "Redon",
    tipo: "Marca",
    ruta: "/Productos",
    palabrasClave: [
      "redon",
    ],
  },

  {
    id: 9,
    titulo: "Audental",
    tipo: "Marca",
    ruta: "/Productos",
    palabrasClave: [
      "audental",
    ],
  },

  {
    id: 10,
    titulo: "Vericom",
    tipo: "Marca",
    ruta: "/Productos",
    palabrasClave: [
      "vericom",
    ],
  },

  // =========================
  // CATEGORÍAS
  // =========================

  {
    id: 11,
    titulo: "Resinas dentales",
    tipo: "Categoría",
    ruta: "/Productos",
    palabrasClave: [
      "resina",
      "resinas",
      "resina dental",
      "resinas dentales",
    ],
  },

  {
    id: 12,
    titulo: "Adhesivos dentales",
    tipo: "Categoría",
    ruta: "/Productos",
    palabrasClave: [
      "adhesivo",
      "adhesivos",
      "adhesivo dental",
      "adhesivos dentales",
    ],
  },

  {
    id: 13,
    titulo: "Endodoncia",
    tipo: "Categoría",
    ruta: "/Productos",
    palabrasClave: [
      "endodoncia",
      "endo",
    ],
  },

  {
    id: 14,
    titulo: "Restaurativa",
    tipo: "Categoría",
    ruta: "/Productos",
    palabrasClave: [
      "restaurativa",
      "restauracion",
      "restauración",
    ],
  },

  // =========================
  // PÁGINAS
  // =========================

  {
    id: 15,
    titulo: "Novedades",
    tipo: "Página",
    ruta: "/Productos",
    palabrasClave: [
      "novedades",
      "noticias",
      "blog",
    ],
  },

  {
    id: 16,
    titulo: "Eventos",
    tipo: "Página",
    ruta: "/eventos",
    palabrasClave: [
      "eventos",
      "evento",
      "cursos",
      "congresos",
    ],
  },

  {
    id: 17,
    titulo: "Productos",
    tipo: "Página",
    ruta: "/Productos",
    palabrasClave: [
      "productos",
      "producto",
      "materiales",
    ],
  },
];

export default function SearchBar() {
  const router = useRouter();

  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const textoBusqueda = busqueda.trim().toLowerCase();

  const sugerencias =
    textoBusqueda.length > 0
      ? resultados
          .filter((resultado) => {
            return (
              resultado.titulo
                .toLowerCase()
                .includes(textoBusqueda) ||
              resultado.palabrasClave.some((palabra) =>
                palabra.toLowerCase().includes(textoBusqueda)
              )
            );
          })
          .slice(0, 6)
      : [];

  const seleccionarResultado = (ruta: string) => {
    setBusqueda("");
    setMostrarResultados(false);

    router.push(ruta);
  };

  return (
    <div className="relative w-full max-w-md">

      {/* ========================= */}
      {/* INPUT */}
      {/* ========================= */}

      <Search
        size={20}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={busqueda}
        placeholder="Buscar..."
        onChange={(e) => {
          setBusqueda(e.target.value);
          setMostrarResultados(true);
        }}
        onFocus={() => {
          if (busqueda.trim()) {
            setMostrarResultados(true);
          }
        }}
        className="w-full rounded-full bg-white py-2.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:ring-3 focus:ring-blue-300"
      />

      {/* ========================= */}
      {/* RESULTADOS */}
      {/* ========================= */}

      {mostrarResultados && textoBusqueda.length > 0 && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-2xl bg-white shadow-xl">

          {sugerencias.length > 0 ? (

            <div className="py-2">

              {sugerencias.map((resultado) => (

                <button
                  key={resultado.id}
                  type="button"
                  onClick={() =>
                    seleccionarResultado(resultado.ruta)
                  }
                  className="flex w-full items-center justify-between px-5 py-3 text-left transition hover:bg-gray-50"
                >

                  <div>

                    <p className="text-sm font-semibold text-gray-900">
                      {resultado.titulo}
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
                      {resultado.tipo}
                    </p>

                  </div>

                  <span className="text-gray-300">
                    →
                  </span>

                </button>

              ))}

            </div>

          ) : (

            <div className="px-5 py-6 text-center">

              <p className="text-sm font-medium text-gray-700">
                No encontramos resultados
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Intenta con otro término.
              </p>

            </div>

          )}

        </div>
      )}

    </div>
  );
}