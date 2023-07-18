import { styled } from "styled-components";

export const Container = styled.div`
  height: 60%;
`;

export const DetailContainer = styled.div`
  background-color: white;
`;

// export const DetailBanner = styled.div`
//   width: 100%;
//   height: 20vh;
//   font-size: 48px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   background-color: #FF0090;
//   margin-bottom: 5vh;
//   color: white;
//   box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4)
// `;

export const TitleDiv = styled.div``;

// export const DetailTitle = styled.div`
//   margin: auto;
//   width: 1440px;
//   height: 78px;
//   color: white;
//   background-color: #FF0090;
//   font-size: 48px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   margin-top: 3vh;
//   margin-bottom: 3vh;
//   box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.4);
// `

export const ImgDiv = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  margin: auto;
  margin-top: 3vh;
  /* 그림자 설정 */

  /* 그림자 색상과 강도, 위치 등을 필요에 따라 조절할 수 있습니다 */
  /* box-shadow: h-offset v-offset blur spread color; */

  /* 예시: 그림자를 아래 방향으로만 생성하고 흐릿하게 표현 */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */

  /* 예시: 그림자를 모든 방향으로 생성하고 진하게 표현 */
  /* box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4); */

  /* 순서
C(댓글 입력) post -> R(읽어오는것) get -> Update -> Delete */
`;

export const ImageBox = styled.div`
  width: 500px;
  height: 500px;
  margin-right: 50px;
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.4);
  /* background-color: #FF0090; */
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    transition: all 0.3s ease-in;
    transform: translateY(-5px);
  }
  cursor: pointer;
`;

export const ImageText = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.4);
  /* background-color: #FF0090; */
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    transform: translateY(-5px);
    transition: all 0.3s ease-in;
  }
  cursor: pointer;
`;
