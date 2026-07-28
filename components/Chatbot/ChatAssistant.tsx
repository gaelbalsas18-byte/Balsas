"use client";

import { useEffect, useRef, useState } from "react";

import ChatBubble from "./ChatBubble";
import ChatWindow from "./ChatWindow";
import SectionObserver from "./SectionObserver";
import { messages } from "./messages";
import TypingBubble from "./TypingBubble";
import ChatButton from "./Chatbutton";

import { AnimatePresence, motion } from "motion/react";

type SectionKey = keyof typeof messages;

export default function ChatAssistant() {

  const [isOpen, setIsOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const [currentSection, setCurrentSection] =
    useState<SectionKey>("Inicio");

  const [showBubble, setShowBubble] = useState(false);

  const [typing, setTyping] = useState(false);

  // Secciones ya completadas
  const visitedSections = useRef<Set<SectionKey>>(new Set());

  // Última sección detectada
  const currentShowingSection = useRef<SectionKey | null>(null);

  // Timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Recuperar nombre
  useEffect(() => {
    const savedName = sessionStorage.getItem("balsas-user");

    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleSaveName = (name: string) => {
    sessionStorage.setItem("balsas-user", name);
    setUserName(name);
  };

  // ==========================
  // Control inteligente mensajes
  // ==========================
// ==========================
// Control inteligente mensajes
// ==========================
useEffect(() => {

  if (!userName) return;

  // Si ya terminó esta sección
  if (visitedSections.current.has(currentSection)) {
    setShowBubble(false);
    setTyping(false);
    return;
  }

  // Si seguimos en la misma sección
  if (currentShowingSection.current === currentSection) return;

  // Cambio de sección
  currentShowingSection.current = currentSection;

  // Cancela timers anteriores
  if (timerRef.current) {
    clearTimeout(timerRef.current);
  }

  // Reinicia estados
  setShowBubble(false);
  setTyping(true);

  // Espera 800ms simulando que está escribiendo
  const typingTimer = setTimeout(() => {

    setTyping(false);
    setShowBubble(true);

    // Después de mostrar el mensaje durante 5 segundos
    timerRef.current = setTimeout(() => {

      // Solo si sigue en la misma sección
      if (currentShowingSection.current === currentSection) {

        visitedSections.current.add(currentSection);

        setShowBubble(false);

      }

    }, 5000);

  }, 800);

  return () => {

    clearTimeout(typingTimer);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

  };

}, [currentSection, userName]);

  return (
    <>
      <SectionObserver
        onSectionChange={(section) =>
          setCurrentSection(section as SectionKey)
        }
      />

      <AnimatePresence>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 120,
            y: 120,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: .8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed bottom-8 right-8 z-[999] flex items-end gap-5"
        >

          <AnimatePresence mode="wait">

            {userName && typing && (
                <TypingBubble key="typing" />
            )}

            {userName && !typing && showBubble && (
                <ChatBubble
                key={currentSection}
                title={messages[currentSection].title}
                text={messages[currentSection].text}
                />
            )}

            </AnimatePresence>

         <AnimatePresence mode="wait">

          {isOpen ? (

            <ChatWindow
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              userName={userName}
              saveName={handleSaveName}
            />

          ) : (

            <ChatButton
              onClick={() => setIsOpen(true)}
            />

          )}

        </AnimatePresence>

        </motion.div>
        

      </AnimatePresence>
    </>
  );
}