"use client";

import { motion } from "motion/react";

const stats = [
  {
    number: "+20",
    title: "Marcas",
    subtitle: "Internacionales",
  },
  {
    number: "+2,500",
    title: "Productos",
    subtitle: "Disponibles",
  },
  {
    number: "+30",
    title: "Años",
    subtitle: "de Experiencia",
  },
  {
    number: "100%",
    title: "Cobertura",
    subtitle: "Nacional",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .8 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: .3,
              }}
              className="group relative overflow-hidden rounded-[30px]
              border border-slate-200/70
              bg-white/80
              p-10
              shadow-xl
              backdrop-blur-xl"
            >

              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-500/0
                via-blue-500/0
                to-sky-400/10
                opacity-0
                transition
                duration-500
                group-hover:opacity-100"
              />
              
              <div className="relative">

                <h2 className="text-5xl font-black text-blue-800">
                  {item.number}
                </h2>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg text-neutral-600">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}