"use client"

import * as React from "react"
import { Moon, Sun, Palette, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { setCssVariable } from "@/lib/utils"

const lightColors = [
  { name: 'Default', hsl: '25 95% 53%' },
  { name: 'Verde', hsl: '150 70% 45%' },
  { name: 'Azul', hsl: '210 90% 50%' },
  { name: 'Rosa', hsl: '340 90% 60%' },
  { name: 'Púrpura', hsl: '270 80% 60%' },
];

const darkColors = [
  { name: 'Default', hsl: '150 70% 45%' },
  { name: 'Naranja', hsl: '25 95% 53%' },
  { name: 'Cian', hsl: '190 85% 50%' },
  { name: 'Rojo', hsl: '0 84% 60%' },
  { name: 'Amarillo', hsl: '45 90% 55%' },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [activeColor, setActiveColor] = React.useState(lightColors[0].hsl);

  React.useEffect(() => {
    setMounted(true)
    const storedColor = localStorage.getItem('theme-color');
    if (storedColor) {
      setActiveColor(storedColor);
      setCssVariable('--primary', storedColor);
    }
  }, [])
  
  const handleColorChange = (hsl: string) => {
    setActiveColor(hsl);
    localStorage.setItem('theme-color', hsl);
    setCssVariable('--primary', hsl);
  };
  
  const currentPalette = resolvedTheme === 'dark' ? darkColors : lightColors;

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Palette className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
           <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme & palette</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Claro</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Oscuro</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>/</span>
          <Moon className="mr-2 h-4 w-4" />
          <span>Sistema</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Paleta</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {currentPalette.map((color) => (
                <DropdownMenuItem
                  key={color.name}
                  onClick={() => handleColorChange(color.hsl)}
                  className="justify-between"
                >
                  <div className="flex items-center gap-2">
                     <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: `hsl(${color.hsl})` }}
                    />
                    <span>{color.name}</span>
                  </div>
                  {activeColor === color.hsl && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
