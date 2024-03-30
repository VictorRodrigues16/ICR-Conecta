import "../styles/Forms.scss"
import apple from "../assets/apple.svg"
import google from "../assets/google.svg"

export default function Forms() {
    return (
        <>
        <section>
            <h1 id="contact-us-tittle">CONTATE-NOS</h1>
            <div id="forms-format">
                <div id="content-left">
                    <h2>Fale com a gente</h2>
                    <p>
                        Tire suas dúvidas e comece <br />
                        agora a usar o ICR Conecta!
                    </p>
                    <span className="contact">(11) 5526-3500</span>
                    <span className="contact">conecta@icr.com.br</span>
                    <div id="download-app">
                        <p>Baixe o nosso app</p>
                        <div id="down">
                            <img src={apple} alt="apple" />
                            <img src={google} alt="goole" />
                        </div>
                    </div>
                </div>

            <div id="content-right">
                <input type="text" />
                <input type="email" />
                <input type="text" id="message" />
            </div>
                
            </div>
        </section>
        </>
    )

}