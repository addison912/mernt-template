import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../components/theme';
import '@styles/globals.css';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
