import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";
import RLink from "../components/ui/links/routerLink";
import { Button, Box, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Ads from "../components/ui/ads/ads";

const ProfilePage = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <Box>
      <Box position="absolute" top="10vh" right="5vw">
        <RLink to="/ads/add">
          <Button>
            Create an ad
            <AddIcon ml="1vw" />
          </Button>
        </RLink>
      </Box>
      <Heading as="h2" position="absolute" top="20vh" left="42.5vw" w="15vw">
        {" "}
        This is your ads
      </Heading>
      <Box position="absolute" top="30vh" left="30vw" w="40vw">
        <SearchInput handleChange={handleChange} value={value} />
      </Box>
      <Box>
        <p>{value}</p>
      </Box>
      <Ads params={{ search: value }} endPoint="/user/ads" auth></Ads>
    </Box>
  );
};

export default ProfilePage;
