import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import savePost from "../../../lib/mutations/save-post";
import fetchPosts from "lib/queries/fetch-posts";
import queryClient from "lib/clients/react-query";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "react-query";

const AddNewPostForm = () => {
  const [title, setTitle] = useState("");
  const { data: session, status } = useSession();
  const { refetch } = useQuery("posts", fetchPosts);
  const mutation = useMutation(savePost, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("posts");
      refetch();
    },
  });

  //TODO implement Login
  if (!session) {
    return <div>Not Authenticated.</div>;
  }

  const handleSubmit = () => {
    const data = {
      title,
      author: {
        connect: { email: session.user.email },
      },
    };
    mutation.mutate(data);

    if (!mutation.error) {
      setTitle("");
    }
  };

  return (
    <Stack spacing={4}>
      <Box p={4} shadow="lg" rounded="lg">
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="body">What is on your mind?</FormLabel>
            <Textarea
              id="body"
              value={title}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setTitle(e.currentTarget.value)
              }
            />
          </FormControl>
          <FormControl>
            <Button
              loadingText="Posting..."
              onClick={handleSubmit}
              isDisabled={!title.trim()}
            >
              Post
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddNewPostForm;
