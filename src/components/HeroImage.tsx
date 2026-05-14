"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Props = {
  portraitSrc: StaticImageData;
  portraitAlt: string;
  qrSrc: string;
  qrAlt: string;
};

export default function HeroImage({ portraitSrc, portraitAlt, qrSrc, qrAlt }: Props) {
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "q" && e.key !== "Q") return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      setShowQr((v) => !v);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className={`float-right ml-5 lg:ml-8 mb-3 lg:mb-4 w-28 sm:w-36 lg:w-56 aspect-square rounded-2xl overflow-hidden shadow-md relative ${
        showQr ? "bg-white" : ""
      }`}
    >
      {showQr ? (
        <Image
          src={qrSrc}
          alt={qrAlt}
          fill
          sizes="(min-width: 1024px) 224px, (min-width: 640px) 144px, 112px"
          className="object-contain p-2"
          unoptimized
        />
      ) : (
        <Image
          src={portraitSrc}
          alt={portraitAlt}
          fill
          sizes="(min-width: 1024px) 224px, (min-width: 640px) 144px, 112px"
          className="object-cover"
        />
      )}
    </div>
  );
}
