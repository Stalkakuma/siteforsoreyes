import {
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

const GuideImage = ({ imageLocation, imageAlt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        _hover={{
          cursor: "pointer",
          transform: `scale(1.2)`,
          transition: "all .25s ease",
        }}
        width={"150px"}
        src={imageLocation}
        alt={imageAlt}
        onClick={onOpen}
      />
      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image
              _hover={{
                cursor: "pointer",
              }}
              src={imageLocation}
              alt={imageAlt}
              onClick={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GuideImage;
