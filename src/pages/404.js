import { Center, Heading, VStack } from "@chakra-ui/react";
import Flip from "react-reveal/Flip";
import RubberBand from "react-reveal/RubberBand";

const NotFoundPage = () => {
  return (
    <Center>
      <VStack>
        <Heading fontSize="15rem" p="0" m="0">
          <Flip left cascade big>
            404
          </Flip>
        </Heading>
        <Heading p="0" m="0">
          <RubberBand bottom cascade>
            Page not found
          </RubberBand>
        </Heading>
      </VStack>
    </Center>
  );
};

export default NotFoundPage;
