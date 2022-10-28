import { Box, Stack, Text } from "@chakra-ui/react";

const Post = ({ post }) => {
  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {post.title}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>{bodyNode()}</Stack>
    </Box>
  );
};

export default Post;
