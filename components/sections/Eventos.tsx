"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


export default function Evento() {
  return (
    <section className="bg-white w-full py-24">
      <div className="text-center mt-3">
          <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">
            EVENTOS
          </span>
      </div>
    </section>
  );
}
