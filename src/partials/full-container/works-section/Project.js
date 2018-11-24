import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dotdotdot } from "../../utility/animation";

const ProjectContainer = styled.div`
  height: 350px;
  width: 250px;
  position: relative;
  margin-right: 30px;
  margin-bottom: 30px;
  color: ${props => props.theme.white};

  @media (max-width: 1200px) and (min-width: 769px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) and (min-width: 450px) {
    height: 450px;
    width: 350px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 450px) {
    margin-right: auto;
    margin-left: auto;
  }

  &:hover{
    .project-info-container {
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0, 1) 70%);
      justify-content: flex-end;

      @media (max-width: 1200px){
        background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0, 0.8), rgba(0,0,0, 1));
      }

      .btn-details{
        span{
          animation: ${dotdotdot} 1.6s ease-in-out infinite;
        }
      }
    }
  }

  .project-info-container {
    position: absolute;
    padding: 15px;
    bottom: 0;
    width: 100%;
    height: 60%;
    box-sizing: border-box;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0, 0.5) 80%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 0.3s ease;
    border-radius: 0 0 10px 10px;

    @media (max-width: 1200px) {
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0, 0.8), rgba(0,0,0, 1));
      justify-content: flex-end;
    }

    .project-type{
      margin: 0;
      color: ${props => props.theme.yellow};
    }

    .project-name {
      margin-top: 10px;
      margin-bottom: 7px;
    }

    .project-description{
      margin-top: 0;
      font-size: 15px;
    }

    .btn-details {
      z-index: 1;
      padding: 10px;
      cursor: pointer;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      span{
        border-radius 50%;
        height: 2px;
        width: 2px;
        background-color: ${props => props.theme.white};
        display: inline-block;
        margin-right: 2px;
      }

      span:nth-of-type(1){
        margin-left: 5px;
        animation-delay: -1.4s;
      }

      span:nth-of-type(2){
        animation-delay: -1.2s;
      }

      span:nth-of-type(3){
        animation-delay: -1s;
      }
    }
  }

  img {
    width: 100%;
    position: absolute;
    z-index: -1;
    border-radius: 10px 10px 0 0;
    @media (max-width: 1200px) and (min-width: 769px) {
      height: auto;
      border-radius: 10px;
      position: relative;
    }
  }

  img.hover {
    height: 100%;
    border-radius: 10px;
    & < .project-info-container{
      background: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255, 0.6) 80%);
    }
  }
`;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectHover: false
    };
  }

  changeImg = () => {
    if (window.innerWidth > 1200) {
      this.setState({ projectHover: !this.state.projectHover });
    } else {
      this.setState({ projectHover: false });
    }
  };

  render() {
    return (
      <Link to={`/projects/${this.props.link}`}>
        <ProjectContainer
          onMouseEnter={this.changeImg}
          onMouseLeave={this.changeImg}
        >
          <div className="project-info-container">
            <h4 className="project-type">{this.props.type}</h4>
            <h3 className="project-name">{this.props.name}</h3>
            <p className="project-description">{this.props.description}</p>
            <div className="btn-details">
              Learn More
              <span />
              <span />
              <span />
            </div>
          </div>
          {this.state.projectHover ? (
            <img
              className="hover"
              src={this.props.imgHoverSrc}
              alt={this.props.imgHoverAlt}
            />
          ) : (
            <img src={this.props.imgSrc} alt={this.props.imgAlt} />
          )}
        </ProjectContainer>
      </Link>
    );
  }
}

export default Project;
