import React from "react";
import AuthContext from "../store/auth-state";

import classes from "./Navigation.module.css";
import { useContext } from "react";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLogIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLogIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLogIn && (
          <li>
            <button onClick={ctx.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
