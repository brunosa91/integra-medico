import * as S from "../Cadastro/cadastro.js";
import * as H from "../../Components/Header/header.js";
import { useParams } from "react-router-dom";
import FormularioEditar from "../../Components/FormularioEditar/FormularioEditar.jsx";

function Editar() {
  const { id } = useParams();

  return (
    <S.Main>
      <S.Section>
        <H.img primary src="Assets/img/img-cadastro.png" />
      </S.Section>
      <S.Section>
        <FormularioEditar id={id} />
      </S.Section>
    </S.Main>
  );
}

export default Editar;
