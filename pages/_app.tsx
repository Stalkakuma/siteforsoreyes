import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "lib/states/user-context";
import { LoadingContextProvider } from "lib/states/loading-context";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import queryClient from "../lib/clients/react-query";
import theme from "../styles/theme";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider session={session}>
            <LoadingContextProvider>
              <UserContextProvider>
                <ChakraProvider theme={theme}>
                  <Component {...pageProps} />
                </ChakraProvider>
              </UserContextProvider>
            </LoadingContextProvider>
          </SessionProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
