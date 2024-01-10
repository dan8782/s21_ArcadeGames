import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../server';
import Test from './test';

export const trpc = createTRPCReact<AppRouter>();

function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:3001',
                    // fetch(url, options) {
                    //     return fetch(url, {
                    //       ...options,
                    //       credentials: 'include',
                    //     });
                    //   },
                    // async headers() {
                    //   return {
                    //     authorization: getAuthCookie(),
                    //   };
                    // },
                }),
            ],
        }),
    );
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Test></Test>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
