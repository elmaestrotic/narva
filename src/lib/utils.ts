import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setCssVariable(variable: string, value: string) {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(variable, value)
  }
}
