import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import styled from "styled-components";
import WeatherApiModal from "./WeatherApiModal";
import SeaTempApiModal from "./SeaTempApiModal";
import GreenHouseApiModal from "./GreenHouseApiModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ApiPage({ sliders }) {
  const settings = {
    className: "center",
    // 마지막꺼 다음에 첫번째꺼 오게 해서 무한 슬라이드 가능
    infinite: true,
    // 한번에 보여줄 개수
    slidesToShow: 3,

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  // 슬라이드 CSS 커스텀
  const Container = styled.div`
    width: 100%;
    background-color: black;
  `;

  const StyledSlider = styled(Slider)`
    text-align: center;
    background-color: black;
  `;

  return (
    <Container>
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <StyledSlider {...settings}>
          <div>
            <WeatherApiModal />
          </div>
          <div>
            <SeaTempApiModal />
          </div>
          <div>
            <GreenHouseApiModal />
          </div>
        </StyledSlider>
      </div>
    </Container>
  );
}

Modal.setAppElement("#root");

export default ApiPage;
