"use client";

import { AnimatePresence, motion } from "motion/react";
import AssistantWelcome from "./AssistantWelcome";

interface AssistantOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function AssistantOverlay({
  open,
  onClose,
}: AssistantOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Fondo difuminado */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[9980]

              bg-white/10

              backdrop-blur-md
            "
          />

          {/* Mensaje del asistente */}

          <AssistantWelcome />
        </>
      )}
    </AnimatePresence>
  );
}