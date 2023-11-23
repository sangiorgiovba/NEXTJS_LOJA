"use client"

import { ColumnDef } from "@tanstack/react-table"


export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt:string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Nome Produto",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
  },
  {
    accessorKey: "address",
    header: "Endereco",
  },
  {
    accessorKey: "totalPrice",
    header: "Preco Total",
  },
  {
    accessorKey: "isPaid",
    header: "Pago",
  },

]
