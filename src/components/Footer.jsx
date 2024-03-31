import "../styles/Footer.scss"
import linkedin from "../assets/linkedin.svg"
import insta from "../assets/insta.svg"
import face from "../assets/face.svg"
import wpp from "../assets/wpp.svg"
import email from "../assets/email.svg"
import logo from "../assets/logo-icr.svg"
import apple from "../assets/apple.svg"
import google from "../assets/google.svg"

export default function Footer() {
    return (
        <>
        <footer>
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

            <div id="cont-footer">
                <div id="social-medias">
                    <img src={linkedin} alt="linkedin" />
                    <img src={insta} alt="instagram" />
                    <img src={face} alt="facebook" />
                    <img src={wpp} alt="whatsapp" />
                    <img src={email} alt="e-mail" />
                </div>
                <div id="logo-icr">
                    <img src={logo} alt="logo-icr" />
                </div>
                <div id="info-footer">
                    <p>
                        FIAP - Challenge 2023/2024
                        design by joraysuke
                    </p>
                </div>
            </div>
            

            
        </footer>
        
        </>
    )

}