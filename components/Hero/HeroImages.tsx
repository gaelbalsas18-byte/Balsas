"use client";

import { useEffect, useState } from "react";

const slides = [
  "/b1.jpg",
  "/b2.jpg",
  "/b3.jpg",
  "/b4.jpg",
];

export default function HeroImages() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms]
          ${current === index ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${slide})`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/35" />
    </>
  );
}