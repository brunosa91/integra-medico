import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle.js";

export const InputBusca = styled.input`
  height: 30px;
  width: 40%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: none;
  border-right: none;
  border-left: none;
  color: ${variable.textInput};
  font-family: ${variable.textStyle};
  background-color: transparent;
  font-size: 22px;
`;
