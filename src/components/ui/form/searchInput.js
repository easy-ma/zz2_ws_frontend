import {
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";

const SearchInput = () => {
  return (
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
  );
};
