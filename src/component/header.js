import React, { useState } from "react";
import { Button, IconButton, Heading } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";

export default function TurradHeader() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div class="wrapperHeader">
      <div class="homeMenu">
        <Button
          colorScheme="blackalpha"
          variant="outline"
          leftIcon={<HamburgerIcon></HamburgerIcon>}
        >
          Menu
        </Button>
      </div>
      <div class="title">
        <Heading as="h1" colorScheme="purple" size="4xl" isTruncated>
          Turradgiver
        </Heading>
      </div>
      <div class="rightCOnnected">
        {isConnected == false ? (
          <div class="register">
            <div class="signIn">
              <Button colorScheme="blackalpha" size="md" variant="ghost">
                Sign in
              </Button>
            </div>
            <div class="signUp">
              <Button colorScheme="blackalpha" size="md" variant="ghost">
                Sign up
              </Button>
            </div>
          </div>
        ) : (
          <div class="connected">
            <IconButton
              icon={<AddIcon w={6} h={6} />}
              variant="outline"
              colorScheme="blackalpha"
            ></IconButton>
          </div>
        )}
      </div>
    </div>
  );
}
