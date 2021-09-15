import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="mb-auto">
        <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
          <div className="container justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="https://github.com/juliocamposmota">GitHub</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="https://www.behance.net/juliomotacampos">Behance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="https://www.linkedin.com/in/juliomotacampos">Linkedin</Link>
              </li>
            </ul>
          </div>

          <div className="container justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Habilidades</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Projetos</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
