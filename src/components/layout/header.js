import { Flex, Heading, Spacer, Image, HStack, Center } from "@chakra-ui/react";
import { useAuth } from "../../helpers/auth";
import AuthHeader from "./authHeader";
import UnauthHeader from "./unauthHeader";

const Header = (props) => {
  const auth = useAuth();
  return (
    <Center>
      <Flex width="70%" as="nav" p="1" alignItems="center" align="center">
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
        <Spacer />
        {auth.user ? <AuthHeader signout={auth.signout} /> : <UnauthHeader />}
      </Flex>
    </Center>
  );
};

export default Header;
