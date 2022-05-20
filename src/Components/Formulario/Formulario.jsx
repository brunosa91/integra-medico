import React from "react";
import * as S from "./Formulario.js";
import Input from "../../Components/Input/Input.jsx";
import { useState } from "react";
import { Api } from "../../Services/Api.js";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button.js";

function Formulario() {
  const [dados, setDados] = useState({
    nome: "",
    crm: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
    especialidade: "",
  });
  const { register, handleSubmit } = useForm();

  // const navigate = useNavigate();
  const api = (data) => {
    Api.post("", data)
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => console.log(erro));
  };

  function handleOnChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  return (
    <S.Form onSubmit={handleSubmit(api)}>
      <Input
        name="NOME"
        register={{ ...register("nome", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="CRM"
        register={{ ...register("crm", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="TELEFONE"
        register={{ ...register("telefone", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="CELULAR"
        register={{ ...register("celular", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="CEP"
        register={{ ...register("cep", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="LOGRADOURO"
        register={{ ...register("logradouro", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="NÚMERO"
        register={{ ...register("numero", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="COMPLEMENTO"
        register={{ ...register("complemento", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="CIDADE"
        register={{ ...register("cidade", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="ESTADO"
        register={{ ...register("estado", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="ESPECIALIDADE"
        register={{ ...register("especialidade", { required: true }) }}
        onChange={handleOnChange}
      />
      <Button>ENVIAR</Button>
    </S.Form>
  );
}

export default Formulario;
