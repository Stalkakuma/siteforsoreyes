import {
  HStack,
  Flex,
  Box,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import Breadcrumbs from "./breadcrumbs";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  //TODO stop avatar from flickering
  // Possibly retrieve user data from Database
  const UserAvatar = () => {
    return (
      <Popover colorScheme={"blackAlpha"}>
        <PopoverTrigger>
          <Avatar
            size={"sm"}
            cursor={"pointer"}
            src={session.user.image}
            name={session.user.name}
          />
        </PopoverTrigger>
        <PopoverContent
          alignItems={"center"}
          bg={"blackAlpha.600"}
          zIndex={5000}
          maxWidth={"150px"}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>{"Settings"}</PopoverHeader>
          <PopoverBody>
            <Button onClick={() => signOut()}>{"Logout"}</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  };
  //End TODO
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
            <Button
              size={"sm"}
              variant={"solid"}
              onClick={() => router.push("/api/auth/signin")}
            >
              {"Login"}
            </Button>
          ) : (
            <UserAvatar />
          )}
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navigation;
