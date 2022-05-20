import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle.js";

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin: 15px;
  > div {
    display: flex;
    justify-content: space-between;
  }
  .btn {
    width: 150px;
    height: 40px;
    background-color: ${variable.buttonColor};
    color: ${variable.textButton};
    border-radius: 15px;
    margin-top: 30px;
    cursor: pointer;
  }
  .btn:nth-child(2) {
    margin-left: 20px;
  }
`;
