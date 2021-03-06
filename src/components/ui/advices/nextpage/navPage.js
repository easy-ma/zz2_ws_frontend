import React from "react";
import { Flex, Box, Button, Center } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";

const NavPage = (props) => {
  return (
    <>
      <Flex align="center" flexDir="column">
        <Flex>
          <Box fontSize="2vw" w="55%" textAlign="right">
            <ArrowBackIcon color="teal" />
          </Box>
          <Box fontSize="2vw" w="45%">
            <ArrowForwardIcon color="teal" />
          </Box>
        </Flex>
      </Flex>
      <Center>
        <Button
          onClick={props.zoom}
          size="lg"
          marginTop="40px"
          bg="teal"
          color="black"
        >
          Back
        </Button>
      </Center>
    </>
  );
};

export default NavPage;
