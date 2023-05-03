import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import theme from '../components/theme';
import '@styles/globals.css';
import { AppProps } from 'next/app';
import UserContext from '../context/UserContext';
import { IUser } from '@/../types/dist';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
