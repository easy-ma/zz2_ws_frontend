import { Grid, Box, ListItem, UnorderedList, Divider } from "@chakra-ui/react";

const Footer = ({ flex }) => {
  return (
    <Grid
      flex={flex}
      maxW="full"
      width="full"
      bg="telegram.200"
      color="white"
      padding="1rem"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <Box>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Box>
      <Divider orientation="vertical" />
      <Box>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Box>
      <Divider orientation="vertical" />
      <Box>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Box>
    </Grid>
  );
};

export default Footer;
