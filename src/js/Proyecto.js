import React, { Component } from 'react';
import '../estilos/Proyecto.css';

class Proyecto extends Component {
    constructor(props){
        super(props);
        this.state = {
            proyectoActual: props.actual
        }
    }

    render(){
        let lenguajeColor = this.state.proyectoActual.lenguaje === "JavaScript" ? {color:"#f1e05a"} : {color:"#b07219"};
        let botonVisita = this.state.proyectoActual.url ?
            <a className="visitar" href={this.state.proyectoActual.url} target="_blank">Visitar</a>
            : <span className="noweb">No web</span>;
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
                        {botonVisita}
                        <a className="github" href={this.state.proyectoActual.ghUrl} target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <span className="titulo">{this.state.proyectoActual.nombre}</span>
            </div>
        );
    }
}

export default Proyecto;