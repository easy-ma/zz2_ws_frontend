import React from "react";
import { Flex, Box, Button, Center } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import RLink from "../../links/routerLink";

const NavPage = (props) => {
  const {dispatch,leftButton,RightButton} = props;
  return (
    <>
      <Flex align="center" flexDir="column">
        {/* <Box textAlign="left">{props.pageNumber}</Box> */}
        <Flex>
          {leftButton ?
           <Box fontSize="2vw" w="55%" textAlign="right">
            <ArrowBackIcon
              color="teal"
              onClick={() => dispatch({ type: "decrement" })}
            />
          </Box>
        : ""
        }
        {RightButton ?
          <Box fontSize="2vw" w="45%">
            <ArrowForwardIcon
              color="teal"
              onClick={() =>
                dispatch({ type: "increment"})
              }
            />
         </Box>
        : ""
        }
          
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
