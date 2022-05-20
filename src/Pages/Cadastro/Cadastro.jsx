import React from "react";
import * as S from "./cadastro.js";
import Formulario from "../../Components/Formulario/Formulario.jsx";

function Cadastro() {
  return (
    <S.Main>
      <S.Section>
        <img
          src="Assets/img/img-cadastro.png"
          alt="médicos realizandos cirurgia"
        />
      </S.Section>
      <S.Section>
        <Formulario />
      </S.Section>
    </S.Main>
  );
}

export default Cadastro;
