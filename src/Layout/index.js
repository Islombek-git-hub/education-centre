import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ id }) => {
  return (
    <div>
      <Header id={id} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
