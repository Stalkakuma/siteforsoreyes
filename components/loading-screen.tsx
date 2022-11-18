import { Flex, Spinner } from "@chakra-ui/react";
import { FC } from "react";

interface LoadingScreenProps {
  size?: string;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ size }) => {
  return (
    <Flex w={"100%"} justify={"center"}>
      <Spinner
        thickness="8px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size={size ? size : "xl"}
      />
    </Flex>
  );
};

export default LoadingScreen;
