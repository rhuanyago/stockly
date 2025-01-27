import "server-only";

import { db } from "@/app/_lib/prisma";

export const getTotalProducts = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await db.product.count();
};
