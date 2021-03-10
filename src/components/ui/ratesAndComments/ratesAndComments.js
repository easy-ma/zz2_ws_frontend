import React, { useReducer, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Divider,
  Button,
  Spacer,
} from "@chakra-ui/react";
import Rate from "./rate/rate"

import Comments from "./Comments/comments";
import NavPage from "./NavButtons/navButtons";
import requester from "../../../Requester";
import RLink from "../links/routerLink";
import { useAuth } from "../../../helpers/auth";


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

const fetchPage = (endpoint, pageNumber, setState) => {
  requester.get(endpoint, { page: pageNumber}).then((res) => {
    if (res.success) {
      setState((state) => ({
        ...state,
        [pageNumber]: res.data,
      }));
    } else {
      console.error("Request problem");
    }
  });
};

const RateNcomments = (props) => {
  const { endPoint, ad } = props;
  const [comments, setComments] = useState({});
  const [pageNumber, dispatch] = useReducer(reducer, 1);
  

  useEffect(() => {
    
    fetchPage(`${endPoint}/${ad.id}`, 1, setComments);
  }, [endPoint,ad]);
  
  useEffect(() => {
    
    fetchPage(`${endPoint}/${ad.id}`, pageNumber + 1, setComments);
  }, [endPoint,pageNumber,ad]); 


  const user = useAuth().user;
  return (
    <>
      <Box h="10*" margin="10px">
        <Heading as="h3" fontSize="1.1vw" mb="1vh">
          Rating and comments
        </Heading>
        <Divider></Divider>
      </Box>

      <Flex flexDirection="column">
        <Rate rate={ad.rate}></Rate>
        <Box>
          <Flex>
            <Text margin="10px" color="teal" fontWeight="bold" fontSize="1vw">
              Comments:
            </Text>
            <Spacer />
            {user && (
              <RLink to={`/comment/add/${ad.id}`}>
                <Button bg="teal" size="sm">
                  Add a comment
                </Button>
              </RLink>
            )}
          </Flex>
        </Box>
        <Comments comments={comments[pageNumber]}/>
      </Flex>
      <NavPage
      dispatch={dispatch}
      leftButton={comments[pageNumber - 1]?.length > 0}
      RightButton={comments[pageNumber + 1]?.length > 0}

      />
    </>
  );
};

export default RateNcomments;
