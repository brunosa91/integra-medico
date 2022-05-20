import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Cadastro from "../Pages/Cadastro/Cadastro.jsx";
import Catalogo from "../Pages/Catalogo/Catalogo.jsx";
import Editar from "../Pages/Editar/Editar.jsx";

import Header from "../Components/Header/Header.jsx";
import { GlobalStyle } from "../Style/GlobalStyle.js";

function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
