import React, { useState } from "react";
import { Button, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Register from "./register";
import AddConnected from "./addConnected";

export default function TurradHeader() {
  console.log("WTF");
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className="wrapperHeader">
      <div className="homeMenu">
        <Button
          colorScheme="blackalpha"
          variant="outline"
          leftIcon={<HamburgerIcon></HamburgerIcon>}
        >
          Menu
        </Button>
      </div>
      <div className="title">
        <Heading as="h1" colorScheme="purple" size="4xl" isTruncated>
          Turradgiver
        </Heading>
      </div>
      <div className="rightCOnnected">
        {isConnected == false ? (
          <Register></Register>
        ) : (
          <AddConnected></AddConnected>
        )}
      </div>
    </div>
  );
}
