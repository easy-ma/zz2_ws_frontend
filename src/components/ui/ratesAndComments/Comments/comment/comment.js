import React from "react";
import { Flex, Heading, Text, Box, Divider } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Comment = ({comment}) => {
  return (
    <>
      <Flex
        marginBottom="2px"
        flexDirection="column"
        h="80%"
        bg="white"
        justifyContent="space-between"
        p={6}
      >
        <Box h="50%" margin="10px">
          <Heading as="h3" fontSize="1.1vw" mb="1vh">
            {comment.title}
          </Heading>
          <Divider></Divider>
          <Flex flexWrap="wrap" alignItems="baseline">
            <Text
              color="teal"
              fontWeight="semibold"
              fontSize="0.8vw"
              mr="0.5vw"
            >
              {comment.username}
            </Text>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  margin="2px"
                  key={i}
                  color={i < comment.rate ? "gold" : "grey"}
                />
              ))}
          </Flex>
        </Box>
        <Text
          textAlign="justify"
          lineHeight="center"
          mt={2}
          fontSize="0.7vw"
          h="75%"
        >
          {comment.comment}
        </Text>
      </Flex>
    </>
  );
};
export default Comment;
