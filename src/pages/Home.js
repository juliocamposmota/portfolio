import React, { Component } from 'react';

import './styles/Home.css';
import Header from '../components/Header';
import projectTwo from '../images/app-archieoffice.png';
import projectOne from '../images/website-gabrielledelima.png';

class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 mx-auto bg-hero">
        <Header />

        <section className="d-flex flex-column justify-content-center align-items-center gap-4 vh-100">
          <h1>Júlio Mota Campos</h1>
          <h2 className="lead">Desenvolvedor Web</h2>

          <a href="https://wa.me/55085999821177?text=Oi%20J%C3%BAlio.%20Quero%20desenvolver%20meu%20app!" className="btn btn-outline-light btn-lg rounded-pill" target="_blank" rel="noopener noreferrer">
            CONTATO
          </a>
        </section>

        <section className="d-flex flex-column justify-content-center">
          <h2 className='mb-5'>Projetos</h2>

          <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-center align-items-center mt-5 gap-5 px-5">
            <div className="card text-dark">
              <img className="card-img-top img-size" src={projectOne} alt="Project Gabrielle de Lima Arquitetura" />

              <div className="card-body">
                <p className="card-text">Gabrielle de Lima Arquitetura e Interiores</p>
                <a className="btn btn-outline-dark btn-sm rounded-3 w-100" href="https://gabrielledelima.arq.br/" target="_blank" rel="noopener noreferrer">VISITE</a>
              </div>
            </div>

            <div className="card text-dark">
              <img className="card-img-top img-size" src={projectTwo} alt="Project Archie Office" />

              <div className="card-body">
                <p class="card-text">Archie Office</p>
                <a className="btn btn-outline-dark btn-sm rounded-3 w-100" href="https://archieoffice.netlify.app/login" target="_blank" rel="noopener noreferrer">VISITE</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-5 p-3">
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
