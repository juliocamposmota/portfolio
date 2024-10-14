import React, { Component } from 'react';
import Header from '../components/Header';
import './styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 vh-100 mx-auto bg-hero">
        <Header />

        <section className="d-flex flex-column align-items-center gap-4">
          <h1>Júlio Mota Campos</h1>      
          <h2 className="lead">Desenvolvedor Web</h2>

          <a href="https://wa.me/55085999821177?text=Oi%20J%C3%BAlio.%20Quero%20desenvolver%20meu%20app!" className="btn btn-outline-light btn-lg rounded-pill" target="_blank" rel="noopener noreferrer">
            CONTATO
          </a>
        </section>

        <footer className="mt-auto mb-5 p-3">
          <p>
            Feito com muito carinho por mim mesmo :)
            <a href="https://www.instagram.com/juliomotac/" className="text-white ms-1" target="_blank" rel="noopener noreferrer">@juliomotac</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Home;
