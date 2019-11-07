import React, { Component } from "react";
import { connect } from "react-redux"; //Sirve para conectar las librerias de react y redux, se utiliza para cada componente que se quiera dar acceso al store.
import Icono from "../Imagenes/postulantes.png";
import "./styles/Formatos.css";
import "./styles/FormatoImagenes.css";
import lupa from "../Imagenes/lupa.png";
import { Link } from "react-router-dom";
import FiltrosPB from "./filtros/filtrosPB";
import { getPerfil } from "../request/request";
//Se agregan las librerias necesarias para usar redux.
import {
  clickAgendar,
  clickBuscar,
  clickAgregarPostulante,
  clickCompletarDatos,
  clickMostrarFicha
} from "../actions/postulanteB";
import { filtrosPBReducer } from "../reducers/filtrosPBReducer";
import { setCita, setPostulante, setPostulanteC, setCliente,
   setExamen,  setSeccion, setEntrevista, setRadioButton } from '../actions/postulanteB';
   import './styles/Formatos.css';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
      width: 500
    }}
  />
);

class consulta_PB extends Component {
  state = {
    respPerf: [],
    perfil: "",
    nombre: null,
    apellido1: "",
    apellido2: ""
  };

  constructor(props) {
    super(props);
  }

  handleSelect = e => {
    //console.log(e.target.value);
    this.setState({ perfil: e.target.value });
  };

  handleClickBuscar = e => {
    this.props.dispatchClickBuscar("Buscando"); //Se almacena en el store una función.
  };

