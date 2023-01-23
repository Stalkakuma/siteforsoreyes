import {
  Text,
  Textarea,
  Input,
  useDisclosure,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Container,
} from "@chakra-ui/react";
import saveThread from "../../../lib/mutations/save-thread";
import fetchThreads from "lib/queries/fetch-threads";
import queryClient from "lib/clients/react-query";
import { useSession } from "next-auth/react";
import { useMutation, useQuery } from "react-query";
import { useFormik } from "formik";
import { AddIcon } from "@chakra-ui/icons";
import Button from "components/button";
import { useRef } from "react";
import * as yup from "yup";

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
  const firstField = useRef();

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

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: yup.object({
      title: yup
        .string()
        .min(2, "Must contain at least 2 characters")
        .required("Please fill this field"),
      body: yup
        .string()
        .min(10, "Must contain at least 10 characters")
        .required("Must contain at least 10 characters"),
    }),
    onSubmit: (values) => {
      createThread(values);
    },
  });

  return (
    <>
      {!session ? (
        <Flex>
          <Button
            buttonText="Login to create thread"
            href="api/auth/signin"
            isLink={true}
          />
        </Flex>
      ) : (
        <button onClick={onOpen}>
          <Button icon={<AddIcon />} />
        </button>
      )}
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        initialFocusRef={firstField}
        preserveScrollBarGap={true}
      >
        <DrawerOverlay zIndex={8000}>
          <DrawerContent bgGradient={"linear(to-b, #283244 0%, #151a23 100%)"}>
            <DrawerCloseButton
              color={{ md: "white", base: "#d43517" }}
              mr={{ base: 3 }}
            />
            <DrawerBody bgGradient={"linear(to-b, #283244 0%, #151a23 100%)"}>
              <Container
                rounded={"2xl"}
                maxW={"container.lg"}
                bg={"whiteAlpha.900"}
              >
                <form onSubmit={formik.handleSubmit}>
                  <Flex flexDirection={"column"} gap={4} py={8}>
                    <Flex
                      alignSelf={"center"}
                      bg={"#d4d3cf"}
                      w={{ base: "100%", md: "70%" }}
                      flexDirection={"column"}
                      minH={"150px"}
                      h={"100%"}
                      px={6}
                      py={4}
                      rounded={"xl"}
                    >
                      <Input
                        {...formik.getFieldProps("title")}
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Name your Topic"
                      />
                      {formik.errors.title && (
                        <Flex
                          rounded={"xl"}
                          py={1.2}
                          px={3}
                          mt={2}
                          bg={"#a13116"}
                          alignSelf={"end"}
                        >
                          <Text color={"#fff"}>{formik.errors.title}</Text>
                        </Flex>
                      )}
                    </Flex>

                    <Flex
                      minH={"150px"}
                      alignSelf={"center"}
                      bg={"#d4d3cf"}
                      w={{ base: "100%", md: "70%" }}
                      flexDirection={"column"}
                      h={"100%"}
                      px={6}
                      py={4}
                      rounded={"xl"}
                    >
                      <Textarea
                        style={{ resize: "none" }}
                        {...formik.getFieldProps("body")}
                        id="body"
                        name="body"
                        placeholder="Type your text here..."
                      />
                      {formik.errors.body && (
                        <Flex
                          rounded={"xl"}
                          py={1.2}
                          px={3}
                          mt={2}
                          bg={"#a13116"}
                          alignSelf={"end"}
                        >
                          <Text color={"#fff"}>{formik.errors.body}</Text>
                        </Flex>
                      )}
                    </Flex>
                    <Flex alignSelf={"center"}>
                      <button
                        type="submit"
                        disabled={!formik.isValid && !!formik.touched}
                      >
                        <Button
                          buttonText="Post"
                          disabled={!formik.isValid && !!formik.touched}
                        />
                      </button>
                    </Flex>
                  </Flex>
                </form>
              </Container>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default AddNewThreadForm;
