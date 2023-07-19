import React, { useCallback, useRef, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import useInput from "../components/input/useInput";
import Form from "react-bootstrap/Form";
import Headers from "./header/Header";

const Product = () => {
  const [title, setTitle, resetTitle] = useInput();
  const [price, setPrice, resetPrice] = useInput();
  const [img, setImg] = useState(null);
  const queryClient = useQueryClient();

  const imageFetch = async (formData) => {
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios.defaults.withCredentials = true;
    await axios.post("https://honeyitem.shop/api/items", formData);
  };

  // const [file, setFile] = useState(null);
  // const [preview, setPreview] = useState(null);

  // const onFileChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const selectedFile = e.target.files[0];
  //     setFile(selectedFile);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   }
  // };

  const mutation = useMutation(
    (formData) => {
      imageFetch(formData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        resetTitle("");
        resetPrice("");
        setImg(null);
      },
    }
  );

  const submitHandler = useCallback(() => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("img", img);
    mutation.mutate(formData);
    for (let value of formData.values()) {
      console.log(value);
    }
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
          <input placeholder='상품명' value={title} onChange={setTitle} />
          <input placeholder='상품가격' value={price} onChange={setPrice} />
          <input type='file' onChange={imageHandler} />
          <button onClick={submitHandler}>등록</button>
        </div>
      </div>

      {/* <>
        <Form.Group
          controlId='formFileSm'
          className='mb-3'
          style={{ width: "35%", marginTop: "20px" }}>
          <Form.Label>레시피 대표 이미지</Form.Label>
          <Form.Control type='file' size='sm' onChange={onFileChange} />
          {preview && (
            <img
              src={preview}
              alt='Image preview'
              style={{ width: "40%", height: "auto", margin: "20px" }}
            />
          )}
        </Form.Group>
      </> */}
    </>
  );
};

export default Product;
