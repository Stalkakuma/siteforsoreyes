import fetchLikes from "../lib/queries/fetch-likes";
import queryClient from "../lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "components/layout";
import LoadingScreen from "components/loading-screen";
import Guide from "components/pages/guidepage";
import { useCurrentLoading } from "lib/states/loading-context";
import { useEffect } from "react";

const GuidePage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data, status } = useQuery("likes", fetchLikes);
  const loadingState = useCurrentLoading();

  useEffect(() => {
    document.title = "Minecraft Guide";
  }, []);

  if (status === "loading") {
    return (
      <Layout>
        <LoadingScreen />
      </Layout>
    );
  }

  return (
    <Layout>
      {loadingState?.loading ? <LoadingScreen /> : <Guide likes={data} />}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  await queryClient.prefetchQuery("likes", fetchLikes);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default GuidePage;
