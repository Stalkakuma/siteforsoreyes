import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import LoadingScreen from "./loading-screen";

const Breadcrumbs = () => {
  const fetchThreadTitle = async (threadId: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/threads/${threadId}`
    );
    const data = await res.json();

    setThreadName(data.title);
  };
  const [threadName, setThreadName] = useState();
  const router = useRouter();

  const generateBreadcrumbs = () => {
    const pathList = [];
    const pathWithoutQuery = router.asPath.split("?")[0];
    const path = pathWithoutQuery.split("/").filter((v) => v.length > 0);

    path.forEach((subpath, index) => {
      const href = "/" + path.slice(0, index + 1).join("/");
      if (subpath !== "threads" && subpath !== "users" && subpath !== "guide") {
        fetchThreadTitle(subpath);
        pathList.push({ href: href, label: threadName });
      }
      if (subpath === "threads") {
        pathList.push({ href: href, label: "Forums" });
      }
      if (subpath === "users") {
        pathList.push({ href: href, label: "Users" });
      }
      if (subpath === "guide") {
        pathList.push({ href: href, label: "Minecraft Guide" });
      }
    });

    return [{ href: "/", label: "Home" }, ...pathList];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <ChakraBreadcrumb separator={<ChevronRightIcon color={"whiteAlpha.700"} />}>
      {breadcrumbs?.map((crumb, index) => {
        const current = index === breadcrumbs.length - 1;
        return (
          <BreadcrumbItem
            key={index}
            color={current ? "whiteAlpha.900" : "whiteAlpha.700"}
            isCurrentPage={current}
            _hover={{ filter: "brightness(50%)" }}
          >
            <Link href={crumb.href} passHref>
              {crumb.label ? crumb.label : <LoadingScreen size="sm" />}
            </Link>
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};
export default Breadcrumbs;
