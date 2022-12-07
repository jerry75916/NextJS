import React from "react";
import MainHeader from "./main-header";
const Layout = ({ children }) => {
  return (
    <main>
      <MainHeader />
      {children}
    </main>
  );
};

export default Layout;
