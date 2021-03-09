import { Grid, Text, Heading, Divider, GridItem } from "@chakra-ui/react";
import { useAuth } from "../../helpers/auth";

import { authLinks, unauthLinks } from "../../links";
import RLink from "../ui/links/routerLink";

const Footer = ({ flex }) => {
  const auth = useAuth();
  const links = auth.user ? authLinks : unauthLinks;
  return (
    <Grid
      bgColor="blue"
      flex={flex}
      maxW="full"
      width="full"
      height="30vh"
      layerStyle="baseLayer"
      templateColumns="repeat(12, 2fr)"
      templateRows="repeat(6, 1fr)"
      gap={0}
    >
      {/* First Column */}
      <GridItem rowStart={2} colStart={2} rowSpan={2} colSpan={1}>
        <Heading as="h3" fontSize="2xl">
          Turradgiver
        </Heading>
      </GridItem>
      <GridItem rowStart={3} colStart={2} rowSpan={2} colSpan={3}>
        <Text fontSize="md">We only provide the best for you</Text>
      </GridItem>

      {/* Second Column */}
      <GridItem rowStart={2} colStart={8} rowSpan={2} colSpan={1}>
        <Heading as="h3" fontSize="lg">
          Explore
        </Heading>
        <Divider borderColor="teal.600"></Divider>
      </GridItem>

      {links.map((link, i) => {
        return (
          <GridItem rowStart={3 + i} colStart={8} rowSpan={2} colSpan={1}>
            <RLink fontSize="sm" to={link.path}>
              {link.name}
            </RLink>
          </GridItem>
        );
      })}

      {/* Third Column */}
      <GridItem rowStart={2} colStart={10} rowSpan={2} colSpan={1}>
        <Heading as="h3" fontSize="lg">
          Legal
        </Heading>
        <Divider borderColor="teal.600"></Divider>
      </GridItem>
      <GridItem rowStart={3} colStart={10} rowSpan={2} colSpan={1}>
        <RLink fontSize="sm" to="/terms-of-services">
          Terms
        </RLink>
      </GridItem>
    </Grid>
  );
};

export default Footer;
