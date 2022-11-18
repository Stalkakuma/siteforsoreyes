import { FC } from "react";
import {
  VStack,
  Heading,
  Text,
  Link as ChakraLink,
  Box,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
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
    <AccordionItem border={"none"} align={"start"} as={VStack}>
      <Box ml={-5}>
        <AccordionButton>
          <AccordionIcon />
          <Heading as={"h3"}>{title}</Heading>
          <AccordionIcon />
        </AccordionButton>
      </Box>
      <AccordionPanel align={"start"} w={"100%"} as={VStack}>
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
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Step;
