import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";
import RLink from "../components/ui/links/routerLink";
import { AddIcon } from "@chakra-ui/icons";
import Ads from "../components/ui/ads/ads";
import {  Box, Button } from "@chakra-ui/react";
import { useAuth } from "../helpers/auth";

export default function HomePage(props) {
  const [value, setValue] = useState("");
  const [isZoom, setIsZoom] = useState(false);
  const { user } = useAuth();

  const handleChange = (val) => {
    setValue(val);
  };


  return (
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
      )
}
