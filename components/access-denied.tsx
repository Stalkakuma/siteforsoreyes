import { Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "./layout";

const AccessDeniedScreen = () => {
  return (
    <Layout>
      <Flex flexDirection={"column"} align={"center"}>
        <Heading color={"error"} as={"h2"}>
          {"Access Denied"}
        </Heading>
        <Button size={"sm"} variant={"solid"}>
          <Link href={"/"}>{"Go Back"}</Link>
        </Button>
      </Flex>
    </Layout>
  );
};

export default AccessDeniedScreen;
