import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import CreateAdForm from "../components/ui/form/createAdForm";
import { useMediaQuery } from "@chakra-ui/react";

const AddPage = (props) => {
  const { user } = props;
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Flex flexDirection="column" justifyContent="space-around" h="70%">
      <Heading textAlign="center" w="100%" as="h2">
        {" "}
        Hi {user?.name ?? "Six balles"}, you are about to add a place !
      </Heading>
      <Flex
        flexDirection="row"
        w="80vw"
        h="auto"
        mt={10}
        justifyContent="center"
      >
        <Image maxW={isLargerThan1280 ? "40vw" : "0"} src="/add.png"></Image>
        <Flex
          flexDirection="row"
          shadow="xl"
          w={isLargerThan1280 ? "30vw" : "100%"}
          justifyContent="space-around"
          ml={6}
          borderRadius="5%"
        >
          <CreateAdForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddPage;
