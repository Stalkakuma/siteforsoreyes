import fetchLikes from "../lib/queries/fetch-likes";
import queryClient from "../lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "components/layout";
import LoadingScreen from "components/loading-screen";
import Guide from "components/pages/guidepage";

const GuidePage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("likes", fetchLikes);

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <Guide likes={data} />
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
