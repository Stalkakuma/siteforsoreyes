import { Flex } from "@chakra-ui/react";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Flex as={"main"} w={"100%"} flexDirection={"column"} py={10}>
        {children}
      </Flex>
    </>
  );
};
export default Layout;
