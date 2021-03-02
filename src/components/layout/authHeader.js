import { Button, Flex } from "@chakra-ui/react";
import RLink from "../ui/links/routerLink";
import { useHistory } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
];

const AuthHeader = (props) => {
  const history = useHistory();
  const { signout } = props;
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
      <Button onClick={() => signout(() => history.push("/"))}>Signout</Button>
    </Flex>
  );
};

export default AuthHeader;
