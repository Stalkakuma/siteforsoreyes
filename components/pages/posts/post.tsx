import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

import { PostData } from "types/types";

const Post: FC<PostData> = ({ post }) => {
  const authorNode = () => {
    return (
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Avatar name={post.author.name} src={post.author.image} />
        <Stack>
          <Text fontWeight="bold">{post.author.name}</Text>
        </Stack>
      </Stack>
    );
  };

  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {post.title}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>
        {authorNode()}
        {bodyNode()}
      </Stack>
    </Box>
  );
};

export default Post;
