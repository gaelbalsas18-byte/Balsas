"use client";

import { motion } from "motion/react";

interface Props {
  categories: string[];

  selected: string;

  onSelect: (category: string) => void;
}

export default function ProductFilters({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      {categories.map((category) => (

        <motion.button

          key={category}

          whileTap={{
            scale: .95,
          }}

          whileHover={{
            y: -2,
          }}

          onClick={() => onSelect(category)}

          className={`
          rounded-full
          px-6
          py-3
          font-semibold
          transition

          ${
            selected === category
              ? "bg-white text-blue-700"
              : "bg-white/15 text-white backdrop-blur-xl"
          }

          `}
        >

          {category}

        </motion.button>

      ))}

    </div>
  );
}