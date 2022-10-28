import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import queryClient from "../lib/clients/react-query";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
