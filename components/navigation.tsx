import {
  Text,
  VStack,
  HStack,
  Heading,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import Breadcrumbs from "./breadcrumbs";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navigation = () => {
  const { data: session, status } = useSession();

  return (
    <Flex
      maxW={"none"}
      position={"sticky"}
      top={0}
      bg={"#1a1c23"}
      bgImage="none"
      justify={"center"}
    >
      <HStack
        w={"100%"}
        maxW={"container.xl"}
        maxH={"50px"}
        justifyContent={"space-between"}
      >
        <Breadcrumbs />
        <Box>
          {!session ? (
            <Link href="api/auth/signin">
              <Button size={"sm"} variant={"solid"}>
                {"Login"}
              </Button>
            </Link>
          ) : (
            <Text>logge</Text>
          )}
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navigation;
