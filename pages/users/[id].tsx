import Page from "../../components/pages/users/[id]";
import queryClient from "../../lib/clients/react-query";
import fetchUser from "../../lib/queries/fetch-user";
import LoadingScreen from "components/loading-screen";
import AccessDeniedScreen from "components/access-denied";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession, getSession } from "next-auth/react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "components/layout";
import { useCurrentUser } from "lib/states/user-context";

const AccountPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  id,
}) => {
  const { data } = useQuery("user", () => fetchUser(id as string));
  const { data: session, status } = useSession();
  const userData = useCurrentUser();

  if (!userData) {
    return <LoadingScreen />;
  }

  if (!session || userData.userInfo?.role !== "ADMIN") {
    return <AccessDeniedScreen />;
  }

  return (
    <Layout>
      <div>
        <title>{`${session.user.name}'s profile`}</title>
      </div>
      <Page user={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  await queryClient.prefetchQuery("user", () => fetchUser(query.id as string));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: query.id,
    },
  };
};

export default AccountPage;
