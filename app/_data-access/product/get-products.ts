import "server-only";

import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";
import { cache } from "react";

export const getProducts = cache(async (): Promise<Product[]> => {
  return db.product.findMany({});
});
