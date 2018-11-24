import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const AboutContainer = styled.div`
  color: ${props => props.theme.white};
  max-width: 650px;
  position: relative;
  top: -80px;
  transition: all 0.3s linear;

  @media (max-width: 840px) {
    top: 0;
    max-width: 450px;
  }

  img {
    height: 300px;
    box-shadow: ${props => props.theme.boxShadow};

    @media (max-width: 840px) {
      width: 100%;
      height: auto;
    }
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 60px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    padding: 10px 30px 20px 30px;
    top: 250px;
    right: -50px;

    @media (max-width: 840px) {
      display: block;
      right: 0;
      margin-left: 0;
      position: relative;
      top: 0;
    }

    h2 {
      margin: 0;
    }

    h4 {
      margin-bottom: 0;
      color: ${props => props.theme.yellow};
    }

    p {
      line-height: 1.5rem;
    }

    &:before {
      content: "";
      display: block;
      height: 150px;
      width: 10px;
      border: 1px solid ${props => props.theme.transparent};
      position: absolute;
      left: -20px;
      border-right: none;

      @media (max-width: 840px) {
        display: none;
      }
    }

    .arrow1 {
      color: ${props => props.theme.yellow};
      display: inline-block;
      font-size: 90px;
      position: absolute;
      right: -40px;
      bottom: 30px;
      @media (max-width: 980px) {
        display: none;
      }
    }

    .arrow2 {
      color: ${props => props.theme.yellow};
      display: inline-block;
      font-size: 90px;
      position: absolute;
      right: -80px;
      bottom: 30px;
      @media (max-width: 980px) {
        display: none;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutContainer className="about-container">
      <div className="image-container">
        <img
          src="./assets/images/ryerson.jpg"
          alt="Saad and his friends atop a dune buggy in Peru"
        />
        <div className="about-text">
          <h2>Who am I?</h2>
          <h4>Marketing | Product | Project specialist at your service.</h4>
          <p>
            I'm Saad, a passionate and driven mid-level marketing professional
            and I want to help your organization bring value to the world. I
            like to bring exciting product launches to life, develop ways to
            excite customers through groundbreaking marketing campaigns, and
            develop rich relationships with clients through meaningful projects.
          </p>
          <Button href="#contact" text={"Contact"} />
          <i className="fas arrow1 fa-chevron-right" />
          <i className="fas arrow2 fa-chevron-right" />
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
