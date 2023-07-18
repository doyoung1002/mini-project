import React, { useState, useEffect } from "react";
import Comment from "../comment/Comment";
import {
  DetailContainer,
  ImageBox,
  ImageText,
  ImgDiv,
  Container,
} from "./style";
import { CommentBox } from "../comment/style";
import CommentForm from "../Form/CommentForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const comments = [
  { id: 1, user: "User1", content: "Great post!", date: "2023-07-15" },
];

const ContainerForm = () => {
  const [imageUrl, setImageURL] = useState("");
  const [itemName, setItemName] = useState("");
  const [data, setData] = useState([]);
  const { itemId } = useParams();
  const [explanation, setExplanation] = useState("");
  const [price, setPrice] = useState(0);

  const handleDelete = (id) => {
    console.log(`Delete comment with id ${id}`);
  };

  useEffect(() => {
    // 이미지와 텍스트를 서버에서 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://honeyitem.shop/api/items/${itemId}`
        );
        // console.log(response.data.data);
        const { imageUrl, itemName, explanation, price } = response.data.data;

        setImageURL(imageUrl);
        setItemName(itemName);
        setExplanation(explanation);
        setPrice(price);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [itemId]);

  return (
    <>
      <Container>
        <DetailContainer>
          <ImgDiv>
            <ImageBox>
              <img src={imageUrl} alt='이미지' />
            </ImageBox>
            <ImageText>
              <p id='title'>상품명 : {itemName}</p>
              <p id='context'>상세 설명 : {explanation}</p>
              <p id='price'>가격: {price}</p>
            </ImageText>
          </ImgDiv>
          <CommentForm />
        </DetailContainer>
        <CommentBox>
          <Comment comments={comments} onDelete={handleDelete} />
        </CommentBox>
      </Container>
    </>
  );
};

export default ContainerForm;
