import {
  Box,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Text,
  HStack,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ForumDataTypes } from "types/types";
import AddNewThreadForm from "./add-new-thread-form";
import { useRouter } from "next/router";
import ThreadCell from "./thread-cell";

const ForumPageComponent = ({ threads }) => {
  const router = useRouter();

  const handleVisitThread = (e, threadId: string) => {
    e?.preventDefault();
    router.push(`${process.env.NEXT_PUBLIC_VERCEL_URL}/threads/${threadId}`);
  };

  return (
    <>
      <Flex py={20} justify={"center"} bg={"black"} align={"center"} w={"100%"}>
        <Heading fontSize={"7xl"} color={"white"} as={"h1"}>
          Join in the conversation!
        </Heading>
      </Flex>
      <Flex
        align={"center"}
        w={"100%"}
        py={8}
        bgImage={"/gridBackground.jpg"}
        flexDirection={"column"}
        backgroundSize={"contain"}
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={5} maxW={"container.xl"}>
          {threads?.map((thread: ForumDataTypes) => (
            <GridItem
              key={thread.id}
              onClick={(e) => handleVisitThread(e, thread.id)}
            >
              <ThreadCell threadData={thread} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default ForumPageComponent;
