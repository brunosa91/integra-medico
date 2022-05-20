import React from "react";
import * as S from "./Formulario.js";
import Input from "../../Components/Input/Input.jsx";
import { useState } from "react";
import { Api, ApiCep } from "../../Services/Api.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button.js";

function Formulario() {
  const [dados, setDados] = useState({});

  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();
  function handleOnChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  const setCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((data) => {
        setValue("logradouro", data.logradouro);
        setValue("cidade", data.localidade);
        setValue("estado", data.uf);
      });
  };

  const api = (data) => {
    Api.post("", data)
      .then((response) => {
        navigate("/catalogo");
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <S.Form onSubmit={handleSubmit(api)}>
      <Input
        name="nome"
        id="nome"
        type="text"
        register={{ ...register("nome", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="crm"
        id="crm"
        type="text"
        register={{ ...register("crm", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="telefone"
        id="telefone"
        type="text"
        register={{ ...register("telefone", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="celular"
        id="celular"
        type="text"
        register={{ ...register("celular", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="cep"
        id="cep"
        type="text"
        register={{ ...register("cep", { required: true }) }}
        onChange={handleOnChange}
        onBlur={setCep}
      />
      <Input
        name="logradouro"
        id="logradouro"
        type="text"
        register={{ ...register("logradouro", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="numero"
        id="numero"
        type="text"
        register={{ ...register("numero", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="complemento"
        id="complemento"
        type="text"
        register={{ ...register("complemento", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="cidade"
        id="cidade"
        type="text"
        register={{ ...register("cidade", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="estado"
        id="estado"
        type="text"
        register={{ ...register("estado", { required: true }) }}
        onChange={handleOnChange}
      />
      <Input
        name="especialidade"
        id="especialidade"
        type="text"
        register={{ ...register("especialidade", { required: true }) }}
        onChange={handleOnChange}
      />
      <Button>ENVIAR</Button>
    </S.Form>
  );
}

export default Formulario;
