import React from "react";
import Footer from "./Footer";
import NavContainer from "./NavContainer";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavContainer />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
