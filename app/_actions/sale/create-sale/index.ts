"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { createSaleSchema, CreateSaleSchema } from "./schema";
import { db } from "@/app/_lib/prisma";

export const createSale = async (data: CreateSaleSchema) => {
  createSaleSchema.parse(data);

  await db.$transaction(async (trx) => {
    const sale = await trx.sale.create({
      data: {
        date: new Date(),
      },
    });

    for (const product of data.products) {
      const productFromDb = await trx.product.findUnique({
        where: { id: product.id },
      });

      if (!productFromDb) {
        throw new Error("Product not found");
      }

      const productIsOutOfStock = product.quantity > productFromDb.stock;

      if (productIsOutOfStock) {
        throw new Error("Product out of stock");
      }

      await trx.saleProduct.create({
        data: {
          saleId: sale.id,
          productId: product.id,
          quantity: product.quantity,
          unitPrice: productFromDb.price,
        },
      });

      await trx.product.update({
        where: { id: product.id },
        data: {
          stock: {
            decrement: product.quantity,
          },
        },
      });
    }
  });

  revalidateTag("get-products");
  revalidatePath("/sales");
};
