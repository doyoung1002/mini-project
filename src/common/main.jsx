import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme/theme";

const Mains = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 60%;
  margin: 0 auto;
  .cardsWrap {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .cardsWrap > .cardsBanner {
    background: #ff0090;
    width: 100%;
    height: 6vh;
    color: #ffffff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 4vh;
  }
  .cardsBanner > h3 {
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cardsWrap > .cardsListWrap {
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media ${({ theme }) => theme.device.mobile} {
      width: calc(100% / 2);
    }
  }
  .cardsListWrap > .cardsList {
    flex: 1;
    width: 1100px;
    height: 562px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    @media ${({ theme }) => theme.device.laptop} {
      flex-wrap: wrap;
    }
    @media ${({ theme }) => theme.device.mobile} {
      flex-wrap: nowrap;
      width: 100%;
      display: none;
    }
  }
  .cardsListWrap > .cardsList:nth-child(1) {
    @media ${({ theme }) => theme.device.mobile} {
      display: block;
    }
  }
  .cardsList > .cards {
    width: 100%;
    height: 460px;
    display: flex;
    gap: 0 40px;
    @media ${({ theme }) => theme.device.mobile} {
      flex-direction: column;
      width: 100%;
      height: 100%;
      flex-wrap: nowrap;
      gap: 0;
    }
  }

  .cards > .card {
    width: 340px;
    height: 420px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
    @media ${({ theme }) => theme.device.laptop} {
      width: 48%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 0 40px;
      flex-direction: column;
    }
  }
  .cards > .card:hover {
    transform: translateY(-30px);
    animation: ease-in-out 0.1s;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  .card > .mainImage {
    width: 100%;
    height: 340px;
    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      height: 90%;
    }
  }
  .card > .mainImage > img {
    width: 100%;
    height: 100%;
  }
  .card > .cardDetail {
    width: 100%;
    height: 80px;
    align-items: center;
    display: flex;
    justify-content: center;
    align-content: center;
    color: #ffffff;
    background: #ff0090;
    border: none;
    @media ${({ theme }) => theme.device.tablet} {
      width: 100%;
      height: 10%;
    }
  }
  .card > .cardDetail > .productName {
    font-size: 16px;
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 12px;
    }
  }
  .card > .cardDetail > .price {
    font-size: 20px;
    height: 28px;
  }
`;
const fetchProducts = async () => {
  const { data } = await axios.get("https://honeyitem.shop/api/items");
  // console.log("data=", data.data);
  return data.data;
};

const Main = () => {
  const navigate = useNavigate();
  const detailpage = (id) => {
    navigate(`/detail/${id}`);
    // console.log(id);
  };

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const { data, isLoading, isError } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Mains>
        <div className='cardsWrap'>
          <div className='cardsBanner'>
            <h3>잇츠 허니 아이템</h3>
          </div>
          <div className='cardsListWrap'>
            {data &&
              Array(4)
                .fill()
                .map((_, i) => (
                  <div className='cardsList' key={i}>
                    <div className='cards'>
                      {Array(3)
                        .fill()
                        .map((_, j) => {
                          const product = data[i * 3 + j];
                          return product ? (
                            <div
                              className='card'
                              key={product.itemId}
                              onClick={() => detailpage(product.itemId)}>
                              <div className='mainImage'>
                                <img src={product.imageUrl} alt='no image' />
                              </div>
                              <div className='cardDetail'>
                                <h5 className='productName'>
                                  {product.itemName}
                                </h5>
                                {/* <h5 className='price'>{product.price}</h5> */}
                              </div>
                            </div>
                          ) : null;
                        })}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </Mains>
    </ThemeProvider>
  );
};

export default Main;
