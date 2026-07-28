"use client";

import { motion } from "motion/react";

export type Category =
  | "all"
  | "clinica"
  | "laboratorio"
  | "digital";

interface Props {
  selected: Category;
  onChange: (category: Category) => void;
}

const categories = [
  {
    id: "all",
    label: "Todas",
    icon: "✨",
  },
  {
    id: "clinica",
    label: "Clínica",
    icon: "🦷",
  },
  {
    id: "laboratorio",
    label: "Laboratorio",
    icon: "🧪",
  },
  {
    id: "digital",
    label: "Digital",
    icon: "💻",
  },
] as const;

export default function CategoryFilter({
  selected,
  onChange,
}: Props) {
  return (
    <div className="flex justify-center">

      <div className="inline-flex rounded-full bg-white p-2 shadow-xl">

        {categories.map((category) => {

          const active = selected === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onChange(category.id)}
              className="relative px-8 py-3"
            >

              {active && (

                <motion.div
                  layoutId="activeCategory"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-full bg-blue-700"
                />

              )}

              <span
                className={`
                  relative z-10 flex items-center gap-2 font-semibold transition

                  ${
                    active
                      ? "text-white"
                      : "text-gray-600"
                  }
                `}
              >

                <span>{category.icon}</span>

                {category.label}

              </span>

            </button>
          );

        })}

      </div>

    </div>
  );
}