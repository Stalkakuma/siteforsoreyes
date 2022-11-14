import { VStack } from "@chakra-ui/react";
import LoadingScreen from "components/loading-screen";
import { FC } from "react";
import { ForumData } from "types/types";
import AddNewPostForm from "../../posts/add-new-post-form";
import Post from "./post";

const ThreadPageComponent: FC<ForumData> = ({ threadData }) => {
  if (!threadData) {
    return <LoadingScreen />;
  }
  return (
    <VStack w={"100%"} alignItems={"start"}>
      <Post threadData={threadData} />
      {threadData.posts.map((post) => (
        <Post key={post.id} threadData={post} />
      ))}
      <AddNewPostForm id={threadData.id} />
    </VStack>
  );
};

export default ThreadPageComponent;
