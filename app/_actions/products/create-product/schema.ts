import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().trim().min(3, {
    message: "O nome do produto deve ter no mínimo 3 caracteres.",
  }),
  price: z.number().min(0.01, {
    message: "O preço do produto deve ser maior que 0.",
  }),
  stock: z.coerce
    .number()
    .positive({
      message: "O estoque do produto deve ser um número positivo.",
    })
    .int()
    .min(0, {
      message: "O estoque do produto deve ser maior ou igual a 0.",
    }),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;
