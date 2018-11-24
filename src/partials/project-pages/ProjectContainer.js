import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 840px) {
    min-width: 100%;
  }
`;

const ProjectPageContainer = props => {
  return <Container id={props.id}>{props.children}</Container>;
};

export default ProjectPageContainer;
