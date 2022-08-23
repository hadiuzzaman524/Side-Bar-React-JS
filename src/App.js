import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-state";

function App() {

  const ctx= useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLogIn && <Login/>}
        {ctx.isLogIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
