import { Flex, Heading, Spacer, Image, HStack, Center } from "@chakra-ui/react";
import RLink from "../ui/links/routerLink";

const links = [
  { name: "Home", path: "/" },
  { name: "Register", path: "/register" },
  { name: "SignIn", path: "/sign-in" },
];

const Header = () => {
  return (
    <Center>
      <Flex width="70%" as="nav" p="1" alignItems="center" align="center">
        <HStack>
          <Image
            boxSize="4rem"
            objectFit="cover"
            borderRadius="full"
            src="main.png"
          />
          <Heading as="h1" p="unset" m="unset" size="lg">
            Turradgiver
          </Heading>
        </HStack>
        <Spacer />
        <Flex mr="2rem" justifyContent="space-around" width="20%">
          {links.map((item, idx) => {
            return (
              <RLink
                key={idx}
                to={item.path}
                fontSize="lg"
                _hover={{ fontWeight: "bold" }}
              >
                {item.name}
              </RLink>
            );
          })}
        </Flex>
      </Flex>
    </Center>
  );
};

export default Header;
