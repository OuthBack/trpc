import { Context } from './context';
import { trpc } from '@trpc/server';
import superjson from 'superjson';

export const t = trpc.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});