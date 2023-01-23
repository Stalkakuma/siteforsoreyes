import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { ButtonProps } from "types/types";

const Button: FC<ButtonProps> = ({
  href,
  isLink,
  buttonText,
  icon,
  disabled,
}) => {
  return (
    <Flex
      cursor={"pointer"}
      mr={0}
      href={href ? href : null}
      as={isLink ? Link : null}
      _after={{
        transition: "ease 0.2s",
        clipPath: "polygon(100% 0,0 100%,0 100%,100% 100%)",
        content: '""',
        background: disabled ? "#000" : "#d43517",
        height: "100%",
        width: "100%",
        display: "block",
        position: "absolute",
        left: "0",
        top: "0",
      }}
      _hover={{
        _after: {
          clipPath: disabled ? null : "polygon(100% 100%,0 0,0 100%,100% 100%)",
        },
      }}
      position="relative"
      p={25}
      w={"100%"}
      bg={disabled ? "#bbbdbb" : "#ff422a"}
      color="#fff"
      grow={0}
      shrink={0}
    >
      {icon ? <Flex zIndex={1000}>{icon}</Flex> : null}
      <Text zIndex={1000}>{buttonText}</Text>
    </Flex>
  );
};

export default Button;
