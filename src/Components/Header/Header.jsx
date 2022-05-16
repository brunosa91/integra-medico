import React from "react";
import * as S from "./header.js";

function Header() {
  return (
    <S.Header>
      <S.img src="Assets/img/logo.png" />
      <S.Nav>
        <S.link>Home</S.link>
        <S.link>Cadastre-se</S.link>
        <S.link>Catálogo</S.link>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
