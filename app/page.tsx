"use client";

import Hero from "@/components/Hero/Hero";
import Marcas from "@/components/sections/Marcas";
import Evento from "@/components/sections/Eventos";
import Footer from "@/components/sections/Footer";
import Novedades from "@/components/sections/Novedades";
import Extra from "@/components/sections/Extra";
import AssistantButton from "@/components/AsistenteIA/AssistantButton";


export default function Home() {
  return (
    <>
    <AssistantButton
  onClick={() => {
    console.log("Abrir Balsas IA");
  }}
/>
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
                  <Extra/>
                    <Footer/>
    </>
  );
}
