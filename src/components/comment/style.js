import { styled } from "styled-components";

export const CommentListDiv = styled.div`
  /* border: 2px solid #FF0090; */
  width: 1000px;
  border-radius: 40px;
  /* box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4); */
  

  .comments {
    width: 1000px;
    height: 140px;
    
  }

  .comment-box {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);

}

.comment-user {
  font-size: 18px;
  font-weight: bolder;
  justify-content: flex-end;
}

.comment-content {
  font-weight: bold;
  margin-top: 5px;
  justify-content: flex-end;
}

.comment-date {
  font-size: 14px;
  color: #888;
  justify-content: flex-end;
}
.btnBox{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.comment-edit,
.comment-delete {
  font-weight: bolder;
  font-size: 15px;
  margin-right: 10px;
  background-color: #FF0090;
  border: 0px;
  border-radius: 20px;
  width: 70px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 18px;
  color: white;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
 




  &:hover {
    transform: scale(1.1);
    animation: ease-in-out 0.1s;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
}
`;

export const CommentBox = styled.div`
width: 1000px;
margin: auto;
padding-bottom: 50px;
`
