import React from "react";
import About from "../pages/about/About";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import Setting from "../pages/setting/Setting";
import SideBar from "../sidebar/Sidebar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const MainPage = () => {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </SideBar>
    </Router>
  );
};
export default MainPage;
