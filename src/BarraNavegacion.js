import React, { Component } from 'react';
import './BarraNavegacion.css';

class BarraNavegacion extends Component {
    render (){
        return (
            <div className="barra">
                <ul className="opciones">
                    <li id="sobremi"><a href="#">Sobre mi</a></li>
                    <li id="proyectos"><a href="#">Proyectos</a></li>
                    <li id="blog"><a href="#">Blog</a></li>
                </ul>
            </div>
        );
    }
}

export default BarraNavegacion;