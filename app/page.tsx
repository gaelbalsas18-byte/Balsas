"use client";
import { useState } from "react";
import HealthNoticeModal from "@/components/HealthNoticeModal";
import Hero from "@/components/sections/hero";
import AcercaDe from "@/components/sections/AcercaDe";
import Marcas from "@/components/sections/Marcas";
import Evento from "@/components/sections/Eventos";
import Distribución from "@/components/sections/Distribucion";
import Footer from "@/components/sections/Footer";
import ChatAssistant from "@/components/Chatbot/ChatAssistant";

export default function Home() {
   const [acceptedNotice, setAcceptedNotice] = useState(false);
  return (
    <>
       {!acceptedNotice && (
        <HealthNoticeModal
          onAccept={() => setAcceptedNotice(true)}
        />
      )}
      {acceptedNotice && <ChatAssistant />}
        <Hero/>
          <AcercaDe/>
            <Marcas/>
              <Evento/>
                  <Distribución/>
                    <Footer/>
    </>
  );
}

