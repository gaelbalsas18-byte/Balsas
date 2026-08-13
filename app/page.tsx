"use client";

import { useState } from "react";
import HealthNoticeModal from "@/components/HealthNoticeModal";
import ChatAssistant from "@/components/Chatbot/ChatAssistant";
import Hero from "@/components/Hero/Hero";
import Marcas from "@/components/sections/Marcas";
import Evento from "@/components/sections/Eventos";
import Footer from "@/components/sections/Footer";
import Novedades from "@/components/sections/Novedades";

export default function Home() {
   const [acceptedNotice, setAcceptedNotice] = useState(false);
  return (
    <>
      {/**  Chatbot Comentado por el momento
       * {!acceptedNotice && (
        <HealthNoticeModal
          onAccept={() => setAcceptedNotice(true)}
        />
      )}
      {acceptedNotice && <ChatAssistant />}*/}
        <Hero/>
          <Novedades/>
             <Evento/>
                <Marcas/>
                    <Footer/>
    </>
  );
}
