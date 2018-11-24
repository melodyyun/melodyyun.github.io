import React from "react";
import styled from "styled-components";

const SecContainer = styled.div`
  align-items: center;
  display: flex;
  min-height: calc(100vh - 100px);
  height: auto;
  justify-content: center;
  left: 50%;
  padding-bottom: 50px;
  padding-top: 50px;
  position: relative;
  transform: translateX(-50%);
  width: calc(100% - 100px);

  @media (max-width: 400px) {
    width: calc(100% - 50px);
  }
`;

const SectionContainer = props => {
  return <SecContainer id={props.id}>{props.children}</SecContainer>;
};
export default SectionContainer;
