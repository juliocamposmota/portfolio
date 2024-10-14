import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="mb-auto">
        <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
          <div className="container justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/juliocamposmota" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.behance.net/juliomotacampos" target="_blank" rel="noopener noreferrer">Behance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/juliomotacampos" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
