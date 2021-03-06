import React from "react";
import {
  Flex,
  Image,
  Heading,
  Text,
  Box,
  Divider,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Advice from "../advice";

const ad = {
  imgSrc: "images/card_Example.jpg",
  title: "Not so confy basement",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dudummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinmmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply ce the 1500s.",
  adress: "56 Madison Avenue",
  city: "New York",
  rate: 3,
};

const comment1 = {
  name: "djo lopez",
  title: "le sang de ses morts",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  rate: 1,
};

const RateNcomments = (props) => {
  return (
    <>
      <Box h="10*" margin="10px">
        <Heading as="h3" fontSize="1.1vw" mb="1vh">
          {" "}
          Rating and comments{" "}
        </Heading>
        <Divider></Divider>
      </Box>

      <Flex flexDirection="column">
        <Flex flexWrap="wrap" alignItems="baseline">
          <Text margin="10px" color="teal" fontWeight="bold" fontSize="1vw">
            {" "}
            Global rating:{" "}
          </Text>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                margin="2px"
                key={i}
                color={i < ad.rate ? "gold" : "grey"}
              />
            ))}
        </Flex>
        <Box>
          <Flex>
            <Text margin="10px" color="teal" fontWeight="bold" fontSize="1vw">
              {" "}
              Comments:{" "}
            </Text>
            <Spacer />
            <Button bg="teal" size="sm">
              Add a comment
            </Button>
          </Flex>
        </Box>
        <Advice
          name={comment1.name}
          title={comment1.title}
          description={comment1.description}
          rate={comment1.rate}
        />
        <Advice
          name={comment1.name}
          title={comment1.title}
          description={comment1.description}
          rate={comment1.rate}
        />
      </Flex>
    </>
  );
};

export default RateNcomments;
