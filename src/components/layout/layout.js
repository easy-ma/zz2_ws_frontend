import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import { useAuth } from "../../helpers/auth";

const Layout = ({ isHome, children }) => {
  const { loading } = useAuth();
  return (
    <>
      {!loading && (
        <Flex flexDirection="column" flexFlow="column">
          <Header />
          <Flex minHeight="90vh" justifyContent="center" alignItems="center">
            {children}
          </Flex>
          <Footer />
        </Flex>
      )}
    </>
  );
};

export default Layout;
