"use client";

import { useEffect, useState } from "react";

export default function IntroVideo() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const introVisto = sessionStorage.getItem("balsas_intro_visto");

    if (!introVisto) {
      sessionStorage.setItem("balsas_intro_visto", "true");
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const finalizarIntro = () => {
    setFadeOut(true);

    setTimeout(() => {
      setVisible(false);
    }, 1200);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
      bg-[#0D64FF] transition-opacity duration-[1200ms] ease-in-out
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
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
