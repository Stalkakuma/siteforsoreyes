import { Container, Flex } from "@chakra-ui/react";
import ChakraBox from "./chakra-box";

const Categories = () => {
  return (
    <Container size={"container.lg"} flexDirection={"column"}>
      <Flex flexDirection={"column"} gap={10} py={20} align={"center"}>
        <ChakraBox
          title={"Visit Forum"}
          href={"/threads"}
          bgColor={"#006fb2"}
          bordColor={"#79d4ff"}
        />
        <ChakraBox
          title={"Minecraft Setup Guide"}
          href={"/guide"}
          bgColor={"#045707"}
          bordColor={"#6da36f"}
        />
      </Flex>
    </Container>
  );
};

export default Categories;
