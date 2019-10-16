import React from 'react';
import { TableHead, TableBody, Table, TableCell, TableRow, Paper } from '@material-ui/core';
import { getPostulanteC } from '../../request/request';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';

class Entrevistas extends React.Component {
    state = {
        resp: []
    }
    componentWillMount = () => {
        getPostulanteC(this.props.postulantec.id_postulante_c).then(response => {
            let nuevoGet = [];
            nuevoGet.push(response)
            this.setState({ resp: nuevoGet })
        }).catch(console.log)
    }
    render() {
        const entrevista = this.state.resp.map((datos) => {
            return datos.postulanteb.cita.map((date) => {
                return date.seccion.map((entre) => {
                    return (
                        <TableRow>
                            <TableCell style={{ fontSize: "12px" }}>{entre.tipoentrevista.descripcion}</TableCell>
                            <TableCell style={{ fontSize: "12px" }}>{date.fecha}</TableCell>
                            <TableCell style={{ fontSize: "12px" }}>{date.hora}</TableCell>
                            <TableCell style={{ fontSize: "12px" }}>{date.entrevistador}</TableCell>
                            <TableCell style={{ fontSize: "12px" }}>{entre.cliente.descripcion}</TableCell>
                            <TableCell style={{ fontSize: "12px" }}></TableCell>
                            <TableCell style={{ fontSize: "12px" }}>{date.observaciones}</TableCell>
                        </TableRow>
                    )
                })
            })
        })
        return (
            <div>
                <Paper>
                    <Table>
                        <TableHead style={{ background: "#b4e5f7" }}>
                            <TableCell style={{ fontSize: "14px" }}>Tipo de Entrevista</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>Fecha</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>Hora</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>Entrevistador</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>Cliente</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>Empresa</TableCell>
                            <TableCell style={{ fontSize: "14px" }}>Observaciones</TableCell>
                        </TableHead>
                        <TableBody>
                            {entrevista}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

//Se accede al store postulantec.
const mapStateToProps = state => {
    return {
        postulantec: state.postulantec
    };
};

export default connect(
    mapStateToProps,null)(Entrevistas);