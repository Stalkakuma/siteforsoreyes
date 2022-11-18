import {
  Container,
  List,
  ListItem,
  Heading,
  Text,
  Accordion,
} from "@chakra-ui/react";
import Layout from "components/layout";
import Step from "components/pages/guidepage/step";

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
        <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple>
          <List spacing={8}>
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
