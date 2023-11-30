import {string, z} from 'zod';

export const loginSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6)
});

export const registerSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    passwordAgain:z.string().min(6)
})