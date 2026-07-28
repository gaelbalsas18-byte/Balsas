"use client";

import { useEffect, useState } from "react";

export default function Hero(){
    const slides = [ 
        "/Eventos/Dia1.jpg",
        "/Eventos/Dia1.jpg",
        "/Eventos/Dia1.jpg",
        "/Eventos/Dia1.jpg",
        "/Eventos/Dia1.jpg",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) & slides.length);
        }, 5000);
        return() => clearInterval(interval);
    }, [slides.length]);

    return( 
        <section id="Inicio" className="relative h-screen w-full overflow-hidden">
            {/* Imagenes */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url(${slide})`,
                    }}
                />
            ))}

            {/*overlay*/}
            <div className="absolute inset-0 bg-neutral/25"/>

            {/*contenido*/}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="max-w-4xl text-center text-white">
                    {/* 
                    <h1 className="mb-6 text-5xl font-bold md:text-7xl">
                        "Innovacion Dental"
                    </h1>*/}

                    <p className="mx-auto mb-8 max-w-2xl text-lg md:text-2xl">
                        Conoce los productos mas recientes diseñados para llevar tu practica 
                        al sigueinte nivel.
                    </p>

                    {/* BOTON COMENTADO REVISAR LA ACCION DE ESTE BOTON
                     <button className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:scale-105">
                        Ver accion realizara este boton
                    </button> */}
                </div>
            </div>

             {/* Indicadores */}
                <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                    {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition ${
                        current === index
                            ? "bg-white"
                            : "bg-white/40"
                        }`}
                    />
                    ))}
                </div>
        </section>
    )
}
































