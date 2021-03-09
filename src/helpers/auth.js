import { useContext, createContext, useState, useEffect } from "react";
import Requester from "../Requester";

const authContext = createContext();

const setToken = ({ token, refreshToken }) => {
  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
};

const unsetToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token.length > 0) {
      Requester.get("/auth/verify", {}, true).then((res) => {
        if (res.success) {
          setUser("user");
        } else {
          localStorage.removeItem("token");
        }
      });
    } else {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken && refreshToken.length > 0) {
        Requester.post("/auth/refresh-token", { refreshToken }, false).then(
          (res) => {
            if (res.success) {
              setUser("user");
              setToken(res.data);
            } else {
              unsetToken();
            }
          }
        );
      }
    }
  });

  const signin = (token, cb) => {
    setToken(token);
    setUser("user");
    cb();
  };

  const signout = (cb) => {
    unsetToken();
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
