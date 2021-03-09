import { NavLink as RouterLink } from "react-router-dom";
import { chakra } from "@chakra-ui/react";

const RLink = (props) => {
  return (
    <RouterLink to={props.to}>
      <chakra.span {...props}>{props.children}</chakra.span>
    </RouterLink>
  );
};

export default RLink;
