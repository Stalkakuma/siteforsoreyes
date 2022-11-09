import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  background,
} from "@chakra-ui/react";
import saveThread from "../../../lib/mutations/save-thread";
import fetchThreads from "lib/queries/fetch-threads";
import queryClient from "lib/clients/react-query";
import { useSession } from "next-auth/react";
import { useMutation, useQuery } from "react-query";
import { Formik, Field } from "formik";
import { AddIcon } from "@chakra-ui/icons";
import Link from "next/link";

const AddNewThreadForm = () => {
  const { data: session, status } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { refetch } = useQuery("threads", fetchThreads);
  const mutation = useMutation(saveThread, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("threads");
      refetch();
    },
  });

  const createThread = (values) => {
    const title = values.title;
    const body = values.body;
    const data = {
      title,
      body,
      author: {
        connect: {
          email: session.user.email,
        },
      },
    };
    mutation.mutate(data);
  };
  //TODO try drawer instead of modal
  return (
    <Flex w={"100%"} justify={"end"}>
      {!session ? (
        <Link href="api/auth/signin">
          <Button size={"sm"} variant={"unavailable"}>
            {"Login to create thread"}
          </Button>
        </Link>
      ) : (
        <Button size={"lg"} gap={4} variant={"solid"} onClick={onOpen}>
          <AddIcon />
          {"New Topic"}
        </Button>
      )}

      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent
            border={"solid 1px #000"}
            bgGradient={"linear(to-b, #283244 0%, #151a23 100%)"}
            boxShadow={"0 0 0 1px #3d434f inset,0 5px 10px rgba(0,0,0,0.8)"}
            zIndex={"1000"}
            position={"fixed"}
          >
            <ModalCloseButton />
            <Stack py={7} spacing={4}>
              <Box p={4} shadow="lg" rounded="lg">
                <Formik
                  initialValues={{ title: "", body: "" }}
                  onSubmit={(values, actions) => {
                    createThread(values);
                    actions.resetForm({
                      values: {
                        title: "",
                        body: "",
                      },
                    });
                  }}
                >
                  {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                      <Stack maxH={"100%"} spacing={4} py={8}>
                        <FormControl isRequired>
                          <Box w={"50%"}>
                            <Field
                              color={"rgba(255,255,255,0.7)"}
                              bg={"rgba(0,0,0,0.3)"}
                              _hover={{ bg: "rgba(0,0,0,0.3" }}
                              as={Input}
                              id="title"
                              name="title"
                              type="text"
                              variant="filled"
                              placeholder="Type the name of your Topic"
                            />
                          </Box>
                        </FormControl>
                        <FormControl isRequired>
                          <Field
                            minH={"150px"}
                            h={"100%"}
                            resize={"none"}
                            as={Textarea}
                            id="body"
                            name="body"
                            type="text"
                            placeholder="Type your text here..."
                          />
                        </FormControl>
                        <FormControl>
                          <Button
                            variant={"solid"}
                            type="submit"
                            loadingText="Posting..."
                          >
                            Post
                          </Button>
                        </FormControl>
                      </Stack>
                    </form>
                  )}
                </Formik>
              </Box>
            </Stack>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Flex>
  );
};

export default AddNewThreadForm;
