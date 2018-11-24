import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Btn = styled.div`
  border: 1px solid ${props => props.theme.transparent};
  transition: ${props => props.theme.transition};
  padding: 10px 0 10px 0;
  position: relative;
  display: inline-block;
  background: rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgba(0, 0, 0, 0.1);

    &::before {
      right: 25px;
    }

    &::after {
      right: 25px;
    }
  }

  &::before {
    content: "\f105";
    color: ${props => props.theme.transparent};
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 20px;
    right: 30px;
    transition: ${props => props.theme.transition};
    position: absolute;
  }

  &::after {
    content: "\f105";
    color: ${props => props.theme.transparent};
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 20px;
    right: 20px;
    transition: ${props => props.theme.transition};
    position: absolute;
  }

  a {
    color: ${props => props.theme.white};
    text-decoration: none;
    padding: 10px 50px 10px 30px;
  }
`;

const Button = props => {
  return (
    <Btn className="buttonContainer">
      <AnchorLink href={props.href} className="button">
        {props.text}
      </AnchorLink>
    </Btn>
  );
};

export default Button;
