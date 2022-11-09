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
} from "@chakra-ui/react";
import { ForumDataTypes } from "types/types";
import AddNewThreadForm from "./add-new-thread-form";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { ChatIcon } from "@chakra-ui/icons";

const ForumPageComponent = ({ threads }) => {
  const router = useRouter();
  const formatPostDate = (createdDate: Date) => {
    return format(new Date(createdDate), "MM/dd/yyyy");
  };

  const handleVisitThread = (e, threadId: string) => {
    e?.preventDefault();
    router.push(`/threads/${threadId}`);
  };

  return (
    <Stack px={8} spacing={8}>
      <Heading as={"h2"}>{"Welcome to the Forum"}</Heading>
      <Box>
        <AddNewThreadForm />
      </Box>
      <TableContainer>
        <Table size={"sm"} colorScheme={"tableColor"} variant="simple">
          <Thead>
            <Tr>
              <Th py={6} color={"whiteAlpha.700"}>
                {"Topic"}
              </Th>
              <Th color={"whiteAlpha.700"}>{"Author"}</Th>
              <Th color={"whiteAlpha.700"}>{"Replies"}</Th>
              <Th color={"whiteAlpha.700"}>{"Published"}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {threads?.map((thread: ForumDataTypes) => {
              return (
                <Tr
                  _hover={{ bg: "rgba(221,221,221,0.1)" }}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleVisitThread(e, thread.id)}
                  key={thread.id}
                >
                  <Td>
                    <Heading as={"h3"} fontSize={"lg"} p={4}>
                      {thread.title}
                    </Heading>
                  </Td>
                  <Td>
                    <Text>{thread.author.name}</Text>
                  </Td>
                  <Td>
                    <HStack>
                      <ChatIcon color={"blue.500"} />
                      <Text>{thread.posts.length}</Text>
                    </HStack>
                  </Td>
                  <Td>
                    <Text>{formatPostDate(thread.createdAt)}</Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ForumPageComponent;
