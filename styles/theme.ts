import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Nerko One', sans-serif`,
    body: `'Noto Sans', Helvetica, Arial, sans-serif`,
  },
  colors: {
    tableColor: {
      100: "#595959",
    },
  },
  styles: {
    global: {
      html: {
        lineHeight: "tall",
        overflowY: "scroll",
        overflowX: "hidden",
      },
      body: {
        fontSize: { base: "sm", md: "lg" },
        color: "#000",
        overflow: "hidden",
        backgroundColor: "rgba(242, 242, 242, 0.6)",
      },
    },
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "red.500",
        _dark: "red.400",
      },
      secondary: {
        default: "red.800",
        _dark: "red.700",
      },
    },
  },
});
export default theme;
