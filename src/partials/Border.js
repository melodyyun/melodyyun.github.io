import React from "react";
import styled from "styled-components";

const BorderLight = styled.div`
  z-index: 2;
  position: fixed;
  border: ${props => props.theme.border};
  width: calc(100% - 100px);
  height: calc(100vh - 100px);
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  pointer-events: none;
  transition: all 0.3s ease;
  @media (max-width: 980px) {
    top: 20px
    width: calc(100% - 40px);
    height: calc(100vh - 40px);
  }

  @media (max-width: 400px) {
    top: 10px
    width: calc(100% - 20px);
    height: calc(100vh - 20px);
  }
`;

const Border = props => {
  return <BorderLight />;
};

export default Border;
