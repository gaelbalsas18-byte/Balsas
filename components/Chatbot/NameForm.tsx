"use client";

import { useState } from "react";

interface Props {
  saveName: (name: string) => void;
}

export default function NameForm({ saveName }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;

    saveName(name.trim());
  };

  return (
    <div className="flex flex-1 flex-col justify-center">

      <h2 className="mb-3 text-center text-2xl font-bold text-slate-800">
        ¡Bienvenido!
      </h2>

      <p className="mb-8 text-center text-gray-500">
        Antes de comenzar, dinos cómo te llamas.
      </p>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        className="text-black rounded-xl border border-slate-300 px-4 py-3 text-center outline-none transition focus:border-blue-600"
      />

      <button
        onClick={handleSubmit}
        className="mt-5 rounded-xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
      >
        Continuar
      </button>

    </div>
  );
}