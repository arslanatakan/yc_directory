import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must contain at least 3 characters" })
    .max(100, { message: "Title must not exceed 100 characters" }),

  description: z
    .string()
    .min(20, { message: "Description must contain at least 20 characters" })
    .max(500, { message: "Description must not exceed 500 characters" }),

  category: z
    .string()
    .min(3, { message: "Category must contain at least 3 characters" })
    .max(20, { message: "Category must not exceed 20 characters" }),

  link: z
    .string()
    .url({ message: "Please provide a valid image URL" })
    .refine(
      async (url) => {
        try {
          const res = await fetch(url, { method: "HEAD" });
          const contentType = res.headers.get("content-type");
          return contentType?.startsWith("image/");
        } catch {
          return false;
        }
      },
      { message: "The provided URL must point to an image" }
    ),

  pitch: z
    .string()
    .min(10, { message: "Pitch must contain at least 10 characters" }),
});
