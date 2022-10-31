import { Box, Grid, Stack } from "@chakra-ui/react";
import Thread from "./thread";
import { ForumDataTypes } from "types/types";
import AddNewPostForm from "./add-new-thread-form";

const ForumPageComponent = ({ threads }) => {
  return (
    <Stack spacing={8}>
      <Box>
        <AddNewPostForm />
      </Box>
      <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
        {threads?.map((thread: ForumDataTypes) => {
          return (
            <Box key={thread.id}>
              <Thread threadData={thread} />
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default ForumPageComponent;
