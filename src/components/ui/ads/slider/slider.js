import { Flex, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Ad from "../ad/ad";

import Fade from "react-reveal/Fade";
// import Flip from 'react-reveal/Flip'

const Slider = (props) => {
  const { ads, dispatch, leftButton, rightButton } = props;
  const [left, setLeft] = useState(true);

  return (
    <Flex mt="150px" justifyContent="center" w="80vw">
      {leftButton ? (
        <Button
          zIndex="1000"
          onClick={() => {
            dispatch({ type: "decrement" });
            setLeft(true);
          }}
        >
          {" "}
          {"<<"}{" "}
        </Button>
      ) : (
        ""
      )}
      <Fade left={left} right={!left} spy={ads}>
        {ads?.map((ad) => (
          <Ad ad={ad} zoom={props.zoom}></Ad>
        ))}
      </Fade>
      {rightButton ? (
        <Button
          onClick={() => {
            dispatch({ type: "increment" });
            setLeft(false);
          }}
        >
          {" "}
          {">>"}{" "}
        </Button>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default Slider;
