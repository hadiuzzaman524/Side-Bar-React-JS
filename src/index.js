import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthProviderContext } from "./components/store/auth-state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviderContext>
    <App />
  </AuthProviderContext>
);
