import React from "react";
import Header from "../Header/Header";
import Section0 from "./Section0/Section0";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Footer from "../Footer/Footer";

// import "./FrontPage.css";
const FrontPage = () => {
  return (
    <div>
      <Header />
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default FrontPage;
