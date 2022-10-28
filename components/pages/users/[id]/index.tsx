import { Avatar, Box, Grid, Stack, Text } from "@chakra-ui/react";
import Post from "./post";

const UsersPageComponent = ({ user }) => {
  const authorNode = () => {
    return (
      <Stack spacing={4} isInline alignItems="center">
        <Avatar name={user?.name} src={user?.image} />
        <Stack>
          <Text fontWeight="bold" fontSize="4xl">
            {user?.name}
          </Text>
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack spacing={8}>
      {authorNode()}
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {user?.posts.map((post) => {
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

export default UsersPageComponent;
