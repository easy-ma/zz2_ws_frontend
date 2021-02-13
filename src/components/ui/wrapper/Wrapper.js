import { Box, SimpleGrid, GridItem, Text, Heading } from "@chakra-ui/react";
import ImagesCard from "../cards/imagesCard";

const Test = ({ images, title, desc, children }) => {
  return (
    <Box px={8} py={24} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 10 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <GridItem
          colSpan={{ base: "auto", lg: 6 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Heading
            mb={4}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight={{ base: "shorter", md: "none" }}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            {title}
          </Heading>
          <Text
            mb="2rem"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="gray.500"
            letterSpacing="wider"
          >
            {desc}
          </Text>
          <ImagesCard images={images} />
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 4 }}>{children}</GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Test;
