import { Container } from "@chakra-ui/react";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navigation /> */}
      <Container maxW={"container.xl"} py={10}>
        <main>{children}</main>
      </Container>
    </>
  );
};
export default Layout;
