"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

type Message =
  | {
      role: "user";
      content: string;
    }
  | {
      role: "assistant";
      analysis: string;
      recommendations: {
        id: string;
        reason: string;
      }[];
    };

    
interface ChatPanelProps {
  messages: Message[];
  loading: boolean;
}

export default function ChatPanel({
  messages,
  loading,
}: ChatPanelProps) {

    const bottomRef = useRef<HTMLDivElement>(null);
      useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

        }, [messages, loading]);

  return (
    <div
      className="
        h-[650px]
        overflow-y-auto
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-xl
      "
    >
      {messages.length === 0 && (
        <div className="flex h-full items-center justify-center">

          <div className="max-w-xl text-center">

            <div className="mb-5 text-6xl">
              🦷
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              Hola, soy Balsas IA
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Estoy listo para ayudarte con casos clínicos,
              recomendaciones de materiales, productos,
              técnicas restaurativas y cualquier duda relacionada
              con el catálogo de Balsas Dental.
            </p>

          </div>

        </div>
      )}

      <div className="space-y-8">

        {messages.map((message, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >

            {/* Usuario */}

            {message.role === "user" && (

              <div className="flex justify-end">

                <div
                  className="
                    max-w-[70%]
                    rounded-[26px]
                    rounded-br-md
                    bg-blue-700
                    px-6
                    py-5
                    text-white
                    shadow-lg
                  "
                >
                  {message.content}
                </div>

              </div>

            )}

            {/* IA */}

            {message.role === "assistant" && (

              <div className="flex">

                <div className="max-w-[85%]">

                  <div
                    className="
                      rounded-[26px]
                      rounded-bl-md
                      border
                      border-slate-200
                      bg-slate-50
                      px-7
                      py-6
                    "
                  >

                    <div className="mb-4 flex items-center gap-3">

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-700
                          text-white
                        "
                      >
                        🤖
                      </div>

                      <h3 className="font-bold text-slate-900">
                        Balsas IA
                      </h3>

                    </div>

                    <p className="leading-8 text-slate-700">
                      {message.analysis}
                    </p>

                    {message.recommendations.length > 0 && (

                      <div className="mt-8 space-y-4">

                        <h4 className="font-bold text-slate-900">

                          Productos Recomendados

                        </h4>

                        {message.recommendations.map((product) => (

                          <div
                            key={product.id}
                            className="
                              rounded-2xl
                              border
                              border-slate-200
                              bg-white
                              p-5
                            "
                          >

                            <h5 className="font-bold text-blue-700">

                              {product.id}

                            </h5>

                            <p className="mt-2 leading-7 text-slate-600">

                              {product.reason}

                            </p>

                          </div>

                        ))}

                      </div>

                    )}

                  </div>

                </div>

              </div>

            )}

          </motion.div>

        ))}

        {loading && (

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex"
  >

    <div
      className="
        rounded-[26px]
        rounded-bl-md
        border
        border-slate-200
        bg-slate-50
        px-7
        py-5
      "
    >

      <div className="mb-3 flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-blue-700
            text-white
          "
        >
          🤖
        </div>

        <span className="font-bold">

          Balsas IA

        </span>

      </div>

      <div className="flex gap-2">

        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600" />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
          style={{ animationDelay: ".15s" }}
        />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
          style={{ animationDelay: ".30s" }}
        />

      </div>

    </div>

  </motion.div>

)}

<div ref={bottomRef} />


      </div>

    </div>
  );
}