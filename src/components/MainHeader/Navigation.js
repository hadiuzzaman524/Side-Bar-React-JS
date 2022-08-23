import React from "react";
import AuthContext from "../store/auth-state";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
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
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
