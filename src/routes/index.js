import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";

import Upload from "../views/upload";
import Politica from "../views/politica";
import Relatorio from "../views/relatorios";

  const routes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route  element={<Upload />}  path="/" exact />
                <Route  element={<Politica />}  path="/politica" exact />
                <Route  element={<Relatorio />}  path="/Relatorio" exact />
            </Routes>
        </BrowserRouter>
    )
 }
 
 export default routes;