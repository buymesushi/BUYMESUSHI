import React from "react";
import { withRouter } from "react-router-dom";
import SliderPage from "../SliderPage/SliderPage";
import ApiPage from "../ApiPage/ApiPage.js";
import NewsApi from "../NewsPage/NewsApi";
import PartnersPage from "../PartnersPage/PartnersPage";

const LandingPage = (props) => {
  return (
    <div>
      <h1>여기서 시작한다잇!</h1>
    </div>
  );
};

export default withRouter(LandingPage);
