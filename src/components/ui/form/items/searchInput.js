import {
  IconButton,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchInput = ({ value, handleChange }) => {
  return (
    <InputGroup size="md">
      <Input
        value={value}
        onChange={handleChange}
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
