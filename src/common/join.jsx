import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { Form, useNavigate } from "react-router-dom";

const Joins = styled.div`
  width: 1440px;
  height: 60%;
  margin: 0 auto;
  .membersJoin {
    display: flex;
    height: 100%;
  }
  .welcome {
    height: 420px;
    width: 50%;
    background: #090909;
    border: 2px solid #ff0090;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .welcome > h4 {
    color: #ffffff;
    font-size: 25px;
    text-align: center;
  }
  .membersJoin > form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 420px;
    border: 2px solid #ff0090;
    padding: 1%;
  }
  .membersJoin > form > h4 {
    font-size: 40px;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid #ff0090;
  }
  .joinForm {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20%;
    margin-top: 25px;
  }
  .joinForm > .id {
    display: flex;
  }
  .joinForm > .id > input {
    width: 300px;
  }
  .joinForm > .id > button {
    width: 100px;
  }
  .joinForm > .password {
    display: flex;
    flex-direction: column;
  }
`;

const Join = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [isIdDuplicated, setIsIdDuplicated] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const register = () => {
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        identifier: id,
        password: password,
        nickname: nickname,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        // localStorage.setItem("token", response.data.jwt);
        navigate("/");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <Joins>
      <div className='membersJoin'>
        <div className='welcome'>
          <h4>O.H.S에 오신 걸 환영합니다</h4>
        </div>
        <form>
          <h4>Join</h4>
          <div className='joinForm'>
            <div className='id'>
              <input
                type='text'
                placeholder='아이디'
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className='nickname'>
              <input
                type='text'
                placeholder='별명을 입력하세요'
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className='password'>
              <input
                type='type'
                placeholder='비밀번호를 입력해주세요'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type='passwordConfirm'
                placeholder='비밀번호를 한번 더 입력하세요'
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
              <input
                type='text'
                placeholder='이메일'
                value={id}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button onClick={register}>회원가입</button>
        </form>
      </div>
    </Joins>
  );
};

export default Join;
