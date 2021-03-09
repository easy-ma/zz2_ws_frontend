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

const Ad = (props) => {
  const { ad } = props;
  return (
    <Flex
      w="18vw"
      h="55vh"
      flexDirection="column"
      boxShadow="xl"
      ml="1vw"
      mr="1vw"
      mb="5vw"
    >
      <Box w="auto" minHeight="40%">
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
        </Box>
        <Divider></Divider>
        <Flex flexWrap="wrap" alignItems="baseline">
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
        </Flex>
        <Text
          textAlign="justify"
          lineHeight="center"
          mt="0.6vw"
          fontSize="0.7vw"
          h="35%"
        >
          {ad.description}
        </Text>
        <Button
          bgColor="teal.400"
          h="4vh"
          color="white"
          fontSize="1vw"
          mt="1.2vw"
          minHeight="4vh"
          justifySelf="flex-end"
          onClick={props.zoom}
        >
          See in details
        </Button>
      </Flex>
    </Flex>
  );
};

export default Ad;
