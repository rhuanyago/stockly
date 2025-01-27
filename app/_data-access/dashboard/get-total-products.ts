import { db } from "@/app/_lib/prisma";

export const getTotalProducts = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const totalProducts = await db.product.count();

  return totalProducts;
};
