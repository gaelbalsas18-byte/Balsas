"use client";

import Hero from "@/components/Hero/Hero";
import Marcas from "@/components/sections/Marcas";
import Evento from "@/components/sections/Eventos";
import Footer from "@/components/sections/Footer";
import Novedades from "@/components/sections/Novedades";
import Extra from "@/components/sections/Extra";

export default function Home() {
  return (
    <>
        <Hero/>
          <Novedades/>
             <Evento/>
                <Marcas/>
                  <Extra/>
                    <Footer/>
    </>
  );
}
