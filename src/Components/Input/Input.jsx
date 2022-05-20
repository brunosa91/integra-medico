import React from "react";
import * as S from "./Input.js";

function Input({ name, register, onchange }) {
  return (
    <S.Div>
      <S.Input register={register} onChange={onchange} />
      <S.Label>{name}</S.Label>
    </S.Div>
  );
}

export default Input;
