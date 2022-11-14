import { createContext, useState, useContext } from "react";
import { useSession } from "next-auth/react";
import fetchUser from "lib/queries/fetch-user";

export const CurrentUserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState(null);
  const fetchData = async () => {
    if (session && !userInfo) {
      await fetchUser(session.user.email).then((data) => setUserInfo(data));
    }
    return null;
  };
  fetchData();

  return (
    <CurrentUserContext.Provider value={{ userInfo }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);
