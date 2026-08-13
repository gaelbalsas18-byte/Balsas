"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-blue-700 shadow-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/components/Hero/Hero.tsx" className="flex items-center">
          <Image
            src="/logos/BalsasTrans.png"
            alt="Balsas Dental"
            width={120}
            height={50}
            className="h-auto w-[110px]"
            priority
          />
        </Link>

        {/* Barra de búsqueda */}
        <div className="relative w-full max-w-md translate-x-50">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Buscar..."
            className="w-full rounded-full bg-white py-2.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:ring-3 focus:ring-blue-300"
          />
        </div>

        {/* Redes sociales */}
        <div className="flex items-center gap-4">

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/BalsasDentalmx"
            aria-label="Facebook"
            className="text-white transition duration-300 hover:scale-110 hover:text-blue-200"
          >
            <FaFacebookF size={20} />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/balsasdentalmx/"
            aria-label="Instagram"
            className="text-white transition duration-300 hover:scale-110 hover:text-pink-200"
          >
            <FaInstagram size={21} />
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/525512345678?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20los%20productos%20de%20Balsas%20Dental."
            aria-label="WhatsApp"
            className="text-white transition duration-300 hover:scale-110 hover:text-green-300"
          >
            <FaWhatsapp size={22} />
          </Link>

        </div>

      </nav>
    </header>
  );
}