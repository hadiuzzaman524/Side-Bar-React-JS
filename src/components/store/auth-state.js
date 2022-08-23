import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLogIn: false,
  logoutHandler: () => {},
  loginHandler: (email, password) => {},
});

export const AuthProviderContext = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /// Its call only one time when application is started
  useEffect(() => {
    const isUserLogin = localStorage.getItem("isLogIn");
    if (isUserLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []); // [] contains the dependency when this function is trigered

  const loginHandler = () => {
    localStorage.setItem("isLogIn", "1");
    setIsLoggedIn(true);
    console.log("Log In");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogIn");
    console.log("Logout");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogIn: isLoggedIn,
        logoutHandler: logoutHandler,
        loginHandler: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
