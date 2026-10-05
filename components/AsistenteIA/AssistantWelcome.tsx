"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AssistantWelcome() {
  const [caseText, setCaseText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const text = caseText.trim();

    if (!text || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setCaseText("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          case: text,
          history: messages,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Ocurrió un error.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: result.data.analysis,
        },
      ]);
    } catch (error) {
      console.error("Error al contactar Balsas IA:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Lo siento, ocurrió un problema al procesar tu consulta.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
        fixed
        inset-0
        z-[9995]

        pointer-events-none
      "
    >
      {/* ============================= */}
      {/* BIENVENIDA + ROBOT */}
      {/* ============================= */}

      <div
        className="
          absolute
          left-1/2
          top-60

          flex
          -translate-x-1/2
          -translate-y-1/2

          flex-col
          items-center
          gap-3
        "
      >
        {/* Mensaje */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            rounded-xl
            rounded-br-sm

            border
            border-blue-500

            bg-gradient-to-br
            from-blue-600
            to-indigo-600

            px-5
            py-4

            text-center

            text-[11px]
            font-medium
            uppercase
            tracking-wide
            text-white

            shadow-[0_8px_25px_rgba(37,99,235,0.25)]

            sm:px-6
            sm:py-4

            sm:text-xs
          "
        >
          HOLA ¿CÓMO ESTÁS?
          <br />
          AQUÍ ESTOY PARA AYUDARTE
        </motion.div>

        {/* Robot */}

        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-7
            w-7
            shrink-0

            items-center
            justify-center

            rounded-full

            bg-white

            text-3xl

            shadow-lg

            sm:h-8
            sm:w-8
          "
        >
          🤖
        </motion.div>
      </div>

      {/* ============================= */}
      {/* CONVERSACIÓN */}
      {/* ============================= */}

      <AnimatePresence>
        {messages.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            className="
              pointer-events-auto

              absolute

              bottom-32
              left-1/2

              w-[calc(100%-32px)]
              max-w-xl

              -translate-x-1/2

              max-h-[38vh]

              overflow-y-auto

              space-y-3

              px-2

              sm:bottom-36
            "
          >
            {messages.map((message, index) => (
              <motion.div
                key={`${message.role}-${index}`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[85%]

                    rounded-2xl

                    px-4
                    py-3

                    text-sm
                    leading-5

                    shadow-[0_5px_20px_rgba(15,23,42,0.12)]

                    ${
                      message.role === "user"
                        ? `
                          rounded-br-sm
                          bg-blue-600
                          text-white
                        `
                        : `
                          rounded-bl-sm
                          border
                          border-blue-100
                          bg-white
                          text-slate-700
                        `
                    }
                  `}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}

            {loading && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="flex justify-start"
              >
                <div
                  className="
                    rounded-2xl
                    rounded-bl-sm

                    bg-white

                    px-4
                    py-3

                    shadow-[0_5px_20px_rgba(15,23,42,0.12)]
                  "
                >
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:150ms]" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:300ms]" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================= */}
      {/* CAJA DE TEXTO */}
      {/* ============================= */}

      <div
        className="
          pointer-events-auto

          absolute

          bottom-6
          left-1/2

          w-[calc(100%-32px)]
          max-w-xl

          -translate-x-1/2

          sm:bottom-8
        "
      >
        <div
          className="
            flex
            items-end
            gap-2

            rounded-2xl

            border
            border-blue-500

            bg-white

            px-3
            py-3

            shadow-[0_10px_35px_rgba(37,99,235,0.18)]

            transition

            focus-within:ring-2
            focus-within:ring-blue-200
          "
        >
          <textarea
            value={caseText}
            onChange={(event) => setCaseText(event.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            maxLength={1500}
            rows={2}
            placeholder="Escribe tu caso clínico o pregunta..."
            className="
              min-h-[44px]

              flex-1

              resize-none

              border-none

              bg-transparent

              px-2
              py-1

              text-sm
              text-slate-700

              outline-none

              placeholder:text-slate-400

              disabled:opacity-50
            "
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!caseText.trim() || loading}
            aria-label="Enviar pregunta"
            className="
              flex
              h-10
              w-10
              shrink-0

              items-center
              justify-center

              rounded-full

              bg-blue-600

              text-lg
              font-medium
              text-white

              shadow-md

              transition

              hover:scale-105
              hover:bg-blue-700

              active:scale-95

              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            ↑
          </button>
        </div>

        <div
          className="
            mt-1.5

            flex
            justify-between

            px-2

            text-[9px]
            text-white/70
          "
        >
          <span>
            {loading ? "Balsas IA está analizando..." : "Enter para enviar"}
          </span>

          <span>
            {caseText.length}/1500
          </span>
        </div>
      </div>
    </motion.div>
  );
}