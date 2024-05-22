import React, { useRef } from 'react';
import "../styles/Forms.scss";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import Button from 'react-bootstrap/Button';

export default function Forms() {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const checkboxInput = document.getElementById('checkbox');

    const isNameEmpty = nameInput.value.trim() === '';
    const isEmailEmpty = emailInput.value.trim() === '';
    const isMessageEmpty = messageInput.value.trim() === '';
    const isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value);
    const isCheckboxChecked = checkboxInput.checked;

    if (isNameEmpty || isEmailEmpty || isMessageEmpty || !isEmailValid || !isCheckboxChecked) {
      if (isNameEmpty) {
        nameInput.focus();
      } else if (isEmailEmpty) {
        emailInput.focus();
      } else if (isMessageEmpty) {
        messageInput.focus();
      } else if (!isEmailValid) {
        emailInput.focus();
      } else if (!isCheckboxChecked) {
        checkboxInput.focus();
      }
      return;
    }

    formRef.current.submit();
  };

  return (
    <>
      <section id="form">
        <h1 id="contact-us-tittle">CONTATE-NOS</h1>
        <div id="forms-format">
          <div id="content-left">
            <h2>Fale com a gente</h2>

            <div id="form-cont1">
              <p>
                Tire suas dúvidas e comece
                agora a usar o ICR Conecta!
              </p>
            </div>
            <div id="form-cont2">
              <p>(11) 5526-3500</p>
              <p>conecta@icr.com.br</p>
            </div>

            <div id="download-app">
              <h1>Baixe o nosso app</h1>
              <div id="down">
                <img src={apple} alt="apple" />
                <img src={google} alt="goole" />
              </div>
            </div>
          </div>

          <form className="forms" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                id="name"
                required
                placeholder="Nome Completo*"
                className="form-input"
                type="text"
              />
            </div>

            <div className="form-group">
              <input
                id="email"
                required
                placeholder="E-mail*"
                className="form-input"
                name="email"
                type="email"
              />
            </div>

            <div className="form-group">
              <textarea
                required
                placeholder="Mensagem*"
                className="form-input"
                name="message"
                id="message"
              ></textarea>
            </div>

            <div id="check">
              <input className="checkbox" type="checkbox" id="checkbox" required/>
              <label id="check-label" htmlFor="checkbox">
                Eu li e concordo com os termos de uso e política de privacidade
              </label>
            </div>

            <div id="button-form">
                <Button className="form-button" type="submit" variant="primary">Enviar Mensagem</Button>{' '}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}