import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import axios from "axios";

const Headerwrap = styled.div`
  width: 1440px;
  height: 30%;
  margin: 0 auto;
  .headerWrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .headerWrap > .navi {
    width: 100%;
    display: flex;
    height: 10vh;
  }
  .headerWrap > .navi > .logos {
    width: 840px;
    height: 100%;
  }
  .logos > .logoImg {
    width: 20%;
    height: 100%;
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
  .membersNavi {
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 600;
  }
  .membersNavi > .members {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .members > a {
    width: 80px;
    color: #ff0090;
  }
  .members .visit {
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
  .members .products {
    width: 80px;
    height: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
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
    <Headerwrap>
      <div className='headerWrap'>
        <div className='navi'>
          <div className='logos'>
            <div className='logoImg'>
              <Link to='/'>
                <img src='/img/OHS-5.png' alt='/main' />
              </Link>
            </div>
          </div>
          <div className='navis'>
            <ul className='membersNavi'>
              <div className='members'>
                <li className='visit'>
                  오! 허니 스크루지에 오신 것을 환영합니다
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className='banner'>
          <h3>Oh! Honey Scrooge </h3>
        </div>
      </div>
    </Headerwrap>
  );
};

export default Headers;
