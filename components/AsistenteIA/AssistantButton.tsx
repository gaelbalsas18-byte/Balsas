"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface AssistantButtonProps {
  onClick: () => void;
}

export default function AssistantButtonProps({
    onClick,
}: AssistantButtonProps) {
 return(
    <motion.button
    type="button"
    onClick={onClick}
    aria-label="Balsas IA"
    
    initial={{
        opacity: 0,
        scale: 0.4,
    }}
    animate={{
        opacity: 1,
        scale: 1,
    }}
    
    whileHover={{
        scale: 1.08
    }}

    whileTap={{
        scale: 0.92,
    }}

    transition={{
        duration: 0.30,
    }}

    className="
    fixed
    bottom-6
    right-6
    z-[9990]
    
    flex
    h-16
    w-16
    
    items-center
    justify-center
    
    rounded-full
    
    bg-blue-700
    
    shadow-[0_10px_35px_rgba(37,99,235,0,35)]
    
    ring-4
    ring-white
    
    transition-shadow
    duration-300
    
    hover:shadow-[0_15px_45px_rgba(37,99,235,0,45)]
    
    sm:bottom_8
    sm:right-8
    
    sm:h-[72px]
    sm:w-[72px]"
    >

        <span className="
          absolute
          inset-0
          rounded-full

          bg-blue-400/30

          blur-xl

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "/>
            <Image
        src="/logos/BalsasTrans.png"
        alt="Balsas IA"
        width={48}
        height={48}
        className="
          relative
          z-10

          h-10
          w-10

          object-contain

          sm:h-12
          sm:w-12
        "
      />
    </motion.button>
 )
}

