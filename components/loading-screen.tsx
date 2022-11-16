import { Flex, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <Flex w={"100%"} justify={"center"}>
      <Spinner
        thickness="8px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};

export default LoadingScreen;
