import { FunctionComponent } from 'react';
import { Box, Link, Flex, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavDropdown from './NavDropdown';
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
  <>
    <Link href="/login" as={NextLink} mr={4}>
      Login
    </Link>
    <Link as={NextLink} href="/register">
      Register
    </Link>
  </>
);

const NavBar: FunctionComponent = () => {
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Link as={NextLink} href="/">
          <Image className="logo" src="/images/logo.svg" alt="Logo" boxSize="40px" />
        </Link>
        <Box ml={'auto'}>{body}</Box>
      </Flex>
    </Flex>
  );
};

// const NavBar: React.FC<NavBarProps> = ({}) => {
//   let body = null;

//   if (loading) {
//     // user not logged in
//   } else if (!data?.me) {
//     body = (
//       <>
//         <Link href="/login" mr={4}>
//           Login
//         </Link>
//         <Link href="/register">Register</Link>
//       </>
//     );
//   } else {
//     body = (
//       <Flex>
//         <Box mr={4}>{data.me.username}</Box>
//         <Button
//           onClick={async () => {
//             await logout({});
//           }}
//           isLoading={logoutFetching}
//           variant="link"
//         >
//           Logout
//         </Button>
//       </Flex>
//     );
//   }

//   return (
//     <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
//       <Flex flex={1} m="auto" align="center" maxW={800}>
//         <Heading>Hello</Heading>
//         <Box ml={'auto'}>{body}</Box>
//       </Flex>
//     </Flex>
//   );
// };

export default NavBar;
