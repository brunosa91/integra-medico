import React from "react";
import * as S from "./header.js";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <S.Header>
      <S.img src="Assets/img/logo.png" />
      <S.Nav>
        <NavLink to="/" className="nav_link">
          Home
        </NavLink>
        <NavLink to="/cadastro" className="nav_link">
          Cadastre-se
        </NavLink>
        <NavLink to="/catalogo" className="nav_link">
          Catálogo
        </NavLink>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
