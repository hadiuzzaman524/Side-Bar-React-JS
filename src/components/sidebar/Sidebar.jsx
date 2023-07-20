import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const routes = [
  { path: "/", icon: <FaHome />, name: "Dashboard" },
  { path: "/about", icon: <FaLock />, name: "About" },
  { path: "/setting", icon: <FaMoneyBill />, name: "Setting" },
  { path: "/profile", icon: <FaUser />, name: "Profile" },
];
const SideBar = ({ children }) => {
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggle = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div className={style.main}>
      <motion.div
        animate={{
          width: openDrawer ? "230px" : "38px",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={style.sidebar}
      >
        <div className={style.title_bar}>
          <AnimatePresence>
            {openDrawer && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                SideBar Test
              </motion.h1>
            )}
          </AnimatePresence>
          <div>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <section className={style.routes}>
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className={style.link}
                activeClassName="active"
              >
                <div>{route.icon}</div>
                <div>{route.name}</div>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};
export default SideBar;
