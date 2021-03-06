import React, { Component } from 'react';
import '../estilos/Perfil.css';
import foto from '../img/foto-perfil.jpeg';

class Perfil extends Component{
    render(){
        let year = new Date().getFullYear();

        return (
            <div className="perfil">
                <img src={foto} className="foto" alt="Foto de perfil"/>
                <h3>Daniel Carmona</h3>
                <p className="descripcion"> Programador | Deportista</p>
                <div className="iconosPerfil">
                    <div><a href="https://github.com/carmona44"><i className="fab fa-github" style={{color: 'white'}}></i></a></div>
                    <div><a href="https://twitter.com/Carmona44?lang=es"><i className="fab fa-twitter" style={{color: '#1da1f2'}}></i></a></div>
                    <div><a href="mailto:dcacarmona44@gmail.com"><i className="far fa-envelope" style={{color: 'white'}}></i></a></div>
                    <div><a href="https://www.strava.com/athletes/carmonaentrenos"><i className="fab fa-strava" style={{color: "#fc4c02"}}></i></a></div>
                </div>
                <div className="footer">
                    &copy; {year} Daniel Carmona
                </div>
            </div>
        );
    }
}

export default Perfil;