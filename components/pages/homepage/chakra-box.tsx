import { chakra, shouldForwardProp } from "@chakra-ui/react";
import Link from "next/link";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBoxComponent = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox = ({ href, title, bgColor, bordColor }) => {
  return (
    <Link href={href}>
      <ChakraBoxComponent
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
        borderColor={bordColor}
        bg={bgColor}
      >
        {title}
      </ChakraBoxComponent>
    </Link>
  );
};

export default ChakraBox;
