import React, { useState,useEffect,useReducer } from "react";
import Slider from "./slider/slider"
import requester from "../../../Requester"



function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state -1;
      default:
        throw new Error();
    }
  }

const Ads = (props) => {
    const {endPoint,params,auth} = props;
    const [ads, setAds] = useState([]);
    const [pageNumber, dispatch] = useReducer(reducer, 1);
    
    useEffect(() => {
        requester.get(endPoint,{page:pageNumber,...params},auth)
        .then( res => {
            if(res.success){
                setAds([...ads,...res.data]);
            }
            else{
                console.error("Request problem");
            }
        })
      },[endPoint,pageNumber,params,ads,auth]);
    return (
         <Slider dispatch={dispatch} leftButton={ads[pageNumber-2] !== undefined} rightButton={ads[pageNumber] !== undefined} ads={ads[pageNumber-1]}  />
        );
};

export default Ads;