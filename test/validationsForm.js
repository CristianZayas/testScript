
import { z } from 'z/v4';
export const UserSchema = z.object({
    lastname: z.string(),
    name: z.string().trim()
}) 