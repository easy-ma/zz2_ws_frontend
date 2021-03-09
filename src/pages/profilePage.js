import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";
import RLink from "../components/ui/links/routerLink";
import { IconButton, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Ads from "../components/ui/ads/ads";

const ProfilePage = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <Box>
      <RLink to="/ads/add">
        <IconButton aria-label="Search database" icon={<AddIcon />} />
      </RLink>
      <Box>
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
