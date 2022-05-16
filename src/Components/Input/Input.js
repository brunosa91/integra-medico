import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle";

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 50%;
  border-top: none;
  border-right: none;
  border-left: none;
  color: ${variable.textInput};
  font-family: ${variable.textStyle};
  background-color: transparent;
  font-size: 15px;
  padding: 5px;
`;
export const Label = styled.label`
  color: black;
  font-size: 18px;
  text-align: center;
`;
