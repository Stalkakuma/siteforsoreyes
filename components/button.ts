import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const unavailable = defineStyle({
  border: "1px solid",
  borderRadius: "base",
  borderColor: "gray.400",
  bg: "gray.600",
  _hover: {
    transition:
      "color 200ms,fill 200ms,background-color 200ms,border-color 200ms",
    borderColor: "#79d4ff",
    bg: "gray.600",
  },
});

const solid = defineStyle({
  border: "1px solid",
  borderRadius: "base",
  borderColor: "#00aeff",
  fontWeight: "bold",
  bg: "#006fb2",
  _hover: {
    transition:
      "color 200ms,fill 200ms,background-color 200ms,border-color 200ms",
    borderColor: "#79d4ff",
    bg: "#007bc6",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { solid, unavailable },
});
