import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import layerStyles from "./layerStyles";
import Button from "./components/button";
import colors from "./colors";

const overrides = {
  colors,
  styles,
  layerStyles: layerStyles,
  components: {
    Button,

    // Other components go here
  },
};

export default extendTheme(overrides);
