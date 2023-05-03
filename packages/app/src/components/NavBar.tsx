import { FunctionComponent } from 'react';
import { Box, Link, Flex, Image, Button, useColorModeValue, Stack, color } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavDropdown from './NavDropdown';
import { DarkModeSwitch } from './DarkModeSwitch';
// import { IUser } from '../../../types';

// interface NavBarProps {
//   // user: IUser | null;
//   // signOut: () => void;
// }
const user = false;
const signOut = () => {
  console.log('signing out');
};

let body = user ? (
  <NavDropdown user={user} signOut={signOut} />
) : (
  <Stack direction="row">
    <Link href="/login" as={NextLink}>
      <Button colorScheme="teal">Login</Button>
    </Link>

    <Link as={NextLink} href="/register">
      <Button colorScheme="teal" variant="outline">
        Register
      </Button>
    </Link>
    <DarkModeSwitch />
  </Stack>
);

const NavBar: FunctionComponent = () => {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg={useColorModeValue('green.50', 'teal.900')} p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Link as={NextLink} href="/">
          <Image className="logo" src="/images/logo.svg" alt="Logo" boxSize="40px" />
        </Link>
        <Box ml={'auto'}>{body}</Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
