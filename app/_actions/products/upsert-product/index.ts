"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { upsertProductSchema } from "./schema";
import { actionClient } from "@/app/_lib/safe-action";
import { returnValidationErrors } from "next-safe-action";

export const upsertProduct = actionClient
  .schema(upsertProductSchema)
  .action(async ({ parsedInput: { id, ...data } }) => {
    const product = await db.product.upsert({
      where: {
        id: id ?? "",
      },
      update: data,
      create: data,
    });

    if (!product) {
      returnValidationErrors(upsertProductSchema, {
        _errors: ["Error upserting product."],
      });
    }

    revalidatePath("/products");
  });
