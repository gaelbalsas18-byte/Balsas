"use client";

import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Footer() {
  return (

    <footer className={`${manrope.className} w-full bg-white text-white`}>
      <FadeIn>
      <div className="text-center py-13">
      <Image
        src="/logos/logo balsas.png"
        alt="Balsas Dental"
        width={150}
        height={50}
        className="mx-auto h-auto w-[190px]"
        priority
      />
      <p className="mt-7 text-center text-lg text-black">
        Impulsando la innovación en la odontología mediante tecnología, <br />
        capacitación y las mejores marcas internacionales.
      </p>
    </div>
    </FadeIn>

    {/* ===================== */}
    {/* CONTENIDO PRINCIPAL */}
    {/* ===================== */}
  <FadeIn>
   <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
   <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
    
    {/* ===================== */}
    {/* QUIÉN ES BALSAS */}
    {/* ===================== */}
    <div className="group">
      <h3 className="text-xl font-bold text-[#2790ec]">
        ¿Quién es Balsas Dental?
      </h3>

      {/* Línea decorativa */}
      <div className="mt-3 h-[3px] w-10 rounded-full bg-[#015096] transition-all duration-300 group-hover:w-20" />
      <ul className="mt-6 space-y-4">
        <li>
          <Link
            href="/acerca"
            className="flex items-center gap-2 text-base text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-[#015096]"
          >
            <span className="text-[#015096]">›</span>
            Historia Balsas
          </Link>
        </li>
      </ul>
    </div>

    {/* ===================== */}
    {/* DÓNDE COMPRAR */}
    {/* ===================== */}

    <div className="group">

      <h3 className="text-xl font-bold text-[#2790ec]">
        ¿Dónde comprar?
      </h3>

      <div className="mt-3 h-[3px] w-10 rounded-full bg-[#015096] transition-all duration-300 group-hover:w-20" />

      <ul className="mt-6 space-y-4">
        
        <li>
          <a
            href="https://www.bioden.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-[#015096]"
          >
            <span className="text-[#015096]">›</span>
            Tienda Oficial
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/525512345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-[#015096]"
          >
            <span className="text-[#015096]">›</span>
            Asesor
          </a>
        </li>

        <Link
            href="/distribucion"
            className="flex items-center gap-2 text-base text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-[#015096]"
          >
            <span className="text-[#015096]">›</span>
            Depósitos dentales
          </Link>
      </ul>
    </div>

    {/* ===================== */}
    {/* EDUCACIÓN */}
    {/* ===================== */}

    <div className="group">
      <h3 className="text-xl font-bold text-[#2790ec]">
        Educación
      </h3>
      <div className="mt-3 h-[3px] w-10 rounded-full bg-[#015096] transition-all duration-300 group-hover:w-20" />
      <ul className="mt-6 space-y-4">
        <li>
          <Link
            href="/Escuela"
            className="flex items-center gap-2 text-base text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-[#015096]"
          >
            <span className="text-[#015096]">›</span>
            Escuelas
          </Link>
        </li>
      </ul>
    </div>

    {/* ===================== */}
    {/* LEGALES */}
    {/* ===================== */}

    <div className="group">

      <h3 className="text-xl font-bold text-[#2790ec]">
        Legales
      </h3>

      <div className="mt-3 h-[3px] w-10 rounded-full bg-[#015096] transition-all duration-300 group-hover:w-20" />
      <ul className="mt-6 space-y-4">

        <li>
          <Link
            href="https://drive.google.com/file/d/1Lie7jZxEnGMorJqysOfNjVMooc_w6z4M/view?usp=sharing"
            className="flex items-center gap-2 text-base text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-[#015096]"
          >
            <span className="text-[#015096]">›</span>
            Aviso de privacidad
          </Link>
        </li>

      </ul>

    </div>

    {/* ===================== */}
    {/* CONTACTO */}
    {/* ===================== */}

    <div className="group">

      <h3 className="text-xl font-bold text-[#2790ec]">
        Contacto
      </h3>

      <div className="mt-3 h-[3px] w-10 rounded-full bg-[#015096] transition-all duration-300 group-hover:w-20" />

      <p className="mt-6 text-base leading-relaxed text-gray-600">
        Síguenos en nuestras
        <br />
        redes sociales.
      </p>


      {/* Redes sociales */}

      <div className="mt-6 flex items-center gap-3">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/BalsasDentalmx/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#015096] hover:bg-[#015096] hover:text-white"
        >
          <FaFacebookF size={18} />
        </a>


        {/* Instagram */}
        <a
          href="https://www.instagram.com/balsasdentalmx/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
        >
          <FaInstagram size={19} />
        </a>


        {/* WhatsApp */}
        <a
          href="https://wa.me/525512345678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white"
        >
          <FaWhatsapp size={19} />
        </a>

      </div>

    </div>

  </div>

</div>
</FadeIn>



      {/* ===================== */}
      {/* PARTE INFERIOR */}
      {/* ===================== */}

      <div className="border-t border-black/50">

        <div className="flex flex-cols items-center justify-between gap-4 px-6 py-6 text-center text-sm text-black md:flex-row md:px-10 md:text-left">

          <p>
            © {new Date().getFullYear()} Balsas Dental. Todos los derechos reservados.
          </p>

          <p>
            Balsas Dental
          </p>

        </div>

      </div>

    </footer>
  );
}