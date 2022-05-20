import React, { useEffect } from "react";
import * as S from "./formularioEditar.js";
import Input from "../../Components/Input/Input.jsx";
import { useState } from "react";
import { Api } from "../../Services/Api.js";
import { useNavigate } from "react-router-dom";

function FormularioEditar({ id }) {
  const [dados, setDados] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    Api.get("/" + id)
      .then((response) => {
        setDados(response.data);
        console.log(response.data);
      })
      .catch((erro) => console.log(erro));
  }, [id]);

  function handleUpdate(e) {
    e.preventDefault();
    console.log(dados);
    Api.put("", dados)
      .then((response) => {
        navigate("/catalogo");
      })

      .catch((err) => console.log(err));
  }

  function handleDelete(e) {
    e.preventDefault();
    Api.delete("" + id, dados)
      .then((response) => {
        navigate("/catalogo");
      })
      .catch((err) => console.log(err));
  }

  function handleOnChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }
  return (
    <S.Form>
      <Input
        name="nome"
        type="text"
        onChange={handleOnChange}
        value={dados.nome}
      />
      <Input
        name="crm"
        type="text"
        onChange={handleOnChange}
        value={dados.crm}
      />
      <Input
        name="telefone"
        type="text"
        onChange={handleOnChange}
        value={dados.telefone}
      />
      <Input
        name="celular"
        type="text"
        onChange={handleOnChange}
        value={dados.celular}
      />
      <Input
        name="cep"
        type="text"
        onChange={handleOnChange}
        value={dados.cep}
      />
      <Input
        name="logradouro"
        type="text"
        onChange={handleOnChange}
        value={dados.logradouro}
      />
      <Input
        name="numero"
        type="text"
        onChange={handleOnChange}
        value={dados.numero}
      />
      <Input
        name="complemento"
        type="text"
        onChange={handleOnChange}
        value={dados.complemento}
      />
      <Input
        name="cidade"
        type="text"
        onChange={handleOnChange}
        value={dados.cidade}
      />
      <Input
        name="estado"
        type="text"
        onChange={handleOnChange}
        value={dados.estado}
      />
      <Input
        name="especialidade"
        type="text"
        onChange={handleOnChange}
        value={dados.especialidade}
      />
      <div>
        <button className="btn" onClick={handleUpdate}>
          EDITAR
        </button>
        <button className="btn" onClick={handleDelete}>
          DELETAR
        </button>
      </div>
    </S.Form>
  );
}

export default FormularioEditar;
