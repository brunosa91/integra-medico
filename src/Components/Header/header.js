import styled from "styled-components";

import { variable } from "../../Style/GlobalStyle.js";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${variable.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 20px;

  .nav_link {
    text-decoration: none;
    cursor: pointer;
    color: ${variable.text};
    font-family: ${variable.textStyle};
    font-size: 20px;
    font-weight: bold;
  }
`;

export const img = styled.img`
  height: 75px;
  width: 75px;
`;

export const link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${variable.text};
  font-family: ${variable.textStyle};
  font-size: 20px;
  font-weight: bold;
`;
