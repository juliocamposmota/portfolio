import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="">
            <Link to="https://github.com/juliocamposmota"> GitHub </Link>
            <Link to="https://www.behance.net/juliomotacampos"> Behance </Link>
            <Link to="https://www.linkedin.com/in/juliomotacampos"> LinkedIn </Link>
          </ul>

          <ul className="">
            <Link to="/"> Home </Link>
            <Link to="/sobre"> Sobre </Link>
            <Link to="/habilidades"> Habilidade </Link>
            <Link to="/portfolio"> Portfólio </Link>
          </ul>
        </nav>

        <section className="">
          <h1>Júlio Mota Campos</h1>      
          <h2>Desenvolvedor Web</h2>

          <div className="">
            <a href="#sobre">START</a>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
