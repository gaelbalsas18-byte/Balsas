"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FadeIn from "@/components/animations/FadeIn";
import "swiper/css";

export default function EscuelaPage() {
    const imagenes = [
    {
      src: "/Eventos/Fest/fest.jpg",
      alt: "Novedades Balsas Dental 1",
    },

    {
      src: "/Eventos/Fest/fest2.jpg",
      alt: "Novedades Balsas Dental 2",
    },

    {
      src: "/Eventos/Fest/fest3.jpg",
      alt: "Novedades Balsas Dental 3",
    },

  ];
  return (
    <main className="min-h-screen bg-white pt-5">
      <section className="px-6 py-16 lg:px-10 mx-auto max-w-7xl">
        <div className="text-center">

          <span className="rounded-full bg-[#2790ec] px-6 py-2 font-semibold text-white">
              Educación Continua x Balsas Dental
          </span>

          <h2 className="text-[#040404] text-xl mt-4 font-semibold">
            Nos comprometemos con compartir el conocimineto de nuestros expositores, <br/>
             sembrando la semilla para que los jovenes 
            sepan de lo que pueden ser capaz con diciplina.
          </h2>
        </div>
         {/* ===== CONTENIDO ===== */}
              <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
                {/* ===== TEXTO + BOTÓN ===== */}
                <div className="flex flex-col justify-center">
        
                 <p className="max-w-xl text-lg leading-relaxed text-black">
                    Checa las nuevas novedades que tiene{" "}
                    <strong className="text-blue-700">
                    Balsas Dental
                    </strong>{" "}
                    para ti.
        
                    <br />
        
                    Mantente al día con las últimas innovaciones, productos,
                    tecnologías y soluciones que tenemos para el mundo
                    odontológico.
        
                    <br />
        
                    Descubre las novedades de las mejores marcas que trabajan
                    con nosotros y conoce todo lo nuevo.
                    Explora nuestras novedades y encuentra nuevas herramientas
                    para llevar tu práctica y laboratorio al siguiente nivel.
                    </p>

                </div>
                <FadeIn>
                {/* ===== CARRUSEL ===== */}
                <div className="relative h-[350px] w-full overflow-hidden rounded-2xl">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="h-full w-full"
                  >
                    {imagenes.map((imagen, index) => (
        
                      <SwiperSlide key={index} className="relative h-full w-full">
                        <Image
                          src={imagen.src}
                          alt={imagen.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </SwiperSlide>
                    ))}
        
                  </Swiper>
        
                </div>
                </FadeIn>
              </div>
      </section>
    </main>
  );
}
