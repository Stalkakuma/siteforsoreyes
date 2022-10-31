import fetchThreads from "../lib/queries/fetch-threads";
import queryClient from "../lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import ThreadsList from "../components/pages/threads";
import Layout from "components/pages/layout";

const ForumPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("threads", fetchThreads);
  const { data: session, status } = useSession();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <Layout>
      <h3>Welcome to the Forum</h3>
      <ThreadsList threads={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  await queryClient.prefetchQuery("threads", fetchThreads);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default ForumPage;
