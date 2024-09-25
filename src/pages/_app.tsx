import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
