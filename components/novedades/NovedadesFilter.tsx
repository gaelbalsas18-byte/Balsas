"use client";

interface NovedadesFilterProps {
  universo: string;
  marca: string;
  etiqueta: string;
  fecha: string;
  setUniverso: (value: string) => void;
  setMarca: (value: string) => void;
  setEtiqueta: (value: string) => void;
  setFecha: (value: string) => void;
}

const filtros = {
  "Clínica": {
    marcas: ["Tokuyama", "Zhermack", "Vericom"],
  },

  "Laboratorio": {
    marcas: ["Zhermack", "Renfert", "Audental"],
  },

  "Laboratorio Digital": {
    marcas: ["Shining", "Redon"],
  },
};

const etiquetasPorMarca = {
  Tokuyama: [
    "Resinas dentales",
    "Adhesivos dentales",
    "Restaurativa",
  ],

  Zhermack: [
    "Resinas dentales",
    "Restaurativa",
  ],

  Vericom: [
    "Resinas dentales",
    "Adhesivos dentales",
  ],

  Renfert: [
    "Laboratorio",
    "Restaurativa",
  ],

  Audental: [
    "Resinas dentales",
    "Restaurativa",
  ],

  Shining: [
    "Laboratorio Digital",
  ],

  Redon: [
    "Laboratorio Digital",
    "Restaurativa",
  ],
};

const fechas = [
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
];

export default function NovedadesFilter({
    universo,
    marca,
    etiqueta,
    fecha,
    setUniverso,
    setMarca,
    setEtiqueta,
    setFecha,
}: NovedadesFilterProps) {

  /*
   * Marcas disponibles dependiendo del universo
   */
  
  const marcasDisponibles =
    universo && universo in filtros
      ? filtros[universo as keyof typeof filtros].marcas
      : [];
  /*
   * Etiquetas disponibles dependiendo de la marca
   */

  const etiquetasDisponibles =
    marca && marca in etiquetasPorMarca
      ? etiquetasPorMarca[
          marca as keyof typeof etiquetasPorMarca
        ]
      : [];
      return(
        <div className="mt-12 rounded-2xl bg-[#00539bde] p-6 shadow-sm">
            <div className="mb-6 text-center">
                <h2 className="text-lg font-bold text-white">
                    ¿QUÉ ESTAS BUSCANDO?
                </h2>
                <p className="mt-1 text-sm text-white">
                    seleciona las opciones para encontrar contenido relacionado
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <label htmlFor="universo"
                    className="mb-2 block text-lg font-bold text-white text-center">
                        Universo
                    </label>
                    
                    <select
                    id="universo"
                    value={universo}
                    onChange={(e) =>{
                        setUniverso(e.target.value);

                        // Reiniciamos los filtros dependientes
                        setMarca("");
                        setEtiqueta("");
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

                {/* Marca */}
                <div>
                <label
                    htmlFor="marca"
                    className="mb-2 block text-lg font-bold text-white text-center"
                >
                    Marca
                </label>
                <select
                    id="marca"
                    value={marca}
                    disabled={!universo}
                    onChange={(e) => {
                    setMarca(e.target.value);

                    // Reiniciamos etiqueta cuando cambia la marca
                    setEtiqueta("");
                    }}
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    !universo
                        ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                        : "border-gray-200 bg-gray-50 text-gray-700 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    }`}
                >
                    <option value="">
                    {universo
                        ? "Seleccionar marca"
                        : "Selecciona un universo primero"}
                    </option>

                    {marcasDisponibles.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                    ))}
                </select>
                </div>

                {/* Etiqueta*/}
                <div>
                <label
                    htmlFor="etiqueta"
                    className="mb-2 block text-lg font-bold text-white text-center"
                >
                    Etiqueta
                </label>

                <select
                    id="etiqueta"
                    value={etiqueta}
                    disabled={!marca}
                    onChange={(e) => setEtiqueta(e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    !marca
                        ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                        : "border-gray-200 bg-gray-50 text-gray-700 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    }`}
                >
                    <option value="">
                    {marca
                        ? "Seleccionar etiqueta"
                        : "Selecciona una marca primero"}
                    </option>

                    {etiquetasDisponibles.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                    ))}
                </select>
                </div>

                 {/* Fecha */}
                    <div>
                    <label
                        htmlFor="fecha"
                        className="mb-2 block text-lg font-bold text-white text-center"
                    >
                        Año
                    </label>

                    <select
                        id="fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-black outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">
                        Todas las fechas
                        </option>

                        {fechas.map((item) => (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                        ))}
                    </select>
                    </div>

            </div>
        </div>
      )
}
