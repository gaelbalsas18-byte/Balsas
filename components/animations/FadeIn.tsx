"use client";

import {motion} from "motion/react";


interface FadeInProps {
    children: React.ReactNode;
}

export default function FadeIn({children}: FadeInProps){
    return(
        <motion.div
        initial={{ opacity: 0, y: 40,}}
        whileInView={{ opacity: 1,  y:  0}}
        viewport={{amount: 0.2,}}
        transition={{ duration: 0.8, ease: "easeOut",}}>
            {children}
        </motion.div>
    );
}

