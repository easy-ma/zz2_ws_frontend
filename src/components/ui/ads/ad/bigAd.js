import React from "react";
import { Flex, Image, Heading, Text, Box, Divider } from "@chakra-ui/react";

const ad = {
  imageURL: "images/card_Example.jpg",
  name: "Not so confy basement",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dudummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinmmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply ce the 1500s.",
  address: "56 Madison Avenue",
  city: "New York",
  rate: 3,
};

const BigAd = (props) => {
  return (
    <Flex
      w="50vw"
      h="50"
      flexDirection="column"
      boxShadow="xl"
      ml="1vw"
      mr="1vw"
      mb="5vw"
    >
      <Box w="auto" h="15%" flex="1">
        <Image w="100%" h="auto" src={ad.imageURL} overflow="scroll" />
      </Box>
      <Flex flexDirection="column" h="80%" justifyContent="space-between" p={6}>
        <Box h="50%" margin="10px">
          <Heading as="h3" fontSize="1.1vw" mb="1vh">
            {" "}
            {ad.name}{" "}
          </Heading>
          <Divider></Divider>
          <Flex flexWrap="wrap" alignItems="baseline">
            <Text
              color="teal"
              fontWeight="semibold"
              fontSize="0.8vw"
              mr="0.5vw"
            >
              {" "}
              {ad.location},{" "}
            </Text>
            <Text color="teal" fontWeight="bold" fontSize="1vw">
              {" "}
              {ad.city}{" "}
            </Text>
          </Flex>
        </Box>
        <Text
          textAlign="justify"
          lineHeight="center"
          mt={2}
          fontSize="0.7vw"
          h="75%"
        >
          {" "}
          {ad.description}{" "}
        </Text>
      </Flex>
    </Flex>
  );
};

export default BigAd;
