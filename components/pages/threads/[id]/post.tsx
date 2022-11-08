import {
  Box,
  Image,
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
    <Container
      marginInlineStart={"0px"}
      marginInlineEnd={"0px"}
      maxW={"container.lg"}
    >
      {threadData.title ? (
        <Heading size={"2xl"} py={8}>
          {threadData.title}
        </Heading>
      ) : null}
      <VStack
        align={"start"}
        w={"100%"}
        borderBottom={"solid 1px gray"}
        py={10}
      >
        <HStack align={"top"} gap={4}>
          <Image
            h={"100px"}
            borderRadius="xl"
            src={threadData.author.image}
            alt={threadData.author.name}
          />
          <VStack gap={10} align={"start"} w={"100%"}>
            <VStack align={"start"}>
              <Text>{threadData.author.name}</Text>
              <Text>{threadData.author.email}</Text>
            </VStack>
            <Text>{threadData.body}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Post;
