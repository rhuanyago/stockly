"use server";

import { db } from "@/app/_lib/prisma";
import { deleteProductSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/app/_lib/safe-action";
import { returnValidationErrors } from "next-safe-action";

export const deleteProduct = actionClient
  .schema(deleteProductSchema)
  .action(async ({ parsedInput: { id } }) => {
    const product = await db.product.delete({
      where: {
        id,
      },
    });

    if (!product) {
      returnValidationErrors(deleteProductSchema, {
        _errors: ["Error deleting product."],
      });
    }

    revalidatePath("/products");
  });
