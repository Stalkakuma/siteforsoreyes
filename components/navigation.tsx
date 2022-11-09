import {
  Text,
  VStack,
  HStack,
  Heading,
  Flex,
  Box,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import Head from "next/head";
import Breadcrumbs from "./breadcrumbs";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navigation = () => {
  const { data: session, status } = useSession();

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
          <PopoverHeader>Settings</PopoverHeader>
          <PopoverBody>
            <Button onClick={() => signOut()}>{"Logout"}</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  };

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
            <UserAvatar />
          )}
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navigation;
