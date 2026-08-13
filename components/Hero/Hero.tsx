"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/"
        alt="Balsas Dental"
        width={520}
        height={400}
        className="h-243 w-full object-cover"
        priority
      />
    </section>
  );
}