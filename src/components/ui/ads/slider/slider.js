import { Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import Ad from "../ad/ad";

import Fade from "react-reveal/Fade";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Slider = (props) => {
  const { ads, dispatch, leftButton, rightButton } = props;
  const [left, setLeft] = useState(true);

  return (
    <Flex mt="150px" justifyContent="center" w="80vw" alignItems="center">
      {leftButton ? (
        <IconButton
          zIndex="1000"
          icon={<ArrowBackIcon />}
          onClick={() => {
            dispatch({ type: "decrement" });
            setLeft(true);
          }}
        ></IconButton>
      ) : (
        ""
      )}
      <Fade left={left} right={!left} spy={ads}>
        <Flex>
          {ads?.map((ad) => (
            <Ad key={ad.id} ad={ad}></Ad>
          ))}
        </Flex>
      </Fade>
      {rightButton ? (
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={() => {
            dispatch({ type: "increment" });
            setLeft(false);
          }}
        >
          {" "}
          {">>"}{" "}
        </IconButton>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Slider;
