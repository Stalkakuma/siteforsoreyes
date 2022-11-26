import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "components/button";

const theme = extendTheme({
  components: {
    Button: buttonTheme,
  },

  fonts: {
    heading: `'Roboto', Helvetica, Arial, sans-serif`,
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
        color: "#fff",
        minHeight: "100%",
        height: "100vh",
        overflow: "scroll",
        scrollbarWidth: "none",
        "&::MsOverflowStyle": "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        backgroundColor: "#231a13",
        backgroundImage: "url('/background.jpg')",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
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
