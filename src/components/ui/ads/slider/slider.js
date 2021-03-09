import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Ad from "../ad/ad";

import Fade from "react-reveal/Fade";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Slider = (props) => {
  const { ads, dispatch, leftButton, rightButton } = props;
  const [left, setLeft] = useState(true);
  return (
    <Flex mt="150px" justifyContent="center" w="80vw" alignItems="center">
      {leftButton ? (
          <ArrowLeftIcon
            zIndex="1000"
            fontSize="2vw"
            color="teal"
            onClick={() => {
              dispatch({ type: "decrement" });
              setLeft(true);
            }}
            ></ArrowLeftIcon>
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
          <ArrowRightIcon
            color="teal"
            fontSize="2vw"
            onClick={() => {
              dispatch({ type: "increment" });
              setLeft(false);
            }}
            >
          </ArrowRightIcon>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Slider;
