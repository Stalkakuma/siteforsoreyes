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
    <Flex
      align={"center"}
      w={"100%"}
      border={"6px #000"}
      py={8}
      px={20}
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

    // <Stack px={{ base: 0, md: 8 }} spacing={{ base: 2, md: 8 }}>
    //   <Heading as={"h2"}>{"Welcome to the Forum"}</Heading>
    //   <Box>
    //     <AddNewThreadForm />
    //   </Box>
    //   <TableContainer>
    //     <Table size={"sm"} colorScheme={"tableColor"} variant="simple">
    //       <Thead>
    //         <Tr>
    //           <Th py={6} color={"whiteAlpha.700"}>
    //             {"Topic"}
    //           </Th>
    //           <Th color={"whiteAlpha.700"}>{"Author"}</Th>
    //           <Th color={"whiteAlpha.700"}>{"Replies"}</Th>
    //           <Th color={"whiteAlpha.700"}>{"Published"}</Th>
    //         </Tr>
    //       </Thead>
    //       <Tbody>
    //         {threads?.map((thread: ForumDataTypes) => {
    //           return (
    //             <Tr
    //               _hover={{ bg: "rgba(221,221,221,0.1)" }}
    //               style={{ cursor: "pointer" }}
    //               onClick={(e) => handleVisitThread(e, thread.id)}
    //               key={thread.id}
    //               w={"100%"}
    //             >
    //               <Td w={{ base: "40%", md: "90%" }} maxW={{ base: 0 }}>
    //                 <HStack>
    //                   <Heading
    //                     as={"h3"}
    //                     fontSize={"lg"}
    //                     p={{ base: 1, md: 4 }}
    //                     overflow={"hidden"}
    //                     textOverflow={"ellipsis"}
    //                     whiteSpace={"nowrap"}
    //                     fontFamily={`'Roboto', Helvetica, Arial, sans-serif`}
    //                   >
    //                     {capitalizeFirstLetter(thread.title as string)}
    //                   </Heading>
    //                 </HStack>
    //               </Td>
    //               <Td w={{ base: "20%", md: "20%" }} maxW={0}>
    //                 <Text>{authorsFirstName(thread.author.name)}</Text>
    //               </Td>
    //               <Td w={{ base: "20%", md: "40%" }} maxW={0}>
    //                 <HStack justify={"center"}>
    //                   <ChatIcon color={"blue.500"} />
    //                   <Text>{thread.posts.length}</Text>
    //                 </HStack>
    //               </Td>
    //               <Td w={{ base: "20%", md: "40%" }}>
    //                 <Text
    //                   overflow={"hidden"}
    //                   textOverflow={"ellipsis"}
    //                   whiteSpace={"nowrap"}
    //                 >
    //                   {formatThreadDate(thread.createdAt)}
    //                 </Text>
    //               </Td>
    //             </Tr>
    //           );
    //         })}
    //       </Tbody>
    //     </Table>
    //   </TableContainer>
    // </Stack>
  );
};

export default ForumPageComponent;
