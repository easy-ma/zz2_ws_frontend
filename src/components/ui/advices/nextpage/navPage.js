import React from "react";
import { Flex, Box, Button, Center } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import RLink from "../../links/routerLink";

const NavPage = (props) => {
  return (
    <>
      <Flex align="center" flexDir="column">
        <Box textAlign="left">{props.pageNumber}</Box>
        <Flex>
          <Box fontSize="2vw" w="55%" textAlign="right">
            <ArrowBackIcon
              color="teal"
              onClick={() => props.dispatch({ type: "decrement" })}
            />
          </Box>
          <Box fontSize="2vw" w="45%">
            <ArrowForwardIcon
              color="teal"
              onClick={() =>
                props.dispatch({ type: "increment", maxPage: props.maxPage })
              }
            />
          </Box>
        </Flex>
      </Flex>
      <Center>
        <RLink to="/">
          <Button size="lg" marginTop="40px" bg="teal" color="black">
            Back
          </Button>
        </RLink>
      </Center>
    </>
  );
};

export default NavPage;
