"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface LoaderProps {
  isLoading: boolean;
  destination?: string;
}

export default function Loader({
  isLoading,
  destination,
}: LoaderProps) {
  const router = useRouter();
  const [visible, setVisible] = useState(isLoading);
  const [fadeOut, setFadeOut] = useState(false);
  const iniciado = useRef(false);

  useEffect(() => {
    if (!isLoading || iniciado.current) return;

    iniciado.current = true;
    setVisible(true);
    setFadeOut(false);

    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setVisible(false);

        if (destination) {
          router.push(destination);
        }

        iniciado.current = false;
      }, 700);
    }, 1800);

    return () => clearTimeout(timer);
  }, [isLoading, destination, router]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center
      bg-white/90 backdrop-blur-md
      transition-opacity duration-700
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* Animación central */}
      <div className="relative flex h-52 w-52 items-center justify-center">

        {/* Halo luminoso */}
        <div className="absolute h-36 w-36 rounded-full bg-blue-400/20 blur-3xl animate-pulse" />

        {/* Anillo exterior */}
        <div className="absolute h-44 w-44 rounded-full border border-blue-200/70" />

        {/* Anillo giratorio */}
        <div className="absolute h-44 w-44 rounded-full border-2 border-transparent border-t-blue-600 border-r-blue-300 animate-[spin_3s_linear_infinite]" />

        {/* Anillo interior */}
        <div className="absolute h-36 w-36 rounded-full border border-blue-100" />

        {/* Logo */}
        <div className="relative z-10 flex h-28 w-28 items-center justify-center">
          <Image
            src="/logos/logo balsas.png"
            alt="Balsas Dental"
            width={180}
            height={180}
            priority
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="mt-3 text-center">
        <p className="text-sm font-semibold tracking-[0.25em] text-[#1736a8]">
          BALSAS DENTAL
        </p>

        <p className="mt-3 text-xs tracking-widest text-gray-500">
          Cargando....
        </p>

        {/* Indicador inferior */}
        <div className="mt-5 flex justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse [animation-delay:200ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}
