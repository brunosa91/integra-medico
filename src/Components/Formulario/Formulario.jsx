import React from "react";
import * as S from "./Formulario.js";
import Input from "../../Components/Input/Input.jsx";

function Formulario() {
  return (
    <S.Form>
      <Input name="NOME" />
      <Input name="CRM" />
      <Input name="TELEFONE" />
      <Input name="CELULAR" />
      <Input name="CEP" />
      <Input name="LOGRADOURO" />
      <Input name="NÚMERO" />
      <Input name="COMPLEMENTO" />
      <Input name="CIDADE" />
      <Input name="ESTADO" />
      <Input name="ESPECIALIDADE" />
    </S.Form>
  );
}

export default Formulario;
