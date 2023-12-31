import {string, z} from 'zod';

export const loginSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6)
});

export const registerSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    passwordAgain:z.string().min(6)
}).refine((data) => data.password === data.passwordAgain, {
    message: "Passwords don't match.",
    path: ["passwordAgain"]
  });

export const queueSchema=z.object({
    sendTo:z.string().email(),
    message:z.string(),
    attachment:z.any().optional()
})