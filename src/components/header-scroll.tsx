"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavMenu } from "./navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { BookUser } from "lucide-react";

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
        "px-4 lg:px-6 h-20 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-lg border-b" : "bg-transparent"
      )}
    >
      <Link href="/" className="flex items-center justify-center mr-6" prefetch={false}>
        <BookUser className="h-8 w-8 text-primary" />
        <span className="sr-only">Narvá Classes</span>
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <NavMenu />
        <ThemeToggle />
      </div>
    </header>
  );
}
