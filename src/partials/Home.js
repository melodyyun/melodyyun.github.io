import React, { Component } from "react";
import styled from "styled-components";
import Border from "./Border";
import FullContainer from "./full-container/FullContainer";
import LeftNav from "./left-nav/LeftNav";
import SocialNav from "./socials-nav/SocialNav";

//background styling
// once hosted bg must be change to absolute links
const Bg = styled.div`
  background: url("./assets/images/contrast-sea-horizontal.jpg");
  background-color: black;
  background-size: 110vw 150vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-attachment: fixed;
  transition: all 0.05s ease;
  filter: brightness(0.4);
  z-index: -1;
  position: fixed;

  @media (max-width: 1024px) {
    background: url("./assets/images/contrast-sea.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center !important;
    width: 100%;
    height: 100%;
  }
`;

//main styling
const Main = styled.main`
  transition: all 0.01s linear;
  width: 100%;
  font-family: ${props => props.theme.fontPrimary};
`;

// creating context
export const AppContext = React.createContext();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: "home"
    };
  }

  //referencing callback Ref made with innerRef
  //We needed to to this because a regular callback wouldn't work with styled components
  handleMouseMove = e => {
    // desktop size
    const desktop = 1024;
    //background innerRef
    const background = this.back;

    if (window.innerWidth > desktop) {
      // mouse move variables
      let x = (e.pageX * -1) / 20;
      let y = (e.pageY * -1) / 20;
      background.style.backgroundPosition = `${x}px ${y}px`;
    } else {
      background.style.backgroundPosition = `0px 0px`;
    }
  };

  toggleActiveLink = e => {
    this.setState({
      activeLink: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <Bg innerRef={b => (this.back = b)} />
        <Main
          className="main-container"
          toggleActiveLink={this.toggleActiveLink}
          onMouseMove={e => this.handleMouseMove(e)}
        >
          <Border />
          <LeftNav activeLink={this.state.activeLink} />
          <FullContainer />
          <SocialNav />
        </Main>
      </React.Fragment>
    );
  }
}

export default Home;
