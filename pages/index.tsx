import { Container, chakra, shouldForwardProp, Flex } from "@chakra-ui/react";
import Layout from "components/layout";
import Link from "next/link";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
  return (
    <Layout>
      <Container size={"container.lg"} flexDirection={"column"}>
        <Flex py={20} justify={"center"}>
          <Link href="/forum">
            <ChakraBox
              initial={{
                opacity: 0.5,
                perspective: 800,
                rotateY: 25,
                scale: 0.9,
                rotateX: 10,
              }}
              whileHover={{
                opacity: 1,
                perspective: 800,
                rotateY: 0,
                translateY: -20,
                scale: 1,
                rotateX: 10,
              }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              boxShadow={"dark-lg "}
              rounded={"lg"}
              px={10}
              py={6}
              border={"4px"}
              borderColor={"#79d4ff"}
              bg={"#006fb2"}
            >
              Visit Forum
            </ChakraBox>
          </Link>
        </Flex>
      </Container>
    </Layout>
  );
}
