import React from "react";
import IconoAgendar from "../Imagenes/agendarcita.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

const fecha = new Date();

class agendar extends React.Component {
  state = {
    fecha: ""
  };

  render() {
    console.log("Valor----" + this.props.postulante.nombre)
    return (
      <React.Fragment>
        <div align="center">
          <td>
            <ColoredLine color="black" />
          </td>
          <td>
            <img className="agci" src={IconoAgendar} alt="agendar cita" />
          </td>
          <td>
            <ColoredLine color="black" />
          </td>
        </div>
        <div align="center">
          <label>
            {this.props.postulante.nombre}&nbsp;
            {this.props.postulante.apellido1}&nbsp;
            {this.props.postulante.apellido2}
          </label>
        </div>
        <br />
        <br />
        <div className="row">
          <form className="form-agendar">
            <div className="col">
              <label className="label1">Entrevistador:</label>
              <input
                className="form-control"
                name="entrevistador"
                type="text"
              />
            </div>
            <br />
            <div className="col">
              <label className="label1">Fecha:</label>
              <TextField type="date" />
            </div>
          </form>
          <form>
            <div className="col">
              <label className="label1">Hora:</label>
              <input className="form-control" type="text" name="Hora" />
            </div>
            <br />
            <div>
              &nbsp; &nbsp;
              <Link to="/consultarCita" className="btn btn-primary">
                agendar
              </Link>
            </div>
            <br />
            <div>
              &nbsp; &nbsp;
              <Link to="/consultar-Postulantes" className="btn btn-primary">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

//Se accede al store de postulante y postulante. Pude usar los valores de cualquiera de los dos.
const mapStateToProps = state => {
  return {
    postulante: state.postulante,
    postulantec: state.postulantec
  };
};

export default connect(
  mapStateToProps,
  null)(agendar);
