import React, { Component } from 'react';
import './Proyecto.css';

class Proyecto extends Component {
    constructor(props){
        super(props);
        this.state = {
            proyectoActual: props.actual
        }
    }

    render(){
        let lenguajeColor = this.state.proyectoActual.lenguaje === "JavaScript" ? {color:"#f1e05a"} : {color:"#b07219"};
        return(
            <div className="proyecto">
                <div className="contenidoProyecto">
                    <div className="encabezado">
                        <span className="lenguaje" style={lenguajeColor}>{this.state.proyectoActual.lenguaje}</span>
                        <span className="year">{this.state.proyectoActual.year}</span>
                    </div>
                    <div>
                        <img className="imagen" src={this.state.proyectoActual.img} alt={"Imagen del proyecto " + this.state.proyectoActual.nombre}/>
                    </div>
                    <div className="proyectoFooter">
                        <a className="visitar" href={this.state.proyectoActual.url} target="_blank">Visitar</a>
                        <a className="github" href={this.state.proyectoActual.ghUrl} target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <span className="titulo">{this.state.proyectoActual.nombre}</span>
            </div>
        );
    }
}

export default Proyecto;