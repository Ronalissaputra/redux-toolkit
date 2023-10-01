import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <main>
      <Navbar />
      <div className="px-2">{props.children}</div>
    </main>
  );
};

export default Layout;
