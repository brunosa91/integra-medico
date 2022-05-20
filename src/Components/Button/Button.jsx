import React from "react";
import * as S from "./button.js";

function Button({ nome }) {
  return <S.Button type="submit">{nome}</S.Button>;
}

export default Button;
