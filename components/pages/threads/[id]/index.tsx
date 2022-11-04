import { Box, VStack, Text, Flex, Button } from "@chakra-ui/react";
import { FC } from "react";
import { ForumData } from "types/types";
import AddNewPostForm from "../../posts/add-new-post-form";
import Post from "./post";

const ThreadPageComponent: FC<ForumData> = ({ threadData }) => {
  return (
    <VStack w={"100%"} alignItems={"start"} overflowY={"scroll"}>
      <Post threadData={threadData} />
      {threadData?.posts.map((post) => (
        // <VStack w={"100%"} key={post.id}>
        <Post key={post.id} threadData={post} />
        // </VStack>
      ))}
      <AddNewPostForm id={threadData.id} />
    </VStack>
  );
};

export default ThreadPageComponent;
