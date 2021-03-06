import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";
import RLink from "../components/ui/links/routerLink";
import { Center, HStack, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Ads from "../components/ui/ads/ads";
import ImagesCard from "../components/ui/cards/imagesCard";

import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";

import NavPage from "../components/ui/advices/nextpage/navPage";
import BigAd from "../components/ui/ads/ad/bigAd";
import RateNcomments from "../components/ui/advices/rateNcomments/rateNcomments";

export default function HomePage(props) {
  const [value, setValue] = useState("");
  const [isZoom, setIsZoom] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  function zoom() {
    setIsZoom(!isZoom);
  }

  return (
    <>
      {!isZoom ? (
        <div className="wrapperDisplay">
          <RLink to="/ads/add">
            <IconButton aria-label="Search database" icon={<AddIcon />} />
          </RLink>
          <div className="search">
            <SearchInput handleChange={handleChange} value={value} />
          </div>
          <div className="result">
            <p>{value}</p>
          </div>
          <Ads zoom={zoom} searchValue={value} endPoint="/ads/get-all"></Ads>
        </div>
      ) : (
        <Flex fex>
          <BigAd />
          <Box bg="" w="40%" p={4}>
            <RateNcomments />
            <NavPage zoom={zoom} />
          </Box>
        </Flex>
      )}
    </>
  );
}
