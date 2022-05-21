import React from "react";
import * as S from "./Input.js";

function Input({ name, register, onChange, type, value, onBlur, erro }) {
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
        onBlur={onBlur}
      />
      <S.Label>{name.toUpperCase()}</S.Label>
      <p>{erro}</p>
    </S.Div>
  );
}

export default Input;
