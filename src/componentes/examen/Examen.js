import React from "react";
import IconoExamen from "../../Imagenes/examen.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import Seccion from "../examen/seccion";
import {getTipoExamen} from "../../request/request"
import {postExamen} from '../../request/request'
import {setExamen} from '../../actions/postulanteB'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            width: 600
        }}
    />
);


const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();
const date=anio+"-"+mes+"-"+dia

class Examen extends React.Component {
    state=
    {
        idTipoExamen:0,
        tiposExamen:[],
        examen:
        {
            calificacion_global:0,
            entrevistador:this.props.cita.entrevistador,
            observaciones:"",
            usuario_actualiza:"Bryan Ramirez",
            fecha_actualizacion:date
        }
    };
    constructor(props)
    {
        super(props)
    }

    componentWillMount=()=>
    {
        this.getTipoExamen()
    }

    getTipoExamen= async () =>
    {
    const nuevoGet= await getTipoExamen()
    this.setState({tiposExamen:nuevoGet.data})
    }

    handleSelect=e=>
    {
        this.state.tiposExamen.map(te=>
        {
            if(e.target.value===te.descripcion)
            {
                this.setState({idTipoExamen:te.id_tipo_examen})
            }
            return te.id_tipo_examen
        })
    }

    handleChange=e=>
    {
        let exa=this.state.examen

        if(e.target.name==="calificacion_global")
        {
            let cg=parseInt(e.target.value)
            exa.calificacion_global=cg
            this.setState({examen:exa})
        }
        if(e.target.name==="observaciones")
        {
            exa.observaciones=e.target.value
            this.setState({examen:exa})
        }
    }

    handleClick=e=>
    {
        if(this.state.examen.calificacion_global!==0 &&
            this.state.idTipoExamen!==0)
            {
                postExamen(this.state.examen,
                    this.props.cita.id_cita,
                    this.state.idTipoExamen).then(response=>
                        {
                            console.log(response)
                            this.props.dispatchSetExamen(response)
                        })
                        .catch(console.log)
            }
        
    }

    handleSubmit=e=>
    {
        e.preventDefault()
// if(this.state.examen.calificacion_global!==0 &&
//             this.state.idTipoExamen!==0)
//             {
//                 postExamen(this.state.examen,
//                     this.props.cita.id_cita,
//                     this.state.idTipoExamen).then(response=>
//                         {
//                             console.log(response)
//                             this.props.dispatchSetExamen(response)
//                         })
//                         .catch(console.log)

//}
    }

    render() {
        const tipoExamen=this.state.tiposExamen.map(te=>
            {
                return <option value={te.descripcion}>{te.descripcion}</option>
            })
            


        return (
            <React.Fragment>
                <div align="center">
                    <td className="lineaEspacioDerecha">
                        <ColoredLine color="black" />
                    </td>
                    <td>
                        <img className="agci" src={IconoExamen} alt="Examen" />
                    </td>
                    <td className="lineaEspacioIzquierda">
                        <ColoredLine color="black" />
                    </td>
                </div>
                <div className="text-center ">
                    <TextField
                        label="Fecha Actual"
                        type="date-local"
                        defaultValue={
                            fecha.getDate() +
                            "/" +
                            (fecha.getMonth() + 1) +
                            "/" +
                            fecha.getFullYear()
                        }
                        disabled
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                <div className="center">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="form">
                            <div npm  align="center" >
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <h3>
                                            Entrevistador: &nbsp; &nbsp;
                                             <label className="datosCita"> {this.props.cita.entrevistador}</label>
                                        </h3>
                                    </div>
                                    <div className="row justify-content-md-center">
                                        <h4>
                                            Empresa: &nbsp; &nbsp;
                                            {/* <label className="datosCita"> {this.props.cita.empresa.descripcion}</label> */}
                                        </h4>
                                    </div>
                                    <div className="row justify-content-md-center">
                                        <h4>
                                            Cliente: &nbsp; &nbsp;
                                            {/* <label className="datosCita"> {this.props.cita.cliente.descripcion}</label> */}
                                        </h4>
                                    </div>
                                    
                                </div>
                            </div>
                           <div className="center">
                           <label className="restriccion">* Campo Obligatorio</label>
                           </div>
                            <div className="center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <label>* Tipo de exámen:</label>
                                                </div>
                                                <div className="col-sm-12">
                                                    <select className="form-control labelBorder" 
                                                    required name="tipoExamen"
                                                    onClick={this.handleSelect}>
                                                        <option>Selecciona</option>
                                                        {tipoExamen}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-3">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <label>* Calificación global:</label>
                                                </div>
                                                <div className="col-sm-12">
                                                    <input className="form-control labelBorder" 
                                                    type="text"
                                                    name="calificacion_global"
                                                    value={this.state.value}
                                                    onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="row columnTextArea">
                                                <div className="col-sm-12">
                                                    <label>Comentarios:</label>
                                                </div>
                                                <div className="col-sm-12">
                                                    <textarea class="textArea form-control"
                                                     rows="3" cols="40"
                                                     name="observaciones"
                                                     value={this.state.value}
                                                     onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="center">                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                        <button className="btn btn-primary"
                                        
                                        type="button"                                             
                                            onClick={this.handleClick}
                                            >Confirmar</button>
                                        </div>
                                        <div className="col-2">
                                        <Link to="/consultarCita" className="btn btn-danger"> Salir</Link>
                                        </div>                                                
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </form>
                </div>      
                <br/>
                <br/>
                <Seccion examen={this.state.examen}
                tipo={this.state.idTipoExamen}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps=state=>
{
    return{
        postulante: state.postulante,
        cita: state.cita
    }
}

const mapDispatchToProps=dispatch=>({
    dispatchSetExamen: value=> dispatch(setExamen(value))
})

export default connect(mapStateToProps,mapDispatchToProps,null)(Examen);