import { Heading, Flex, Grid, GridItem } from "@chakra-ui/react";
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
      <Flex py={8} justify={"center"}>
        <AddNewThreadForm />
      </Flex>
      <Flex py={20} justify={"center"} bg={"black"} align={"center"} w={"100%"}>
        <Heading
          fontSize={{ base: "3xl", md: "7xl" }}
          color={"white"}
          as={"h1"}
        >
          Join in the conversation!
        </Heading>
      </Flex>
      <Flex
        align={{ base: "center", md: "center" }}
        py={8}
        justify={"center"}
        bgImage={"/gridBackground.jpg"}
        flexDirection={"column"}
        backgroundSize={"contain"}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 1, md: 5 }}
          w={{ base: "", md: "100%" }}
          px={{ md: 130 }}
        >
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
