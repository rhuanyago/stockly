"use client";
import { Button } from "@/app/_components/ui/button";
import { SaleDto } from "@/app/_data-access/sale/get-sales";
import { formatCurrency } from "@/app/helpers/currency";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import SalesTableDropdownMenu from "./table-dropdown-menu";

export const saleTableColumns: ColumnDef<SaleDto>[] = [
  {
    accessorKey: "productNames",
    header: "Produtos",
  },
  {
    accessorKey: "totalProducts",
    header: "Quantidade de Produtos",
  },
  {
    accessorKey: "totalAmount",
    header: "Valor Total",
    cell: ({
      row: {
        original: { totalAmount },
      },
    }) => {
      return formatCurrency(totalAmount);
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({
      row: {
        original: { date },
      },
    }) => new Date(date).toLocaleDateString(),
  },
  {
    header: "Ações",
    cell: ({ row: { original: sale } }) => (
      <SalesTableDropdownMenu sale={sale} />
    ),
  },
];
