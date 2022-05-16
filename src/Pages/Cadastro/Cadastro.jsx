import React from "react";
import * as S from "./cadastro.js";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import * as H from "../../Components/Header/header.js";

function Cadastro() {
  return (
    <S.Main>
      <S.Section>
        <H.img primary src="Assets/img/img-cadastro.png" />
      </S.Section>
      <S.Section>
        <Formulario />
      </S.Section>
    </S.Main>
  );
}

export default Cadastro;
