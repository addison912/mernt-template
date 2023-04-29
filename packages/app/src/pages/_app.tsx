import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { AppProps } from 'next/app';

// const client = createClient({
//   url: "http://localhost:4000/graphql",
//   exchanges: [fetchExchange, cacheExchange],
//   fetchOptions: {
//     credentials: "include",
//   },
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
