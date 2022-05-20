import React from "react";
import * as S from "./formularioEditar.js";
import Input from "../../Components/Input/Input.jsx";
import { useState } from "react";
import { Api } from "../../Services/Api.js";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button.js";

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
      <Button>EDITAR</Button>
      <Button>DELETAR</Button>
    </S.Form>
  );
}

export default Formulario;
