import React from "react";
import { Link } from "react-router-dom";
import * as S from "./card.js";

function Card({
  nome,
  crm,
  telefone,
  especialidade,
  celular,
  cep,
  cidade,
  id,
}) {
  return (
    <S.Card>
      <div>
        <h4>{nome}</h4>

        <p>
          {especialidade} <span>CRM:{crm}</span>
        </p>
        <p>
          {telefone} <span>{celular}</span>
        </p>
        <p>
          {cidade} - <span> {cep}</span>
        </p>
      </div>
      <Link to={`/editar/${id}`}>
        Editar
        <img src="/Assets/icons/editar.svg" alt="" />
      </Link>
    </S.Card>
  );
}

export default Card;
