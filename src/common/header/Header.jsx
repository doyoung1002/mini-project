import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import theme from "../../components/theme/theme";

const Headerwrap = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    .headerWrap {
      width: 100%;
    }
    .headerWrap > .navi > .logos {
      width: 70%;
    }
    .logos > .logoImg {
      width: 60%;
      height: 100%;
    }
    .navis > h5 {
      display: none;
    }
    .navi > .moNavis {
      display: block;
      font-size: 25px;
      font-weight: 600;
      width: 40%;
    }
  }
  .headerWrap {
    width: 100%;
    max-width: 1440px;
    height: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .headerWrap > .navi {
    width: 100%;
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: center;
  }
  .headerWrap > .navi > .logos {
    width: 840px;
    height: 100%;
    @media ${({ theme }) => theme.device.mobile} {
      width: 80%;
    }
  }
  .logos > .logoImg {
    width: 20%;
    height: 100%;
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
    }
  }
  .logoImg > a {
    width: 100%;
    height: 100%;
  }
  .logoImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .navis {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navis > h5 {
    font-size: 20px;
    color: #ff0090;
    font-weight: 600;
  }
  .moNavis {
    display: none;
  }
  .banner {
    background: #ff0090;
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .banner > h3 {
    font-size: 40px;
    color: #ffffff;
    text-align: center;
  }
  .search {
    width: 200px;
    height: 40px;
    position: relative;
  }
  .search > .inputs {
    width: 100%;
    height: 42px;
    font-size: 17px;
    color: #000000;
    white-space: nowrap;
  }
  .search button {
    border: none;
    background: transparent;
    position: absolute;
    cursor: pointer;
    color: #ff0090;
    font-size: 18px;
    top: 50%;
    right: 0;
    width: 18px;
    height: 18px;
    transform: translate(-50%, -50%);
  }
`;
const Headers = () => {
  const searchItem = () => {
    alert("검색되었습니다.");
  };
  const fetchProducts = async () => {
    const { data } = await axios.get("https://honeyitem.shop/api/items");
    // console.log("data=", data.data);
    return data.data;
  };
  const { data, isLoading, isError } = useQuery("products", fetchProducts);
  return (
    <ThemeProvider theme={theme}>
      <Headerwrap>
        <div className='headerWrap'>
          <div className='navi'>
            <div className='logos'>
              <div className='logoImg'>
                <Link to='/'>
                  <img src='/img/OHI.png' alt='/main' />
                </Link>
              </div>
            </div>
            <div className='navis'>
              <h5>오!&nbsp;허니 아이템에 오신 것을 환영합니다</h5>
            </div>
            <div className='moNavis'>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <div className='banner'>
            <h3>Oh! Honey Item </h3>
          </div>
        </div>
      </Headerwrap>
    </ThemeProvider>
  );
};

export default Headers;
