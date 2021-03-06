import React from "react";
import * as S from "./Formulario.js";
import Input from "../../Components/Input/Input.jsx";
import { useState } from "react";
import { Api } from "../../Services/Api.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .max(120, "O nome precisa ter no máximo 120 caracteres"),
  crm: yup
    .number()
    .required("CRM é obrigatório")
    .max(7, "O CRM precisa ter no máximo 7 caracteres"),
  telefone: yup.number().required("O telefone é obrigatório"),
  celular: yup.number().required("O celular é obrigatório"),
  cep: yup.number().required("O CEP é obrigatório"),
});

function Formulario() {
  const [dados, setDados] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

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
        register={{ ...register("nome") }}
        onChange={handleOnChange}
        erro={errors.nome?.message}
      />
      <Input
        name="crm"
        id="crm"
        type="text"
        register={{ ...register("crm") }}
        onChange={handleOnChange}
        erro={errors.crm?.message}
      />
      <Input
        name="telefone"
        id="telefone"
        type="text"
        register={{ ...register("telefone") }}
        onChange={handleOnChange}
        erro={errors.telefone?.message}
      />
      <Input
        name="celular"
        id="celular"
        type="text"
        register={{ ...register("celular") }}
        onChange={handleOnChange}
        erro={errors.celular?.message}
      />
      <Input
        name="cep"
        id="cep"
        type="text"
        register={{ ...register("cep") }}
        onChange={handleOnChange}
        onBlur={setCep}
        erro={errors.cep?.message}
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

      <fieldset>
        <legend>Escolha sua especialidade:</legend>
        <div>
          <input
            type="radio"
            id="angeologia"
            value="angeologia"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="angeologia">Angeologia</label>
        </div>

        <div>
          <input
            type="radio"
            id="cardiologiaInfantil"
            value="cardiologiaInfantil"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="cardiologiaInfantil">Cardiologia Infantil</label>
        </div>

        <div>
          <input
            type="radio"
            id="Alergologia"
            value="Alergologia"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="Alergologia">Alergologia</label>
        </div>

        <div>
          <input
            type="radio"
            id="BucoMaxilo"
            value="BucoMaxilo"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="BucoMaxilo">Buco Maxilo</label>
        </div>

        <div>
          <input
            type="radio"
            id="Cardiologiaclinica"
            value="Cardiologiaclinica"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="Cardiologiaclinica">Cardiologia Clínica</label>
        </div>

        <div>
          <input
            type="radio"
            id="CirurgiaCabeçaePescoco"
            value="CirurgiaCabeçaePescoco"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="CirurgiaCabeçaePescoco">
            Cirurgia cabeça e pescoço
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="CirurgiaCardiaca"
            value="CirurgiaCardiaca"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="CirurgiaCardiaca">Cirurgia cardíaca</label>
        </div>

        <div>
          <input
            type="radio"
            id="CirurgiaDeTorax"
            value="CirurgiaDeTorax"
            {...register("especialidade", { required: true })}
          />
          <label htmlFor="CirurgiaDeTorax">Cirurgia de tórax</label>
        </div>
      </fieldset>

      <Button>ENVIAR</Button>
    </S.Form>
  );
}

export default Formulario;
