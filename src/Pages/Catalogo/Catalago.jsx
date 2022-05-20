import React, { useState, useEffect } from "react";
import * as S from "./catalago.js";
import InputBusca from "../../Components/InputBusca/InputBusca.jsx";
import { Api } from "../../Services/Api.js";

function Catalogo() {
  const [busca, setBusca] = useState([]);

  useEffect(() => {
    Api.get("").then((response) => {
      setBusca(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <S.Main>
      <div className="Div">
        <select className="container" id="">
          <option value="">Nome</option>
          <option value="">CRM</option>
          <option value="">Telefone</option>
          <option value="">Celular</option>
          <option value="">CEP</option>
          <option value="">Especialidade</option>
        </select>

        <InputBusca />
      </div>

      <S.Grid>
        {busca.map((item) => {
          return (
            <div>
              <h4>Nome:{item.nome}</h4>
              <p>CRM:{item.crm}</p>
              <p>ESPECIALIDADE:{item.especialidade}</p>
            </div>
          );
        })}
      </S.Grid>
    </S.Main>
  );
}

export default Catalogo;
