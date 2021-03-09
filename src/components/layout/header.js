import { Flex, Heading, Spacer, Image, HStack, Center } from "@chakra-ui/react";
import { useAuth } from "../../helpers/auth";
import RLink from "../ui/links/routerLink";
import AuthHeader from "./authHeader";
import UnauthHeader from "./unauthHeader";

const Header = (props) => {
  const auth = useAuth();
  return (
    <Center>
      <Flex
        ml="10%"
        width="100vw"
        as="nav"
        minHeight="10vh"
        p="1"
        alignItems="center"
        align="center"
      >
        <RLink to="/">
          <HStack>
            <Image
              boxSize="4rem"
              objectFit="cover"
              borderRadius="full"
              src="/main.png"
            />
            <Heading as="h1" p="unset" m="unset" size="lg">
              Turradgiver
            </Heading>
          </HStack>
        </RLink>
        <Spacer />
        {auth.user ? <AuthHeader signout={auth.signout} /> : <UnauthHeader />}
      </Flex>
    </Center>
  );
};

export default Header;
