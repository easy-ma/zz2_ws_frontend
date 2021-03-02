import { useContext, createContext, useState, useEffect } from "react";
import Requester from "../Requester";

const authContext = createContext();

function useProvideAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      Requester.get("/auth/verify", {}, true).then((res) => {
        if (res.success) {
          setUser("user");
        } else {
          localStorage.removeItem("token");
        }
      });
    }
  });

  const signin = (token, cb) => {
    localStorage.setItem("token", token);
    setUser("user");
    cb();
  };

  const signout = (cb) => {
    localStorage.removeItem("token");
    setUser(null);
    cb();
  };

  return {
    user,
    signin,
    signout,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}
