import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <div style={{}}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
