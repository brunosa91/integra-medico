import React from "react";
import * as S from "./home.js";

import { Link } from "react-router-dom";

function Home() {
  return (
    <S.Main>
      <S.Section>
        <img src="Assets/img/img-home.png" alt="mão segurando máscara" />
      </S.Section>
      <S.Section>
        <p>
          Bem-vindo ao Integra Médico, uma plaforma de gerenciamento de dados de
          profissionais da área de medicina. O sistema é simples e funcional,
          composto por área de cadastro onde os dados do médico são inseridos no
          sistema, catálogo onde é possível ver todos os médicos cadastrados e
          realizar pesquisas através dos filtros. Há também a área de edição
          onde é possível atualizar dados e deletar profissionais do sistema.
        </p>
        <Link to={"/cadastro"}>CADASTRE-SE</Link>
      </S.Section>
    </S.Main>
  );
}

export default Home;
