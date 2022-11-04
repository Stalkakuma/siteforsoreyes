import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container maxW={"container.xl"} py={10}>
      <main>{children}</main>
    </Container>
  );
};
export default Layout;
