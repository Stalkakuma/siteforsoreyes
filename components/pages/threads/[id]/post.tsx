import { Image, Text, VStack, HStack, Heading, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ForumData } from "types/types";
const { v4: uuidv4 } = require("uuid");

const Post: FC<ForumData> = ({ threadData }: ForumData) => {
  threadData.body;
  const postText = threadData.body.split("\n");
  return (
    <Flex
      w={"100%"}
      marginInlineStart={"0px"}
      marginInlineEnd={"0px"}
      flexDirection={"column"}
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
            </VStack>
            <VStack spacing={3} align={"start"}>
              {postText.map((paragraph) => {
                if (!paragraph) {
                  return <Text key={uuidv4()}>{"\n"}</Text>;
                }
                return (
                  <Text color={"rgba(255,255,255,0.8)"} key={uuidv4()}>
                    {paragraph}
                  </Text>
                );
              })}
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Post;
