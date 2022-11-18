import { chakra, shouldForwardProp } from "@chakra-ui/react";
import Link from "next/link";
import { motion, isValidMotionProp } from "framer-motion";
import { useMediaQuery } from "lib/queries/media-query";

const ChakraBoxComponent = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraBox = ({ href, title, bgColor, bordColor }) => {
  const screenIsSmall = useMediaQuery(600);
  const animation = screenIsSmall
    ? { opacity: 1, scale: 1 }
    : {
        opacity: 1,
        perspective: 800,
        rotateY: 0,
        translateY: -20,
        scale: 1,
        rotateX: 10,
      };
  const initial = screenIsSmall
    ? { scale: 0.9, perspective: 0, rotateY: 0, rotateX: 0, opacity: 0.5 }
    : {
        opacity: 0.5,
        perspective: 800,
        rotateY: 25,
        scale: 0.9,
        rotateX: 10,
      };

  return (
    <Link href={href}>
      <ChakraBoxComponent
        initial={initial}
        whileHover={animation}
        whileTap={animation}
        // @ts-ignore no problem in operation, although type error appears.
        transition={
          screenIsSmall
            ? { duration: 0.0001 }
            : {
                duration: 0.6,
                ease: "easeInOut",
              }
        }
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
