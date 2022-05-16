import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle.js";

export const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: calc(100vh - 70px);
  background-color: ${variable.background};
`;
export const Section = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
