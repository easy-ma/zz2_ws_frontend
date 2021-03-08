import {
  IconButton,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState} from "react";

const SearchInput = ({ value, handleChange }) => {

    const [timer, setTimer] = useState(null);
    const [previousText, setPreviousText] = useState("");

    const debounceChange = (e) => {
        if (previousText !== e.target.value) {
            clearTimeout(timer);
            const timeoutId = setTimeout(() => handleChange(e.target.value), 1000);
            setTimer(timeoutId);
            setPreviousText(e.target.value);
        }
    }

  return (
    <InputGroup size="md">
      <Input
        onChange={debounceChange}
        pr="15rem"
        type="text"
        placeholder="search"
      />
      <InputRightElement width="3rem">
        <IconButton
          h="2rem"
          size="sm"
          icon={<SearchIcon />}
          variant="outline"
          colorScheme="blackalpha"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
