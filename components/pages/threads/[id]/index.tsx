import { HStack, VStack, IconButton, Container } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import AddNewPostForm from "../../posts/add-new-post-form";
import deleteThread from "lib/mutations/delete-thread";
import fetchThreads from "lib/queries/fetch-threads";
import queryClient from "lib/clients/react-query";
import { useMutation, useQuery } from "react-query";
import { ForumData } from "types/types";
import LoadingScreen from "components/loading-screen";
import Post from "./post";
import { useCurrentUser } from "lib/states/user-context";

const ThreadPageComponent: FC<ForumData> = ({ threadData }) => {
  const { refetch } = useQuery("threads", fetchThreads);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const userData = useCurrentUser();
  const canUserDelete =
    userData?.userInfo?.role === "ADMIN" ||
    userData?.userInfo?.id === threadData.authorId;

  const mutation = useMutation(deleteThread, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("threads");
      refetch();
      router.back();
    },
  });

  const removeThread = (threadId: string) => {
    setIsLoading(true);
    mutation.mutate(threadId);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <Container maxW={"container.lg"}>
      <VStack w={"100%"} alignItems={"start"}>
        <Post threadData={threadData} />
        {threadData.posts.map((post) => (
          <Post key={post.id} threadData={post} />
        ))}
        <HStack px={10} w={"100%"} spacing={8} justify={"space-between"}>
          <AddNewPostForm id={threadData.id} />
          {canUserDelete ? (
            <IconButton
              onClick={() => removeThread(threadData.id)}
              aria-label="Delete Thread"
              icon={<DeleteIcon />}
            />
          ) : null}
        </HStack>
      </VStack>
    </Container>
  );
};

export default ThreadPageComponent;
