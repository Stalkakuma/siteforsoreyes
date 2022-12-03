import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "components/button";

const theme = extendTheme({
  components: {
    Button: buttonTheme,
  },

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
        height: "100vh",
        overflow: "hidden",
      },
      body: {
        fontSize: { base: "sm", md: "lg" },
        color: "#000",
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarGutter: "auto",
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
