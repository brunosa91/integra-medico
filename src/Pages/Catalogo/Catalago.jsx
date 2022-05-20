import React, { useState, useEffect } from "react";
import * as S from "./catalago.js";
import InputBusca from "../../Components/InputBusca/InputBusca.jsx";
import { Api } from "../../Services/Api.js";

function Catalogo() {
  const [busca, setBusca] = useState([]);

  const [select, setSelect] = useState("");

  const [input, setInput] = useState("");

  useEffect(() => {
    Api.get("").then((response) => {
      setBusca(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <S.Main>
      <div className="Div">
        <select
          className="container"
          id=""
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="nome">Nome</option>
          <option value="crm">CRM</option>
          <option value="telefone">Telefone</option>
          <option value="celular">Celular</option>
          <option value="cep">CEP</option>
          <option value="especialidade">Especialidade</option>
        </select>

        <InputBusca onChange={(e) => setInput(e.target.value)} />
      </div>

      <S.Grid>
        {busca
          .filter((item) => {
            if (input === "") {
              return item;
            } else if (
              select === "nome" &&
              item.nome.toLowerCase().includes(input.toLowerCase())
            ) {
              return item;
            } else if (select === "crm" && item.crm.includes(input)) {
              return item;
            } else if (select === "telefone" && item.telefone.includes(input)) {
              return item;
            } else if (select === "celular" && item.celular.includes(input)) {
              return item;
            } else if (select === "celular" && item.celular.includes(input)) {
              return item;
            } else if (select === "cep" && item.cep.includes(input)) {
              return item;
            } else if (
              select === "especialidade" &&
              item.especialidade.toLowerCase().includes(input.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <div key={item.nome}>
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
