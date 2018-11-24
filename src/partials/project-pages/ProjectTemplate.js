import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import P from "../utility/paragraph";

const TemplateContainer = styled.section`
  .project-section {
    width: 65%;
    margin: 20% auto;
    background: ${props => props.theme.transparent};
    box-shadow: ${props => props.theme.boxShadow};
    padding: 10%;
    color: ${props => props.theme.black};

    h1 {
      font-size: 36px;
      font-weight: 700;
      transition: all 0.3s linear;
      text-align: center;
      color: ${props => props.theme.black};
      text-transform: uppercase;
      margin: 0;

      @media (max-width: 1020px) {
        font-size: 28px;
      }

      @media (max-width: 560px) {
        font-size: 20px;
      }
    }

    .quote {
      font-size: 70px;
      font-weight: 700;
      transition: all 0.3s linear;
      text-align: center;
      position: relative;
      margin: 20px 0;
      line-height: 1.2em;
      color: grey;

      .em {
        font-family: auto;
        z-index: -1;
        color: ${props => props.theme.yellow};
      }

      .qStart {
        font-size: 180px;
        transition: all 0.3s linear;
        position: absolute;
        left: 15%;
        top: 5px;
      }
    }

    .row {
      display: flex;
      flex-flow: row no-wrap;

      @media (max-width: 768px) {
        flex-flow: column;
      }

      .blocktext {
        padding: 20px;
        width: 50%;
      }
    }
  }

  .image-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    z-index: -2;

    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 1) 85%
      );
    }

    .background {
      width: 100%;
    }
  }

  .link {
    position: fixed;
    padding: 20px;
    color: ${props => props.theme.yellow};
    font-size: 30px;
    text-decoration: none;
    background: ${props => props.theme.blue};
    z-index: 3;
    box-shadow: ${props => props.theme.boxShadow};

    &:hover {
      box-shadow: ${props => props.theme.boxShadowHover};
    }

    span {
      position relative;

      .fa-chevron-left{
        &:nth-of-type(2){
          margin-right: 5px;
        }
      }

      .fa-chevron-right{
        &:nth-of-type(1){
          margin-left: 5px;
        }
      }
    }
  }

  .link-home {
    left: 0;
    top: 70%;
  }

  .link-next {
    right: 0;
    top: 70%;
  }
`;

const Template = props => {
  return (
    <TemplateContainer>
      <div className="project-section">
        <h1>{props.project.name}</h1>
        <h2 className="quote">
          <span className="em qStart">“</span>
          <i>{props.project.quote} </i>
          <span className="em">”</span>
        </h2>
        <div className="row">
          <div className="blocktext">
            {props.project.textblock1.map((paragraph, i) => {
              return <P id={i} text={paragraph} />;
            })}
          </div>
          <div className="blocktext">
            {props.project.textblock2.map((paragraph, i) => {
              return <P id={i} text={paragraph} />;
            })}
          </div>
        </div>
      </div>
      <div className="image-container">
        <img
          className="background"
          src={props.project.imgMain}
          alt={props.project.imgMainAlt}
        />
      </div>
      <Link to={`/`} className="link link-home">
        <span>
          <i class="fas arrow1 fa-chevron-left" />
          <i class="fas arrow1 fa-chevron-left" />
          Home
        </span>
      </Link>
      <Link
        to={`/projects/${props.project.nextLink}`}
        className="link link-next"
      >
        <span>
          {props.project.nextProject}
          <i class="fas arrow1 fa-chevron-right" />
          <i class="fas arrow1 fa-chevron-right" />
        </span>
      </Link>
    </TemplateContainer>
  );
};

export default Template;
