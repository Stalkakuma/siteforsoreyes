import { Flex, Spinner } from "@chakra-ui/react";
import Layout from "./layout";

const LoadingScreen = () => {
  return (
    <Layout>
      <Flex w={"100%"} justify={"center"}>
        <Spinner
          thickness="8px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </Layout>
  );
};

export default LoadingScreen;
