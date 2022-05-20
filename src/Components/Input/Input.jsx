import React from "react";
import * as S from "./Input.js";

function Input({ name, register, onChange, type, value }) {
  return (
    <S.Div>
      <S.Input
        name={name}
        register={register}
        onChange={onChange}
        required
        // id={id}
        {...register}
        type={type}
        value={value}
      />
      <S.Label>{name}</S.Label>
    </S.Div>
  );
}

export default Input;
