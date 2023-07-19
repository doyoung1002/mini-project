import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../components/theme/theme";
const Footer = styled.div`
  max-width: 1440px;
  height: 10%;
  margin: auto;
  margin-top: 3vh;
  .footerNavi {
    width: 635px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      height: 10%;
      padding: 1%;
    }
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
  .footerNavi > a > li {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 11px;
  }
`;
const Footers = () => {
  return (
    <ThemeProvider theme={theme}>
      <Footer>
        <ul className='footerNavi'>
          <Link to='/about'>
            <li className='about'>About Us</li>
          </Link>
          <Link to='/contact'>
            <li className='contact'>Contact Us</li>
          </Link>
          <Link to='/term'>
            <li className='term'>Term of Use</li>
          </Link>
          <Link to='/policy'>
            <li className='term'>Privacy policy</li>
          </Link>
        </ul>
      </Footer>
    </ThemeProvider>
  );
};

export default Footers;
