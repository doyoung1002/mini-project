import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Footer = styled.div`
  width: 1440px;
  height: 10vh;
  margin: auto;
  margin-top: 3vh;
  bottom: 0px;

  .footerNavi {
    width: 635px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    bottom: 0;
  }

  .footerNavi > a {
    width: 25%;
    color: #ff0090;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    font-family: "Roboto";
  }
  .footerNavi > a:hover {
  }
`;
const Footers = () => {
  return (
    <Footer>
      <ul className="footerNavi">
        <Link to="/about">
          <li className="about">About Us</li>
        </Link>
        <Link to="/contact">
          <li className="contact">Contact Us</li>
        </Link>
        <Link to="/term">
          <li className="term">Term of Use</li>
        </Link>
        <Link to="/policy">
          <li className="term">Privacy policy</li>
        </Link>
      </ul>
    </Footer>
  );
};

export default Footers;
