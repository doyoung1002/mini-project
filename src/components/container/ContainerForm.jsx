import React, { useState, useEffect } from "react";
import Comment from "../comment/Comment";
import { DetailContainer, ImageBox, ImageText, ImgDiv, Container } from "./style";
import { CommentBox } from "../comment/style";
import Footers from "../../common/footer/Footer";
import CommentForm from "../Form/CommentForm";
import Headers from "../../common/header/Header";
// import { deleteComment, getComments } from "../../api/commentsApiSlice";
// import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const comments = [
  { id: 1, user: "User1", content: "Great post!", date: "2023-07-15" },
  { id: 2, user: "User1", content: "Great post!", date: "2023-07-15" },
  { id: 3, user: "User2", content: "Great post!", date: "2023-07-15" },
  { id: 4, user: "User2", content: "Great post!", date: "2023-07-15" },
  { id: 5, user: "User2", content: "Great post!", date: "2023-07-15" },
  { id: 6, user: "User2", content: "Great post!", date: "2023-07-15" },
];

const ContainerForm = () => {
  const [imageUrl, setImageURL] = useState("");
  const [itemName, setItemName] = useState("");
  const [data, setData] = useState([]);
  const { itemId } = useParams();
  // const serverURL = process.env.REACT_APP_SERVER_URL;

  // const { data: comments, isLoading, isError, error, refetch } = useQuery("comments", getComments);

  // const deleteMutation = useMutation(deleteComment, {
  //   onSuccess: () => {
  //     refetch();
  //   },
  // });

  // const handleDelete = (id, password) => {
  //   if (password.trim() !== "") {
  //     deleteMutation.mutate({ id, password });
  //   }
  // };

  // if (isLoading) {
  //   return <div>로딩 중...</div>;
  // }

  // if (isError) {
  //   return <div>오류: {error.message}</div>;
  // }

  const handleDelete = (id) => {
    console.log(`Delete comment with id ${id}`);
  };

  useEffect(() => {
    // 이미지와 텍스트를 서버에서 가져오는 함수
    const fetchData = async () => {
      try {
        // 이미지 요청
        const imageResponse = await axios.get("http://43.202.45.160/api/items");
        setImageURL(imageResponse.data.imageUrl);

        // 텍스트 요청
        const textResponse = await axios.get("http://43.202.45.160/api/items");

        setItemName(textResponse.data.itemName);
        setData(textResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <>
      <Container>
        <Headers />
        <DetailContainer>
          <ImgDiv>
            <ImageBox>
              <img src={imageUrl} alt="이미지" />
            </ImageBox>
            <ImageText>
              <p>{itemName}</p>
            </ImageText>
          </ImgDiv>
          <CommentForm />
        </DetailContainer>
        <CommentBox>
          <Comment comments={comments} onDelete={handleDelete} />
        </CommentBox>
        <Footers />
      </Container>
    </>
  );
};

export default ContainerForm;
