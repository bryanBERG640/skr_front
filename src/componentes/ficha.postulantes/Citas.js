import React, { Component } from "react";
import {
  TableHead,
  TableBody,
  Table,
  TableCell,
  TableRow
} from "@material-ui/core";
import { getPostulanteBId } from "../../request/request";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import Loading from "../paginas/Loading";

class Citas extends Component {
  state = {
    postB: [],
    isLoading: true
  };
  componentWillMount = () => {
    this.getPostulanteB(this.props.postulante.id_postulante_b);
  };

  getPostulanteB = async idPostulante => {
    const nuevoGet = await getPostulanteBId(idPostulante);
    this.setState({ postB: nuevoGet.data, isLoading: false });
  };

  render() {
    // console.log(this.state.resp);
    // console.log(this.state.postB);
    const postulante = this.props.postulante;
    if (this.state.isLoading) return <Loading />;
    const citas = postulante.cita.map(c => {
      return (
        <TableRow>
          <TableCell>{c.fecha}</TableCell>
          <TableCell>{c.hora}</TableCell>
          <TableCell>{c.entrevistador}</TableCell>
          <TableCell>{c.cliente.descripcion}</TableCell>
          <TableCell>{c.empresa.descripcion}</TableCell>
          <TableCell>{c.observaciones}</TableCell>
          <TableCell>{c.estatuscita.descripcion}</TableCell>
        </TableRow>
      );
    });
    //console.log(citas);
    var vacio;
    if (citas.length === 0) vacio = "No hay Citas";
    return (
      <div>
        <Paper>
          <Table>
            <TableHead style={{ background: "#bbe5f7" }}>
              <TableRow>
                <TableCell align="center" style={{ fontSize: "14px" }}>
                  Fecha
                </TableCell>
                <TableCell align="center" style={{ fontSize: "14px" }}>
                  Hora
                </TableCell>
                <TableCell align="center" style={{ fontSize: "14px" }}>
                  Entrevistador
                </TableCell>
                <TableCell align="center" style={{ fontSize: "14px" }}>
                  Cliente
                </TableCell>
                <TableCell align="center" style={{ fontSize: "14px" }}>
                  Empresa
                </TableCell>
                <TableCell align="center" style={{ fontSize: "14px" }}>
                  Observaciones
                </TableCell>
                <TableCell align="center" style={{ fontSize: "14px" }}>
                  Estatus
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{citas}</TableBody>
          </Table>
          <h1>{vacio}</h1>
        </Paper>
      </div>
    );
  }
}

//Se accede al storo de postlantec.
const mapStateToProps = state => {
  return {
    postulante: state.postulante
  };
};

export default connect(mapStateToProps, null)(Citas);
