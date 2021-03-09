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
import { StarIcon } from "@chakra-ui/icons";
import Advice from "../advice";
import NavPage from "../nextpage/navPage";
import requester from "../../../../Requester";
import RLink from "../../links/routerLink";
import { useAuth } from "../../../../helpers/auth";

const ad = {
  imgSrc: "images/card_Example.jpg",
  title: "Not so confy basement",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dudummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinmmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply ce the 1500s.",
  adress: "56 Madison Avenue",
  city: "New York",
  rate: 3,
};

const comment1 = {
  name: "djo lopez",
  title: "le sang de ses morts",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  rate: 1,
};

const comment2 = {
  name: "djo lopez",
  title: "le sang de ses morts",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  rate: 2,
};

const comment3 = {
  name: "djo lopez",
  title: "le sang de ses morts",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  rate: 3,
};

const comment4 = {
  name: "djo lopez",
  title: "le sang de ses morts",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  rate: 4,
};

const comment5 = {
  name: "djo lopez",
  title: "le sang de ses morts",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  rate: 5,
};

const comments = [comment1, comment2, comment3, comment4, comment5];

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return action.maxPage === state ? state : state + 1;
    case "decrement":
      return state === 1 ? state : state - 1;
    default:
      throw new Error();
  }
}

const RateNcomments = (props) => {
  const { endPoint, params } = props;
  const [rates, setRates] = useState([]);
  const [pageNumber, dispatch] = useReducer(reducer, 1);
  useEffect(() => {
    requester.get(endPoint, { page: pageNumber, ...params }).then((res) => {
      if (res.success) {
        setRates([...rates, ...res.data]);
      } else {
        console.error("Error");
      }
    });
  }, [pageNumber]); //effet de bord: élement créant une dépendance de l'output
  const maxPage = 3; //Math.ceil(MaxComments/2);
  const maxComments = 5; //res.length
  const user = useAuth().user;
  return (
    <>
      <Box h="10*" margin="10px">
        <Heading as="h3" fontSize="1.1vw" mb="1vh">
          {" "}
          Rating and comments{" "}
        </Heading>
        <Divider></Divider>
      </Box>

      <Flex flexDirection="column">
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
                color={i < ad.rate ? "gold" : "grey"}
              />
            ))}
        </Flex>
        <Box>
          <Flex>
            <Text margin="10px" color="teal" fontWeight="bold" fontSize="1vw">
              {" "}
              Comments:{" "}
            </Text>
            <Spacer />
            {user && (
              <RLink to="/comment/add">
                <Button bg="teal" size="sm">
                  Add a comment
                </Button>
              </RLink>
            )}
          </Flex>
        </Box>
        <Advice
          name={comments[2 * (pageNumber - 1)].name}
          title={comments[2 * (pageNumber - 1)].title}
          description={comments[2 * (pageNumber - 1)].description}
          rate={comments[2 * (pageNumber - 1)].rate}
        />
        {maxPage === pageNumber && maxComments % 2 !== 0 ? null : (
          <Advice
            name={comments[2 * (pageNumber - 1) + 1].name}
            title={comments[2 * (pageNumber - 1) + 1].title}
            description={comments[2 * (pageNumber - 1) + 1].description}
            rate={comments[2 * (pageNumber - 1) + 1].rate}
          />
        )}
      </Flex>
      <NavPage
        maxPage={maxPage}
        pageNumber={pageNumber}
        zoom={props.zoom}
        dispatch={dispatch}
      />
    </>
  );
};

export default RateNcomments;
