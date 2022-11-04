import Layout from "components/layout";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Page from "../../components/pages/users";
import queryClient from "../../lib/clients/react-query";
import fetchUsers from "../../lib/queries/fetch-users";

const MyAccountPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("users", fetchUsers);
  const { data: session, status } = useSession();

  if (!session) {
    return <div>Not authenticated.</div>;
  }

  return (
    <Layout>
      <div>
        <title>All users</title>
      </div>
      <Page users={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  await queryClient.prefetchQuery("users", fetchUsers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyAccountPage;
