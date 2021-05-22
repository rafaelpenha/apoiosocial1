

import Inicial from "./pages/inicial";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/login";
import Navegacao from "./componentes/Navegacao";
import Usuarios from "./pages/Usuarios";


function App() {
  return <BrowserRouter>
         
      <Switch>
      <Route path="/" exact>
        <Inicial />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/usuarios">
        <Usuarios />
      </Route>
  </Switch>
  </BrowserRouter>
}

export default App;
