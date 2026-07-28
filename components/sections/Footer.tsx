"use client";

import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="relative overflow-hidden bg-white"
    >
      {/* Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white" />

      {/* =======================================================
                      CALL TO ACTION
      ======================================================== */}

      <FadeIn>

        <section className="relative mx-auto max-w-7xl px-6 pt-24">

          <div className="overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-16 shadow-2xl">

            {/* Glow */}

            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full" />

            <div className="relative z-10 text-center">

              <span className="rounded-full bg-white/10 px-6 py-2 font-semibold backdrop-blur-xl">

                BALSAS DENTAL

              </span>

              <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight">

                ¿Listo para impulsar tu práctica con las mejores soluciones dentales?

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/80">

                Descubre nuestro catálogo de marcas internacionales
                y recibe asesoría especializada para encontrar
                los productos ideales para tu clínica,
                laboratorio o universidad.

              </p>

              <button className="mt-12 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-blue-700 transition duration-300 hover:scale-105 hover:bg-blue-50">

                Contactar a un asesor

              </button>

            </div>

          </div>

        </section>

      </FadeIn>

      {/* =======================================================
                            FOOTER
      ======================================================== */}

      <FadeIn>

        <section className="relative mx-auto max-w-7xl px-6 py-24">

          {/* Logo */}

          <div className="flex justify-center">

            <Image
              src="/logos/logo balsas.png"
              alt="Balsas Dental"
              width={220}
              height={90}
              className="h-auto"
            />

          </div>

          {/* Texto */}

          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-black">

            Impulsando la innovación en la odontología mediante
            tecnología, capacitación y las mejores marcas
            internacionales.

          </p>

          {/* Redes */}

          {/* Redes Sociales */}

          <div className="mt-14 flex justify-center">

            <div className="flex items-center gap-5 rounded-full border border-white/10 bg-yellow-400 px-8 py-4 backdrop-blur-xl">

              {/* Facebook */}

              <Link
                href="https://www.facebook.com/BalsasDentalmx"
                target="_blank"
                className="group flex h-14 w-14 items-center justify-center rounded-full transition duration-300 hover:-translate-y-2 hover:bg-[#1877F2]"
              >
                <FaFacebookF className="text-2xl text-white transition duration-300 group-hover:scale-125" />
              </Link>

              {/* Instagram */}

              <Link
                href="https://www.instagram.com/balsasdentalmx/"
                target="_blank"
                className="group flex h-14 w-14 items-center justify-center rounded-full transition duration-300 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400"
              >
                <FaInstagram className="text-2xl text-white transition duration-300 group-hover:scale-125" />
              </Link>

              {/* WhatsApp */}

            <Link
              href="https://wa.me/525512345678?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20los%20productos%20de%20Balsas%20Dental."
              target="_blank"
              className="group flex h-14 w-14 items-center justify-center rounded-full transition duration-300 hover:-translate-y-2 hover:bg-[#25D366]"
            >
              <FaWhatsapp className="text-2xl text-white transition duration-300 group-hover:scale-125" />
            </Link>

            </div>

          </div>

          {/* Línea */}

          <div className="my-14 h-px bg-white/10" />

          {/* Footer inferior */}

          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

            <p className="text-black">

              © {new Date().getFullYear()} Balsas Dental. Todos los derechos reservados.

            </p>

            <Link
              href="/aviso-de-privacidad"
              className="text-black transition hover:text-white"
            >
              Aviso de Privacidad
            </Link>

          </div>

        </section>

      </FadeIn>

    </footer>
  );
}
