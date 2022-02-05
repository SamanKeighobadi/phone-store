import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const Defaultlayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Defaultlayout;
