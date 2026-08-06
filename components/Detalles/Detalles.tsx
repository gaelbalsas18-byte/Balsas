"use client";

import Image from "next/image";
import Feature from "./Feature";

import {
  gtrFeatures,
  woodFeatures,
} from "./features";

export default function detalles() {
  return (
    <section
      id="Detalles"
      className="min-h-screen w-full bg-white"
    >
      <div className="grid h-full w-full lg:grid-cols-2 mt-30">

        {/* GTR */}

        <div className="relative flex items-center justify-center overflow-hidden">

          <Image
            src="/Productos/Redon/GTR/gtr2.png"
            alt="GTR"
            width={350}
            height={400}
            className="object-contain"
          />

          {gtrFeatures.map((feature, index) => (
            <Feature
              key={index}
              {...feature}
            />
          ))}

        </div>

        {/* WOOD */}

        <div className="relative flex items-center justify-center overflow-hidden">

          <Image
            src="/Productos/Redon/wood/wood1.png"
            alt="Wood"
            width={350}
            height={400}
            className="object-contain"
          />

          {woodFeatures.map((feature, index) => (
            <Feature
              key={index}
              {...feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

