import React, { Component } from 'react';
import styled from 'styled-components';

const SocNav = styled.nav`
  position: fixed;
  z-index: 1;
  right: 50px;
  display: block;
  top: 50px;
  box-sizing: border-box;

  @media (max-width: 980px) {
    top: 40px;
    right: 40px;
  }

  @media (max-width: 680px) {
    top: 20px;
    right: 20px;
  }

  .navbar-social {
    margin: 0;
    padding: 0;

    @media (max-width: 600px) {
      display: flex;
    }

    .nav-item {
      list-style: none;
      overflow: hidden;
      transition: all 0.3s ease;

      .btn-social {
        color: ${props => props.theme.white};
        padding: 10px;
        font-size: 20px;
        cursor: pointer;
        display: inline-flex;
        width: 25px;
        height: 25px;
        text-decoration: none;
        transition: all 0.3s ease;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }
`;

class SocialNav extends Component {
  render() {
    return (
      <SocNav className="navbar-topmenu">
        <ul className="navbar-social d-none d-lg-block">
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/saadrahman123/"
              className="btn-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/thesaad_"
              className="btn-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/meteora_theory/"
              className="btn-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </SocNav>
    );
  }
}

export default SocialNav;
