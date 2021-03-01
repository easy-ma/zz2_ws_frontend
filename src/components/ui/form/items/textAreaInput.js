import { Textarea, FormControl, FormLabel } from "@chakra-ui/react";

const TextareaInput = (props) => {
  return (
    <FormControl id={props.id} marginBottom="1rem">
      <FormLabel>{props?.label}</FormLabel>
      <Textarea {...props} />
    </FormControl>
  );
};

export default TextareaInput;
