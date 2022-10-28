import fetchPosts from "../lib/queries/fetch-posts";
import queryClient from "../lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Post from "../components/pages/posts";

const PostsPage: InferGetServerSidePropsType<
  typeof getServerSideProps
> = ({}) => {
  const { data } = useQuery("posts", fetchPosts);
  const { data: session, status } = useSession();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <>
      <h3>THESE ARE POSTS</h3>
      <Post posts={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  await queryClient.prefetchQuery("posts", fetchPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default PostsPage;
