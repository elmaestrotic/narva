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
import { setCssVariables } from "@/lib/utils"

type ColorTheme = {
  name: string;
  primary: string;
  background: string;
  accent: string;
};

const lightColors: ColorTheme[] = [
  { name: 'Default (Naranja)', primary: '25 95% 53%', background: '30 14% 91%', accent: 'hsl(25 95% 53% / 0.4)' },
  { name: 'Vainilla', primary: '43 74% 66%', background: '45 50% 95%', accent: 'hsl(43 74% 66% / 0.4)' },
  { name: 'Melocotón', primary: '30 90% 60%', background: '30 80% 94%', accent: 'hsl(30 90% 60% / 0.4)' },
  { name: 'Azul EAFIT', primary: '212 72% 48%', background: '210 50% 96%', accent: 'hsl(212 72% 48% / 0.3)' },
  { name: 'Verde Menta', primary: '150 60% 50%', background: '150 40% 95%', accent: 'hsl(150 60% 50% / 0.3)' },
];

const darkColors: ColorTheme[] = [
  { name: 'Default (Verde)', primary: '150 70% 45%', background: '220 14% 10%', accent: 'hsl(150 70% 45% / 0.3)' },
  { name: 'Sepia', primary: '39 31% 53%', background: '40 10% 12%', accent: 'hsl(39 31% 53% / 0.3)' },
  { name: 'Verde Musgo', primary: '160 60% 35%', background: '160 15% 10%', accent: 'hsl(160 60% 35% / 0.3)' },
  { name: 'Gris Azulado', primary: '210 30% 40%', background: '215 20% 11%', accent: 'hsl(210 30% 40% / 0.3)' },
  { name: 'Rojo Oscuro', primary: '0 63% 40%', background: '0 20% 10%', accent: 'hsl(0 63% 40% / 0.3)' },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  const [lightColor, setLightColor] = React.useState(lightColors[0]);
  const [darkColor, setDarkColor] = React.useState(darkColors[0]);

  React.useEffect(() => {
    setMounted(true)
    const storedLightColorName = localStorage.getItem('light-theme-color-name') || lightColors[0].name;
    const storedDarkColorName = localStorage.getItem('dark-theme-color-name') || darkColors[0].name;
    
    const initialLight = lightColors.find(c => c.name === storedLightColorName) || lightColors[0];
    const initialDark = darkColors.find(c => c.name === storedDarkColorName) || darkColors[0];

    setLightColor(initialLight);
    setDarkColor(initialDark);

  }, [])

  React.useEffect(() => {
    if (mounted) {
      const activeTheme = resolvedTheme === 'light' ? lightColor : darkColor;
      setCssVariables({
        '--primary': activeTheme.primary,
        '--background': activeTheme.background,
        '--accent': activeTheme.accent,
      });
    }
  }, [mounted, resolvedTheme, lightColor, darkColor])
  
  const handleColorChange = (colorTheme: ColorTheme) => {
    if (resolvedTheme === 'light') {
      setLightColor(colorTheme);
      localStorage.setItem('light-theme-color-name', colorTheme.name);
    } else {
      setDarkColor(colorTheme);
      localStorage.setItem('dark-theme-color-name', colorTheme.name);
    }
    setCssVariables({
      '--primary': colorTheme.primary,
      '--background': colorTheme.background,
      '--accent': colorTheme.accent,
    });
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
                  onClick={() => handleColorChange(color)}
                  className="justify-between"
                >
                  <div className="flex items-center gap-2">
                     <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: `hsl(${color.primary})` }}
                    />
                    <span>{color.name}</span>
                  </div>
                  {activeColor.name === color.name && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
