import { z } from 'z/v4';
export const UserSchema = z.object({
    name: z.string().trim(),
    lastname: z.string().trim(),
    email: z.email()
}) 
