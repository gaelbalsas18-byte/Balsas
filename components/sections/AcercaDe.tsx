"use client";

import FadeIn from "../animations/FadeIn";
import Image from "next/image";

export default function AcercaDe() {
  return (
    <section
      id="AcercaDe"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-32"
    >
      {/* Glow */}

      <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-blue-300/20 blur-[150px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================
                CONTENIDO PRINCIPAL
        ====================================== */}

        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* Texto */}

          <FadeIn>

            <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">

                ACERCA DE NOSOTROS

              </span>

            <div>

              <p className="mt-10 text-xl leading-10 text-black">

                En Balsas Dental somos especialistas en la distribución
                de productos dentales de alta tecnología, colaborando con
                fabricantes líderes a nivel mundial para acercar innovación,
                calidad y confianza a clínicas, laboratorios,
                universidades y distribuidores en todo México.

              </p>

              <p className="mt-8 text-lg leading-9 text-black">

                Nuestro compromiso es construir relaciones duraderas con
                nuestros clientes, brindando soluciones integrales,
                capacitación continua y un servicio profesional que impulse
                el crecimiento del sector odontológico.

              </p>

            </div>

          </FadeIn>

          {/* Imagen */}

          <FadeIn>

            <div className="relative">

              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

              <Image
                src="/logos/logo balsas.png"
                alt="Balsas Dental"
                width={650}
                height={650}
                className="relative z-10 rounded-[40px] shadow-2xl"
              />

            </div>

          </FadeIn>

        </div>

        {/* =====================================
                TIMELINE
        ====================================== */}

        <div className="mt-40">

          <FadeIn>

            <div className="text-center">

              <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">

                NUESTRA HISTORIA

              </span>

              <h3 className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3 text-center mt-4">
                  Balsas Dental
              </h3>

              <h2 className="mt-8 text-5xl font-semibold text-black">

                Un camino construido con experiencia

              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-black">

                Durante más de tres décadas hemos evolucionado junto con
                la odontología, incorporando nuevas tecnologías y
                fortaleciendo alianzas con fabricantes internacionales.

              </p>

            </div>

          </FadeIn>

          {/* Timeline */}

          <div className="relative mt-28">

            {/* Línea */}

            <div className="absolute left-0 right-0 top-5 h-[4px] rounded-full bg-gray-200" />

            <div className="absolute left-0 top-5 h-[4px] w-full rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />

            <div className="grid grid-cols-4 gap-10">

              {/* 1994 */}

              <FadeIn>

                <div className="relative text-center">

                  <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full bg-blue-800 ring-8 ring-blue-100" />

                  <div className="pt-20">

                    <h3 className="text-3xl font-black text-blue-700">

                      1994

                    </h3>

                    <h4 className="mt-4 text-2xl font-bold text-slate-900">

                      Fundación

                    </h4>

                    <p className="mt-6 leading-8 text-black">

                      Nace Balsas Dental con la visión de ofrecer productos
                      innovadores para el sector odontológico.

                    </p>

                  </div>

                </div>

              </FadeIn>

              {/* 2008 */}

              <FadeIn>

                <div className="relative text-center">

                  <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full bg-blue-800 ring-8 ring-blue-100" />

                  <div className="pt-20">

                    <h3 className="text-3xl font-black text-blue-700">

                      2008

                    </h3>

                    <h4 className="mt-4 text-2xl font-bold text-slate-900">

                      Nuevas Alianzas

                    </h4>

                    <p className="mt-6 leading-8 text-black">

                      Incorporamos fabricantes internacionales reconocidos
                      para ampliar nuestro portafolio.

                    </p>

                  </div>

                </div>

              </FadeIn>

              {/* 2017 */}

              <FadeIn>

                <div className="relative text-center">

                  <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full bg-blue-800 ring-8 ring-blue-100" />

                  <div className="pt-20">

                    <h3 className="text-3xl font-black text-blue-700">

                      2017

                    </h3>

                    <h4 className="mt-4 text-2xl font-bold text-slate-900">

                      Expansión

                    </h4>

                    <p className="mt-6 leading-8 text-black">

                      Fortalecemos nuestra presencia y cobertura,
                      acercando nuestras soluciones a más profesionales.

                    </p>

                  </div>

                </div>

              </FadeIn>

              {/* 2026 */}

              <FadeIn>

                <div className="relative text-center">

                  <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 rounded-full bg-blue-800 shadow-[0_0_40px_rgba(37,99,235,.55)] ring-8 ring-blue-100" />

                  <div className="pt-20">

                    <h3 className="text-4xl font-black text-blue-700">

                      2026

                    </h3>

                    <h4 className="mt-4 text-2xl font-black text-slate-900">

                      32 Años

                    </h4>

                    <p className="mt-6 leading-8 text-black">

                      Tres décadas impulsando la innovación,
                      la calidad y el crecimiento de la odontología
                      en México.

                    </p>

                  </div>

                </div>

              </FadeIn>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}