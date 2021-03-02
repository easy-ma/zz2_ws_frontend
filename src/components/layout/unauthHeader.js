import { Flex } from "@chakra-ui/react";
import RLink from "../ui/links/routerLink";

const links = [
  { name: "Home", path: "/" },
  { name: "Register", path: "/register" },
  { name: "SignIn", path: "/sign-in" },
];

const UnauthHeader = (props) => {
  return (
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
  );
};

export default UnauthHeader;
