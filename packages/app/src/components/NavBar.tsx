import React from "react";
import { Box, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
// import NextLink from "next/link";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { data, loading } = useMeQuery({});
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  let body = null;

  if (loading) {
    // user not logged in
  } else if (!data?.me) {
    body = (
      <>
        <Link href="/login" mr={4}>
          Login
        </Link>
        <Link href="/register">Register</Link>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={4}>{data.me.username}</Box>
        <Button
          onClick={async () => {
            await logout({});
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Heading>Hello</Heading>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
