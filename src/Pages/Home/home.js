import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle.js";

export const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: calc(100vh - 70px);
  background-image: linear-gradient(
    to right,
    ${variable.background},
    ${variable.backgroundDegrade}
  );
`;
export const Section = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: calc(100vh - 70px);
    width: 100%;
    object-fit: cover;
  }
  > p {
    font-size: 20px;
    text-align: center;
    padding: 70px;
    font-family: ${variable.textStyle};
  }
  > a {
    height: 50px;
    width: 200px;
    background-color: ${variable.buttonColor};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${variable.textButton};
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 5px black;
  }
`;
