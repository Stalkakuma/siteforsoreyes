import {
  Container,
  VStack,
  List,
  ListItem,
  ListIcon,
  Heading,
  HStack,
  Text,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import Layout from "components/layout";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import GuideImage from "components/pages/guidepage/guide-image";

const Guide = () => {
  return (
    <Layout>
      <Container
        maxW={"container.lg"}
        bg={"#37618a"}
        rounded={"lg"}
        py={5}
        px={10}
      >
        <Heading as={"h2"} py={10}>
          {"Let's setup Minecraft!"}
        </Heading>
        <List spacing={8}>
          <ListItem>
            <VStack align={"start"}>
              <HStack>
                <ListIcon as={ChevronDownIcon} />
                <Heading as={"h3"}>Install or Update your TLauncher!</Heading>
              </HStack>
              <Text alignSelf={"center"}>
                {`If you don't already have it, here's a `}
                <ChakraLink
                  isExternal={true}
                  color={"blue.400"}
                  as={Link}
                  href={"https://tlauncher.org/en/"}
                >
                  link
                </ChakraLink>
              </Text>
            </VStack>
          </ListItem>
          <ListItem>
            <VStack align={"start"}>
              <HStack>
                <ListIcon as={ChevronDownIcon} />
                <Heading as={"h3"}>Login to your account!</Heading>
              </HStack>
              <Text alignSelf={"center"}>
                Before we continue, TLauncher is going to ask you to login most
                likely. I personally use microsoft account, because Minecraft is
                cheap and awesome and most importantly that way you can use
                skins! You are free to use TLauncher account otherwise.
              </Text>
            </VStack>
          </ListItem>
          <ListItem>
            <VStack align={"start"}>
              <HStack>
                <ListIcon as={ChevronDownIcon} />
                <Heading as={"h3"}>Install Fabric 1.19.2!</Heading>
              </HStack>
              <Text alignSelf={"center"}>
                {
                  "In your TLauncher select Fabric and install it. Fabric will help us run a few mods. For clarity, I'm adding a picture bellow:"
                }
              </Text>
              <Box alignSelf={"center"}>
                <GuideImage
                  imageLocation="/minecraft1.png"
                  imageAlt={"Fabric Image"}
                />
              </Box>
            </VStack>
          </ListItem>
          <ListItem>
            <VStack align={"start"}>
              <HStack>
                <ListIcon as={ChevronDownIcon} />
                <Heading as={"h3"}>Download Mods!</Heading>
              </HStack>
              <Text alignSelf={"center"}>
                {`I understand that not everyone wants to mod, but these two mods are for PERFORMANCE. Yes, up to 200% better fps! It will especially help if you are playing on potato laptop. Here are links to `}
                <ChakraLink
                  isExternal={true}
                  color={"blue.400"}
                  as={Link}
                  href={
                    "https://www.curseforge.com/minecraft/mc-mods/optifabric/download"
                  }
                >
                  OptiFabric
                </ChakraLink>
                {" and "}
                <ChakraLink
                  isExternal={true}
                  color={"blue.400"}
                  as={Link}
                  href={"https://optifine.net/downloads"}
                >
                  Optifine
                </ChakraLink>
                {
                  ". Just click download on both of them and we will use them in the next step."
                }
              </Text>
            </VStack>
          </ListItem>
          <ListItem>
            <VStack align={"start"}>
              <HStack>
                <ListIcon as={ChevronDownIcon} />
                <Heading as={"h3"}>Install mods!</Heading>
              </HStack>
              <Text alignSelf={"center"}>
                {
                  "In your TLauncher click on a open folder icon( I'm attaching a picture bellow for clarity ). This will open your Minecraft folder. Once there Navigate to a folder named mods and move the TWO FILES we just downloaded there."
                }
              </Text>
              <Box alignSelf={"center"}>
                <GuideImage
                  imageLocation="/minecraft2.png"
                  imageAlt={"Folder Image"}
                />
              </Box>
              <Text>{"End result should look like this:"}</Text>
              <Box alignSelf={"center"}>
                <GuideImage
                  imageLocation="/minecraft3.png"
                  imageAlt={"End result"}
                />
              </Box>
            </VStack>
          </ListItem>
        </List>
        <Text py={7}>
          {
            "For the basic guide, this should be it! You can play Minecraft now with hopefully a good performance. The next steps are OPTIONAL."
          }
        </Text>
        <Heading as={"h2"}>{"***RESERVED FOR SERVER GUIDE***"}</Heading>
        <Heading as={"h2"}>{"***RESERVED FOR SHADERS GUIDE***"}</Heading>
        <List spacing={8}></List>
      </Container>
    </Layout>
  );
};

export default Guide;
