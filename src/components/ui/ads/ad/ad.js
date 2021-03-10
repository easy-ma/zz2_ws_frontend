import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import RLink from "../../links/routerLink";

const Ad = (props) => {
  const { ad,detailed } = props;
  return (
    <Flex
      w={detailed ? "auto" :"18vw"} 
      h={detailed ? "70vh" :"55vh"} 
      maxW="35vw"
      flexDirection="column"
      boxShadow="xl"
      ml={`${detailed ? "5" : "1"}vw`}
      mr="1vw"
      mb="5vw"
    >
      <Box w="100%" minHeight="40%">
        <Image
          w="100%"
          h="100%"
          src={
            ad.imageURL ??
            "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg"
          }
          overflow="hidden"
        />
      </Box>
      <Flex
        flexDirection="column"
        minHeight="60%"
        justifyContent="space-between"
        p="1.2vw"
      >
        <Box>
          <Heading as="h3" fontSize="1.1vw" mb="1vh">
            {ad.name}
          </Heading>
        <Divider></Divider>
          <Text
            overflowWrap="anywhere"
            color="teal"
            fontWeight="semibold"
            fontSize="0.8vw"
            mr="0.5vw"
            >
            {ad.location}
          </Text>
          {/* <Text color="teal" fontWeight="bold" fontSize="1vw">
              {ad.city}
            </Text> */}
          </Box>
        <Text
          textAlign="justify"
          lineHeight="center"
          mt="0.6vw"
          fontSize="0.7vw"
          h="35%"
        >
          {ad.description}
        </Text>
        {!detailed ? 
        <RLink to={`/ads/${ad.id}`} mt="1.2vw"
        minHeight="4vh"
        justifySelf="flex-end"
        >
          <Button
            bgColor="teal.400"
            w="100%"
            color="white"
            fontSize="1vw"
            
            onClick={props.zoom}
            >
            See in details
          </Button>
        </RLink>
        :
        ""
        }
      </Flex>
    </Flex>
  );
};

export default Ad;
