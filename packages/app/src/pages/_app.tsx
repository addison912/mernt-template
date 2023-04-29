import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import { Provider } from "urql";
import { createUrqlClient } from "../utils/createUrqlClient";

// const client = createClient({
//   url: "http://localhost:4000/graphql",
//   exchanges: [fetchExchange, cacheExchange],
//   fetchOptions: {
//     credentials: "include",
//   },
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={createUrqlClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
