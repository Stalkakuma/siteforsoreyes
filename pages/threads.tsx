import fetchThreads from "../lib/queries/fetch-threads";
import queryClient from "../lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import ThreadsList from "../components/pages/threads";
import Layout from "components/layout";
import LoadingScreen from "components/loading-screen";
import { useCurrentLoading } from "lib/states/loading-context";

const ForumPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data, status } = useQuery("threads", fetchThreads);
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
      {loadingState?.loading ? (
        <LoadingScreen />
      ) : (
        <ThreadsList threads={data} />
      )}
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
