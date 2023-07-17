import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Product from "./product";
const Mains = styled.div`
  width: 1440px;
  height: 60%;
  margin: 0 auto;
  .cardsWrap {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .cardsWrap > .cardsBanner {
    background: #ff0090;
    width: 100%;
    height: 5vh;
    color: #ffffff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 3vh;
  }
  .cardsWrap > .cardsListWrap {
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .cardsListWrap > .cardsList {
    flex: 1;
    width: 1100px;
    height: 562px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
  }
  .cardsList > .cards {
    width: 100%;
    height: 460px;
    display: flex;
    gap: 0 40px;
  }
  .cards > .card {
    width: 340px;
    height: 420px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
  }
  .cards > .card:hover {
    transform: translateY(-30px);
    animation: ease-in-out 0.1s;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  .card > img {
    width: 100%;
    height: 340px;
    background: #d9d9d9;
  }
  .card > .cardDetail {
    width: 100%;
    height: 80px;
    margin-left: 5px;
    padding: 2%;
  }
  .card > .cardDetail > .productName {
    font-size: 16px;
    height: 24px;
  }
  .card > .cardDetail > .price {
    font-size: 20px;
    height: 28px;
  }
`;
const Main = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const detailpage = () => {
    navigate("/detail");
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <Mains>
      <div className='cardsWrap'>
        <div className='cardsBanner'>
          <h3>꿀템게시판</h3>
        </div>
        <div className='cardsListWrap'>
          {Array(4)
            .fill()
            .map((_, i) => (
              <div className='cardsList' key={i}>
                <div className='cards'>
                  {Array(3)
                    .fill()
                    .map((_, j) => {
                      const product = products[i * 3 + j];
                      return product ? (
                        <div
                          className='card'
                          key={product.id}
                          onClick={detailpage}>
                          <img src={product.img} alt='no image' />
                          <div className='cardDetail'>
                            <h5 className='productName'>{product.title}</h5>
                            <h5 className='price'>{product.price}</h5>
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
  );
};

export default Main;
