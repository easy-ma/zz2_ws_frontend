import { Button, Flex } from "@chakra-ui/react";
import RLink from "../ui/links/routerLink";
import { useHistory } from "react-router-dom";
import { authLinks } from "../../links";

const AuthHeader = (props) => {
  const history = useHistory();
  const { signout } = props;
  return (
    <Flex mr="10%" alignItems="baseline">
      {authLinks.map((item, idx) => {
        return (
          <RLink
            mr="4vw"
            key={idx}
            to={item.path}
            fontSize="lg"
            _hover={{ fontWeight: "bold" }}
          >
            {item.name}
          </RLink>
        );
      })}
      <Button onClick={() => signout(() => history.push("/"))}>Sign out</Button>
    </Flex>
  );
};

export default AuthHeader;
