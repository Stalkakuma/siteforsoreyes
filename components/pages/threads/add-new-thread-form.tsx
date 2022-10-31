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
} from "@chakra-ui/react";
import saveThread from "../../../lib/mutations/save-thread";
import fetchThreads from "lib/queries/fetch-threads";
import queryClient from "lib/clients/react-query";
import { useSession } from "next-auth/react";
import { useMutation, useQuery } from "react-query";
import { Formik, Field } from "formik";

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

  //TODO implement Login
  if (!session) {
    return <div>Not Authenticated.</div>;
  }

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

  return (
    <Flex w={"90%"} justify={"end"}>
      <Button onClick={onOpen}>New Topic</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton />
            <Stack spacing={4}>
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
                      <Stack spacing={4}>
                        <FormControl isRequired>
                          <FormLabel htmlFor="h3">
                            {"What's your Topic?"}
                          </FormLabel>
                          <Field
                            as={Input}
                            id="title"
                            name="title"
                            type="text"
                            variant="filled"
                          />
                        </FormControl>
                        <FormControl isRequired>
                          <Field
                            as={Textarea}
                            id="body"
                            name="body"
                            type="text"
                            placeholder="Type your text here..."
                          />
                        </FormControl>
                        <FormControl>
                          <Button type="submit" loadingText="Posting...">
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
