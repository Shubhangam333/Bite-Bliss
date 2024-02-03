import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const RegisterFormSchema = z
  .object({
    firstname: z.string().trim().min(1, { message: "Firstname is required" }),
    lastname: z.string().trim().min(1, { message: "Lastname is required" }),
    email: z.string().trim().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
