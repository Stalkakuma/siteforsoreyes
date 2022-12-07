import {
  Avatar,
  AvatarGroup,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { FC, useState } from "react";
import { ForumData } from "types/types";
import { capitalizeFirstLetter, formatDate } from "utils/conversions";

const ThreadCell: FC<ForumData> = ({ threadData }) => {
  const [isActive, setIsActive] = useState(false);
  const dateOfCreation = formatDate(threadData.createdAt as Date);
  const capitalisedTitle = capitalizeFirstLetter(threadData.title as string);
  const filterUniqueUsers = () => {
    const key = "name";
    const users = threadData.posts.map((post) => post.author);
    const filteredUsers = [
      ...new Map(users.map((user) => [user[key], user])).values(),
    ];
    return filteredUsers;
  };
  const uniqueUsers = filterUniqueUsers();
  return (
    <Flex
      aria-label={threadData.title.toString()}
      tabIndex={0}
      border={isActive ? "2px solid #fff" : "2px solid #485F78"}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      px={{ base: 0, md: 4 }}
      py={{ base: 4, md: 6 }}
      bg={"#fff"}
      flexDirection={"column"}
      boxShadow={isActive ? "-2px -1px 4px 2px #ff422a" : "2px 1px #485F78"}
      rounded={"xl"}
      gap={{ base: 4, md: 8 }}
      transition={"ease 0.009s"}
      _hover={{ cursor: "pointer" }}
    >
      <Heading
        color={isActive ? "#ff422a" : null}
        mb={{ base: 0, md: 10 }}
        alignSelf={"center"}
        as={"h2"}
        fontSize={"3xl"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
      >
        {capitalisedTitle}
      </Heading>

      <VStack>
        <Flex
          boxShadow={"-2px -1px 10px 4px #7898ab"}
          p={1}
          rounded={"full"}
          bg={"#f5f8fa"}
        >
          <Avatar
            size={"md"}
            src={threadData.author.image}
            name={threadData.author.name}
          />
        </Flex>
        <Flex
          px={6}
          py={2}
          rounded={"xl"}
          border={"dashed 1px #c9c7c7"}
          flexDirection={"column"}
          align={"center"}
        >
          <Text fontSize={"xs"} color={"#394A71"}>
            {"Author"}
          </Text>
          <Text fontSize={"md"} fontWeight={"300"}>
            {threadData.author.name}
          </Text>
        </Flex>
      </VStack>

      <VStack
        boxShadow={"xl"}
        rounded={"xl"}
        bg={"rgba(207, 236, 239, 0.8)"}
        mx={10}
        px={6}
        py={4}
        justify={"space-between"}
      >
        <Flex px={12} py={2} rounded={"xl"} flexDir={"column"} align={"center"}>
          <Text fontSize={"xs"} color={"#394A71"}>
            {"Published"}
          </Text>
          <Text color={"#3D4C4F"}>{dateOfCreation}</Text>
        </Flex>
        <Flex px={12} py={2} rounded={"xl"} flexDir={"column"} align={"center"}>
          <Text fontSize={"xs"} color={"#394A71"}>
            {"Replies"}
          </Text>
          <HStack>
            <ChatIcon boxSize={3.5} color={"blackAlpha.400"} />
            <Text>{threadData.posts.length + 1}</Text>
            <AvatarGroup gap={1.2} max={3} size={"sm"}>
              {uniqueUsers.map((user) => (
                <Avatar key={user.name} name={user.name} src={user.image} />
              ))}
            </AvatarGroup>
          </HStack>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ThreadCell;
