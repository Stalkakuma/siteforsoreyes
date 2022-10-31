import Page from "../../components/pages/threads/[id]";
import queryClient from "../../lib/clients/react-query";
import fetchThread from "../../lib/queries/fetch-thread";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession, useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "components/pages/layout";

const ForumThreadPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({ id }) => {
  const { data } = useQuery("thread", () => fetchThread(id));
  const { data: session, status } = useSession();
  if (!session) {
    return <div>Not authenticated.</div>;
  }
  return (
    <Layout>
      <h3>
        <title>Title of Thread</title>
      </h3>
      <Page threadData={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  await queryClient.prefetchQuery("thread", () =>
    fetchThread(query.id as string)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: query.id,
    },
  };
};

export default ForumThreadPage;
