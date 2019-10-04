import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import consulta_PB from "./componentes/consulta_PB";
import Layout from "./componentes/Layout";
import SolucionesKabec from "./componentes/SolucionesKabec";
import FichaPostulante from "./componentes/FichaPostulante";
import consultarCita from "./componentes/consultarCita";
import Agregar_PB from "./componentes/agregar_PB";
import agendar from "./componentes/agendar";
import agregar_comentario from "./componentes/agrcom";
import Examen from "./componentes/Examen";
import Postulante from "./componentes/Postulante";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/Ficha-Postulante" component={FichaPostulante} />
            <Route
              exact
              path="/consultar-Postulantes"
              component={consulta_PB}
            />
            <Route exact path="/consultarCita" component={consultarCita} />
            <Route exact path="/agregar_PB" component={Agregar_PB} />
            <Route exact path="/agendar_cita" component={agendar} />
            <Route
              exact
              path="/agregar_comentario"
              component={agregar_comentario}
            />
            <Route exact path="/Examen" component={Examen} />
            <Route exact path="/Postulante" component={Postulante}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
