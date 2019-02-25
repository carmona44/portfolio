import React, { Component } from 'react';
import './App.css';
import Perfil from './Perfil.js';
import BarraNavegacion from './BarraNavegacion.js';
import Contenido from './Contenido.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Perfil />
          <BarraNavegacion />
          <Contenido/>
      </div>
    );
  }
}

export default App;