  handleWrite = e => {
    console.log("-.-.-." + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("form submit");
    console.log(this.state.perfil);
    console.log(this.state.nombre);
    console.log(this.state.apellido1);
    console.log(this.state.apellido2);
  };

  componentDidMount = () => {
    this.getPerfil();
    this.setState({ nombre: "" });
    this.props.dispatchSetCita("vacio");//Se setea el store de citacuando se entre a al vista
    this.props.dispatchSetPostulante("vacio");
    this.props.dispatchSetPostulanteC("vacio");
    this.props.dispatchSetCliente("vacio");
    this.props.dispatchSetExamen("vacio");
    this.props.dispatchSetSeccion("vacio");
    this.props.dispatchSetEntrevista("vacio");
    this.props.dispatchSetRadioButton(null);
  };
  getPerfil = async () => {
    const nuevoGet = await getPerfil();
    this.setState({
      respPerf: nuevoGet.data
    });
  };

  handleClickPulsado = e => {
    console.log("Que boton fue pulsado:" + e.target.name)
    if (e.target.name === "completardatos") {
      this.props.history.push('/Completar_Datos_postulante');
    }else if (e.target.name === "agregarpostulante") {
      this.props.history.push('/agregar_PB');
    }else if (e.target.name === "agendar") {
      this.props.history.push('/agendar_cita');
    }else if (e.target.name === "mostrarficha") {
      if(this.props.postulantec !== "vacio" && this.props.postulantec !== null && this.props.postulantec !== undefined) {
        this.props.history.push('/Ficha-Postulante');
      }else {
        alert("El postulante seleccionado no tiene sus datos completados...");
      }
     
    }
  }

  alert = e =>{
    return (
      this.alert("EL postulante seleccionado no es postulanteC")
    )
  }

  handleClick = e => {
    this.props.dispatchClickAgendar(filtrosPBReducer); //Se almacena en el store una función.
  };

  handleClickAgregarPostulante = e => {
    this.props.dispatchClickAgregarPostulante("Agregando"); //Se almacena en el store una función.
  };

  handleClickCompletarDatos = e => {
    this.props.dispatchClickCompletarDatos("Completando"); //Se almacena en el store una función.
  };

  handleClickMostrarFicha = e => {
    this.props.dispatchClickMostrarFicha("MostrarFicha"); //Se almacena en el store una función.
  };

  render() {
    console.log("MMM"+this.props.radiobutton)
    const { respPerf, c } = this.state;

    const handleSelect = respPerf.map(perf => {
      // console.log("----"  + perf.descripcion)
      return <option>{perf.descripcion}</option>;
    });
    return (
      <React.Fragment>
        <div align="center">
          <td>
            <ColoredLine color="black" />
          </td>
          <td>
            <img className="postulantes" src={Icono} alt="postulantes" />
          </td>
          <td>
            <ColoredLine color="black" />
          </td>
        </div>

        <div>
          <h2 className="titulo">Consultar Postulantes</h2>
        </div>

        <div className="row" align="center">
          <form className="form-post setStyles" onSubmit={this.handleSubmit}>
            <div className="co-sm"></div>
            <div className="co-sm">
              <label>Perfil: </label>
              <select
                className="form-control"
                value={this.state.value}
                onChange={this.handleSelect}
              >
                <option>Perfiles</option>
                {handleSelect}
              </select>
            </div>
            <div className="co-sm">
              <label>Nombre(s): </label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                onChange={this.handleWrite}
                value={this.state.nombre}
              />
            </div>
            <div className="co-sm">
              <label>Apellido Paterno: </label>
              <input
                className="form-control"
                type="text"
                name="apellido1"
                onChange={this.handleWrite}
                value={this.state.apellido1}
              />
            </div>
            <div className="co-sm">
              <img className="lupa" src={lupa} alt="consulta" />
            </div>
          </form>

          <br />

          <form className="form-hor" role="form">
            <div className="form-group" >
              <button className="btn btn-primary"
                      // disabled={!this.props.radiobutton}
                      onClick={this.handleClickPulsado}
                      name="agregarpostulante"
              >
                      Agregar Postulante
              </button>
              &nbsp; &nbsp;
              <button className="btn btn-primary" 
                      disabled={!this.props.radiobutton} 
                      onClick={this.handleClickPulsado}
                      name="completardatos">
                Completar Datos
              </button>
              &nbsp; &nbsp;
              <button className="btn btn-primary"
                      disabled={!this.props.radiobutton}
                      onClick={this.handleClickPulsado}
                      name="agendar"
              >
                Agendar
              </button>
              &nbsp; &nbsp;
              <button className="btn btn-primary"
                      disabled={!this.props.radiobutton}
                      onClick={this.handleClickPulsado}
                      name="mostrarficha"
              >
                Mostrar Ficha
              </button>
              <script>
                
              </script>
              &nbsp; &nbsp;
            </div>
          </form>
        </div>
        <div>
          <table className="mt-4">
            <thead>
              <tr>
                <th width="10%">Seleccionar</th>
                <th width="15%">Nombre</th>
                <th width="10%">Telefono</th>
                <th width="10%">Celular</th>
                <th width="15%">Correo</th>
                <th width="10%">Perfil</th>
                <th width="10%">Estatus</th>
              </tr>
            </thead>
            <tbody>
              <FiltrosPB
                perfil={this.state.perfil}
                nombre={this.state.nombre}
                apellido1={this.state.apellido1}
              />
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cita: state.cita,
    radiobutton: state.radiobutton,
    postulantec: state.postulantec
  }
}

const mapDispatchProps = dispatch => ({
  dispatchClickAgendar: value => dispatch(clickAgendar(value)),
  dispatchClickBuscar: value => dispatch(clickBuscar(value)),
  dispatchClickAgregarPostulante: value =>
  dispatch(clickAgregarPostulante(value)),
  dispatchClickCompletarDatos: value => dispatch(clickCompletarDatos(value)),
  dispatchClickMostrarFicha: value => dispatch(clickMostrarFicha(value)),

  dispatchSetCita: value => dispatch(setCita(value)),
  dispatchSetPostulante: value => dispatch(setPostulante(value)),
  dispatchSetPostulanteC: value => dispatch(setPostulanteC(value)),
  dispatchSetCliente: value => dispatch(setCliente(value)),
  dispatchSetExamen: value => dispatch(setExamen(value)),
  dispatchSetSeccion: value => dispatch(setSeccion(value)),
  dispatchSetEntrevista: value => dispatch(setEntrevista(value)),
  dispatchSetRadioButton: value => dispatch(setRadioButton(value))
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(consulta_PB); //El segundo parametro del metodo connect permitira trabajar con las acciones.
