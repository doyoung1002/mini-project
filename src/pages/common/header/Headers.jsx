import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Headerwrap = styled.div`
  width: 1440px;
  height: 30vh;
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
    width: 851px;
    height: 100%;
  }
  img {
    width: 20%;
    height: 100%;
    object-fit: contain;
  }
  .members {
    width: 589px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 600;
  }
  .members > a {
    width: 100%;
    color: #ff0090;
  }
  .members .nickname {
    width: 80px;
    height: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
  .members .login {
    width: 80px;
    height: auto;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
  .members .signUp {
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
  .inputs {
    width: 200px;
    height: 40px;
    position: relative;
  }
  .inputs input {
    width: 250px;
    height: 100%;
    font-size: 17px;
    color: #000000;
    padding: 2%;
    white-space: nowrap;
  }
  .inputs button {
    border: none;
    background: transparent;
    position: absolute;
    margin: 12px -31px;
    cursor: pointer;
  }
  .inputs svg {
    font-size: 18px;
    color: #ff0090;
  }
`;
const Headers = () => {
  const searchItem = () => {
    alert("검색되었습니다.");
  };
  return (
    <Headerwrap>
      <div className='headerWrap'>
        <div className='navi'>
          <div className='logos'>
            <Link to='/'>
              <img src='/img/OHS-5.png' alt='/main' />
            </Link>
          </div>
          <ul className='members'>
            <Link to='/mypage'>
              <li className='nickname'>어드민님</li>
            </Link>
            <Link to='/login'>
              <li className='login'>로그인</li>
            </Link>
            <Link to='/signUp'>
              <li className='signUp'>회원가입</li>
            </Link>
            <Link to='' className='inputs'>
              <input type='text' placeholder='search in site' />
              <button onClick={searchItem}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Link>
          </ul>
        </div>
        <div className='banner'>
          <h3>Oh! Honey Scrooge </h3>
        </div>
      </div>
    </Headerwrap>
  );
};

export default Headers;
