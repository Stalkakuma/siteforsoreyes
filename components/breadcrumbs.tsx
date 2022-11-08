import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Breadcrumbs = () => {
  const fetchThreadTitle = async (threadId: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/threads/${threadId}`
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
      // const idParam = pathNames[index].replace("[", "").replace("]", "");
      const href = "/" + path.slice(0, index + 1).join("/");
      if (subpath !== "threads" && subpath !== "forum") {
        fetchThreadTitle(subpath);
        pathList.push({ href: href, label: threadName });
      }
      if (subpath === "threads" || subpath === "forum") {
        pathList.push({ href: href, label: "Forums" });
      }
    });

    return [{ href: "/", label: "Home" }, ...pathList];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <ChakraBreadcrumb separator={">"}>
      {breadcrumbs?.map((crumb, index) => {
        const current = index === breadcrumbs.length - 1;
        return (
          <BreadcrumbItem key={index} isCurrentPage={current}>
            <BreadcrumbLink
              color={current ? "whiteAlpha.900" : "whiteAlpha.700"}
              href={crumb.href}
            >
              {crumb.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};
export default Breadcrumbs;
