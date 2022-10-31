import {
  Avatar,
  Box,
  Stack,
  Text,
  Flex,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { FC } from "react";
import { format } from "date-fns";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { ForumData } from "types/types";

const Post: FC<ForumData> = ({ threadData }) => {
  const postedDate = format(new Date(threadData.createdAt), "MM/dd/yyyy");
  const authorNode = () => {
    return (
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Avatar name={threadData.author.name} src={threadData.author.image} />
        <Flex justify={"space-between"} w={"100%"}>
          <Text fontWeight="bold">{threadData.author.name}</Text>
          <Text fontWeight="500">{postedDate}</Text>
        </Flex>
      </Stack>
    );
  };

  const bodyNode = () => {
    return (
      <VStack>
        <Flex>
          <Heading as={"h3"} fontSize={"lg"} p={4}>
            {threadData.title}
          </Heading>
        </Flex>
        <Flex></Flex>
      </VStack>
    );
  };

  return (
    <NextLink href={`/threads/${threadData.id}`} passHref>
      <Box
        as={motion.div}
        shadow="lg"
        rounded="lg"
        whileHover={{ scale: 1.05 }}
      >
        <Stack spacing={0}>
          {bodyNode()}
          {authorNode()}
        </Stack>
      </Box>
    </NextLink>
  );
};

export default Post;
