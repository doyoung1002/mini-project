import React, { useCallback, useRef, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../components/input/useInput";

const Product = () => {
  const [title, setTitle, resetTitle] = useInput();
  const [price, setPrice, resetPrice] = useInput();
  const [img, setImg, resetImg] = useState(null);
  const queryClient = useQueryClient();

  const imageFetch = async (formData) => {
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axios.post("http://localhost:4000/Products", formData, config);
  };
  const mutation = useMutation(
    () => {
      imageFetch();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        resetTitle("");
        resetPrice("");
        resetImg("");
      },
    }
  );

  const submitHandler = useCallback(() => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("img", img);
    mutation.mutate(formData);
  }, [title, price, img]);

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setImg(selectedFile);
  };

  return (
    <>
      <div>
        <h3>상품등록</h3>
        <div>
          <input placeholder='상품명명' value={title} onChange={setTitle} />
          <input placeholder='상품가격' value={price} onChange={setPrice} />
          <input type='file' onChange={imageHandler} />
          <button onClick={submitHandler}>등록</button>
        </div>
      </div>
    </>
  );
};

export default Product;
