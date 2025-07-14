"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Lenguajes y Paradigmas de Computación",
    href: "/cursos/lenguajes-y-paradigmas-de-computacion",
    description: "Explora diferentes estilos de programación y la teoría detrás de los lenguajes.",
  },
  {
    title: "Algoritmos y Estructuras de Datos I",
    href: "/cursos/algoritmos-y-estructuras-de-datos-i",
    description: "Introducción a las estructuras de datos fundamentales y análisis de algoritmos.",
  },
  {
    title: "Algoritmos y Estructuras de Datos II",
    href: "/cursos/algoritmos-y-estructuras-de-datos-ii",
    description: "Estudio avanzado de algoritmos, complejidad y estructuras de datos complejas.",
  },
  {
    title: "Pedagogía con IA",
    href: "/cursos/pedagogia-con-ia",
    description: "Aprende a integrar la Inteligencia Artificial en procesos educativos y de enseñanza.",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/#clases">
              Clases
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/#sobre-mi">
              Sobre Mí
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/#contacto">
              Contacto
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
