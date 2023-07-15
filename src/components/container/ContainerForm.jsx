import React from "react";
import Comment from "../comment/Comment";
import { DetailContainer, ImageBox, ImageText, ImgDiv, DetailTitle, Container, TitleDiv } from "./style";
import { CommentBox } from "../comment/style";
import Footers from "../../common/footer/Footer";
import CommentForm from "../Form/CommentForm";
import Headers from "../../common/header/Header";

const comments = [
  { id: 1, user: "User1", content: "Great post!", date: "2023-07-15" },
  { id: 2, user: "User1", content: "Great post!", date: "2023-07-15" },
  { id: 3, user: "User2", content: "Great post!", date: "2023-07-15" },
  { id: 3, user: "User2", content: "Great post!", date: "2023-07-15" },
  { id: 3, user: "User2", content: "Great post!", date: "2023-07-15" },
  { id: 3, user: "User2", content: "Great post!", date: "2023-07-15" },
];

// import { useDispatch, useSelector } from "react-redux";
// import { deleteComment, getComments } from "../../redux/commentsSlice";

const ContainerForm = () => {
  // const comments = useSelector((state) => state.comments);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getComments());
  // }, [dispatch]);

  // const handlerDeleteComment = (id) => {
  //   dispatch(deleteComment(id));
  // };

  const handleConfirm = () => {
    console.log("Confirmed!");
  };

  const handleDelete = (id) => {
    console.log(`Delete comment with id ${id}`);
  };

  return (
    <>
      <Container>
        <Headers />
        <DetailContainer>
          <TitleDiv>
            <DetailTitle>상세 페이지</DetailTitle>
          </TitleDiv>
          <ImgDiv>
            <ImageBox>
              <p></p>
            </ImageBox>
            <ImageText>
              <p></p>
            </ImageText>
          </ImgDiv>
          <CommentForm />
        </DetailContainer>
        <CommentBox>
          <Comment comments={comments} onDelete={handleDelete} />
        </CommentBox>
      </Container>
      <Footers />
    </>
  );
};

export default ContainerForm;
