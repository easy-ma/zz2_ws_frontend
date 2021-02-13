import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ isHome, children }) => {
  return (
    <Flex flexDirection="column" flexFlow="column" height="full">
      <Header />
      <Flex flex="1 1 auto" justifyContent="center" alignItems="center">
        {children}
      </Flex>
      <Footer flex="0 1 auto" />
    </Flex>
  );
};

export default Layout;
