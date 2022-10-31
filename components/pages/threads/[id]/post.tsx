import {
  Avatar,
  Text,
  VStack,
  HStack,
  Container,
  Heading,
} from "@chakra-ui/react";
import { FC } from "react";
import { ForumData } from "types/types";

const Post: FC<ForumData> = ({ threadData }: ForumData) => {
  return (
    <Container maxW={"container.lg"}>
      <VStack w={"100%"} shadow="lg" rounded="lg" py={10}>
        <HStack align={"top"} justify={"start"} maxW={"xl"} w={"100%"}>
          <Avatar name={threadData.author.name} src={threadData.author.image} />
          <VStack w={"100%"}>
            <Text>{threadData.author.name}</Text>
            <Heading>{threadData.title}</Heading>
            <Text>{threadData.body}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Post;
