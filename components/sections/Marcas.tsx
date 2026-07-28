"use client";

import FadeIn from "../animations/FadeIn";

import { Swiper, SwiperSlide } from "swiper/react";

import {
    EffectCoverflow,
    Autoplay,
    Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

const marcas = [
    {
    nombre: "Tokuyama",
    imagen: "/logos/Tokuyama.png",
    descripcion: "Contribuyendo al matenimiento y mejora de una vida saludable en todo el mundo con la tecnología del siglo",
    },
    {
    nombre: "Renfert",
    imagen: "/logos/Renfert.png",
     descripcion: "Comprometidos con el objetivo de simplificarte el trabajo en el laboratorio y la clinica",
    },
    {
    nombre: "Shining",
    imagen: "/logos/Shining.png", 
    descripcion: "Soluciones de escaneo 3D de alta precisión para todos",
    },
    {
    nombre: "Edenta",
    imagen: "/logos/Edenta.png",
    descripcion: "Presente en todo el mundo por sus instrumentos de precisíon innovadores, dando un sello de calidad ",
    },
    {
    nombre: "Zhermack",
    imagen: "/logos/Zhermack.png",
    descripcion: "Materiales y soluciones para los sectores dental, industrial y del bienestar",
    },
     {
    nombre: "Wave Dental",
    imagen: "/logos/wave.png",
    descripcion: "Los dentistas ya no tienen que elegir entre rendimiento y precio, ni entre precio y disponibilidad.",
    },
    {
    nombre: "Vericom",
    imagen: "/logos/Vericom.png",
    descripcion: "El lema de Vericom ha sido 'la calidad primero' Aunque todas las partes del cuerpo son importantes para el ser humano, los dientes se han considerado una de las partes más importantes de nuestro cuerpo.",
    },
    {
    nombre: "G&H",
    imagen: "/logos/G&H.png",
    descripcion: "G&H Orthodontics ha encarnado una calidad y un servicio excepcionales. Como fabricante, poseemos todo lo que hacemos con un nivel de responsabilidad que no se encuentra en ningún otro lugar.",
    },
    {
    nombre: "Dentsply",
    imagen: "/logos/Dents.png",
    descripcion: "Dentsply Sirona a establecido un estándar global para la fabricación dental, el desarrollo tecnológico, el tratamiento digital y la educación clínica.",
    },
    {
    nombre: "Audental",
    imagen: "/logos/Audental.png",
    descripcion: "Audental es un fabricante líder de biomateriales dentales, cerámica de vidrio, una amplia gama de aleaciones metales dentales y soluciones digitales digitales avanzadas.",
    },
];

export default function Marcas() {
    return (
        
            <section
                id="Marcas"
                className="bg-blue-800 py-30">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                    <div className="text-center">
                    <span className="rounded-full bg-white px-6 py-2 font-semibold text-blue-700">

                        MARCAS

                    </span>
                    <h3 className="text-sm uppercase tracking-widest text-white font-semibold mb-3 text-center mt-4">
                        Balsas Dental
                    </h3>
                    </div>
                    
                    <p className="py-3 text-center text-lg text-white mt-3">
                        Manejamos las mejores marcas para que obtengas
                        <br />
                        <strong>¡Los mejores resultados!</strong>
                    </p>
                    </FadeIn>

                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 180,
                            modifier: 2,
                            slideShadows: false,
                            scale: 0.85,
                        }}
                        modules={[
                            EffectCoverflow,
                            Navigation,
                            Autoplay,
                        ]}
                        className="mt-16"
                    >
                        {marcas.map((marca, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-[320px] py-5"
                            >
                                <div className=" bg-transparent p-8 transition-all duration-500 hover:-translate-y-2">

                                    <div className="flex h-72 items-center justify-center">

                                        <Image
                                            src={marca.imagen}
                                            alt={marca.nombre}
                                            width={220}
                                            height={220}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                 <div className="brand-info mt-6 text-center">
                                    <h3 className="text-2xl font-bold text-white">
                                        {marca.nombre}
                                    </h3>

                                    
                                    <p className="mt-3 text-white">
                                        {marca.descripcion}
                                    </p>
                                    </div>
                            </SwiperSlide>                            
                        ))}
                    </Swiper>
                </div>
            </section>
    );
}
