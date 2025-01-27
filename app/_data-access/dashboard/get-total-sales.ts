import { db } from "@/app/_lib/prisma";

export const getTotalSales = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 9000));
  const totalSalesPromise = await db.sale.count();

  return totalSalesPromise;
};
