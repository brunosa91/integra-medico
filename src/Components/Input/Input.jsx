import React from "react";
import * as S from "./Input.js";

function Input({ name }) {
  return (
    <S.Div>
      <S.Input />
      <S.Label>{name}</S.Label>
    </S.Div>
  );
}

export default Input;
