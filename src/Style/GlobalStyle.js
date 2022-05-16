import { createGlobalStyle } from "styled-components";

export const colors = {
  name: "colors",
  background: "#EFFDF1",
  backgroundDegrade: "#B6D9BA",
  buttonColor: "#316141",
  searchInput: "#CFC6C6",
  textInput: "#6C5959",
  textButton: "#FFFFFF",
  text: "#000000",
  header: "#93C398",
};

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,body{
    width: 100%;
    min-height: 100vh;
  }



`;
