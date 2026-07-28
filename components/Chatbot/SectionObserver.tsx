"use client";

import { useEffect } from "react";

interface Props {
  onSectionChange: (section: string) => void;
}

const sections = [
  "Inicio",
  "AcercaDe",
  "Marcas",
  "Eventos",
  "Footer",
];

export default function SectionObserver({
  onSectionChange,
}: Props) {

  useEffect(() => {

    const detectSection = () => {

      const center = window.innerHeight / 2;

      let closestSection = "";
      let closestDistance = Infinity;

      sections.forEach((id) => {

        const element = document.getElementById(id);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        const elementCenter =
          rect.top + rect.height / 2;

        const distance =
          Math.abs(center - elementCenter);

        if (distance < closestDistance) {

          closestDistance = distance;
          closestSection = id;

        }

      });

      if (closestSection) {
        onSectionChange(closestSection);
      }

    };

    detectSection();

    window.addEventListener("scroll", detectSection);

    window.addEventListener("resize", detectSection);

    return () => {

      window.removeEventListener(
        "scroll",
        detectSection
      );

      window.removeEventListener(
        "resize",
        detectSection
      );

    };

  }, [onSectionChange]);

  return null;
}