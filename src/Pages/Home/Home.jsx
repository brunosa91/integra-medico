import React from "react";
import * as S from "./home.js";

import { Button } from "../../Components/Button/button.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <S.Main>
      <S.Section>
        <img src="Assets/img/img-home.png" alt="mão segurando máscara" />
      </S.Section>
      <S.Section>
        <p>
          Bem vindo ao integra médicio, uma plaforma de gerenciamente de dados
          da profissionais da área da medicina. O sistema é simples e funcional,
          composto por área de cadastro onde os dados do médico são inseridos no
          sistama, área de busca onde é possível ver todos os médicos inseridos
          no sistema e realizar pesquisa através dos filtros e área de edição
          onde é possível tanto atualizar os dados do profissional como deletar
          dos sistema.
        </p>
        <Link to={"/cadastro"}>CADASTRE-SE</Link>
      </S.Section>
    </S.Main>
  );
}

export default Home;
