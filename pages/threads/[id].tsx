import Page from "../../components/pages/threads/[id]";
import queryClient from "../../lib/clients/react-query";
import fetchThread from "../../lib/queries/fetch-thread";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "components/layout";
import LoadingScreen from "components/loading-screen";
import { useCurrentLoading } from "lib/states/loading-context";

const ForumThreadPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({ id }) => {
  const { data, status } = useQuery("thread", () => fetchThread(id));
  const loadingState = useCurrentLoading();

  if (status === "loading") {
    return (
      <Layout>
        <LoadingScreen />
      </Layout>
    );
  }

  return (
    <Layout>
      {loadingState?.loading ? <LoadingScreen /> : <Page threadData={data} />}
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
