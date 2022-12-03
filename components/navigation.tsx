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
      position={"sticky"}
      top={0}
      bg={"#fff"}
      justify={"center"}
      zIndex={5000}
    >
      <Flex
        w={"100%"}
        maxW={{ base: "sm", md: "container.xl" }}
        justifyContent={"space-between"}
      >
        <Breadcrumbs />
        <Box alignSelf={"center"}>
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
      </Flex>
    </Flex>
  );
};

export default Navigation;
