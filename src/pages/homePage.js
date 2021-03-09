import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";
import RLink from "../components/ui/links/routerLink";
import { AddIcon } from "@chakra-ui/icons";
import Ads from "../components/ui/ads/ads";
import BigAd from "../components/ui/ads/ad/bigAd";
import { Flex, Box, Button } from "@chakra-ui/react";
import RateNcomments from "../components/ui/advices/rateNcomments/rateNcomments";
import { useAuth } from "../helpers/auth";
import { authLinks } from "../links";

export default function HomePage(props) {
  const [value, setValue] = useState("");
  const [isZoom, setIsZoom] = useState(false);
  const { user } = useAuth();

  const handleChange = (val) => {
    setValue(val);
  };

  const zoom = () => {
    setIsZoom(!isZoom);
  };

  return (
    <>
      {!isZoom ? (
        <Box>
          {user ? (
            <Box position="absolute" top="10vh" right="5vw">
              <RLink to="/ads/add">
                <Button>
                  Create an ad
                  <AddIcon ml="1vw" />
                </Button>
              </RLink>
            </Box>
          ) : (
            ""
          )}

          <Box position="absolute" top="20vh" left="30vw" w="40vw">
            <SearchInput handleChange={handleChange} value={value} />
          </Box>
          <Ads params={{ search: value }} endPoint="/ads"></Ads>
        </Box>
      ) : (
        <Flex>
          <BigAd />
          <Box bg="" w="40%" p={4}>
            <RateNcomments zoom={zoom} endPoint="/rates/get-all" />
          </Box>
        </Flex>
      )}
    </>
  );
}
