import { Flex } from "@chakra-ui/react";
import RLink from "../ui/links/routerLink";

import { unauthLinks } from "../../links";

const UnauthHeader = (props) => {
  return (
    <Flex mr="10%" alignItems="baseline">
      {unauthLinks.map((item, idx) => {
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
    </Flex>
  );
};

export default UnauthHeader;
