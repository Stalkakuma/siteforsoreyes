import Layout from "components/layout";
import LoadingScreen from "components/loading-screen";
import Categories from "components/pages/homepage/categories";
import { useCurrentLoading } from "lib/states/loading-context";

export default function Home() {
  const loadingState = useCurrentLoading();
  return (
    <Layout>
      {loadingState?.loading ? <LoadingScreen /> : <Categories />}
    </Layout>
  );
}
