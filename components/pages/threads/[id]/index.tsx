import { Box, VStack, Text, Flex, Button } from "@chakra-ui/react";
import { FC } from "react";
import { ForumData } from "types/types";
import AddNewPostForm from "../../posts/add-new-post-form";
import Post from "./post";

const ThreadPageComponent: FC<ForumData> = ({ threadData }) => {
  return (
    <VStack w={"100%"}>
      {!threadData ? <Text>Loading...</Text> : <Post threadData={threadData} />}
      {threadData?.posts.map((post) => (
        <Box key={post.id}>
          <Post threadData={post} />
        </Box>
      ))}
      <AddNewPostForm />
    </VStack>
  );
};

export default ThreadPageComponent;
