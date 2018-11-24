import React from "react";
import styled from "styled-components";

const Paragraph = props => {
  return (
    <p id={props.id} className="button">
      {props.text}
    </p>
  );
};

export default Paragraph;
