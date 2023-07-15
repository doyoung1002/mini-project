import { styled } from "styled-components";

export const DetailComment = styled.div`

margin: 3vh;
justify-content: center;
  align-items: center;
  text-align: center;

#comment-count {
  margin-bottom: 1vh;
  font-size: 20px;
}

#comment-input {
  width: 35%;
  height: 40px;
  font-size: 15px;
  border: 2px solid #ff0090;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  padding-left: 20px;
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
  
  

  
  &:hover {
    transform: scale(1.1);
    animation: ease-in-out 0.2s;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  
}

`;
