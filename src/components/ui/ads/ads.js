import React, { useState, useEffect, useReducer } from "react";
import Slider from "./slider/slider";
import requester from "../../../Requester";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 1;
    default:
      throw new Error();
  }
}

const fetchPage = (endpoint, pageNumber, params, auth, setState) => {
  requester.get(endpoint, { page: pageNumber, ...params }, auth).then((res) => {
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

const Ads = (props) => {
  const { endPoint, params, auth } = props;

  const [ads, setAds] = useState({});
  const [pageNumber, dispatch] = useReducer(reducer, 1);
  const [lastParams, setlastParams] = useState(params);

  useEffect(() => {
    fetchPage(endPoint, 1, params, auth, setAds);
  }, [endPoint, params, auth]);

  useEffect(() => {
    if (lastParams !== params) {
      dispatch({ type: "reset" });
      setlastParams(params);
    }
    fetchPage(endPoint, pageNumber + 1, params, auth, setAds);
  }, [endPoint, pageNumber, params, auth, lastParams]);

  return (
    <Slider
      dispatch={dispatch}
      leftButton={ads[pageNumber - 1]?.length > 0}
      rightButton={ads[pageNumber + 1]?.length > 0}
      ads={ads[pageNumber]}
    />
  );
};

export default Ads;
