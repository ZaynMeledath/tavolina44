import React from "react";
import logoImg from "@/assets/tavolina44.png";

interface TavolinaLogoProps {
  className?: string;
  imgClassName?: string;
  withBackdrop?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function TavolinaLogo({
  className = "",
  imgClassName = "",
  withBackdrop = false,
  size = "md",
}: TavolinaLogoProps) {
  const sizeClasses = {
    sm: "h-9 sm:h-10 w-auto",
    md: "h-12 sm:h-14 w-auto",
    lg: "h-20 sm:h-24 md:h-28 w-auto",
    xl: "h-28 sm:h-36 md:h-44 w-auto",
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
    >
      {withBackdrop && (
        <div
          className="pointer-events-none absolute -inset-3 rounded-full bg-radial from-gold/15 via-gold/5 to-transparent blur-md -z-10"
          aria-hidden="true"
        />
      )}
      <img
        src={logoImg}
        alt="Tavolina 44 — Italian & American Cuisine"
        className={`object-contain transition-transform duration-500 will-change-transform ${sizeClasses} ${imgClassName}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
