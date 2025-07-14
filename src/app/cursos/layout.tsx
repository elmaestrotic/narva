import { Header } from "@/components/header-scroll";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { BookOpen, ChevronsRight } from "lucide-react";

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const totalClases = 17;
  const clases = Array.from({ length: totalClases }, (_, i) => i + 1);

  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-dvh bg-background">
        <Header />
        <div className="flex flex-1 mt-20">
          <Sidebar>
            <SidebarContent className="p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    href="#"
                    isActive
                    tooltip="Clases del curso"
                  >
                    <BookOpen />
                    Clases
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuSub>
                  {clases.map((clase) => (
                    <SidebarMenuSubItem key={clase}>
                      <SidebarMenuSubButton href="#">
                        <ChevronsRight className="!size-3.5"/>
                        Clase {clase}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <main className="flex-1 p-6">{children}</main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
