import React from "react";
import BigAd from "../components/ui/ads/ad/bigAd";
import RateNcomments from "../components/ui/advices/rateNcomments/rateNcomments";
import { Flex, Box } from "@chakra-ui/react";

const adFocusPage = (props) => {
  return (
    <Flex>
      <BigAd />
      <Box bg="" w="40%" p={4}>
        <RateNcomments endPoint="/rates" />
      </Box>
    </Flex>
  );
};

export default adFocusPage;
