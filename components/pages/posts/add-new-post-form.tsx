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
import savePost from "../../../lib/mutations/save-post";
import fetchThread from "lib/queries/fetch-thread";
import queryClient from "lib/clients/react-query";
import { useSession } from "next-auth/react";
import { useMutation, useQuery } from "react-query";
import { Formik, Field } from "formik";
import { useRouter } from "next/router";

const AddNewPostForm = ({ id }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { refetch } = useQuery("thread", () => fetchThread(id));
  const mutation = useMutation(savePost, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("thread");
      refetch();
    },
  });

  const createPost = (values) => {
    const body = values.body;
    const threadId = id;
    const data = {
      body,
      Thread: {
        connect: {
          id: threadId,
        },
      },
      author: {
        connect: {
          email: session.user.email,
        },
      },
    };
    mutation.mutate(data);
  };

  return (
    <Flex w={"100%"} justify={"center"}>
      {!session ? (
        <Button
          onClick={() => router.push("/api/auth/signin")}
          size={"sm"}
          variant={"unavailable"}
        >
          {"Login to reply"}
        </Button>
      ) : (
        <Button variant={"solid"} onClick={onOpen}>
          {"Reply"}
        </Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
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
                  initialValues={{ body: "" }}
                  onSubmit={(values, actions) => {
                    createPost(values);
                    actions.resetForm({
                      values: {
                        body: "",
                      },
                    });
                    onClose();
                  }}
                >
                  {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={4}>
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
                          <Button type="submit" loadingText="Posting...">
                            {"Post"}
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
export default AddNewPostForm;
