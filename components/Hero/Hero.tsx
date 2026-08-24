"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    image: "/hero/4.jpg",
    alt: "Balsas Dental",
  },
  {
    image: "/hero/5.jpg",
    alt: "Balsas Dental",
  },
  {
    image: "/hero/6.jpg",
    alt: "Balsas Dental",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-video w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
