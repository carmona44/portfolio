import React, { Component } from 'react';
import './BarraNavegacion.css';

class BarraNavegacion extends Component {
    render (){
        return (
            <div className="barra">
                <ul className="opciones">
                    <li><a href="#sobremi">Sobre mi</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
        );
    }
}

export default BarraNavegacion;