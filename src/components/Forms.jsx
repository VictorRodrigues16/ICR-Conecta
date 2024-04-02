import React from 'react'
import "../styles/Forms.scss"
import apple from "../assets/apple.svg"
import google from "../assets/google.svg"

export default function Forms() {
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
            

                <form className="forms">
                    
                    <div className="form-group">

                    <input id="name" required="" placeholder="Nome Completo*" className="form-input" type="text"/>
                    </div>

                    <div className="form-group">

                    <input id="email" required="" placeholder="E-mail*" className="form-input" name="email"  type="email"/>
                    </div>

                    <div className="form-group">

                    <textarea required="" placeholder="Mensagem*" className="form-input" name="message" id="message"></textarea>
                    </div>

                    <div id="check">
                        <input className="checkbox" type="checkbox" id="checkbox"/>
                        <label id="info-check">Concordo com o envio dos dados e autorizo o ICR Conecta a entrar contato comigo através deles.</label>
                    </div>

                    
                    <div id="button-form">
                    <button className="form-button" type="submit">ENVIAR MENSAGEM</button>
                    </div>
                    
                </form>
            </div>
        </section>
        </>
    )

}