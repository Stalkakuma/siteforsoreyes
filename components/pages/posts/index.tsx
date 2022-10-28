import { Box, Grid, Stack } from "@chakra-ui/react";
import Post from "./post";
import { PostType } from "types/types";
import AddNewPostForm from "./add-new-post-form";

const PostsPageComponent = ({ posts }) => {
  return (
    <Stack spacing={8}>
      <Box>
        <AddNewPostForm />
      </Box>
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {posts?.map((post: PostType) => {
          return (
            <Box key={post.id}>
              <Post post={post} />
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default PostsPageComponent;
