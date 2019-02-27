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
        return(
            <div className="proyecto">
                <div className="contenidoProyecto">
                    <div className="encabezado">
                        <span>{this.state.proyectoActual.lenguaje}</span>
                        <span>{this.state.proyectoActual.year}</span>
                    </div>
                    <div className="imagen">
                        <img src={this.state.proyectoActual.img} alt={"Imagen del proyecto " + this.state.proyectoActual.nombre}/>
                    </div>
                    <div className="proyectoFooter">
                        <a href={this.state.proyectoActual.url} target="_blank">Visitar</a>
                        <a href={this.state.proyectoActual.ghUrl} target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <span className="titulo">{this.state.proyectoActual.nombre}</span>
            </div>
        );
    }
}

export default Proyecto;