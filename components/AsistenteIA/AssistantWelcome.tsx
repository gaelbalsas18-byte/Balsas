"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function AssistantWelcome() {

  const [caseText, setCaseText] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<{
  analysis: string;
  recommendations: {
    id: string;
    reason: string;
  }[];
} | null>(null);


  const maxCharacters = 1500;

const handleAnalyze = async () => {

  if (!caseText.trim()) return;

  try {

    setLoading(true);

    setResult(null);

    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        case: caseText,
      }),
    });

    const data = await response.json();

    if (data.success) {

      setResult(data.data);

    } else {

      console.error(data);

    }

  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);

  }

};

  return (

    <div className="mx-auto flex max-w-4xl flex-col px-10 py-12">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center"
      >

        <span className="inline-flex items-center gap-3 rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">

          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />

          IA Especializada

        </span>

      </motion.div>

      {/* Título */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .1 }}
        className="mt-10 text-center text-5xl font-black text-slate-900"
      >

        Analizador de Casos Clínicos

      </motion.h1>

      {/* Descripción */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .2 }}
        className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-black"
      >

        Describe el procedimiento clínico o el caso del paciente y nuestro
        asistente analizará la información para recomendarte los productos más
        adecuados del catálogo de <b>Balsas Dental</b>.

      </motion.p>

      {/* Caja */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .35 }}
        className="relative mt-14"
      >

        <textarea

          value={caseText}

          onChange={(e) => setCaseText(e.target.value)}

          maxLength={maxCharacters}

          rows={11}

          placeholder={`Escribenos tu caso`}

          className="
            h-[128px]
            w-full
            resize-none
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            pr-24
            text-lg
            leading-8
            shadow-xl
            outline-none
            transition-all
            focus:border-blue-600
            focus:ring-4
            focus:ring-blue-100
            text-black
          "
        />

        {/* Contador */}

        <span className="absolute bottom-7 right-24 text-sm text-slate-400">

          {caseText.length}/{maxCharacters}

        </span>

        {/* Botón */}

        <motion.button

          whileHover={
            caseText.trim()
              ? { scale: 1.08 }
              : {}
          }

          whileTap={{ scale: .92 }}

          disabled={!caseText.trim() || loading}

          onClick={handleAnalyze}

          className={`
            absolute
            bottom-5
            right-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            text-2xl
            text-white
            transition-all

            ${
              !caseText.trim() || loading
                ? "bg-slate-300 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 shadow-xl"
            }
          `}
        >

        {loading ? (
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          "→"
        )}

        </motion.button>

      </motion.div>


              {result && (

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            mt-10
            rounded-[30px]
            border
            border-slate-200
            bg-white
            shadow-xl
            overflow-hidden
          "
        >

          <div className="border-b bg-blue-700 px-8 py-6">

            <h2 className="text-2xl font-bold text-white">

              Resultado del análisis

            </h2>

          </div>

          <div className="space-y-8 p-8">

            <div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">

                Análisis Clínico

              </h3>

              <p className="leading-8 text-slate-700">

                {result.analysis}

              </p>

            </div>

            <div>

              <h3 className="mb-5 text-xl font-bold text-slate-900">

                Productos Recomendados

              </h3>

              <div className="space-y-5">

                {result.recommendations.map((item) => (

                  <div
                    key={item.id}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      p-6
                    "
                  >

                    <h4 className="text-lg font-bold text-blue-700">

                      {item.id}

                    </h4>

                    <p className="mt-2 leading-7 text-slate-600">

                      {item.reason}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

        )}


      {/* Aviso */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .45 }}
        className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5"
      >

        <p className="text-center leading-7 text-slate-600">

          🔒 Las recomendaciones son generadas únicamente utilizando el
          catálogo de productos distribuidos por <b>Balsas Dental</b>.
          Esta herramienta sirve como apoyo al profesional y no sustituye
          el criterio clínico.

        </p>

      </motion.div>

    </div>

  );

}