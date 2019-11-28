import React from "react";
import Ficha from "./Ficha";
import { Container } from "@material-ui/core";
import IconoExamen from "../Imagenes/avatar.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "../App.css";
import { progresBar } from "./progress";
import FiltrosFichaPostulante from "./filtros/FiltrosFichaPostulante";
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

class FichaPostulante extends React.Component {
  state = {
    postB: this.props.postulanteB
  };
  render() {
    progresBar(true);
    //console.log(this.state.postB.estatuspostulante);
    //console.log("Valores de la respuesta" + this.state.resp);
    // const foto = this.state.resp.map(photo => {
    //   return <Avatar size="200" src={photo.foto_perfil} round="100px" />;
    // });
    const Foto = this.props.postulanteC.foto_perfil;
    return (
      <div>
        <br />
        <div align="center">
          <td>
            <ColoredLine color="black" />
          </td>
          <td>
            <FiltrosFichaPostulante />
          </td>
          <td>
            <ColoredLine color="black" />
          </td>
        </div>
        <tr>
          <td>
            <Container>
              <tr>
                {/* <Avatar size="200" src={Foto} round="100px" /> */}
                {Foto === null ? (
                  <img
                    className="agciAvatar"
                    src={IconoExamen}
                    alt="Foto Postulante"
                    style={{ marginTop: 0 }}
                  />
                ) : (
                  ""
                )}

                {Foto !== null ? (
                  <img
                    className="agciAvatar"
                    src={Foto}
                    alt="Foto de Postulante"
                    style={{ marginTop: 0, width: 160, height: 160 }}
                  />
                ) : (
                  ""
                )}
              </tr>
              <tr>
                <TextField
                  disabled
                  label="Estatus"
                  value={this.state.postB.estatuspostulante.descripcion}
                  margin="normal"
                  variant="outlined"
                  style={{ backgroundColor: "#fae0ff" }}
                />
              </tr>
              <tr align="center">
                <Link to="/consultar-Postulantes" className="btn btn-primary">
                  Salir
                </Link>
              </tr>
            </Container>
          </td>
          <td>
            <Container>
              <Ficha />
            </Container>
          </td>
        </tr>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postulanteB: state.postulante,
    postulanteC: state.postulantec
  };
};

export default connect(mapStateToProps, null)(FichaPostulante);
