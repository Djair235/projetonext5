import { AlignJustify } from "lucide-react";
import { Home, User, FilePlus, RefreshCcw, Trash2 } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Usuários",
    url: "/users",
    icon: User,
  },
  {
    title: "Cadastrar",
    url: "/cadastrar",
    icon: FilePlus,
  },
  {
    title: "Atualizar",
    url: "/",
    icon: RefreshCcw,
  },
  {
    title: "Deletar",
    url: "/",
    icon: Trash2,
  },
];

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="ml-3" cursor={"pointer"} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link
                href="https://www.github.com/Djair235"
                target="_blank"
                className=""
              >
                Projeto Crud V3
              </Link>
            </SheetTitle>
            <SidebarProvider>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarProvider>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
