import { Link as RouterLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const RLink = (props) => {
  return (
    <RouterLink to={props.to}>
      <Text {...props}>{props.children}</Text>
    </RouterLink>
  );
};

export default RLink;
