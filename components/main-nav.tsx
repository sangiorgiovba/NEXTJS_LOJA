"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Painel Admin",
      active: pathname === `/${params.storeId}`,
    },

    {
      href: `/${params.storeId}/billboards`,
      label: "Postes",
      active: pathname === `/${params.storeId}/billboard`,
    },

    {
      href: `/${params.storeId}/categories`,
      label: "Categorias",
      active: pathname === `/${params.storeId}/categories`,
    },

    {
      href: `/${params.storeId}/sizes`,
      label: "Tamanho",
      active: pathname === `/${params.storeId}/sizes`,
    },

    {
      href: `/${params.storeId}/colors`,
      label: "Cores",
      active: pathname === `/${params.storeId}/colors`,
    },

    {
      href: `/${params.storeId}/products`,
      label: "Produtos",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Pedidos",
      active: pathname === `/${params.storeId}/orders`,
    },

    {
      href: `/${params.storeId}/settings`,
      label: "Configurações",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-success",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
            {route.label}
        </Link>
      ))}
    </nav>
  );
}
