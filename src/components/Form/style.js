import { styled } from "styled-components";

export const DetailComment = styled.div`

margin: 3vh;
justify-content: center;
  align-items: center;
  text-align: center;

#nickName-input{
  width: 5%;
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
  width: 5%;
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

#comment-input {
  width: 22%;
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

button {
  font-weight: bolder;
  font-size: 15px;
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
