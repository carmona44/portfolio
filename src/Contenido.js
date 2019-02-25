import React, { Component } from 'react';
import './Contenido.css';

class Contenido extends Component {
    render(){
        let repetir = [];

        function repeticiones(){
            for (var i=0; i<50; i++){
                repetir.push(i);
            }
        }

        repeticiones();
        return (
            <div className="contenido">
                {repetir.map(e => <h1>e</h1>)}
            </div>
        );
    }
}

export default Contenido;