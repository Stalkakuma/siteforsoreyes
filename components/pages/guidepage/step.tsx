import { FC } from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Link as ChakraLink,
  ListIcon,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import GuideImage from "./guide-image";

interface StepProps {
  title: string;
  textOne: string;
  textTwo?: string;
  textThree?: string;
  additionalTextOne?: string;
  linkOne?: string;
  linkOneName?: string;
  linkTwo?: string;
  linkTwoName?: string;
  imageOne?: string;
  imageOneAlt?: string;
  imageTwo?: string;
  imageTwoAlt?: string;
}

const Step: FC<StepProps> = ({
  title,
  textOne,
  textTwo,
  textThree,
  additionalTextOne,
  linkOne,
  linkOneName,
  linkTwo,
  linkTwoName,
  imageOne,
  imageOneAlt,
  imageTwo,
  imageTwoAlt,
}) => {
  return (
    <VStack align={"start"}>
      <HStack>
        <ListIcon as={ChevronDownIcon} />
        <Heading as={"h3"}>{title}</Heading>
      </HStack>
      <Text alignSelf={"center"}>
        {textOne}
        {linkOne && (
          <ChakraLink
            isExternal={true}
            color={"blue.400"}
            as={Link}
            href={linkOne}
          >
            {linkOneName}
          </ChakraLink>
        )}
        {textTwo}
        {linkTwo && (
          <ChakraLink
            isExternal={true}
            color={"blue.400"}
            as={Link}
            href={linkTwo}
          >
            {linkTwoName}
          </ChakraLink>
        )}
        {textThree}
      </Text>
      {imageOne && (
        <Box alignSelf={"center"}>
          <GuideImage imageLocation={imageOne} imageAlt={imageOneAlt} />
        </Box>
      )}
      {additionalTextOne && <Text>{additionalTextOne}</Text>}
      {imageTwo && (
        <Box alignSelf={"center"}>
          <GuideImage imageLocation={imageTwo} imageAlt={imageTwoAlt} />
        </Box>
      )}
    </VStack>
  );
};

export default Step;
