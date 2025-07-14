import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setCssVariables(variables: Record<string, string>) {
  if (typeof window !== 'undefined') {
    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
}

export function setCssVariable(variable: string, value: string) {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(variable, value)
  }
}
