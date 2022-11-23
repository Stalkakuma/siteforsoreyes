import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

export const CurrentLoadingContext = createContext(null);

export const LoadingContextProvider = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  });
  return (
    <CurrentLoadingContext.Provider value={{ loading }}>
      {children}
    </CurrentLoadingContext.Provider>
  );
};
export const useCurrentLoading = () => useContext(CurrentLoadingContext);
