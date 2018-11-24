import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const ContactContainer = styled.div`
  color: white;
  transition: all 0.3s linear;

  @media (max-width: 1200px) {
    max-width: 536px;
    width: 100%;
  }

  @media (max-width: 840px) {
    width: 100%;
    max-width: 450px;
  }

  h2 {
    position: relative;
    margin-bottom: -8px;

    @media (max-width: 480px) {
      font-size: 20px;
    }

    @media (max-width: 400px) {
      font-size: 18px;
    }

    &::before {
      content: "";
      display: block;
      height: 180px;
      width: 10px;
      border: 1px solid ${props => props.theme.transparent};
      position: absolute;
      left: -20px;
      border-right: none;
    }
    @media (max-width: 1200px) {
      &::before {
        display: none;
      }
    }
  }

  .yellow {
    color: ${props => props.theme.yellow};
  }

  .form-container {
    width: 650px;
    box-sizing: border-box;
    background: rgba(225, 225, 225, 0.2);
    padding: 50px;
    margin-bottom: 40px;
    transition: all 0.3s linear;

    @media (max-width: 1200px) {
      max-width: 536px;
      width: 100%;
    }

    @media (max-width: 840px) {
      width: 100%;
      max-width: 450px;
      padding: 20px;
    }

    label {
      display: none;
    }

    input,
    textarea {
      box-sizing: border-box;
      display: block;
      width: 100%;
      margin: 20px 0;
      color: white;
      background: rgba(0, 0, 0, 0.6);
      padding: 10px;
      border: none;
      font-size: 16px;
      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: rgba(225, 225, 225, 0.5);
      }
      &::-moz-placeholder {
        /* Firefox 19+ */
        color: rgba(225, 225, 225, 0.5);
      }
      &:-ms-input-placeholder {
        /* IE 10+ */
        color: rgba(225, 225, 225, 0.5);
      }
      &:-moz-placeholder {
        /* Firefox 18- */
        color: rgba(225, 225, 225, 0.5);
      }
    }

    input[type="submit"] {
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.yellow};
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>
        Saad<span className="yellow">.</span>Rahman3@gmail
        <span className="yellow">.</span>com
      </h2>
      <form
        className="form-container"
        action="http://www.focuspocus.io/magic/10ab80221566b37db7a0b03826b8d76a"
        method="POST"
      >
        <label htmlFor="name">Name</label>
        <input type="name" name="name" placeholder="Jason Bourne" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="JasonBourne@CIA.com"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="6"
          cols="50"
          name="comments"
          placeholder="Hello Human ..."
        />
        <input type="submit" value="Submit" />
      </form>
      <Button href="#home" text={"Back To Top"} />
    </ContactContainer>
  );
};

export default Contact;
