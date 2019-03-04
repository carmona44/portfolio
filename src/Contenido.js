import React, { Component } from 'react';
import './Contenido.css';
import Proyecto from './Proyecto.js';
import Foto1 from './webs-interesantes.JPG';
import Foto2 from './markdown-previewer.JPG';
import Foto3 from './calculadora.JPG';
import Foto4 from './generador-password.JPG';
import Foto5 from './random-team.JPG';

const proyectos = [
    {nombre:"Webs interesantes", lenguaje:"JavaScript", img:Foto1, url:"https://carmona44.github.io/webs-interesantes/", ghUrl:"https://github.com/carmona44/webs-interesantes", year:"2019"},
    {nombre:"Markdown previewer", lenguaje:"JavaScript", img:Foto2, url:"https://carmona44.github.io/markdown-previewer/", ghUrl:"https://github.com/carmona44/markdown-previewer", year:"2018"},
    {nombre:"Calculadora", lenguaje:"JavaScript", img:Foto3, url:"https://carmona44.github.io/javascript-calculator/", ghUrl:"https://github.com/carmona44/javascript-calculator", year:"2019"},
    {nombre:"Generador passswords", lenguaje:"Java", img:Foto4, url:"", ghUrl:"https://github.com/carmona44/Generador_passwords", year:"2016"},
    {nombre:"Random team", lenguaje:"JavaScript", img:Foto5, url:"", ghUrl:"https://github.com/carmona44/randomTeam", year:"2018"},
    {nombre:"Portfolio", lenguaje:"JavaScript", img:"", url:"https://carmona44.github.io/portfolio/", ghUrl:"https://github.com/carmona44/portfolio", year:"2019"}
]

class Contenido extends Component {
    render(){
        return (
            <div className="contenido">
                <div id="sobremi">
                    <h2>SOBRE MI</h2>
                    <p>
                        Soy Daniel Carmona Alarcón, programador junior y desarrollador de aplicaciones multiplataforma. Me defino como
                        una persona calmada pero inquieta a la que le gusta aprender constantemente. Me encanta el deporte, la naturaleza,
                        la ciencia y sobre todo, la tecnología.
                    </p>
                    <p>
                        Mi principal objetivo es hacer de este un mundo mejor, por ello, ví en la programación una buena herramienta para
                        resolver problemas y ayudar a los demás.
                    </p>
                    <p>
                        Entre mis conocimientos destacan:
                        <ul className="conocimientos">
                            <li><i class="fab fa-css3-alt"></i> CSS3</li>
                            <li><i class="fab fa-html5"></i> HTML5</li>
                            <li><i class="fab fa-js-square"></i> JavaScript</li>
                            <li><i class="fab fa-java"></i> Java</li>
                            <li><i class="fab fa-angular"></i> AngularJS</li>
                            <li><img src="https://ionicframework.com/img/meta/favicon-16x16.png"></img> Ionic</li>
                            <li><i class="fab fa-react"></i> ReactJS</li>
                            <li><i class="fab fa-node"></i> NodeJS</li>
                            <li><i class="fas fa-database"></i>SQL</li>
                        </ul>
                        Siendo JavaScript junto con ReactJS el lenguaje y framework que utilizo actualmente en mis proyectos.
                    </p>
                </div>
                <div id="proyectos">
                    <h2>PROYECTOS</h2>
                    <div className="grupoProyectos">
                        {proyectos.map(e => <Proyecto actual={e}/>)}
                    </div>
                </div>
                <div id="contacto">
                    <h2>CONTACTO</h2>
                </div>
                <div id="blog">
                    <h2>BLOG</h2>
                </div>
            </div>
        );
    }
}

export default Contenido;