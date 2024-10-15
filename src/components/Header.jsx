import React, { Component } from 'react';

import './styles/header.css';
import { ReactComponent as GitHubIcon } from '../icons/github.svg';
import { ReactComponent as BehanceIcon } from '../icons/behance.svg';
import { ReactComponent as LinkedinIcon } from '../icons/linkedin.svg';

class Header extends Component {
  render() {
    return (
      <header className="mb-auto">
        <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
          <div className="container justify-content-center">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/juliocamposmota" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.behance.net/juliomotacampos" target="_blank" rel="noopener noreferrer"><BehanceIcon /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/juliomotacampos" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
