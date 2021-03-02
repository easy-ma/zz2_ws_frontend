import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";
import RLink from "../components/ui/links/routerLink";
import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Ads from "../components/ui/ads/ads"


export default function HomePage(props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
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
        <Ads searchValue={value} endPoint="/ads/get-all"></Ads>
    </div>
  );
}
