import { Input as In, FormControl, FormLabel } from "@chakra-ui/react";

const ControlInput = (props) => {
  return (
    <FormControl id={props.id} marginBottom="1rem">
      <FormLabel>Email address</FormLabel>
      <In {...props} />
    </FormControl>
  );
};

export default ControlInput;
