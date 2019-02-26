import React, { Component } from 'react';
import './BarraNavegacion.css';

class BarraNavegacion extends Component {
    render (){
        return (
            <div className="barra">
                <ul className="opciones">
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        );
    }
}

export default BarraNavegacion;