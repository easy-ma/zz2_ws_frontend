import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ isHome, children }) => {
  return (
    <Flex flexDirection="column" flexFlow="column">
      <Header />
      <Flex minHeight="90vh" justifyContent="center" alignItems="center">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
