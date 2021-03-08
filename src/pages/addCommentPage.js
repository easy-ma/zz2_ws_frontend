import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import AddCommentForm from "../components/ui/form/addCommentForm";
import { useMediaQuery } from "@chakra-ui/react";

const AddCommentPage = (props) => {
  const { user } = props;
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Flex flexDirection="column" justifyContent="space-around" h="70%">
      <Heading textAlign="center" w="100%" as="H2">
        {" "}
        Hi {user?.name ?? "Six balles"}, you are about to add a comment !
      </Heading>
      <Flex
        flexDirection="row"
        w="80vw"
        h="auto"
        mt={10}
        justifyContent="center"
      >
        <Image
          maxW={isLargerThan1280 ? "50vw" : "0"}
          src="/comment.jpg"
        ></Image>
        <Flex
          flexDirection="row"
          shadow="xl"
          w={isLargerThan1280 ? "30vw" : "100%"}
          justifyContent="space-around"
          ml={6}
          borderRadius="5%"
        >
          <AddCommentForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddCommentPage;
