import styled from "styled-components";
import { variable } from "../../Style/GlobalStyle.js";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${variable.backgroundDegrade};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
  border-radius: 5px;
  > div {
    text-align: center;
    width: 100%;
    h4 {
      font-size: 20px;
      text-align: center;
    }
    p {
      padding-block: 5px;
      display: flex;
      justify-content: space-between;
    }
  }
  > a {
    color: ${variable.text};
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    align-self: flex-start;

    img {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
  }
`;
