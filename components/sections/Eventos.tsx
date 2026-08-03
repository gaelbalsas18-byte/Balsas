"use client";

import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import { tokuyamaFestImages } from "../data/Eventos";
import { AmicImages } from "../data/Eventos";
import { MeetingImages } from "../data/Eventos";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";


export default function Evento() {
  return (
      <section id="Eventos" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Encabezado */}
          <FadeIn>
              <div className="text-center">
                    <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">

                        EVENTOS

                    </span>
                </div>
                
          <h3 className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3 text-center mt-4">
            Balsas Dental
          </h3>

          <p className="text-center text-lg text-black">
            Mantente al tanto de los eventos que realiza Balsas Dental.
          </p>
          </FadeIn>
          {/* Tarjetas */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">

            {/* ==========================
                Tarjeta Izquierda
            =========================== */}
            <div className="relative min-h-[600px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              {/* Fondo degradado */}
              <div className="absolute inset-0">

                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop={true}
                  autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                  }}
                  className="h-full"
              >

                    {tokuyamaFestImages.map((image,index)=>(

                        <SwiperSlide key={index}>

                            <Image
                                src={image}
                                alt=""
                                fill
                                className="object-cover"
                            />

                        </SwiperSlide>

                    ))}

                </Swiper>

              </div>
          </div>

            {/* =======================
                Tarjeta Derecha
            =========================== */}
            <div className="group h-[600px] [perspective:1500px]">

              <div
                className="
                  relative
                  h-full
                  w-full
                  duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >

                {/* =======================
                    Cara Frontal
                =========================== */}
                    <div
                      className="
                        absolute
                        inset-0
                        overflow-hidden
                        rounded-[32px]
                        shadow-xl
                        [backface-visibility:hidden]
                      "
                    >

                      <Image
                        src="/Eventos/Fest/Cartel.jpeg"
                        alt="Tokuyama Fest"
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/5" />

                      {/* Gradiente inferior */}
                      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Badge */}
                      <div className="absolute left-8 bottom-8 z-20">

                        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                          FINALIZADO
                        </span>

                      </div>

                    </div>

                    {/* =======================
                        Cara Trasera
                    =========================== */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[32px]
                        bg-gradient-to-br
                        from-blue-900
                        via-blue-700
                        to-sky-500
                        p-10
                        text-white
                        shadow-xl
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                      "
                    >

                      <div className="flex h-full flex-col">

                        <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                          EVENTO FINALIZADO
                        </span>

                        <h2 className="mt-8 text-4xl font-bold">
                          TOKUYAMA FEST
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-100">
                          Tokuyama Fest es uno de los eventos más importantes
                          organizados por Balsas Dental, donde especialistas
                          de todo México se reúnen para conocer las últimas
                          innovaciones en odontología, participar en talleres
                          prácticos y aprender de conferencistas nacionales
                          e internacionales.
                        </p>

                        <div className="mt-10 space-y-3 text-base">

                          <div className="flex items-center gap-3">
                            📅
                            <span>Junio 2026</span>
                          </div>

                          <div className="flex items-center gap-3">
                            📍
                            <span>Ciudad de México</span>
                          </div>

                          <div className="flex items-center gap-3">
                            👨‍⚕️
                            <span>Más de 700 asistentes</span>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

          </div>

              {/* ======================================
                  SEGUNDO BLOQUE
              ====================================== */}
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">

                  {/* ==========================
                      Tarjeta Izquierda
                  ========================== */}
                  <div className="group h-[600px] [perspective:1500px]">

                    <div
                      className="
                        relative
                        h-full
                        w-full
                        duration-700
                        [transform-style:preserve-3d]
                        group-hover:[transform:rotateY(180deg)]
                      "
                    >

                      {/* =======================
                          Cara Frontal
                      =========================== */}
                      <div
                        className="
                          absolute
                          inset-0
                          overflow-hidden
                          rounded-[32px]
                          shadow-xl
                          [backface-visibility:hidden]
                        "
                      >

                        <Image
                          src="/Eventos/Meeting.png"
                          alt="Tokuyama International Meeting"
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/15" />

                        {/* Gradiente inferior */}
                        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        {/* Badge */}
                        <div className="absolute left-8 bottom-8 z-20">

                          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                            PROXIMAMENTE
                          </span>

                        </div>

                      </div>

                      {/* =======================
                          Cara Trasera
                      =========================== */}
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-[32px]
                          bg-gradient-to-br
                          from-green-800
                          via-green-600
                          to-emerald-400
                          p-10
                          text-white
                          shadow-xl
                          [transform:rotateY(180deg)]
                          [backface-visibility:hidden]
                        "
                      >

                        <div className="flex h-full flex-col">

                          <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                            PROXIMAMENTE
                          </span>

                          <h2 className="mt-5 text-3xl font-bold leading-tight">
                            TOKUYAMA
                            <br />
                            INTERNATIONAL MEETING
                          </h2>

                          <p className="mt-6 text-lg leading-8 text-green-50">
                            Vive una experiencia práctica donde podrás conocer de primera mano
                            las técnicas más innovadoras en odontología, utilizando materiales
                            y equipos de última generación junto a especialistas reconocidos.
                          </p>

                          <div className="mt-7 space-y-3 text-base">

                            <div className="flex items-center gap-3">
                              🌎
                              <span>Evento Internacional</span>
                            </div>

                            <div className="flex items-center gap-3">
                              👨‍⚕️
                              <span>Especialistas de varios países</span>
                            </div>

                            <div className="flex items-center gap-3">
                              🦷
                              <span>Innovación y tecnología dental</span>
                            </div>

                          </div>

                          <div className="mt-auto">

                            <button
                              className="
                                rounded-xl
                                bg-white
                                px-5
                                py-2
                                mt-3
                                font-semibold
                                text-green-700
                                transition
                                hover:scale-105
                                hover:bg-green-50
                              "
                            >
                              Registrarme
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                {/* ==========================
                    Tarjeta Derecha
                =========================== */}
                <div className="relative min-h-[600px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  {/* Fondo degradado */}
                    <div className="absolute inset-0">

                      <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="h-full"
                    >

                          {MeetingImages.map((image,index)=>(

                              <SwiperSlide key={index}>

                                  <Image
                                      src={image}
                                      alt=""
                                      fill
                                      className="object-cover"
                                  />

                              </SwiperSlide>

                          ))}

                      </Swiper>

                    </div>
                </div>

              </div>

              <div className="mt-15">
                 <div className="text-center">
                    <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">

                        PARTICIPACIÓN

                    </span>
                    <h3 className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3 text-center mt-4">
                      Balsas Dental
                    </h3>
                </div>

                <p className="py-3 text-center text-lg text-black mt-3">
                  Mantente al tanto de los eventos en los que participa Balsas Dental.<br></br>
                  No te pierdas de los mejores precios que manejamos en estos eventos.
                </p>
              </div>


               {/* AMIC TARJETAS*/}
           {/* Tarjetas */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">

            {/* ==========================
                Tarjeta Izquierda
            =========================== */}
            <div className="relative min-h-[600px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              {/* Fondo degradado */}
              <div className="absolute inset-0">

                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop={true}
                  autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                  }}
                  className="h-full"
              >

                    {AmicImages.map((image,index)=>(

                        <SwiperSlide key={index}>

                            <Image
                                src={image}
                                alt=""
                                fill
                                className="object-cover"
                            />

                        </SwiperSlide>

                    ))}

                </Swiper>

              </div>
          </div>

            {/* =======================
                Tarjeta Derecha
            =========================== */}
            <div className="group h-[600px] [perspective:1500px]">

              <div
                className="
                  relative
                  h-full
                  w-full
                  duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >

                {/* =======================
                    Cara Frontal
                =========================== */}
                    <div
                      className="
                        absolute
                        inset-0
                        overflow-hidden
                        rounded-[32px]
                        shadow-xl
                        [backface-visibility:hidden]
                      "
                    >

                      <Image
                        src="/Eventos/Fest/Cartel.jpeg"
                        alt="Tokuyama Fest"
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/5" />

                      {/* Gradiente inferior */}
                      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Badge */}
                      <div className="absolute left-8 bottom-8 z-20">

                        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                          FINALIZADO
                        </span>

                      </div>

                    </div>

                    {/* =======================
                        Cara Trasera
                    =========================== */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[32px]
                        bg-gradient-to-br
                        from-blue-900
                        via-blue-700
                        to-sky-500
                        p-10
                        text-white
                        shadow-xl
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                      "
                    >

                      <div className="flex h-full flex-col">

                        <h2 className="mt-8 text-4xl font-bold">
                          Amic Dental
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-100">
                          Amic Dental es uno de los eventos más importantes
                          donde especialistas de todo México se reúnen para 
                          adquirir con nosotros los mejores productos con los
                          mejores precios, asi como tambien tener conferencias
                          con ponentes nacionales reconocidos.
                          No te pierdas esta oportunidad y dirijite a Nuestro
                          Stand "Balsas Dental"
                        </p>

                        <div className="mt-10 space-y-3 text-base">

                          <div className="flex items-center gap-3">
                            📅
                            <span>Noviembre 2026</span>
                          </div>

                          <div className="flex items-center gap-3">
                            📍
                            <span>Ciudad de México</span>
                          </div>

                          <div className="flex items-center gap-3">
                            👨‍⚕️
                            <span>Más de 5000 asistentes</span>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

          </div>


                     {/* ======================================
                  SEGUNDO BLOQUE
              ====================================== */}
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">

                {/* ==========================
                    Tarjeta Izquierda
                =========================== */}
                <div className="relative min-h-[600px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  {/* Fondo degradado */}
                  <div className="absolute inset-x-0 top-0 h-133 bg-gradient-to-b from-purple-200 via-purple-700 to-white" />

                  {/* Círculo decorativo */}
                  <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white opacity-50 blur-3xl" />

                  <div className="relative z-10 flex h-full flex-col p-10">

                    <div className="mb-10 flex justify-center mt-45">
                      <Image
                        src="/Eventos/Meeting.png"
                        alt="Hands On"
                        width={320}
                        height={220}
                        className="h-auto object-contain"
                      />
                    </div>

                  </div>
                </div>

                {/* ==========================
                    Tarjeta Derecha
                =========================== */}
                <div className="relative min-h-[600px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  {/* Fondo degradado */}
                  <div className="absolute inset-x-0 top-0 h-133 bg-gradient-to-b from-purple-500 via-purple-600 to-white" />

                  {/* Círculo decorativo */}
                  <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl" />

                  <div className="relative z-10 flex h-full flex-col p-10">

                    <h2 className="mb-6 text-4xl font-bold text-white mt-40">
                      Aric Dental
                    </h2>

                    <p className="text-lg leading-relaxed text-white font-semibold">
                      Vive una experiencia práctica donde podrás conocer de primera mano
                      las técnicas más innovadoras en odontología, utilizando materiales
                      y equipos de última generación junto a especialistas reconocidos.
                    </p>

                  </div>

                </div>

              </div>




                      {/* Tarjetas */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">

            {/* ==========================
                Tarjeta Izquierda
            =========================== */}
            <div className="relative min-h-[600px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              {/* Fondo degradado */}
              <div className="absolute inset-x-0 top-0 h-133 bg-gradient-to-b from-blue-700 via-sky-60 to-white" />

              {/* Círculo decorativo */}
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500 opacity-50 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col p-10">

                {/* IMAGEN*/} 
                <div className="mb-10 flex justify-center">

                </div>

                <h2 className="mb-6 text-4xl font-bold text-white mt-33">
                  Alta Tecnica
                </h2>

                <p className="text-lg leading-relaxed text-white font-semibold">
                  Este evento se lleva acabo cada año dondo la oportunidad a que muestres tus habilidades,
                  Aprendiendo de los mejores, asi como tambien generando relaciones.
                  Esto es una gran oportunidad para que pases al siguiente nivel.
                </p>
              </div>
            </div>

            {/* =======================
                Tarjeta Derecha
            =========================== */}
            <div className="relative min-h-[600px] overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              {/* Fondo degradado */}
              <div className="absolute inset-x-0 top-0 h-133 bg-gradient-to-b from-blue-700 via-sky-60 to-white" />

              {/* Círculo decorativo */}
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-200 opacity-60 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col p-10">

              
                <div className="mb-10 flex justify-center mt-33">
                  <Image
                    src="/Eventos/Fest.png"
                    alt="Próximos Eventos"
                    width={320}
                    height={220}
                    className="h-auto object-contain"
                  />
                </div>

                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                </h2>

                <p className="text-lg leading-8 text-gray-600">
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

  );
}