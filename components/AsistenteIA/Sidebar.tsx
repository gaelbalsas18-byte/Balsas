"use client";

import { motion } from "motion/react";
import Image from "next/image";

type SidebarProps = {
  conversations: string[];
  onNewChat: () => void;
};

export default function Sidebar({
  conversations,
  onNewChat,
}: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="
        w-[290px]
        rounded-[34px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-xl
      "
    >
      {/* Nuevo chat */}

      <button
        onClick={onNewChat}
        className="
          mt-10
          w-full
          rounded-2xl
          bg-blue-700
          px-5
          py-4
          font-semibold
          text-white
          transition-all
          hover:bg-blue-800
        "
      >
        + Nuevo Chat
      </button>

      {/* Historial */}

      <div className="mt-10">

        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
          Recientes
        </h3>

        <div className="space-y-2">

          {conversations.length === 0 ? (

            <p className="text-sm text-slate-400">
              Aún no hay conversaciones.
            </p>

          ) : (

            conversations.map((item, index) => (

              <button
                key={index}
                className="
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  text-left
                  text-[15px]
                  text-slate-700
                  transition-all
                  hover:bg-slate-100
                "
              >
                {item}
              </button>

            ))

          )}

        </div>

      </div>

    </motion.aside>
  );
}



