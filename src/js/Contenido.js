import React, { Component } from 'react';
import ClipboardJS from 'clipboard';
import '../estilos/Contenido.css';
import Proyecto from './Proyecto.js';
import Foto1 from '../img/webs-interesantes.JPG';
import Foto2 from '../img/markdown-previewer.JPG';
import Foto3 from '../img/calculadora.JPG';
import Foto4 from '../img/generador-password.JPG';
import Foto5 from '../img/random-team.JPG';
import Foto6 from '../img/portfolio.JPG';

const proyectos = [
    {nombre:"Webs interesantes", lenguaje:"JavaScript", img:Foto1, url:"https://carmona44.github.io/webs-interesantes/", ghUrl:"https://github.com/carmona44/webs-interesantes", year:"2019"},
    {nombre:"Markdown previewer", lenguaje:"JavaScript", img:Foto2, url:"https://carmona44.github.io/markdown-previewer/", ghUrl:"https://github.com/carmona44/markdown-previewer", year:"2018"},
    {nombre:"Calculadora", lenguaje:"JavaScript", img:Foto3, url:"https://carmona44.github.io/javascript-calculator/", ghUrl:"https://github.com/carmona44/javascript-calculator", year:"2019"},
    {nombre:"Generador passswords", lenguaje:"Java", img:Foto4, url:"", ghUrl:"https://github.com/carmona44/Generador_passwords", year:"2016"},
    {nombre:"Random team", lenguaje:"JavaScript", img:Foto5, url:"", ghUrl:"https://github.com/carmona44/randomTeam", year:"2018"},
    {nombre:"Portfolio", lenguaje:"JavaScript", img:Foto6, url:"https://carmona44.github.io/portfolio/", ghUrl:"https://github.com/carmona44/portfolio", year:"2019"}
];

class Contenido extends Component {

    constructor(props){
        super(props);
        this.state = {
            mostrarMensaje: false
        };
    }

    handleMensaje = () => {
        this.setState({
            mostrarMensaje: true
        });
    };

    render(){
        // eslint-disable-next-line
        var clipboard = new ClipboardJS('#copiarCorreo');
        let year = new Date().getFullYear();

        return (
            <div className="contenido">
                <div id="sobremi">
                    <h2>SOBRE MI</h2>
                    <div className="contenidoSobremi">
                        <p>
                            Soy <span className="palabraDestacada">Daniel Carmona Alarcón</span>, programador junior y
                            desarrollador de aplicaciones multiplataforma. Me defino como
                            una persona calmada pero inquieta a la que le gusta aprender constantemente.
                            Me encanta el deporte, la naturaleza,
                            la ciencia y sobre todo, la tecnología.
                        </p>
                        <p>
                            Mi <span className="palabraDestacada">principal objetivo</span> es hacer de este un mundo mejor,
                            por ello, ví en la programación una buena herramienta para
                            resolver problemas y <span className="palabraDestacada">ayudar a los demás</span>.
                        </p>
                        <p>
                            Entre mis conocimientos destacan:
                        </p>
                        <ul className="conocimientos">
                            <li><i className="fab fa-css3-alt"></i> CSS3</li>
                            <li><i className="fab fa-html5"></i> HTML5</li>
                            <li><i className="fab fa-js-square"></i> JavaScript</li>
                            <li><i className="fab fa-java"></i> Java</li>
                            <li><i className="fab fa-angular"></i> AngularJS</li>
                            <li><img src="https://ionicframework.com/img/meta/favicon-16x16.png" alt="Ionic logo"></img> Ionic</li>
                            <li><i className="fab fa-react"></i> ReactJS</li>
                            <li><i className="fab fa-node"></i> NodeJS</li>
                            <li><i className="fas fa-database"></i>SQL</li>
                        </ul>
                        <p>
                            Siendo <span className="palabraDestacada">JavaScript</span> junto con <span className="palabraDestacada">
                            ReactJS</span> el lenguaje y framework que utilizo actualmente en mis proyectos.
                        </p>
                    </div>
                </div>
                <div id="proyectos">
                    <h2>PROYECTOS</h2>
                    <div className="grupoProyectos">
                        {proyectos.map((e, key) => <Proyecto key={key} actual={e}/>)}
                    </div>
                </div>
                <div id="contacto">
                    <h2>CONTACTO</h2>
                    <div className="contenidoContacto">
                        <a className="botonContenido" href="mailto:dcacarmona44@gmail.com"><i className="far fa-envelope"></i> Mándame un correo</a>
                        <i id="copiarCorreo" className="far fa-clone" title="Copiar correo al portapapeles" data-clipboard-text="dcacarmona44@gmail.com" onClick={this.handleMensaje}></i>
                        {this.state.mostrarMensaje ? <div className="mensaje"><span className="mensajeCopiado">¡ Correo copiado al portapapeles !</span></div> : null}
                        <p>O contacta conmigo a través de: </p>
                        <div className="iconosContacto">
                            <a href="https://twitter.com/Carmona44" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                            <a href="https://www.facebook.com/daniel.carmonaalarcon" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/carmona44/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.strava.com/athletes/carmonaentrenos" target="_blank" rel="noopener noreferrer"><i className="fab fa-strava"></i></a>
                        </div>
                    </div>
                </div>
                <div id="blog">
                    <h2>BLOG</h2>
                    <div className="contenidoBlog">
                        <p className="parrafoBlog">
                            Escribir y plasmar algunos de mis pensamientos siempre ha sido algo que me ha gustado. Por ello realizar un
                            BLOG es uno de mis proyectos venideros y que más pronto que tarde comenzaré a desarrollar. Mientras
                            tanto puedes echarle un vistazo a uno antiguo que con tanto cariño me gusta recordar de vez en cuando...
                        </p>
                        <a className="botonContenido" href="https://carmona44web.wordpress.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-angle-right"></i> Ir al BLOG antiguo</a>
                    </div>
                </div>
                <footer className="footerAbsoluto">&copy; {year} Daniel Carmona</footer>
            </div>
        );
    }
}

export default Contenido;