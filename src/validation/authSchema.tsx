import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('email not valid'),
  password: z.string().min(6, 'minimum 6 character'),
});

export const registerSchema = z
  .object({
    name: z.string().min(1, 'minimum 1 character'),
    email: z.string().email('email not valid'),
    phone: z.string().min(6, 'minimum 6 character'),
    password: z.string().min(6, 'minimum 6 character'),
    confirmPassword: z.string().min(6, 'minimum 6 character'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'password note same',
    path: ['confirmPassword'],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
