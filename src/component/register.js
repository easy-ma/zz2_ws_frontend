import React from "react";
import { Button } from "@chakra-ui/react";

export default function Register(props) {
  return (
    <div className="register">
      <div className="signIn">
        <Button colorScheme="blackalpha" size="md" variant="ghost">
          Sign in
        </Button>
      </div>
      <div className="signUp">
        <Button colorScheme="blackalpha" size="md" variant="ghost">
          Sign up
        </Button>
      </div>
    </div>
  );
}
