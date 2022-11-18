import { Flex, Container, HStack, IconButton, Text } from "@chakra-ui/react";
import HeartIcon from "../../../public/heart.svg";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import saveLike from "lib/mutations/save-like";
import fetchLikes from "lib/queries/fetch-likes";
import queryClient from "lib/clients/react-query";
import LoadingScreen from "components/loading-screen";

const InteractSection = ({ isLiked, setIsLiked, likes }) => {
  const [isLikedAgain, setIsLikedAgain] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useQuery("likes", fetchLikes);

  const mutation = useMutation(saveLike, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("likes");
      refetch();
      setIsLoading(false);
    },
  });

  const createLike = () => {
    const data = {
      item: "like",
    };
    mutation.mutate(data);
  };

  const handleLike = () => {
    if (!isLiked && !isLikedAgain) {
      setIsLoading(true);
      createLike();
      setIsLiked(true);
    }
    if (isLiked && !isLikedAgain) {
      setIsLikedAgain(true);
    }
  };
  return (
    <Container
      maxW={"container.lg"}
      bg={"white"}
      rounded={"md"}
      border={"5px solid"}
      borderColor={"blackAlpha.600"}
    >
      <Flex w={"100%"} justify={"center"}>
        <HStack>
          <Text color={!isLiked ? "blackAlpha.500" : "blackAlpha.800"}>
            {!isLiked && !isLikedAgain
              ? "Give us a Like!"
              : isLiked && !isLikedAgain
              ? "Thank You!"
              : "No take, only give!"}
          </Text>
          <IconButton
            _hover={{ bg: "none", transform: "scale(1.1)" }}
            _active={{ bg: "none" }}
            onClick={() => handleLike()}
            bg={"none"}
            border={"none"}
            aria-label="Give a Like"
            icon={<HeartIcon fill={isLiked ? "red" : "gray"} width={"30px"} />}
          />
          <Flex>
            {isLoading ? (
              <LoadingScreen size="sm" />
            ) : (
              <Text color={!isLiked ? "blackAlpha.500" : "blackAlpha.800"}>
                {likes.length}
              </Text>
            )}
          </Flex>
        </HStack>
      </Flex>
    </Container>
  );
};
export default InteractSection;
