"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleDotIcon } from "lucide-react";
import ProductTableDropdownMenu from "./table-dropdown-menu";
import { ProductDto } from "@/app/_data-access/product/get-products";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  }
  return "Esgotado";
};

export const productTableColumns: ColumnDef<ProductDto>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell: (row) => {
      const product = row.row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const label = getStatusLabel(product.status);

      return (
        <Badge
          variant={label === "Em estoque" ? "default" : "outline"}
          className="gap-1.5"
        >
          <CircleDotIcon
            size={14}
            className={
              label === "Em estoque"
                ? "fill-primary-foreground"
                : "fill-destructive-foreground"
            }
          />
          {label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => {
      return <ProductTableDropdownMenu product={row.row.original} />;
    },
  },
];
