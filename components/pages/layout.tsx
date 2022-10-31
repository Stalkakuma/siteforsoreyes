import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container maxW={"container.xl"} py={10}>
      {children}
    </Container>
  );
};
export default Layout;
