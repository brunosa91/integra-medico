import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle.js";

export const Button = styled.button`
  width: 250px;
  height: 40px;
  background-color: ${variable.buttonColor};
  color: ${variable.textButton};
  border-radius: 15px;
  margin-top: 30px;
  cursor: pointer;
`;
