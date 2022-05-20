import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle.js";

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  background-image: linear-gradient(
    to right,
    ${variable.background},
    ${variable.backgroundDegrade}
  );
  .Div {
    display: flex;
    justify-content: center;
  }
  .container {
    height: 30px;
    width: 120px;
    margin-top: 30px;
    margin-right: 15px;
  }
`;

export const Grid = styled.div`
  margin-inline: auto;
  width: 85%;
  min-height: 150vh;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
  grid-row-gap: 2%;
  margin-top: 7%;
  > div {
    border: solid 2px black;
    height: 60%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: burlywood;
  }
`;
