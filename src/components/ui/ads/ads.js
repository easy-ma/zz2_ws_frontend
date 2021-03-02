import React, { useState,useEffect,useReducer } from "react";
import Slider from "./slider/slider"
import requester from "../../../Requester"

const  ad = {
    imgSrc: "images/card_Example.jpg",
    title :"Not so confy basement" , 
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
    adress:"56 Madison Avenue",
    city : "New York"
};

const  ad2 = {
    imgSrc: "https://news.airbnb.com/wp-content/uploads/sites/4/2019/10/Romania-A-Airbnb-20-for-2020-2.jpg",
    title :"Roof top on the Cross" , 
    description:" Come to see our beatifull view (bring a sleeping bag)", 
    adress:"23 rue du bonheur",
    city : "Ambert"
};

const  ad3 = {
    imgSrc: "https://a0.muscache.com/im/pictures/3853d9c2-daf1-45f9-84f8-c73f60deea99.jpg",
    title : "Right on the top of NY" , 
    description:" Must-visit shops, eateries & sights are right on your doorstep.Smart design & refined style flow throughout this contemporary atmosphere.", 
    adress:"5 Madison Avenue",
    city : "New York"
};

const  ad4 = {
    imgSrc: "https://a0.muscache.com/im/pictures/miso/Hosting-46500242/original/bf661f58-6e1e-42fb-b9dd-b92f7a7b1b6d.jpeg",
    title : "Right on the top of NY" , 
    description:" Must-visit shops, eateries & sights are right on your doorstep.Smart design & refined style flow throughout this contemporary atmosphere.", 
    adress:"5 Madison Avenue",
    city : "New York"
};

const page1 = [ad,ad,ad,ad];
const page2 = [ad2,ad2,ad2,ad2];
const page3 = [ad3,ad3,ad3,ad3];
const page4 = [ad4,ad4,ad4,ad4];

const pages = {page1,page2,page3,page4}

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
    const {endPoint,params} = props;
    const [ads, setAds] = useState([]);
    const [pageNumber, dispatch] = useReducer(reducer, 1);
    
    useEffect(() => {
        requester.get({endPoint},{page:pageNumber,...params})
        .then( res => {
            if(res.success){
                setAds([...ads,...res.data]);
            }
            else{
                console.error("WTF IS HAPPENING IN THE BACKEND???")
            }
        })
      },[endPoint,pageNumber,params,ads]);
    console.log(pages[`page${pageNumber}`]);
    return (
        // <Slider dispatch={dispatch} leftButton={ads[pageNumber-2] !== undefined} rightButton={ads[pageNumber] !== undefined} ads={ads[pageNumber-1]}  />
        <Slider dispatch={dispatch} leftButton={pages[`page${pageNumber - 1}`] !== undefined} rightButton={pages[`page${pageNumber + 1}`] !== undefined}  ads={pages[`page${pageNumber}`]} />
    );
};

export default Ads;