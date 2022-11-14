import { HStack, Flex, Box, Button } from "@chakra-ui/react";
import Breadcrumbs from "./breadcrumbs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import UserPanel from "./user-panel";

const Navigation = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <Flex
      maxW={"none"}
      position={"sticky"}
      top={0}
      bg={"#2e3033"}
      bgImage="none"
      justify={"center"}
      zIndex={5000}
      py={1}
      border={"2px"}
      borderColor={"rgba(255,255,255,0.15)"}
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
            <Button
              size={"sm"}
              variant={"solid"}
              onClick={() => router.push("/api/auth/signin")}
            >
              {"Login"}
            </Button>
          ) : (
            <UserPanel />
          )}
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navigation;
