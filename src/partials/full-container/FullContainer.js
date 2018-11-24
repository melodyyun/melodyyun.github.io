import React from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import Title from "./hero-section/Title";
import About from "./about-section/About";
import Works from "./works-section/Works";
import Contact from "./contact-section/Contact";

const Container = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 840px) {
    min-width: 100%;
  }
`;

class FullContainer extends React.Component {
  render() {
    return (
      <Container>
        <SectionContainer
          id="home"
          extends="false"
          children={<Title theme={this.props.title} />}
        />
        <SectionContainer
          id="works"
          extends="true"
          children={<Works theme={this.props.works} />}
        />
        <SectionContainer
          id="about"
          extends="false"
          children={<About theme={this.props.about} />}
        />
        <SectionContainer
          id="contact"
          extends="false"
          children={<Contact theme={this.props.works} />}
        />
      </Container>
    );
  }
}

export default FullContainer;
