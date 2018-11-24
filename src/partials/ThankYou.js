import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./utility/Button";

const ThankYouContainer = styled.div``;

class ThankYou extends Component {
  render() {
    return (
      <ThankYouContainer>
        <h1>Thank You</h1>
        <Link to={`/`}>
          <h1>Home</h1>
        </Link>
        <Button href="/" text={"Back"} />
      </ThankYouContainer>
    );
  }
}

export default ThankYou;
