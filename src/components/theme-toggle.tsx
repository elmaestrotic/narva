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
  { name: 'Default (Naranja)', hsl: '25 95% 53%' },
  { name: 'Vainilla', hsl: '43 74% 66%' },
  { name: 'Melocotón', hsl: '30 90% 60%' },
  { name: 'Azul EAFIT', hsl: '212 72% 48%' }, 
  { name: 'Verde Menta', hsl: '150 60% 50%' },
];

const darkColors = [
  { name: 'Default (Verde)', hsl: '150 70% 45%' },
  { name: 'Sepia', hsl: '39 31% 53%' },
  { name: 'Verde Musgo', hsl: '160 60% 35%' },
  { name: 'Gris Azulado', hsl: '210 30% 40%' },
  { name: 'Rojo Oscuro', hsl: '0 63% 40%' },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  const [lightColor, setLightColor] = React.useState(lightColors[0].hsl);
  const [darkColor, setDarkColor] = React.useState(darkColors[0].hsl);

  React.useEffect(() => {
    setMounted(true)
    const storedLightColor = localStorage.getItem('light-theme-color');
    const storedDarkColor = localStorage.getItem('dark-theme-color');
    
    if (storedLightColor) setLightColor(storedLightColor);
    if (storedDarkColor) setDarkColor(storedDarkColor);

  }, [])

  React.useEffect(() => {
    if (mounted) {
      if (resolvedTheme === 'light') {
        setCssVariable('--primary', lightColor);
      } else {
        setCssVariable('--primary', darkColor);
      }
    }
  }, [mounted, resolvedTheme, lightColor, darkColor])
  
  const handleColorChange = (hsl: string) => {
    if (resolvedTheme === 'light') {
      setLightColor(hsl);
      localStorage.setItem('light-theme-color', hsl);
      setCssVariable('--primary', hsl);
    } else {
      setDarkColor(hsl);
      localStorage.setItem('dark-theme-color', hsl);
      setCssVariable('--primary', hsl);
    }
  };
  
  const currentPalette = resolvedTheme === 'dark' ? darkColors : lightColors;
  const activeColor = resolvedTheme === 'dark' ? darkColor : lightColor;

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
