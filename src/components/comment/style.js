import { styled } from "styled-components";

export const CommentListDiv = styled.div`
  /* border: 2px solid #FF0090; */
  width: 1000px;
  border-radius: 40px;
  /* box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4); */
  

  .comments {
    width: 1000px;
  }

  .comment-box {
  margin-bottom: 2vh;
  padding: 0px;
  border-radius: 30px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.4);


}

.comment-user {
  font-size: 30px;
  font-weight: bolder;
  padding-left: 40px;
}

.comment-content {
  font-weight: bold;
  font-size: 22px;
  margin-top: 5px;
  justify-content: flex-end;
  padding-left: 40px;

}

#comBtn {
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
  margin-left: 10px;

}

#pwBtn{
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
  margin-left: 10px;

}

.comment-date {
  font-size: 18px;
  color: #888;
  justify-content: flex-end;
  padding-left: 40px;
  padding-top: 50px;
}
.btnBox{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 40px;
  padding-bottom: 20px;
}

.deleteBtn {
  font-weight: bolder;
  font-size: 15px;
  margin-right: 10px;
  background-color: #FF0090;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 18px;
  color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  margin-left: 20px;

  &:active {
    transform: scale(1.1);
    animation: ease-in-out 0.1s;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    transform: translateY(5px);
    background-color: #ce0074;
  }
}

#deleteBox{
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
  margin-bottom: 20px;
  
}


.comment-delete {
  font-weight: bolder;
  font-size: 15px;
  margin-right: 10px;
  background-color: #FF0090;
  border: 0px;
  border-radius: 20px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 18px;
  color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);

  

  &:active {
    transform: scale(1.1);
    animation: ease-in-out 0.1s;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    transform: translateY(5px);
    background-color: #ce0074;
  }

  #editInput {
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

}
`;

export const EditButton = styled.div`
font-weight: bolder;
  font-size: 15px;
  margin-right: 10px;
  background-color: #FF0090;
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
`

export const SaveButton = styled.div`
font-weight: bolder;
  font-size: 15px;
  margin-right: 10px;
  background-color: #FF0090;
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
`

export const CommentBox = styled.div`
width: 1000px;
margin: auto;
padding-bottom: 50px;
`
