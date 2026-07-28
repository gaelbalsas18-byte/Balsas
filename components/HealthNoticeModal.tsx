"use client";

import { useState } from "react";

interface Props {
  onAccept: () => void;
}

export default function HealthNoticeModal({ onAccept }: Props) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const handleAccept = () => {
    setOpen(false);
    onAccept();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-blue-700 p-8 shadow-2xl">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Aviso Importante
        </h2>

        <p className="mb-4 text-white">
          La información contenida en este sitio web tiene fines informativos y
          educativos relacionados con la salud bucal.
        </p>

        <p className="mb-6 text-white">
          Ningún contenido publicado sustituye la valoración, diagnóstico o
          tratamiento realizado por un profesional de la salud dental.
        </p>

        <button
          onClick={handleAccept}
          className="w-full rounded-xl bg-white py-3 font-semibold text-blue-700"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}