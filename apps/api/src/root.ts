import { UserSchema } from "./schemas/user.schema";
import { createTRPCRouter, publicProcedure, z } from "./utils";

export const appRouter = createTRPCRouter({
  user: publicProcedure
    .input(UserSchema.omit({ id: true }))
    .mutation(async (req) => {
      const user = await req.ctx.prisma.user.create({
        data: req.input,
      });

      return user;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
