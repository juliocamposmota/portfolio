import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 vh-100 mx-auto bg-hero">
        <Header />

        <section className="px-3">
          <h1>Júlio Mota Campos</h1>      
          <h2 className="lead">Desenvolvedor Web</h2>

          <Link to="/">
            <button type="button" className="btn btn-outline-light btn-lg rounded-pill">
              START
            </button>
          </Link>
        </section>

        <footer className="mt-auto mb-5 p-3">
          <p>
            Feito com muito carinho por mim mesmo :)
            <Link to="https://www.instagram.com/juliomotac/" className="text-white ms-1">@juliomotac</Link>
          </p>
        </footer>
      </div>
    );
  }
}

export default Home;
