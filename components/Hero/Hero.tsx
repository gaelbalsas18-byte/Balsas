"use client";

import HeroScrollLayout from "./HeroScrollLayout";
import HeroImages from "./HeroImages";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <HeroScrollLayout>
      <HeroImages />
      <HeroContent />
    </HeroScrollLayout>
  );
}