"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-lg border-b" : "bg-transparent border-b border-transparent"
      )}
    >
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">Narvá Classes</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#clases" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Clases
        </Link>
        <Link href="#sobre-mi" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Sobre Mí
        </Link>
        <Link href="#contacto" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}