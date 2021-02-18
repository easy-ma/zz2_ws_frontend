import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export default function AddConnected(props) {
  return (
    <div className="connected">
      <IconButton
        icon={<AddIcon w={6} h={6} />}
        variant="outline"
        colorScheme="blackalpha"
      ></IconButton>
    </div>
  );
}
