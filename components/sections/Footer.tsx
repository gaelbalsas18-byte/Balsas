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
    <footer className={`${manrope.className} w-full bg-[#1c76c5] text-white`}>

      {/* ================================================== */}
      {/* PRESENTACIÓN */}
      {/* ================================================== */}

      <FadeIn>
        <div className="px-3 py-3 sm:px-8 lg:px-16">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

            {/* Logo + descripción */}
            <div className="text-center md:text-left">

              <Image
                src="/logos/BalsasTrans.png"
                alt="Balsas Dental"
                width={190}
                height={70}
                className="mx-auto h-auto w-[120px] md:mx-0"
                priority
              />

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                Impulsando la innovación en la odontología mediante tecnología,
                capacitación y las mejores marcas internacionales.
              </p>

            </div>


            {/* Redes sociales */}
            <div className="flex flex-col items-center md:items-end">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                Síguenos
              </span>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://www.facebook.com/BalsasDentalmx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2790ec] hover:bg-[#2790ec]"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="https://www.instagram.com/balsasdentalmx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500"
                >
                  <FaInstagram size={19} />
                </a>

                <a
                  href="https://wa.me/525512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500"
                >
                  <FaWhatsapp size={19} />
                </a>

              </div>

            </div>

          </div>

        </div>
      </FadeIn>


      {/* ================================================== */}
      {/* CONTENIDO PRINCIPAL */}
      {/* ================================================== */}

      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">


            {/* ================================================== */}
            {/* QUIÉN ES BALSAS */}
            {/* ================================================== */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                ¿Quién es Balsas Dental?
              </h3>

              <div className="mt-4 h-[2px] w-8 bg-[#ffffff]" />

              <ul className="mt-6 space-y-4">

                <li>
                  <Link
                    href="/acerca"
                    className="group flex items-center text-sm text-white/70 transition-all duration-300 hover:text-white"
                  >
                    <span className="mr-2 text-[#2790ec] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Historia Balsas
                    </span>
                  </Link>
                </li>

              </ul>

            </div>


            {/* ================================================== */}
            {/* DÓNDE COMPRAR */}
            {/* ================================================== */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                ¿Dónde comprar?
              </h3>

              <div className="mt-4 h-[2px] w-8 bg-[#ffffff]" />

              <ul className="mt-6 space-y-4">

                <li>
                  <a
                    href="https://www.bioden.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-sm text-white/60 transition-all duration-300 hover:text-white"
                  >
                    <span className="mr-2 text-[#2790ec] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Tienda Oficial
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/525512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-sm text-white/60 transition-all duration-300 hover:text-white"
                  >
                    <span className="mr-2 text-[#2790ec] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Asesor
                    </span>
                  </a>
                </li>

                <li>
                  <Link
                    href="/distribucion"
                    className="group flex items-center text-sm text-white/60 transition-all duration-300 hover:text-white"
                  >
                    <span className="mr-2 text-[#2790ec] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Depósitos dentales
                    </span>
                  </Link>
                </li>

              </ul>

            </div>


            {/* ================================================== */}
            {/* EDUCACIÓN */}
            {/* ================================================== */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Educación
              </h3>

              <div className="mt-4 h-[2px] w-8 bg-[#ffffff]" />

              <ul className="mt-6 space-y-4">

                <li>
                  <Link
                    href="/Escuela"
                    className="group flex items-center text-sm text-white/60 transition-all duration-300 hover:text-white"
                  >
                    <span className="mr-2 text-[#2790ec] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Escuelas
                    </span>
                  </Link>
                </li>

              </ul>

            </div>


            {/* ================================================== */}
            {/* LEGALES */}
            {/* ================================================== */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Legales
              </h3>

              <div className="mt-4 h-[2px] w-8 bg-[#ffffff]" />

              <ul className="mt-6 space-y-4">

                <li>
                  <Link
                    href="https://drive.google.com/file/d/1Lie7jZxEnGMorJqysOfNjVMooc_w6z4M/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center text-sm text-white/60 transition-all duration-300 hover:text-white"
                  >
                    <span className="mr-2 text-[#2790ec] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Aviso de privacidad
                    </span>
                  </Link>
                </li>

              </ul>

            </div>


            {/* ================================================== */}
            {/* CONTACTO */}
            {/* ================================================== */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Direccion
              </h3>

              <div className="mt-4 h-[2px] w-8 bg-[#ffffff]" />

              <p className="mt-6 max-w-[220px] text-sm leading-6 text-white/100">
                Tajin 110, col. Narvarte, Benito Juárez.
                <br />
                Ciudad De México.
              </p>

            </div>

          </div>

        </div>
      </FadeIn>


      {/* ================================================== */}
      {/* BARRA INFERIOR */}
      {/* ================================================== */}

      <div className="border-t border-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:px-10 md:flex-row md:text-left lg:px-16">

          <p className="text-xs text-white">
            © {new Date().getFullYear()} Balsas Dental. Todos los derechos reservados.
          </p>

          <p className="text-xs font-medium tracking-wide text-white">
            BALSAS DENTAL
          </p>

        </div>

      </div>

    </footer>
  );
}