import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";
import RLink from "../components/ui/links/routerLink";
import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Ads from "../components/ui/ads/ads";
import BigAd from "../components/ui/ads/ad/bigAd";
import { Flex, Box } from "@chakra-ui/react";
import RateNcomments from "../components/ui/advices/rateNcomments/rateNcomments";
import { useAuth } from "../helpers/auth";

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
        <div className="wrapperDisplay">
          {user && (
            <RLink to="/ads/add">
              <IconButton aria-label="Add ad" icon={<AddIcon />} />
            </RLink>
          )}
          <div className="search">
            <SearchInput handleChange={handleChange} value={value} />
          </div>
          <Ads params={{ search: value }} endPoint="/ads"></Ads>
        </div>
      ) : (
        <Flex fex>
          <BigAd />
          <Box bg="" w="40%" p={4}>
            <RateNcomments zoom={zoom} endPoint="/rates/get-all" />
          </Box>
        </Flex>
      )}
    </>
  );
}
