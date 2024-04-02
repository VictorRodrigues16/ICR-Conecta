import React from "react";
import "../styles/Nav.scss";
import img from "../assets/nav-icon.svg";

export default function Nav() {
  return (
    <>
      <header>
        <nav>
          <div id="cont-nav">
            <img id="icon-nav" src={img} alt="img-nav" />
            <ul id="list-nav">
              <a href="#Ourapp">
                <li className="nav-li">Início</li>
              </a>
              
              <a href="#discover">
                <li className="nav-li">Sobre o ICR</li>
              </a>

              <a href="#information">
                <li className="nav-li">Blog</li>
              </a>

              <a href="#form">
                <li className="nav-li">Contato</li>
              </a>
            </ul>
          </div>
          <button id="nav-button">BAIXE O APLICATIVO</button>
        </nav>
      </header>
    </>
  );
}
