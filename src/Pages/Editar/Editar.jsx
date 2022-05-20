import * as S from "../Cadastro/cadastro.js";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import * as H from "../../Components/Header/header.js";
function Editar() {
  return (
    <S.Main>
      <S.Section>
        <H.img primary src="Assets/img/img-cadastro.png" />
      </S.Section>
      <S.Section>
        <Formulario />
      </S.Section>
    </S.Main>
  );
}

export default Editar;
