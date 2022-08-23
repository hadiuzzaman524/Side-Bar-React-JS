import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-state";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /// Its call only one time when application is started
  useEffect(() => {
    const isUserLogin = localStorage.getItem("isLogIn");
    if (isUserLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []); // [] contains the dependency when this function is trigered

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          isLogIn: isLoggedIn,
        }}
      >
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
