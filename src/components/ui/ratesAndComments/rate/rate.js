import React from 'react';
import { Flex,Text, } from '@chakra-ui/layout';
import {StarIcon} from '@chakra-ui/icons'

const Rate = props => {
  const {rate} = props;
  return (
    <Flex flexWrap="wrap" alignItems="baseline">
          <Text margin="10px" color="teal" fontWeight="bold" fontSize="1vw">
            {" "}
            Global rating:{" "}
          </Text>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                margin="2px"
                key={i}
                color={i < rate ? "gold" : "grey"}
              />
            ))}
        </Flex>
  );
};


export default Rate;
