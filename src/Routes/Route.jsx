import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Header from "../Components/Header/Header.jsx";
import { GlobalStyle } from "../Style/GlobalStyle.js";

function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
