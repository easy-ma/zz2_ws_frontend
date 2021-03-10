import React,{useState,useEffect} from "react";
import Ad from "../components/ui/ads/ad/ad";
import RatesAndComments from "../components/ui/advices/ratesAndComments/ratesAndComments";
import { Flex, Box } from "@chakra-ui/react";
import requester from "../Requester"

const AdDetailPage = (props) => {
  const [adDetailed,setAdDetailed] = useState({}); 

  console.log(props.location.pathname.split('/')[2]);
  useEffect(()=>{
    requester.get(`/ads/${props.location.pathname.split('/')[2]}`).then((res) => {
      if (res.success) {
        setAdDetailed(res.data);
      } else {
        console.error("Request problem");
      }
    });
  },[])

  return (
    <Flex justifyContent="center">
      <Ad detailed ad={adDetailed}/>
      <Box bg="" w="40%" p={4}>
        <RatesAndComments endPoint="/rates" />
      </Box>
    </Flex>
  );
};

export default AdDetailPage;
