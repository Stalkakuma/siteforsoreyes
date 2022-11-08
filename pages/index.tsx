import { Container } from "@chakra-ui/react";
import Layout from "components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Container size={"container.lg"} flexDirection={"column"}>
        <Link href="/forum">Visit Forum</Link>
      </Container>
    </Layout>
  );
}
