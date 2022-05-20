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
  .select {
    height: 40px;
    width: 120px;
    font-size: 18px;
    margin-top: 30px;
    margin-right: 15px;
  }
`;

export const Grid = styled.div`
  margin-inline: auto;
  width: 85%;
  min-height: 150vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3%;
  margin-top: 7%;
`;
