import { publicProcedure, router } from './trpc';
import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const prisma = new PrismaClient;

const appRouter = router({
    signup: publicProcedure
        .input(
            z.object({ username: z.string(), password: z.string() })
        ).mutation(async (opts) => {
            const { input } = opts;
            const user = await prisma.user.create({
                data: input,
            });

            return user;
        }),
    example: publicProcedure.query(
        async () => {
           return 'example'; 
        }
    )
});

const server = createHTTPServer({
    middleware: cors(),
    router: appRouter,
});

server.listen(3001);

export type AppRouter = typeof appRouter;