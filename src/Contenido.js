import React, { Component } from 'react';
import './Contenido.css';

class Contenido extends Component {
    render(){
        return (
            <div className="contenido">
                <div>
                    <h2>SOBRE MI</h2>
                    <p>
                        Soy Daniel Carmona Alarcón, programador junior y dearrollador de aplicaciones multiplataforma. Me defino como
                        una persona calmada pero inquieta a la que le gusta aprender constantemente. Me encanta el deporte, la naturaleza,
                        la ciencia y sobre todo, la tecnología.
                    </p>
                    <p>
                        Mi principal objetivo es hacer de este un mundo mejor, por ello, ví en la programación una buena herramienta para
                        resolver problemas y ayudar a los demás.
                    </p>
                    <p>
                        Entre mis conocimientos destacan:
                        <ul>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>AngularJS</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>SQL</li>
                        </ul>
                        Siendo JavaScript junto con ReactJS el lenguaje y framework que utilizo actualmente en mis proyectos.
                    </p>
                </div>
                <div>
                    <h2>PROYECTOS</h2>
                </div>
                <div>
                    <h2>CONTACTO</h2>
                </div>
                <div>
                    <h2>BLOG</h2>
                </div>
            </div>
        );
    }
}

export default Contenido;