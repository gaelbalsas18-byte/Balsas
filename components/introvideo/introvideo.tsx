
"use client";

import { useEffect, useState } from "react";

export default function IntroVideo() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const finalizarIntro = () => {
    setFadeOut(true);

    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1200);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-[1400ms] ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/intro-balsas.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finalizarIntro}
        className="w-[15%] h-[25%] max-w-[700px] object-contain"
      />
    </div>
  );
}
