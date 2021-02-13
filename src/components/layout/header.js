import { Flex, Heading, Spacer, Image, HStack } from "@chakra-ui/react";
import RLink from "../ui/links/routerLink";

const links = [
  { name: "Home", path: "/" },
  { name: "Register", path: "/register" },
  { name: "SignIn", path: "/sign-in" },
];

const Header = () => {
  return (
    <Flex
      width="full"
      layerStyle="baseLayer"
      alignItems="center"
      as="nav"
      p="1"
      align="center"
    >
      <HStack>
        <Image
          boxSize="2rem"
          objectFit="cover"
          borderRadius="full"
          src="main.png"
        />
        <Heading as="h1" p="unset" m="unset" size="md">
          Turradgiver
        </Heading>
      </HStack>
      <Spacer />
      <Flex mr="2rem" justifyContent="space-around" width="10%">
        {links.map((item, idx) => {
          return (
            <RLink key={idx} to={item.path} _hover={{ fontWeight: "bold" }}>
              {item.name}
            </RLink>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Header;
