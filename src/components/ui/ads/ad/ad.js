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
      flexDirection="column"
      boxShadow="xl"
      ml="1vw"
      mr="1vw"
      mb="5vw"
    >
      <Box w="auto" h="50%">
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
      <Flex flexDirection="column" h="50%" justifyContent="space-between" p={6}>
        <Box h="30%">
          <Heading as="h3" fontSize="1.1vw" mb="1vh">
            {ad.name}
          </Heading>
          <Divider></Divider>
          <Flex flexWrap="wrap" alignItems="baseline">
            <Text
              color="teal"
              fontWeight="semibold"
              fontSize="0.8vw"
              mr="0.5vw"
            >
              {ad.location}
            </Text>
            <Text color="teal" fontWeight="bold" fontSize="1vw">
              {ad.city}
            </Text>
          </Flex>
        </Box>
        <Text
          textAlign="justify"
          lineHeight="center"
          mt={2}
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
          mt={4}
          onClick={props.zoom}
        >
          See in details
        </Button>
      </Flex>
    </Flex>
  );
};

export default Ad;
