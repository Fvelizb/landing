import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="jumbotron container mt-4">
        <h1 className="display-4">A Warm Welcome</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          laborum commodi ipsam nam repellat minima. Distinctio vero aspernatur
          est eligendi maxime, architecto sunt atque sapiente consequuntur non
          reiciendis modi expedita!
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex row">
            <Card
              title="1"
              text="Este es un producto único e irrepetible."
              imageUrl="https://www.repuestosboston.cl/media/catalog/product/5/4/545302k000_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=566&width=756&canvas=756:566" 
              imageAlt="..."
              buttonText="Go somewhere"
              buttonLink="#"
            />
            <Card
              title="2"
              text="Este es parecido al primero, pero tampoco es igual."
              imageUrl="https://www.repuestosboston.cl/media/catalog/product/2/4/2431202701_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=566&width=756&canvas=756:566" 
              imageAlt="..."
              buttonText="Go somewhere"
              buttonLink="#"
            />
            <Card
              title="3"
              text="Este producto es muy distinto a los otros dos."
              imageUrl="https://www.repuestosboston.cl/media/catalog/product/2/8/28210b4000_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=566&width=756&canvas=756:566" 
              imageAlt="..."
              buttonText="Go somewhere"
              buttonLink="#"
            />
            <Card
              title="4"
              text="Este es el último y no es igual a ningún otro."
              imageUrl="https://www.repuestosboston.cl/media/catalog/product/8/4/84702m68k21-5pk_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=566&width=756&canvas=756:566" 
              imageAlt="..."
              buttonText="Go somewhere"
              buttonLink="#"
            />
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white mt-5">
        <div className="container py-4">
          <div className="row d-flex justify-content-center">
            {"COPYRIGHT @ YOUR WEBSITE 2024"}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
