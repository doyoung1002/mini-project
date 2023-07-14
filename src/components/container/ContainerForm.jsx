import React from "react";
import { CommentDiv, DetailComment, DetailContainer, DetailText, ImageBox, ImageText, ImgDiv } from "./style";

const ContainerForm = () => {
  return (
    <>
      <DetailContainer>
        <DetailText>Oh! Honey Scrooge</DetailText>
        <ImgDiv>
          <ImageBox></ImageBox>
          <ImageText></ImageText>
        </ImgDiv>
        <CommentDiv>
          <DetailComment></DetailComment>
          <button>확인</button>
          <button>수정</button>
          <button>삭제</button>
        </CommentDiv>
      </DetailContainer>
    </>
  );
};

export default ContainerForm;
