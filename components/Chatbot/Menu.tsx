"use client";

import {
  House,
  Building2,
  Star,
  CalendarDays,
  Phone,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    id: "Inicio",
    title: "Inicio",
    icon: House,
  },
  {
    id: "AcercaDe",
    title: "Nosotros",
    icon: Building2,
  },
  {
    id: "Marcas",
    title: "Marcas",
    icon: Star,
  },
  {
    id: "Eventos",
    title: "Eventos",
    icon: CalendarDays,
  },
  {
    id: "Footer",
    title: "Contacto",
    icon: Phone,
  },
];

export default function Menu() {
  const goToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>

      <p className="mb-6 text-center text-sm text-gray-500">
        ¿Qué deseas explorar?
      </p>

      <div className="space-y-3">

        {sections.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-5
                py-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:bg-blue-50
                hover:shadow-lg
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-100
                    transition
                    group-hover:bg-blue-600
                  "
                >
                  <Icon
                    size={20}
                    className="text-blue-700 transition group-hover:text-white"
                  />
                </div>

                <span className="text-base font-medium text-gray-700">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={20}
                className="
                  text-gray-400
                  transition
                  group-hover:translate-x-1
                  group-hover:text-blue-600
                "
              />

            </button>
          );
        })}

      </div>

    </div>
  );
}