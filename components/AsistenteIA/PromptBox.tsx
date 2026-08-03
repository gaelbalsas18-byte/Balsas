"use client";

import { motion } from "motion/react";

import { useEffect, useRef } from "react";

interface PromptBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  loading: boolean;
}

export default function PromptBox({
  value,
  onChange,
  onSend,
  loading,
}: PromptBoxProps) {
  const maxCharacters = 1500;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {

      if (!loading) {

        textareaRef.current?.focus();

      }

    }, [loading]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxCharacters}
        rows={5}
        placeholder="Describe el caso clínico o realiza una pregunta..."
        className="
          h-36
          w-full
          resize-none
          rounded-[28px]
          border
          border-slate-200
          bg-white
          p-7
          pr-24
          text-lg
          leading-8
          text-slate-700
          shadow-xl
          outline-none
          transition-all
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-100
        "
      />

      {/* Contador */}

      <span className="absolute bottom-7 right-24 text-sm text-slate-400">

        {value.length}/{maxCharacters}

      </span>

      {/* Botón */}

      <motion.button
        whileHover={
          value.trim() && !loading
            ? { scale: 1.08 }
            : {}
        }
        whileTap={{ scale: 0.92 }}
        disabled={!value.trim() || loading}
        onClick={onSend}
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
            !value.trim() || loading
              ? "cursor-not-allowed bg-slate-300"
              : "bg-blue-700 shadow-xl hover:bg-blue-800"
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
  );
}