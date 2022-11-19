import {
  Container,
  List,
  ListItem,
  Heading,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
} from "@chakra-ui/react";
import Step from "components/pages/guidepage/step";
import InteractSection from "components/pages/guidepage/interact";
import { useState } from "react";

const Guide = ({ likes }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <InteractSection
        likes={likes}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
      <Container
        maxW={"container.lg"}
        bg={"#37618a"}
        rounded={"lg"}
        border={{ base: "10px solid", md: "50px solid" }}
        borderColor={{ base: "blackAlpha.600", md: "blackAlpha.600" }}
        py={5}
        px={{ base: 2, md: 10 }}
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem border={"none"}>
            <Flex justify={"center"}>
              <Box>
                <AccordionButton _hover={{ bg: "none" }}>
                  <Heading
                    as={"h2"}
                    size={{ base: "md", md: "xl" }}
                    py={10}
                    _hover={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
                  >
                    {"Let's setup Minecraft!"}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
            </Flex>
            <AccordionPanel>
              <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple>
                <List spacing={{ base: 4, md: 8 }}>
                  <ListItem>
                    <Step
                      title={"Install or Update your TLauncher!"}
                      textOne={"If you don't already have it, here's a "}
                      linkOne={"https://tlauncher.org/en/"}
                      linkOneName={"link"}
                    />
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"Login to your account!"}
                      textOne={
                        "Before we continue, TLauncher is going to ask you to login most likely. I personally use microsoft account, because Minecraft is cheap and awesome and most importantly that way you can use skins! You are free to use TLauncher account otherwise."
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"Install Fabric 1.19.2!"}
                      textOne={
                        "In your TLauncher select Fabric and install it. Fabric will help us run a few mods. For clarity, I'm adding a picture bellow:"
                      }
                      imageOne={"/minecraft1.png"}
                      imageOneAlt={"Fabric"}
                    />
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"Download Mods!"}
                      textOne={
                        "I understand that not everyone wants to mod, but these two mods are for PERFORMANCE. Yes, up to 200% better fps! It will especially help if you are playing on potato laptop. Here are links to "
                      }
                      linkOne={
                        "https://www.curseforge.com/minecraft/mc-mods/optifabric/download"
                      }
                      linkOneName={"OptiFabric"}
                      textTwo={" and "}
                      linkTwo={"https://optifine.net/downloads"}
                      linkTwoName={" Optifine"}
                      textThree={
                        ". Just click download on both of them and we will use them in the next step."
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"Install mods!"}
                      textOne={
                        "In your TLauncher click on a open folder icon( I'm attaching a picture bellow for clarity ). This will open your Minecraft folder. Once there Navigate to a folder named mods and move the TWO FILES we just downloaded there."
                      }
                      imageOne={"/minecraft2.png"}
                      imageOneAlt={"Folder"}
                      additionalTextOne={"End result should look like this:"}
                      imageTwo={"/minecraft3.png"}
                      imageTwoAlt={"End result"}
                    />
                  </ListItem>
                </List>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
          <Text py={7} px={8}>
            {
              "For the basic guide, this should be it! You can play Minecraft now with hopefully a good performance. The next steps are OPTIONAL."
            }
          </Text>
          <AccordionItem border={"none"}>
            <Flex justify={"center"}>
              <Box>
                <AccordionButton _hover={{ bg: "none" }}>
                  <Heading
                    as={"h2"}
                    size={{ base: "md", md: "xl" }}
                    py={10}
                    _hover={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
                  >
                    {"Join my Server!"}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
            </Flex>
            <AccordionPanel>
              <List spacing={{ base: 4, md: 8 }}>
                <ListItem>
                  <Step
                    title={"Add Server!"}
                    textOne={
                      "This one is pretty straight forward. With your Minecraft open, click MULTIPLAYER and then ADD SERVER... You should be greeted to a screen similar to this:"
                    }
                    imageOne={"/minecraft7.png"}
                    imageOneAlt={"Add Server"}
                    additionalTextOne={
                      "For server name enter anything you want, this will just help you find it. As for server address I'm providing it bellow:"
                    }
                    additionalTextTwo={"192.168.1.13:25565"}
                  />
                </ListItem>
                <ListItem>
                  <Step
                    title={"Join it!"}
                    textOne={
                      "Click done and after that You should be able to see the server in the servers list:"
                    }
                    imageOne={"/minecraft8.png"}
                    imageOneAlt={"added server"}
                    additionalTextOne={
                      "Just select it and click JOIN SERVER... Hope to see you there!"
                    }
                  />
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={"none"}>
            <Flex justify={"center"}>
              <Box>
                <AccordionButton _hover={{ bg: "none" }}>
                  <Heading
                    as={"h2"}
                    size={{ base: "md", md: "xl" }}
                    py={10}
                    _hover={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
                  >
                    {"Let's setup Shaders"}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
            </Flex>
            <AccordionPanel>
              <Accordion allowMultiple>
                <List spacing={{ base: 4, md: 8 }}>
                  <ListItem>
                    <Text px={4}>
                      {
                        "To take full advantage of Optifine we can setup shaders. This will make your game look significantly better, but at the cost of FPS. So only follow these steps if you are confident that your laptop is not a potato."
                      }
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"Download Shaders!"}
                      textOne={"You can find the list of shaders "}
                      linkOne={"https://shadersmods.com/category/shaderpacks/"}
                      linkOneName={"here"}
                      textTwo={
                        ". You can try some of them out, they range in performance costs. If you just want to download a simple yet impressive one you can try "
                      }
                      linkTwo={"https://shadersmods.com/complementary-shaders/"}
                      linkTwoName={"this"}
                      textThree={
                        ". Just click the download button and we will use the zip file in the next step."
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"Install Shaders!"}
                      textOne={
                        "I hope you still have your Minecraft folder open! If not, locate the 'Install mods!' section to see how. Now from your Minecraft directory, navigate to folder named shaderpacks. Now place the shaders zip file we just downloaded there. End result should look like this:"
                      }
                      imageOne={"/minecraft4.png"}
                      imageOneAlt={"shaders folder"}
                    />
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"Setup Shaders!"}
                      textOne={
                        "For this next and last step, we have to launch minecraft. Once it's loaded navigate to OPTIONS... and then VIDEO SETTINGS... Once there we should see SHADERS... option, let's click on it. We should see a screen similar to this:"
                      }
                      imageOne={"/minecraft5.png"}
                      imageOneAlt={"shaders in options"}
                      additionalTextOne={
                        "Now click one on the shader you downloaded(as indicated by the orange arrow in the picture above). This might make your game lag out, but it's just unpacking your shaders, so don't panic and don't frantically click, just wait a bit. Now click Done and..."
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <Step
                      title={"You're done!"}
                      textOne={
                        "This is it, you can now play Minecraft with shaders. There are a lot of options for shaders:"
                      }
                      imageOne={"/minecraft6.png"}
                      imageOneAlt={"shader options"}
                      additionalTextOne={
                        "But I don't really know what they do, I just usually leave it all on default. Feel free to experiment and let me know if you find out something interesting!"
                      }
                    />
                  </ListItem>
                </List>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
      <InteractSection
        likes={likes}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
    </>
  );
};

export default Guide;
