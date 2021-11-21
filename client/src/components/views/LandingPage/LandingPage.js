import React from "react";
import { withRouter } from "react-router-dom";
import SliderPage from "../SliderPage/SliderPage";
import ApiPage from "../ApiPage/ApiPage.js";
import NewsApi from "../NewsPage/NewsApi";
import PartnersPage from "../PartnersPage/PartnersPage";

const LandingPage = (props) => {
  return (
    <div>
      <SliderPage />
      <ApiPage />
      <br />
      <NewsApi />
      <br />
      <PartnersPage />
    </div>
  );
};

export default withRouter(LandingPage);
