"use client";

import { motion } from "motion/react";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: .45,
      }}
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-lg
        transition
      "
    >

      <div className="mb-6 text-5xl">

        {icon}

      </div>

      <h3 className="text-2xl font-bold">

        {title}

      </h3>

      <p className="mt-4 leading-8 text-gray-600">

        {description}

      </p>

    </motion.div>
  );
}