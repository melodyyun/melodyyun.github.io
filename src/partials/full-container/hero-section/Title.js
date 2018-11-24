import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const MainTitle = styled.div`
  color: ${props => props.theme.white};
  max-width: 650px;
  position: relative;
  transition: all 0.3s linear;

  @media (max-width: 840px) {
    max-width: 450px;
  }

  @media (max-width: 600px) {
    max-width: calc(100% - 40px);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 200px;
    width: 250px;
    background-color: ${props => props.theme.white};
    opacity: 0.2;
    filter: alpha(opacity=20); /* For IE8 and earlier */
    transform: skewY(20deg);
    top: 10px;
    left: 40px;
    transition: all 0.3s linear;

    @media (max-width: 840px) {
      height: 120px;
      width: 150px;
      top: 22px;
      left: 20px;
    }

    @media (max-width: 400px) {
      height: 90px;
      width: 100px;
    }
  }

  .yellow {
    color: ${props => props.theme.yellow};
    display: inline-block;
    font-weight: 600;
  }

  .title {
    font-size: 90px;
    font-weight: 700;
    margin: 1rem 1rem 1rem 0;
    transition: all 0.3s linear;
    @media (max-width: 840px) {
      font-size: 55px;
    }

    @media (max-width: 360px) {
      font-size: 40px;
    }
  }

  .sub-heading {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;

    @media (max-width: 840px) {
      font-size: 18px;
      padding-bottom: 10px;
    }
  }
`;

const Title = () => {
  return (
    <MainTitle className="title-container">
      <h1 className="title">
        Saad <br /> Rahman
        <span className="yellow">.</span>
      </h1>
      <p className="sub-heading">
        Bringing <span className="yellow">unforgettable</span> marketing
        experiences to life.
      </p>
      <Button href="#works" text={"Works"} />
    </MainTitle>
  );
};

export default Title;
