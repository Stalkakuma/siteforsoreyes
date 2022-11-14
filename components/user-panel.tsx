import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { useCurrentUser } from "lib/states/user-context";
import { signOut } from "next-auth/react";

const UserPanel = () => {
  const userData = useCurrentUser();
  return (
    <Popover colorScheme={"blackAlpha"}>
      <PopoverTrigger>
        <Avatar
          ignoreFallback
          size={"sm"}
          cursor={"pointer"}
          src={userData.userInfo?.image}
          name={userData.userInfo?.name}
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

export default UserPanel;
