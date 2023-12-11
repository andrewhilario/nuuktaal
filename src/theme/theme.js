import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const thick = defineStyle({
  borderWidth: "1px", // change the width of the border
  borderStyle: "solid", // change the style of the border
  borderColor: "#4C4E52" // set border radius to 10
});

export const dividerTheme = defineStyleConfig({
  variants: { thick }
});

const theme = extendTheme({
  fonts: {
    // heading: `'Brandon Grot W01 Regular'`,
    body: `'Brandon Grot W01 Regular', sans-serif`
  },
  components: {
    Divider: dividerTheme
  }
});

export default theme;
