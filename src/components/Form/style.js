import { styled } from "styled-components";

export const DetailComment = styled.div`
  margin: 3vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  #nicknameTitle {
    font-weight: bolder;
    color: black;
    padding-top: 30px;
    margin-bottom: 1vh;
    margin: auto;
    font-size: 30px;
  }

  #commentTitle {
    color: black;
    margin: auto;
    margin-top: 1vh;
    font-size: 20px;
  }

  #nickName-input {
    width: 8%;
    height: 40px;
    font-size: 15px;
    border: 2px solid #ff0090;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    font-weight: bolder;
    padding-left: 10px;
    font-size: 15px;
    margin-right: 20px;
  }

  #password-input {
    width: 8%;
    height: 40px;
    font-size: 15px;
    border: 2px solid #ff0090;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    font-weight: bolder;
    padding-left: 10px;
    font-size: 15px;
    margin-right: 20px;
    margin-left: 15px;
  }

  #comment-input {
    width: 10%;
    height: 40px;
    font-size: 15px;
    border: 2px solid #ff0090;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    padding-left: 15px;
    font-weight: bolder;
    font-size: 15px;
  }

  #password-Confirm-input {
    width: 10%;
    height: 40px;
    font-size: 15px;
    border: 2px solid #ff0090;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    font-weight: bolder;
    padding-left: 10px;
    font-size: 15px;
    margin-right: 20px;
    margin-left: 15px;
  }

  #editPassword-input {
    width: 20%;
    height: 40px;
    font-size: 15px;
    border: 2px solid #ff0090;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    font-weight: bolder;
    padding-left: 10px;
    font-size: 15px;
    margin-right: 20px;
    margin-left: 15px;
  }

  #editComment-input {
    width: 25%;
    height: 40px;
    font-size: 15px;
    border: 2px solid #ff0090;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    font-weight: bolder;
    padding-left: 10px;
    font-size: 15px;
    margin-right: 20px;
    margin-left: 15px;
  }

  #deleteInput {
    width: 50%;
    height: 40px;
    font-size: 15px;
    border: 2px solid #ff0090;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    font-weight: bolder;
    padding-left: 10px;
    font-size: 15px;
    margin-top: 2vh;
    margin-right: -10px;
    margin-left: 60px;
    float: left;
  }

  button {
    font-weight: bolder;
    font-size: 18px;
    margin-top: 2vh;
    width: 100px;
    height: 47px;
    margin-left: 2vh;
    border: 0px;
    background-color: #ff0090;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);

    &:active {
      transform: scale(1.1);
      animation: ease-in-out 0.2s;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      transform: translateY(5px);
      background-color: #ce0074;
    }
  }
  .checkBtn {
    font-weight: bolder;
    font-size: 18px;
    margin-top: 3vh;
    width: 100px;
    height: 47px;
    margin-left: 2vh;
    border: 0px;
    background-color: #ff0090;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);

    &:active {
      transform: scale(1.1);
      animation: ease-in-out 0.2s;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      transform: translateY(5px);
      background-color: #ce0074;
    }
  }
`;

export const CommentBox = styled.div`
  margin: auto;
  width: 1000px;
  height: 200px;
  margin-bottom: 3vh;
  margin-top: 3vh;
  padding: 0px;
  border-radius: 30px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const EditBtn = styled.div`
  font-weight: bolder;
  font-size: 15px;
  margin-right: 10px;
  background-color: #ff0090;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 18px;
  color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:active {
    transform: scale(1.1);
    animation: ease-in-out 0.1s;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    transform: translateY(5px);
    background-color: #ce0074;
  }
`;

export const saveBtn = styled.div`
  font-weight: bolder;
  font-size: 15px;
  margin-right: 10px;
  background-color: #ff0090;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 18px;
  color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:active {
    transform: scale(1.1);
    animation: ease-in-out 0.1s;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    transform: translateY(5px);
    background-color: #ce0074;
  }
`;
