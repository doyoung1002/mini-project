import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
    width: 851px;
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
    width: 589px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .membersNavi {
    width: 370px;
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
    text-decoration: none;
  }
  .members .nickname {
    width: 100%;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  .banner > h3 {
    font-size: 40px;
    color: #ffffff;
    text-align: center;
  }
  .search {
    width: 219px;
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
  return (
    <Headerwrap>
      <div className="headerWrap">
        <div className="navi">
          <div className="logos">
            <div className="logoImg">
              <Link to="/">
                <img src="/img/OHS-5.png" alt="/main" />
              </Link>
            </div>
          </div>
          <div className="navis">
            <ul className="membersNavi">
              <div className="members">
                <Link to="/mypage">
                  <li className="nickname">어드민님</li>
                </Link>
                <Link to="/login">
                  <li className="login">로그인</li>
                </Link>
                <Link to="/signUp">
                  <li className="signUp">회원가입</li>
                </Link>
              </div>
            </ul>
            <div className="search">
              <input type="text" placeholder="search in site" className="inputs" />
              <button onClick={searchItem}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <div className="banner">
          <h3>Oh! Honey Scrooge </h3>
        </div>
      </div>
    </Headerwrap>
  );
};

export default Headers;
