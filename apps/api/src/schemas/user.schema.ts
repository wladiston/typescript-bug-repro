import { z } from "~/utils";

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().max(255).email(),
  name: z.string().max(255).optional(),
  password: z.string(),
  someField: z.string().max(255).optional(),
});
