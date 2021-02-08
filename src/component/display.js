import React, { useState } from "react";
import {
  IconButton,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Display(props) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div calss="wrapperDisplay">
      <div class="search">
        <InputGroup size="md">
          <Input
            value={value}
            onChange={handleChange}
            pr="4.5rem"
            type="text"
            placeholder="search"
          />
          <InputRightElement width="4.5rem">
            <IconButton
              icon={<SearchIcon />}
              variant="outline"
              colorScheme="blackalpha"
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </div>
      <div class="result">
        <p>{value}</p>
      </div>
    </div>
  );
}
