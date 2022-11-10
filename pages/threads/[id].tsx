import Page from "../../components/pages/threads/[id]";
import queryClient from "../../lib/clients/react-query";
import fetchThread from "../../lib/queries/fetch-thread";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "components/layout";

const ForumThreadPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({ id }) => {
  const { data } = useQuery("thread", () => fetchThread(id));

  return (
    <Layout>
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
