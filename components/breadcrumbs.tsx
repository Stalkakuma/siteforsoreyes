import {
  Flex,
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import LoadingScreen from "./loading-screen";
import { capitalizeFirstLetter } from "utils/conversions";

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
        const capitalisedTitle = threadName
          ? capitalizeFirstLetter(threadName)
          : null;
        pathList.push({
          href: href,
          label: capitalisedTitle,
        });
      }
      if (subpath === "threads") {
        pathList.push({ href: href, label: "Forum" });
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
    <Flex alignItems={"stretch"}>
      <ChakraBreadcrumb
        as={Flex}
        separator={<ChevronRightIcon color={"#000"} />}
      >
        {breadcrumbs?.map((crumb, index) => {
          const current = index === breadcrumbs.length - 1;
          return (
            <BreadcrumbItem
              px={2}
              py={3}
              key={index}
              color={current ? "#ff422a" : "#000"}
              isCurrentPage={current}
              _hover={
                current ? { filter: "brightness(55%)" } : { color: "#ff422a" }
              }
              fontFamily={`'Nerko One', sans-serif`}
              fontSize={"3xl"}
            >
              <Link href={crumb.href} passHref>
                {crumb.label ? crumb.label : <LoadingScreen size="sm" />}
              </Link>
            </BreadcrumbItem>
          );
        })}
      </ChakraBreadcrumb>
    </Flex>
  );
};
export default Breadcrumbs;
